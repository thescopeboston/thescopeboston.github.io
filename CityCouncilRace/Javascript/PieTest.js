var pie = new d3pie("pieChart1", {
	"header": {
		"title": {
			"text": "Racial/Ethnicity Composition of Boston City Council Candidates 2021",
			"color": "#250c50",
			"fontSize": 15,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#8e879a",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 580,
		"pieOuterRadius": "79%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Black",
				"value": 27,
				"color": "#9e73e3"
			},
			{
				"label": "White",
				"value": 15,
				"color": "#73eced"
			},
			{
				"label": "Hispanic",
				"value": 4,
				"color": "#f0ea49"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 14
		},
		"percentage": {
			"color": "#ffffff",
			"fontSize": 14,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 18
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{value} {label} candidates are in the city council race",
		"styles": {
			"color": "#ffffff",
			"fontSize": 15
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {}
});
   
var pie2 = new d3pie("pieChart2", {
	"header": {
		"title": {
			"text": "Racial/Ethnicity Composition of Boston City Council Candidates 2021",
			"color": "#250c50",
			"fontSize": 15,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#8e879a",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 580,
		"pieOuterRadius": "79%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Black",
				"value": 3,
				"color": "#9e73e3"
			},
			{
				"label": "Arab",
				"value": 1,
				"color": "#ed6574"
			},
			{
				"label": "Asian",
				"value": 1,
				"color": "#89f28e"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"mainLabel": {
			"fontSize": 14
		},
		"percentage": {
			"color": "#ffffff",
			"fontSize": 14,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 18
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{value} {label} candidates are in the city council race",
		"styles": {
			"color": "#ffffff",
			"fontSize": 15
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {}
});
   
   
   //initialize margin end

// var svg2 = d3.select("#piechart2").append("svg")
//     .attr("width", widthChart2 + margin.left + margin.right)
//     .attr("height", heightChart2 + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + widthChart2/4 + "," + heightChart2/4+ ")");

// d3.csv("Data/CityCouncilRace.csv", function(error, data) {
//     if (error) console.log(error);
//     console.log(data);

//     const svg = d3.select('svg'),
//     width = svg.attr('width'),
//     height = svg.attr('height');

//     const radius = 200;

//     const g = svg.append('g').attr('transform', `translate(${width/2}, ${height/2})`);

//     const color = d3.scaleOrdinal(['red', 'blue', 'green', 'gray']);

//     const pie = d3.pie().sort(null).value(d => d.Count);

//     const path = d3.arc().outerRadius(radius).innerRadius(5);

//     const label = d3.arc().outerRadius(radius).innerRadius(radius - 90);

//     const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

//     pies.append('path')
//         .attr('d', path)
//         .attr("fill", function(d) {
//             if (d.data.Race == "Black") {
//                 return "red";
//             } else if (d.data.Race == "Hispanic") {
//                 return "blue";
//             } else {
//                 return "grey";
//             }
//         })
//     pies.append('text')
//         .attr('transform', function(d) {
//             return `translate(${label.centroid(d)})`;})
        // .text(d => d.data.Race)
    // var margin = { top: 30, right: 120, bottom: 30, left: 50 },
    // widthChart1 = document.querySelector("#piechart1").clientWidth - margin.left - margin.right,
    // heightChart1 = document.querySelector("#piechart1").clientHeight - margin.top - margin.bottom,
    // widthChart2 = document.querySelector("#piechart2").clientWidth - margin.left - margin.right,
    // heightChart2 = document.querySelector("#piechart2").clientHeight - margin.top - margin.bottom,
    // tooltip = { width: 100, height: 100, x: 10, y: -30 };

    // var svg1 = d3.select("#piechart1").append("svg")
    // .attr("width", widthChart1 + margin.left + margin.right)
    // .attr("height", heightChart1 + margin.top + margin.bottom)
    // .append("g")
    // .attr("transform", "translate(" + widthChart1/4 + "," + heightChart1/4+ ")");

   
    // var pie = d3.pie()
    //     .sort(null)
    //     .value(d => d.Count);

    // var radius = 200;

    // var arc = d3.arc()
    //     .innerRadius(0)
    //     .outerRadius(Math.min(widthChart1, heightChart1) / 2 - 1)
    //     .cornerRadius(15);

    // const arcs = pie(data);

    // // const g = svg.append('g').attr('transform', `translate(${width/2}, ${height/2})`);
    // // const color = d3.scaleOrdinal(['red', 'blue', 'green', 'gray']);
    // // const path = d3.arc().outerRadius(radius).innerRadius(0);

    // svg1.append("g")
    //     // .attr('transform', `translate(${width/2}, ${height/2})`)
    //     .attr("stroke", "white")
    //     .selectAll("path")
    //     .data(arcs)
    //     .enter().append("path")
    //     .attr("fill", "black")
    //     //    .attr("fill", function(d) {
    //     //        if (d.Race == "Black") {
    //     //            return "black";
    //     //        } else if (d.Race == "Hispanic") {
    //     //            return "brown";
    //     //        } else {
    //     //            return "white";
    //     //        }
    //     //    })
    //        .attr("d", arc)
    //        .append("title")
    //        .text(d => `${d.Race}: ${d.Count}`);
