var vg_1 = "js/hw9.vg.json"; 
vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "js/hw10.vg.json";  
vegaEmbed("#bubble_plot", vg_2).then(function(result) {
    // Access the Vega view instance for the bubble plot
}).catch(console.error);
