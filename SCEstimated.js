
window.onload =Main() 
function Main() {

var chart = new CanvasJS.Chart("sbarE", {
	animationEnabled: true,
	title:{
		text: "ENERGY GENERATION",
		fontFamily: "arial black",
		fontColor: "#695A4"
	},
	axisX: {
		
	},
	axisY:{
		valueFormatString:"#MU",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [ {
		type: "stackedColumn",
		showInLegend: true,
		color: "#696661",
		name: "Thermal",
		dataPoints: [
			{ y: 439.09, label:"Northern"},
			{ y: 1295.95, label:"western"},
			{ y: 619.75, label:"Southern"},
			{ y: 575.93, label: "Eastern"},
			{ y: 34.83, label: "Northeastern" }
			
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Nuclear",
			color: "#EDCA93",
			dataPoints: [
            { y: 30.37, label:"Northern"},
			{ y: 40.66, label:"western"},
			{ y: 67.4, label:"Southern"},
			{ y: 58.96, label: "Eastern"},
			{ y: 58.96, label: "Northeastern" }
			
			]
		},
        {
        type: "stackedColumn",
			showInLegend: true,
			name: "Hydro",
			color: "#695A42",
			dataPoints: [
            { y: 141.16, label:"Northern"},
			{ y: 62.85, label:"western"},
			{ y: 77.41, label:"Southern"},
			{ y: 31.46, label: "Eastern"},
			{ y: 4.09, label: "Northeastern" }
			
]
}]
});
chart.render();

function toolTipContent(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
	return (str2.concat(str)).concat(str3);
}

}
