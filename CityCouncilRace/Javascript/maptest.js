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
let pDisclaimer = d3.select("#disclaimer");
let pHover = d3.select("#hover");

let pImg = d3.select("#img");
let pName = d3.select("#name");
let pNeighborhood = d3.select("#neighborhood");
let pKeyIssue = d3.select("#keyIssues");
let pLearnMore = d3.select("#learnMore");
let pWebsite = d3.select("#website");

let pImg2 = d3.select("#img2");
let pName2 = d3.select("#name2");
let pNeighborhood2 = d3.select("#neighborhood2");
let pKeyIssue2 = d3.select("#keyIssues2");
let pLearnMore2 = d3.select("#learnMore2");
let pWebsite2 = d3.select("#website2");

let pImg3 = d3.select("#img3");
let pName3 = d3.select("#name3");
let pNeighborhood3 = d3.select("#neighborhood3");
let pKeyIssue3 = d3.select("#keyIssues3");
let pLearnMore3 = d3.select("#learnMore3");
let pWebsite3 = d3.select("#website3");

let pImg4 = d3.select("#img4");
let pName4 = d3.select("#name4");
let pNeighborhood4 = d3.select("#neighborhood4");
let pKeyIssue4 = d3.select("#keyIssues4");
let pLearnMore4 = d3.select("#learnMore4");
let pWebsite4 = d3.select("#website4");

let pImg5 = d3.select("#img5");
let pName5 = d3.select("#name5");
let pNeighborhood5 = d3.select("#neighborhood5");
let pKeyIssue5 = d3.select("#keyIssues5");
let pLearnMore5 = d3.select("#learnMore5");
let pWebsite5 = d3.select("#website5");

let pImg6 = d3.select("#img6");
let pName6 = d3.select("#name6");
let pNeighborhood6 = d3.select("#neighborhood6");
let pKeyIssue6 = d3.select("#keyIssues6");
let pLearnMore6 = d3.select("#learnMore6");
let pWebsite6 = d3.select("#website6");

let pImg7 = d3.select("#img7");
let pName7 = d3.select("#name7");
let pNeighborhood7 = d3.select("#neighborhood7");
let pKeyIssue7 = d3.select("#keyIssues7");
let pLearnMore7 = d3.select("#learnMore7");
let pWebsite7 = d3.select("#website7");

let pImg8 = d3.select("#img8");
let pName8 = d3.select("#name8");
let pNeighborhood8 = d3.select("#neighborhood8");
let pKeyIssue8 = d3.select("#keyIssues8");
let pLearnMore8 = d3.select("#learnMore8");
let pWebsite8 = d3.select("#website8");

let pImg9 = d3.select("#img9");
let pName9 = d3.select("#name9");
let pNeighborhood9 = d3.select("#neighborhood9");
let pKeyIssue9 = d3.select("#keyIssues9");
let pLearnMore9 = d3.select("#learnMore9");
let pWebsite9 = d3.select("#website9");


d3.queue()
  .defer(d3.json, "Javascript/neighborhoods.geojson")
  .defer(d3.json, "Javascript/district.geojson")
  .await(drawMap);

function drawMap(error, neighborhoodData, districtData) {
    if (error) console.log(error);

    // console.log(data);
    let tooltipInfo = 
    {"1" : 
        {"First": {"name":"Lydia Edwards", "img": "Photo/Edwards.jpg", "neighborhood": "East Boston", "issue": "Housing, Environmental Justice, Education", "website": "https://www.lydiaedwards.org/", "interview": "https://thescopeboston.org/6344/2021-boston-elections/city-council-race-lydia-edwards-running-for-reelection-in-district-1/"}
        }, 
    "2" : 
        {"First": {"name":"Edward Flynn", "img": "Photo/user.png", "neighborhood": "", "issue": "", "website": "https://www.edforboston.com/"}, "interview": ""
        }, 
    "3" : 
        {"First": {"name":"Stephen McBride", "img": "Photo/McBride.jpeg", "neighborhood": "Dorchester", "issue": "Covid-19 Recovery, Education, Public Health, Racial Wealth Gap", "website": "https://www.mcbrideforboston.com/", "interview": "https://thescopeboston.org/6258/2021-boston-elections/city-council-race-stephen-mcbride-running-for-district-3/"}
        }, 
    "4" :  
        {"First": 
            {"name":"Evandro Carvalho", "img": "Photo/Carvalho.jpeg", "neighborhood": "Dorchester", "issue": "Economic Empowerment, Homeownership, Police Reforms", "website": "https://twitter.com/evandro4boston?lang=en", "interview": "https://thescopeboston.org/6729/2021-boston-elections/city-council-race-evandro-carvalho-running-for-district-4/"}, 
        "Second": 
            {"name":"Nikkia Jean-Charles", "img": "Photo/Charles.jpg", "neighborhood": "Mattapan", "issue": "Public Peace, Food Abundance, Transparency & Accountability", "website": "https://nikkia4boston.com/", "interview": "https://thescopeboston.org/6531/2021-boston-elections/city-council-race-nikkia-jean-charles-running-for-district-4/"}, 
        "Third": 
            {"name":"Deeqo Jibril", "img": "Photo/Jibril.png", "neighborhood": "Dorchester", "issue": "Affordable Housing, Education, Small Business, Racism", "website": "https://www.deeqo.org/", "interview": "https://thescopeboston.org/6724/2021-boston-elections/citycouncil-race-deeqo-jibril-running-for-district-4/"}, 
        "Fourth": 
            {"name":"Leonard Lee", "img": "Photo/Lee.jpg", "neighborhood": "Dorchester", "issue": "Covid-19 Recovery", "website": "https://leonardlee4citycouncil.com/", "interview": "https://thescopeboston.org/6297/2021-boston-elections/city-council-race-leonard-lee-running-for-district-4/"}, 
        "Fifth": 
            {"name":"Joel Richards", "img": "Photo/Richards.jpeg", "neighborhood": "Dorchester", "issue": "Education, Housing, Small Business", "website": "https://www.moreford4.com/", "interview": "https://thescopeboston.org/6065/2021-boston-elections/city-council-race-joel-richards-running-for-district-4/"}, 
        "Sixth": 
            {"name":"Trevour Smith", "img": "Photo/Smith.jpeg", "neighborhood": "Dorchester", "issue": "Education, Transportation", "website": "https://www.trevoursmithford4.com/", "interview": "https://thescopeboston.org/6443/2021-boston-elections/city-council-race-trevour-smith-running-for-district-4/"}, 
        "Seventh": 
            {"name":"Jacob Urena", "img": "Photo/Urena.jpeg", "neighborhood": "Unknown", "issue": "Public Health, Public Safety", "website": "https://www.jacobforboston.com/", "interview": "https://thescopeboston.org/5355/2021-boston-elections/changemaker-local-minister-blm-activist-and-leader-in-faneuil-hall-name-change-effort-runs-for-city-council/"}, 
        "Eigth": 
            {"name":"Josette Williams", "img": "Photo/Williams.jpg", "neighborhood": "Unknown", "issue": "Civic engagement", "website": "https://www.voteforjosette.com/", "interview": "https://thescopeboston.org/6340/2021-boston-elections/city-council-race-josette-williams-running-for-district-4/"}, 
        "Ninth": 
            {"name":"Brian Worrell", "img": "Photo/Worrell.jpeg", "neighborhood": "Unknown", "issue": "Covid-19 Recovery", "website": "https://www.facebook.com/VoteWorrell/", "interview": "https://thescopeboston.org/6568/2021-boston-elections/city-council-race-brian-worrell-running-for-district-4/"}
        },
    "5" :
        {"First": 
            {"name":"", "img": "", "neighborhood": "", "issue": "", "website": "", "interview": ""}
        },
    "6" :
        {"First": 
            {"name":"Winnie Eke", "img": "Photo/Eke.png", "neighborhood": "West Roxbury", "issue": "Education", "website": "No website found", "interview": "https://thescopeboston.org/6667/2021-boston-elections/city-council-race-winnie-eke-for-district-6/"},
        "Second": 
            {"name":"Kendra Hicks", "img": "Photo/Hicks.jpg", "neighborhood": "Jamaica Plain", "issue": "Justice, Education, Community Safety, Affordable Housing, Climate Change, Equitable economy", "website": "https://www.hicksfordistrictsix.com/", "interview": "https://thescopeboston.org/6108/2021-boston-elections/city-council-race-kendra-hicks-running-for-district-6/"},
        "Third": 
            {"name":"Mary Tamer", "img": "Photo/Tamer.jpg", "neighborhood": "West Roxbury", "issue": "Covid-19 Recovery, Education, Climate Change", "website": "https://www.marytamer.com/", "interview": "https://thescopeboston.org/6357/2021-boston-elections/city-council-race-mary-tamer-running-for-district-6/"}
        },
    "7" :
        {"First": 
            {"name":"Tania Fernandes Anderson", "img": "Photo/Anderson.jpeg", "neighborhood": "West Roxbury", "issue": "Education", "website": "https://taniaford7.com/", "interview": "https://thescopeboston.org/6719/2021-boston-elections/city-council-race-tania-fernandes-anderson-for-district-7/"},
        "Second": 
            {"name":"Marisa Luse", "img": "Photo/Luse.jpeg", "neighborhood": "Roxbury", "issue": "Constituent Services, Civic Engagement, Community Engagement in Neighborhood Development", "website": "https://twitter.com/MarisaforBoston", "interview": "https://thescopeboston.org/6789/2021-boston-elections/city-council-race-marissa-luse-running-for-district-7/"},
        "Third": 
            {"name":"Santiago Leon Rivera", "img": "Photo/Rivera.jpeg", "neighborhood": "Roxbury", "issue": "Housing, Homelessness, The Opioid Crisis, Education", "website": "https://leonrivera.com/", "interview": "https://thescopeboston.org/6656/2021-boston-elections/city-council-race-leon-rivera-running-for-district-7/"}
        },
    "8" :
        {"First": 
            {"name":"Kenzie Bok", "img": "Photo/Bok.jpg", "neighborhood": "Bay Village", "issue": "Affordable Housing, Transportation Infrastructure, Climate Change, Historic Preservation", "website": "https://www.kenziebok.com/", "interview": "https://thescopeboston.org/6552/2021-boston-elections/city-council-race-kenzie-bok-running-for-reelection-in-district-8/"}
        },
    "9" :
        {"First": 
            {"name":"", "img": "", "neighborhood": "", "issue": "", "website": "", "interview": ""}
        },
    };

    
    let proj = d3.geoMercator()
        .fitSize([width, height], districtData);

    let path = d3.geoPath()
        .projection(proj);

    map.selectAll("path")
        .data(districtData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke","#dbdbdb")
        .attr("fill", "#0aaef5")
        .style("opacity", "0.8")
        .on("mouseover", function(d, i) {
            console.log(d);
            d3.selectAll("path").style("opacity", 0.3);
            d3.select(this).style("opacity", 0.8);
        })
        .on("click", function(d, i) {
            pDisclaimer.html("(Candidates appear in alphabetical order)");
            pHover.html(`Candidates for District ${d.properties.DISTRICT}`);
            // 1st Candidate 
            pImg.attr("src", tooltipInfo[d.properties.DISTRICT].First.img);
            pName.html(`${tooltipInfo[d.properties.DISTRICT].First.name}`);
            pNeighborhood.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].First.neighborhood}`);
            pKeyIssue.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].First.issue}.</b>`);
            pLearnMore.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)
            // 2nd Candidate 
            pImg2.attr("src", tooltipInfo[d.properties.DISTRICT].Second.img);
            pName2.html(`${tooltipInfo[d.properties.DISTRICT].Second.name}`);
            pNeighborhood2.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Second.neighborhood}`);
            pKeyIssue2.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Second.issue}.</b>`);
            pLearnMore2.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite2.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)
            // 3rd Candidate
            pImg3.attr("src", tooltipInfo[d.properties.DISTRICT].Third.img);
            pName3.html(`${tooltipInfo[d.properties.DISTRICT].Third.name}`);
            pNeighborhood3.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Third.neighborhood}`);
            pKeyIssue3.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Third.issue}.</b>`);
            pLearnMore3.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite3.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)

            pImg4.attr("src", tooltipInfo[d.properties.DISTRICT].Fourth.img);
            pName4.html(`${tooltipInfo[d.properties.DISTRICT].Fourth.name}`);
            pNeighborhood4.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Fourth.neighborhood}`);
            pKeyIssue4.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Fourth.issue}.</b>`);
            pLearnMore4.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite4.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)

            pImg5.attr("src", tooltipInfo[d.properties.DISTRICT].Fifth.img);
            pName5.html(`${tooltipInfo[d.properties.DISTRICT].Fifth.name}`);
            pNeighborhood5.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Fifth.neighborhood}`);
            pKeyIssue5.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Fifth.issue}.</b>`);
            pLearnMore5.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite5.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)
           
            pImg6.attr("src", tooltipInfo[d.properties.DISTRICT].Sixth.img);
            pName6.html(`${tooltipInfo[d.properties.DISTRICT].Sixth.name}`);
            pNeighborhood6.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Sixth.neighborhood}`);
            pKeyIssue6.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Sixth.issue}.</b>`);
            pLearnMore6.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite6.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)

            pImg7.attr("src", tooltipInfo[d.properties.DISTRICT].Seventh.img);
            pName7.html(`${tooltipInfo[d.properties.DISTRICT].Seventh.name}`);
            pNeighborhood7.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Seventh.neighborhood}`);
            pKeyIssue7.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Seventh.issue}.</b>`);
            pLearnMore7.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite7.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)

            pImg8.attr("src", tooltipInfo[d.properties.DISTRICT].Eigth.img);
            pName8.html(`${tooltipInfo[d.properties.DISTRICT].Eigth.name}`);
            pNeighborhood8.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Eigth.neighborhood}`);
            pKeyIssue8.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Eigth.issue}.</b>`);
            pLearnMore8.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite8.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)

            pImg9.attr("src", tooltipInfo[d.properties.DISTRICT].Ninth.img);
            pName9.html(`${tooltipInfo[d.properties.DISTRICT].Ninth.name}`);
            pNeighborhood9.html(`Candidate's home neighborhood: ${tooltipInfo[d.properties.DISTRICT].Ninth.neighborhood}`);
            pKeyIssue9.html(`Key platform issue: <b>${tooltipInfo[d.properties.DISTRICT].Ninth.issue}.</b>`);
            pLearnMore9.html(`Learn more about the candidate's platform in their <a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.interview}"> interview with The Scope.</a>`);
            pWebsite9.html(`<a target="_blank" href="${tooltipInfo[d.properties.DISTRICT].First.website}">Visit their website</a>`)
        });
        // .on("mouseout", function() {
        //     d3.select(this).style("opacity", 0.8)
        //     d3.selectAll("path").style("opacity", 0.8)
        //     d3.select(this).html("")
        //     .style("padding", "0");
        // });
    map.selectAll('text')
        .data(neighborhoodData.features)
        .enter()
        .append("text")
        .text(d => `${d.properties.Name}`)
        .attr("class", "mapText")
        .attr("text-anchor", "middle")
        .attr("x", d => (path.centroid(d)[0] - 4))
        .attr("y", d => (path.centroid(d)[1]) + 4);

    // map.selectAll('text')
    //     .data(districtData.features)
    //     .enter()
    //     .append("text")
    //     .text(d => `Dist. ${d.properties.DISTRICT}`)
    //     .attr("class", "mapText")
    //     .attr("text-anchor", "middle")
    //     .attr("x", d => (path.centroid(d)[0] - 4))
    //     .attr("y", d => (path.centroid(d)[1]) + 4);

    // map.selectAll("path")
    //     .data(neighborhoodData.features)
    //     .enter()
    //     .append("path")
    //     .attr("d", path)
    //     .attr("stroke","#dbdbdb")
    //     .attr("fill", "white")
    //     .style("opacity", "0.01");

   
  };