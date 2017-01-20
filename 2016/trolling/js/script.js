$( document ).ready(function() {
	var windowWidth = $(document).innerWidth(),
		windowHeight = $(document).innerHeight();

	// variables global to app
	var margin = {
			top:10,
			right:25,
			bottom:10,
			left:30
		},
	width = $('#viz-container').width()-margin.left-margin.right,
	height = 450,
	visContainer = $('#viz-container').width();
	svg;

	//append g
	var svg = d3.select('#viz-container')
			.append('svg')
				.attr('width',width+margin.left+margin.right)
				.attr('height',height+margin.top+margin.bottom)
				.attr('class', "svg")
			.append('g')
				.attr('transform','translate(' + margin.left + ',' + margin.top + ')');

	//Create scale functions
	var xScale = d3.scaleLinear()
						.domain([-2,6])
						.range([margin.left, width-margin.right]);


	var yScale = d3.scaleLinear()
						 .domain([0, 24])
						 .range([height - margin.top, margin.bottom]);

	// define your axes
	var xAxis = d3.axisBottom(xScale);

	var yAxis = d3.axisLeft(yScale)
					.tickFormat(function(d, i){
						return  d + "";
					})
					.tickValues([0,6,12,18,24])
					.tickSize(width);


	var thousands = d3.format(",");


	var swoopy = d3.swoopyDrag()
		    .x(function(d){ return xScale(d.xVal) })
		    .y(function(d){ return yScale(d.yVal) })
		    .draggable(false)
		    .annotations(annotations)


	// for tooltip
	var tooltip = d3.select("body")
		.append("div")
		.attr("class", "tooltip tooltip-noarrow");





	function makeScatterplot (){


		 // Add the X Axis
			  svg.append("g")
			  		.attr("class", "x axis")
			      	.attr("transform", "translate(0," + (height - margin.bottom) + ")")
			      	.call(xAxis);

			  // Add the Y Axis
			  svg.append("g")
			  		.attr("class", "y axis")
			  		.attr("transform", "translate(" + (width) + ",0)")
			      	.call(yAxis);


		// make circles
		svg.selectAll("circle")
		   .data(data)
		   .enter()
			   .append("circle")
			   .on("mouseover", function(d) {
					var tooltip = d3.select("body")
						.append("div")
						.attr("class", "tooltip");



		      		tooltip.html('<div class="legend">'+
		      			'<table style="width:100%;">'+
		      			// '<tr><td><strong>'+d.day+'</strong></td><td style="text-align:right"></td></tr>'+
		      			'<tr></td><td>Number of mentions:</td><td style="text-align:right"> '+ thousands(d.number_of_mentions)+'</td></tr></table></div>')
		            tooltip.style("opacity", 1)
		                .style("position", "absolute");
		            if (d3.event.pageX > (width/2)){
		        		tooltip.style("left", (d3.event.pageX)-200 + "px")
	        			.style("top", (d3.event.pageY) + "px")
	        			.append("rect");
		            }else{

		            	tooltip.style("left", (d3.event.pageX)+ "px")
	        			.style("top", (d3.event.pageY) + "px")

		            }

				})
				.on("mouseout", function(d) {

					d3.selectAll('.tooltip').remove();

				})
			   .attr("cx", function(d) {
			   		return xScale(d.day);

			   })
			   .attr("class", function(d){
			   				return "mentions"
			   })
			    .attr("cy", height)
			    .attr("r", 0)
				   	.transition()
				   	.duration(1000)
				.attr("r", function(d) {
					return Math.sqrt((d.number_of_mentions*2)/Math.PI);

			   })
				.attr("cy", function(d) {
			   		return yScale(d.hour_of_day);
			   })
		 	   .attr("opacity",  function(d){
		 	   		return 0.75
				});



		 	// add text label for the x axis
			// svg.append("text")
			// 	.attr("class", "axislabel")
			// 	.attr("transform",
			// 		"translate(" + (width/2) + " ," +
			// 		(height-25) + ")")
			// 	.style("text-anchor", "middle")
			// 	.text("Number of migrants per 1,000 residents");


		    // make labels
		 	var swoopySel = svg.append('g')
		 		.attr('class', 'annotations')
		 		.call(swoopy)

	}


	makeScatterplot();







});
