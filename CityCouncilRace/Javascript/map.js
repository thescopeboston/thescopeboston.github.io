let width = window.innerWidth/1.5;
let height = window.innerHeight/1.1;
let svg = d3.select("#viz")
    .attr("width", width)
    .attr("height", height);

let map = svg.select("#map");

let tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "black")
        .style("border-radius", "6px");

let aside = d3.select("aside");
let p = d3.select("#disclaimer");
let p1 = d3.select("#hover1");
let p2 = d3.select("#neighborhood1");
let p3 = d3.select("#img1");
let p4 = d3.select("#name1");
let p5 = d3.select("#bio1");

let p6 = d3.select("#img2");
let p7 = d3.select("#name2");
let p8 = d3.select("#bio2");

let tooltipInfo = {"1" : {"Gray": {"name":"Alex Gray", "img": "Photo/Gray.jpeg", "neighborhood": "Charlestown, East Boston and North End", "bio": "Senior Policy Manager at the Mayor's Office of Workforce Development. Worked under Governor Deval Patrick, advising him on transportation policy. Worked for the Massachusetts Housing and Shelter Alliance as their legislative liaison, advocating for permanent housing solutions for individuals facing homelessness. Priorities include housing affordability, workforce development, and representation for the disability community. Would be Boston’s first blind city councilor if elected"}, "Campbell": {"name":"Andrea Campell", "img": "Photo/Campbell.png", "bio": "Senior Policy Manager at the Mayor's Office of Workforce Development. Worked under Governor Deval Patrick, advising him on transportation policy. Worked for the Massachusetts Housing and Shelter Alliance as their legislative liaison, advocating for permanent housing solutions for individuals facing homelessness. Priorities include housing affordability, workforce development, and representation for the disability community. Would be Boston’s first blind city councilor if elected"}}};

d3.json("Javascript/district.geojson", function(error, data) {
    if (error) console.log(error);

    console.log(data);
    
    let proj = d3.geoMercator()
        .fitSize([width, height], data);

    let path = d3.geoPath()
        .projection(proj);
    
    map.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke","#dbdbdb")
        .attr("fill", "#0aaef5")
        .style("opacity", "0.8")
        .on("mouseover", function(d, i) {
            d3.selectAll("path").style("opacity", 0.3);
            d3.select(this).style("opacity", 0.8);
            // tooltip.transition().duration(100)
            // tooltip.html(`This is district ${d.properties.DISTRICT}`)
            //     .attr("class", "tooltipText")
            //     .style("left", (width/1.4) + "px")
            //     .style("width", "400px")
            //     .style("top", (height/3.7) + "px")
            //     .style("opacity", 0.8)
            //     .style("padding", "8px 10px");
            p.html("(Candidates appear in alphabetical order)");
            p1.html(`Candidates for District ${d.properties.DISTRICT}`);
            p2.html(`District ${d.properties.DISTRICT} includes ${tooltipInfo[d.properties.DISTRICT].Gray.neighborhood}`);
            p3.attr("src", tooltipInfo[d.properties.DISTRICT].Gray.img);
            p4.html(`${tooltipInfo[d.properties.DISTRICT].Gray.name}`);
            p5.html(`${tooltipInfo[d.properties.DISTRICT].Gray.bio}`);
           
            p6.attr("src", tooltipInfo[d.properties.DISTRICT].Campbell.img);
            p7.html(`${tooltipInfo[d.properties.DISTRICT].Campbell.name}`);
            p8.html(`${tooltipInfo[d.properties.DISTRICT].Campbell.bio}`);

        });
        // .on("mouseout", function() {
        //     d3.select(this).style("opacity", 0.8)
        //     d3.selectAll("path").style("opacity", 0.8)
        //     tooltip.html("")
        //     .style("padding", "0");
        // });

    map.selectAll('text')
        .data(data.features)
        .enter()
        .append("text")
        .text(d => `Dist. ${d.properties.DISTRICT}`)
        .attr("class", "text")
        .attr("text-anchor", "middle")
        .attr("x", d => (path.centroid(d)[0] - 4))
        .attr("y", d => (path.centroid(d)[1]) + 4);
  });