let widthofMap2 = window.innerWidth/3;
let heightofMap2 = window.innerHeight/2;

let svgTurnout = d3.select("#voterTurnoutMap")
    .attr("viewBox", `0 0 ${widthofMap2} ${heightofMap2}`)
    .attr("x", 0)
    .attr("y", 0);


let map2 = svgTurnout.select("#map2");

d3.queue()
  .defer(d3.json, "Data/[NOWARD1PRECINCT15]precincts.geojson")
  .defer(d3.json, "Data/voterTurnout.json")
  .await(drawVoterTurnoutMap);

function drawVoterTurnoutMap(error, geoData, voterTurnoutData) {
    let proj = d3.geoMercator()
        .fitSize([widthofMap2 , heightofMap2], geoData);

    let path = d3.geoPath()
        .projection(proj);

    let mappedVoterTurnoutData = {};

    for (element of voterTurnoutData) {

        const newVoterTurnoutData = {"Registered Voters": element["Registered Voters"], "Percentage": element["Percentage"], "Precinct": element["Precinct"]};

        mappedVoterTurnoutData[element['WARD_PRECINCT']] = newVoterTurnoutData;

    }

    let maximumVoterTurnoutPercentage = d3.max(voterTurnoutData, function(d) {
        return parseFloat(d.Percentage);
    });

    // let scaleWidth = 150;
    // let scaleHeight = 10;
  
    // let scale = d3.select("#scale");
    // //   .attr("transform", "translate(" + scaleX + ", " + scaleY + ")");
  
    // scale.select("#scaleRect")
    //     .attr("width", scaleWidth)
    //     .attr("height", scaleHeight);
  
    // let gradientScale = d3.scaleLinear().domain([0, maximumVoterTurnoutPercentage]).range([0, scaleWidth]);
    // let gradientAxis = d3.axisBottom(gradientScale).ticks(2);
    let colorScale = d3.scaleLinear().domain([0, maximumVoterTurnoutPercentage]).range(["white", "#5d0582"]).interpolate(d3.interpolate);

    // scale.select("#scaleAxis")
    //     .attr("transform", "translate(0, " + scaleHeight + ")")
    //     .attr("class", "scaleAxis")
    //     .call(gradientAxis);

    // let stops = d3.range(0, 1.25, 0.25)

    // d3.select("#colorGradient").selectAll("stop")
    //     .data(stops).enter().append("stop")
    //     .attr("offset", function(d) { return d * 100 + "%"; })
    //     .attr("stop-color", function(d) { return colorScale(d * maximumVoterTurnoutPercentage); });


    // var scaleWidth = 300;
    // var scaleHeight = 20;
    // var scaleX = margin.left + widthofMap2 / 2 - (scaleWidth / 2);
    // var scaleY = margin.top + heightofMap2 + 40;

    // var scale = svg.select("#scale")
    // .attr("transform", "translate(" + scaleX + ", " + scaleY + ")");

    // scale.select("#scaleRect")
    //     .attr("width", scaleWidth)
    //     .attr("height", scaleHeight);

    // var scaleX = d3.scaleLinear()
    //     .domain([0, maximumVoterTurnoutPercentage])
    //     .range([0, scaleWidth]);

    // var scaleAxis = d3.axisBottom(scaleX);

    // scale.select("#scaleAxis")
    //     .attr("transform", "translate(0, " + scaleHeight + ")")
    //     .call(scaleAxis);

    tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return mappedVoterTurnoutData[d.properties.WARD_PRECINCT].Precinct + "<br>" + "Voter turnout: " + mappedVoterTurnoutData[d.properties.WARD_PRECINCT].Percentage + "%"; });

    map2.call(tip)

    map2.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke","white")
        .attr("fill",  function (d) {
            for (element of voterTurnoutData) {

                if (element.WARD_PRECINCT === d.properties.WARD_PRECINCT) {
                    return colorScale(element.Percentage);
                }
            }
    
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

}