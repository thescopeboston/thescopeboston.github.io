let width = window.innerWidth/2.9;
let height = window.innerHeight/1.3;

let barchartWidth =  window.innerWidth/11;
let barchartHeight = window.innerHeight/4;

let margin = {top: 60, right: 150, bottom: 60, left: 90};

let svg = d3.select("#electionMap")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("x", 0)
    .attr("y", 0);

let map = svg.select("#map");

let tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background", "white")
    .style("border-radius", "4px");

d3.queue()
  .defer(d3.json, "Data/[NOWARD1PRECINCT15]precincts.geojson")
  .defer(d3.json, "Data/NovElectionResult.json")
  .await(drawMap);

function getWinner(precinctData) {
    let currMaxVotes = 0;
    let currWinner = "";

    for (property in precinctData) {
        if (property === "Precinct" || property === "Total Votes" || property === "WARD_PRECINCT" || property === "Annissa Essaibi George Percent" || property === "Annissa Essaibi George Percent" || property === "Andrea Campbell Percent" || property === "Richard Spagnuolo Percent Percent" || property === "Kim Janey Percent" || property === "Michelle Wu Percent" || property === "Jon Santiago Percent" || property === "Robert Cappucci Percent" || property === "John Barros BVC Percent") {
            continue;
        }

        if (precinctData[property] > currMaxVotes) {
            currMaxVotes = precinctData[property];
            currWinner = property;
        }
    }
    return currWinner;
}

function drawMap(error, geoData, resultData) {
    if (error) console.log(error);

    let sortedresultData = {};
    let filedbarchartData = {};

    for (element of resultData) {
        let precintWinner = getWinner(element);

        const precinctData = {"winner": precintWinner, "Annissa Essaibi George": element["Annissa Essaibi George"], "Michelle Wu": element["Michelle Wu"], "Unresolved Write-In": element["Unresolved Write-In"]};

        sortedresultData[element['WARD_PRECINCT']] = precinctData;
    }

    function mapWinnerToColor(d) {
        if (sortedresultData[d.properties.WARD_PRECINCT].winner === "Michelle Wu") {
            return "#1ECBE1";
        } else if (sortedresultData[d.properties.WARD_PRECINCT].winner === "Annissa Essaibi George") {
            return "#E11ECB";
        } else {
            return "grey";
        }
    }

    function mapWinnerToColorBarchart(d) {
        if (d.candidate === "Michelle Wu") {
            return "#1ECBE1";
        } else if (d.candidate === "Annissa Essaibi George") {
            return "#E11ECB";
        } else {
            return "grey";
        }
    };

    // Build map
    let proj = d3.geoMercator()
        .fitSize([width, height], geoData);

    let path = d3.geoPath()
        .projection(proj);

    let svgBar = d3.select("#tipDiv")
                .attr("width", barchartWidth + margin.left + margin.right)
                .attr("height", barchartHeight + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .attr("viewBox", `0 0 ${barchartWidth} ${barchartHeight}`);
                
    for (element of resultData) {
        const barchartData = [ {"precinct": element["Precinct"], "candidate": "Annissa Essaibi George", "votecount": element["Annissa Essaibi George"], "percent": element["Annissa Essaibi George Percent"], "photo": "Photo/george.png"}, {"precinct": element["Precinct"], "candidate": "Michelle Wu", "votecount": element["Michelle Wu"], "percent": element["Michelle Wu Percent"], "photo": "Photo/wu.png"}, {"precinct": element["Precinct"], "candidate": "Write-In", "votecount": element["Unresolved Write-In"], "percent": element["Unresolved Write-In Percent"], "photo": "Photo/writein.png"} ];

        filedbarchartData[element['WARD_PRECINCT']] = barchartData;
    }

    let sortedbarchartData = filedbarchartData[1].sort(function(a, b) {
        return d3.ascending(a.votecount, b.votecount);
    })

    let x = d3.scaleLinear()
        .range([0, barchartWidth]);

    let y = d3.scaleBand()
        .range([barchartHeight, 0])
        .padding(0.3)

    x.domain([0, d3.max(sortedbarchartData, d => d.votecount)])
    y.domain(sortedbarchartData.map(d => d.candidate));
    
    svgBar.selectAll(".bar")
        .data(sortedbarchartData)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", function(d) {
            for (property in sortedbarchartData) {
                if (property === "precinct") {
                    continue;
                } else {
                    return x(d.votecount);
                }
            }
        })
        .attr("height", y.bandwidth() - 25)
        .attr("y", d => y(d.candidate) + 32)
        .attr("x", -8)
        .attr("fill", mapWinnerToColorBarchart);

    svgBar.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr('text-anchor', 'start');
    console.log

    svgBar.append("text")
        .text(`${sortedbarchartData[0].precinct}`)
        .attr("class", "barchartTitle")
        .attr("x", -55)
        .attr("y", 0);

    let labelGroup = svgBar.selectAll("bar")
        .data(sortedbarchartData)
        .enter()
        .append("g")
        .attr("class", "g-bar");
    
    let barLabels = labelGroup.append("text") 
        .text(function(d) {
            for (property in sortedbarchartData) {
                if (property === "precinct") {
                    continue;
                } else {
                    return d.votecount+ " (" + d.percent + "%)"; 
                }
            }
        })
        .attr("x", function(d) {
            for (property in sortedbarchartData) {
                if (property === "precinct") {
                    continue;
                } else {
                    if (d.candidate === "Michelle Wu" || d.candidate === "Annissa Essaibi George") {
                        return x(d.votecount) + 25;
                    } else {
                        return x(d.votecount);
                    }
                }
            }
        })
        .attr("y", d => y(d.candidate) + 45)
        .attr("class", "g-labels");   

    let barImage = labelGroup.append("image") 
        .attr("xlink:href", d => d.photo)
        .attr("class", "profilePhoto")
        .attr("x", -55)
        .attr("y", d => y(d.candidate) + 10)
        .attr("width", "40")
        .attr("height", "40")
        .attr("border-radius", "50%")
        .attr("class", "g-image");   
    
    let barTick = labelGroup.append("image") 
        .attr("xlink:href", function(d) {
            if (d.candidate === "Michelle Wu") {
                return "Photo/tick.png";
            } else {
                return "";
            }
        })
        .attr("class", "profilePhoto")
        .attr("x", d => x(d.votecount))
        .attr("y", d => y(d.candidate) + 30)
        .attr("width", "20")
        .attr("height", "20")
        .attr("border-radius", "50%")
        .attr("class", "g-image");  
    
    map.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke","white")
        .attr("fill", mapWinnerToColor)
        .style("opacity", "1")
        .on("mouseover", function(d, i) {
            d3.select(this).style("opacity", 0.6);
            tooltip.transition().duration(300)
            .style("opacity", 1)
            .style("font-size", "18px")
            .style("padding", "5px 8px")
        })
        .on("mouseout", function(d, i) {
            d3.select(this).style("opacity", 1);
        })
        .on("click", function(d, i) {

            d3.selectAll("#tipDiv > *").remove(); 

            let svgBar = d3.select("#tipDiv")
                .attr("width", barchartWidth + margin.left + margin.right)
                .attr("height", barchartHeight + margin.top + margin.bottom)
                .attr("x", 0)
                .attr("y", 0)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            let sortedbarchartData = filedbarchartData[d.properties.WARD_PRECINCT].sort(function(a, b) {
                return d3.ascending(a.votecount, b.votecount);
            })

            x.domain([0, d3.max(sortedbarchartData, d => d.votecount)])
            y.domain(sortedbarchartData.map(d => d.candidate));
            
            svgBar.selectAll(".bar")
                .data(sortedbarchartData)
            .enter().append("rect")
                .attr("class", "bar")
                .attr("width", d => x(d.votecount))
                .attr("height", y.bandwidth() - 25)
                .attr("y", d => y(d.candidate) + 32)
                .attr("x", -8)
                .attr("fill", mapWinnerToColorBarchart);
            
            svgBar.append("g")
                .call(d3.axisLeft(y))
                .attr("class", "axis")
                .attr('text-anchor', 'start');

            svgBar.append("text")
                .text(`${sortedbarchartData[0].precinct}`)
                .attr("class", "barchartTitle")
                .attr("x", -55)
                .attr("y", 0);
            
            let labelGroup = svgBar.selectAll("bar")
                .data(sortedbarchartData)
                .enter()
                .append("g")
                .attr("class", "g-bar");
            
            let barLabels = labelGroup.append("text") 
                .text(function(d) {return d.votecount+ " (" + d.percent + "%)"; })
                .attr("x", function(d) {
                    if (d.candidate === "Michelle Wu" || d.candidate === "Annissa Essaibi George") {
                        return x(d.votecount) + 25;
                    } else {
                        return x(d.votecount);
                    }
                })                
                .attr("y", d => y(d.candidate) + 45)
                .attr("class", "g-labels");   
        
            let barImage = labelGroup.append("image") 
                .attr("xlink:href", d => d.photo)
                .attr("class", "profilePhoto")
                .attr("x", -55)
                .attr("y", d => y(d.candidate) + 10)
                .attr("width", "40")
                .attr("height", "40")
                .attr("border-radius", "50%")
                .attr("class", "g-image");  
            
            let winnerTick = labelGroup.append("image") 
                .attr("xlink:href", function(d) {
                    if (d.candidate === "Michelle Wu") {
                        return "Photo/tick.png";
                    } else {
                        return "";
                    }
                })
                .attr("class", "profilePhoto")
                .attr("x", d => x(d.votecount))
                .attr("y", d => y(d.candidate) + 29)
                .attr("width", "20")
                .attr("height", "20")
                .attr("border-radius", "50%")
                .attr("class", "g-image");  
        
        }); 
    };
