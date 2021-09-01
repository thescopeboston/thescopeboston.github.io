var smallScreen = window.innerWidth < 500 ? true : false;

var margin = {top: 5, right: 5, left: 5, bottom: 10},
    // widthRadial = window.innerWidth - margin.right - margin.left,
    // heightRadial = window.innerHeight - margin.top - margin.bottom,
    widthRadial = document.querySelector("#dataviz").clientWidth;
    heightRadial = document.querySelector("#dataviz").clientHeight - margin.top - margin.bottom;
    innerRadius = smallScreen ? 5 : 30,
    outerRadius = Math.min(widthRadial, heightRadial)/2.1;

var svgRadial = d3.select("#dataviz")
    .append("svg")
        .attr("width", widthRadial + margin.right + margin.left)
        .attr("height", heightRadial + margin.bottom + margin.top)
    .append("g")
        .attr("transform", "translate(" + widthRadial/2 + "," + (heightRadial/2+100) + ")")
    .attr("class", "svg");

d3.csv("Data/data.csv", function(data) {

console.log(data);

var x = d3.scaleBand()
    .range([0, 2 * Math.PI])
    .align(0)
    .domain(data.map(d => d.Issue));

var y = d3.scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([0, 17]);
    
var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute");

svgRadial.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
        .attr("class", "bars")
        .attr("d", d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(d => y(d.Count))
            .startAngle(d => x(d.Issue))
            .endAngle(d => x(d.Issue) + x.bandwidth())
            .padAngle(0.01)
            .padRadius(innerRadius))
        .style("fill", "#edbe02")
    .on("mouseover", function(d, i) {
        d3.selectAll("path").style("opacity", 0.2);
        d3.selectAll(".text").style("opacity", 0.08);
        d3.select(this).style("opacity", 1);
        tooltip.transition().duration(100)
        tooltip.html(`${d.Count} candidate(s) consider "${d.Issue}" <br> their top issue`)
            .attr("class", "tooltipText")
            .style("color", "black")
            .style("left", d3.event.pageX - 150 + "px")
            .style("top", d3.event.pageY - 150 + "px")
            .style("opacity", 1)
            .style("border-radius", "5px")
            .style("opacity", 0.8)
            .style("padding", "8px 10px");
    })
    .on("mouseout", function() {
        d3.select(this).style("opacity", 1)
        d3.selectAll(".text").style("opacity", 1);
        d3.selectAll("path").style("opacity", 1)
        tooltip.html("")
        .style("padding", "0");
    });


svgRadial.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
        .attr("text-anchor", function(d) { return (x(d.Issue) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Issue) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Count'])+10) + ",0)"; })
    .append("text")
        .attr("class", "text")
        .text(function(d){return(d.Issue)})
        .attr("transform", function(d) { return (x(d.Issue) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("fill", "black")
        .attr("alignment-baseline", "middle");

});
