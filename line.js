
window.onload = Main() 
function  Main() {
var chart = new CanvasJS.Chart("ts", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "TOTAL ENERGY PRODUCTION FROM LAST 10 DAYS",
		fontSize:25
		
	},
	axisY: {
		valueFormatString: "#MU",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8",
	  },
	data: [{        
		type: "line",
      	indexLabelFontSize: 6,
		dataPoints: [
			{ label:"9 DAYS AGO", y:3757.19 },
			{ label:"8 DAYS AGO",y: 3757.19},
			{ label:"1 WEEK AGO",y: 3757.19, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
			{label:"6 DAYS AGO", y: 3736.48 },
			{label:"5 DAYS AGO", y: 3725.11 },
			{ label:"4 DAYS AGO",y: 3726.11 },
			{ label:"3 DAYS AGO",y: 3723.19 },
			{label:"2 DAYS AGO", y: 3709.27 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
			{ label:"1 DAY AGO",y: 3715.33 },
			{label:"YESTERDAY", y: 3716.8 }
		]
	}]
});
chart.render();

}
