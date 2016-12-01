$(document).ready(function(){

		
	var svg = d3.select("svg"),
		windowWidth = window.innerWidth;

	var width = $("#chart").width(),
		margin = 20,
	    diameter = width,
	    // g = svg.append("g").attr("transform", "translate(2,2)"),
   		g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")")
   		format = d3.format(",d");

   



   	var labelCutoff; 
	if (windowWidth > 400){
		labelCutoff = 20
	} else{
		labelCutoff = 50
	}

   	svg.attr("width", width).attr("height", width);


   	// set up pack layout
	var pack = d3.pack()
	    .size([diameter - margin, diameter - margin])
	    .padding(2);

	// load data
	d3.json("trump_urls.json", function(error, root) {
	  if (error) throw error;

	  root = d3.hierarchy(root)
		      .sum(function(d) { return d.size; })
		      .sort(function(a, b) { return b.value - a.value; });

	  var focus = root,
	      nodes = pack(root).descendants(),
	      view;

	  var circle = g.selectAll("circle")
				    .data(nodes)
				    .enter().append("circle")
				      .attr("class", function(d) { return d.parent ? d.children ? "node large" : "node node--leaf "  + d.data.category: "node node--root"; })
				      // .style("fill", function(d) { return d.children ? '#fff' : null; })
				      // .style("stroke", function(d) { return d.children ? '#ccc' : null; })
				      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); })

	  var text = g.selectAll(".d3-label")
				    .data(nodes)
				    .enter().append("text")
				      	.attr("class", function(d){ 
					      	if (d.data.classname) {
					      		return d.data.category + " d3-label " + d.data.classname;
					      	} else if (d.data.size < labelCutoff || d.data.name == "washingtonpost.com"){
					      		return d.data.category +" d3-label notdefault";
					      	} else {
					      			return d.data.category + " d3-label";

					      	}
				  		})
						.attr("opacity", function(d) { 
							if (d.data.size < labelCutoff || d.data.name == "washingtonpost.com"){
								return 0;  
							} else{
								return 1;
							}
							
						})
						.text(function(d) {
							return d.data.name; 
							
						});

		var numberLabel = g.selectAll(".d3-number-label")
							.data(nodes)
						    .enter().append("text")
						      	.attr("class", function(d){ 
							      	if (d.data.classname) {
							      		return d.data.category + " d3-number-label " + d.data.classname;
							      	} else if (d.data.size < labelCutoff){
							      		return d.data.category +" d3-number-label notdefault";
							      	} else {
							      			return d.data.category + " d3-number-label";

							      	}
						  		})
								.attr("opacity", function(d) { 
									if (d.data.size < labelCutoff || d.data.name == "washingtonpost.com"){
										return 0;  
									} else{
										return 1;
									}
									
								})
								.attr("y", 10)
								.text(function(d) {
									return "(" + format(d.data.size) + ")"; 
									
								});

	  	var node = g.selectAll("circle,text");



		svg.on("click", function() { 
				zoom(root); 
			});

	  zoomTo([root.x, root.y, root.r * 2 + margin]);


	  function zoom(d) {
	    var focus0 = focus; focus = d;

	    var transition = d3.transition()
	        	.duration(d3.event.altKey ? 7500 : 750)
	        	.tween("zoom", function(d) {
		          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
		          return function(t) { zoomTo(i(t)); };
		        });

		if (focus.height < 1){
			transition.selectAll('.notdefault')
				.attr("opacity", 1)
		} else if (focus.height == 2){
			transition.selectAll('.notdefault')
				.attr("opacity", 0)
		}

	  }

	  function zoomTo(v) {
	    var k = diameter / v[2]; view = v;
	    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
	    circle.attr("r", function(d) { return d.r * k; });

	  }

	});
			


});
