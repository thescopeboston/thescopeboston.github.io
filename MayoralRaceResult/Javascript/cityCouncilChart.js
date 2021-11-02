let councilBarchartWidth = window.innerWidth/2;
let councilBarchartHeight = window.innerHeight/2.1;
let barHeight = 25;

let x = d3.scaleLinear()
.range([0, councilBarchartWidth]);

let y = d3.scaleBand()
.range([councilBarchartHeight, 0])
.padding(0.3);

// Draw At Large Map
d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgatLargeChart = d3.select("#atLargeChart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgatLargeChart.append("text")
        .text("At Large")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);

    svgatLargeChart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgatLargeChart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgatLargeChart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgatLargeChart.selectAll("bar")
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

// Draw District 1 Map

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD1Chart = d3.select("#district1Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight/8 + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);
   

    svgD1Chart.append("text")
        .text("District 1")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);

    svgD1Chart.append("text")
        .text("Lydia Edwards (uncontested)")
        .attr("class", "winner")
        .attr("x", -10)
        .attr("y", 50);

});

// Draw District 2 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD2Chart = d3.select("#district2Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight/8 + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    svgD2Chart.append("text")
        .text("District 2")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);

    svgD2Chart.append("text")
        .text("Edward Flynn (uncontested)")
        .attr("class", "winner")
        .attr("x", -10)
        .attr("y", 50);

});
// Draw District 3 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD3Chart = d3.select("#district3Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD3Chart.append("text")
        .text("District 3")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD3Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD3Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD3Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD3Chart.selectAll("bar")
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


// Draw District 4 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD4Chart = d3.select("#district4Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD4Chart.append("text")
        .text("District 4")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD4Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD4Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD4Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD4Chart.selectAll("bar")
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

// Draw District 5 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD5Chart = d3.select("#district5Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD5Chart.append("text")
        .text("District 5")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD5Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD5Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD5Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD5Chart.selectAll("bar")
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

// Draw District 6 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD6Chart = d3.select("#district6Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD6Chart.append("text")
        .text("District 6")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD6Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD6Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD6Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD6Chart.selectAll("bar")
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

// Draw District 7 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD7Chart = d3.select("#district7Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD7Chart.append("text")
        .text("District 7")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD7Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD7Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD7Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD7Chart.selectAll("bar")
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

// Draw District 8 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD8Chart = d3.select("#district8Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight/8 + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    svgD8Chart.append("text")
        .text("District 8")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);

    svgD8Chart.append("text")
        .text("Kenzie Bok (uncontested)")
        .attr("class", "winner")
        .attr("x", -10)
        .attr("y", 50);

});

// Draw District 9 Chart

d3.csv("Data/cityCouncilWinners.csv", function(error, data) {
    let svgD9Chart = d3.select("#district9Chart")
                                .attr("width", councilBarchartWidth + margin.left + margin.right)
                                .attr("height", councilBarchartHeight + margin.top + margin.bottom)
                                .append("g")
                                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                .attr("viewBox", `0 0 ${councilBarchartWidth} ${councilBarchartHeight}`);

    x.domain([0, d3.max(data, d => d.percentagetotal)]);
    y.domain(data.map(d => d.winner));

    svgD9Chart.append("text")
        .text("District 9")
        .attr("class", "barchartTitle2")
        .attr("x", -10)
        .attr("y", 0);


    svgD9Chart.selectAll(".bar")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr("width", d => x(d.percentagetotal))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#dce2de")
        .attr("transform", "translate(0,4)");   

    svgD9Chart.selectAll(".bar2")
        .data(data)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("width", d => x(d.percentage))
        .attr("height", barHeight)
        .attr("y", d => y(d.winner) + 35)
        .attr("x", -8)
        .attr("fill", "#1ECBE1")
        .attr("transform", "translate(0,4)");  

    svgD9Chart.append("g")
        .call(d3.axisLeft(y))
        .attr("class", "axis")
        .attr("id", "axisCouncilChart")
        .attr('text-anchor', 'start');

    let labelGroupCouncilBarChart = svgD9Chart.selectAll("bar")
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





