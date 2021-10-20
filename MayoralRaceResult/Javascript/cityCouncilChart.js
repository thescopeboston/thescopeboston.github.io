let councilBarchartWidth = window.innerWidth/2;
let councilBarchartHeight = window.innerHeight/2;
d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    console.log(data);
    let svgcityCouncilChart = d3.select("#cityCouncilChart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    let x = d3.scaleLinear()
        .range([0, councilBarchartWidth]);

    let y = d3.scaleBand()
        .range([councilBarchartHeight, 0])
        .padding(0.3);

    let barHeight = 30;

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgcityCouncilChart.append("text")
        .text("At Large")
        .attr("class", "barchartTitle2")
        .attr("x", -5)
        .attr("y", 0);


    svgcityCouncilChart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgcityCouncilChart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgcityCouncilChart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgcityCouncilChart.selectAll("bar")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "g-bar");

    let councilBarLabels = labelGroupCouncilBarChart.append("text") 
        .text(data => data.percentage + "%" + " (" + data.totalvotes + " votes)")
        .attr("x", data => x(data.percentagetotal) - 8)
        .attr("y", data => y(data.winner) + 30)
        .attr("class", "g-labels")
        .attr("text-anchor", "end");    

    let councilBarTick = labelGroupCouncilBarChart.append("image") 
        .attr("xlink:href", function(d) {
            console.log(d.winner.trim());
            // The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
            if (d.winner === 'Liz A Breadon') {
                return "Photo/tick.png";
            } else {
                return "";
            }
        })         
        .attr("class", "profilePhoto")
        .attr("x", d => x(d.percentagetotal) - 30)
        .attr("y", d => y(d.winner) + 45)
        .attr("width", "20")
        .attr("height", "20")
        .attr("border-radius", "50%")
        .attr("class", "g-image");  

});