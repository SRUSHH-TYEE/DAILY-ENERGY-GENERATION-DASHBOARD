window.onload = Main()	 
function Main() {
  var chart1 = new CanvasJS.Chart("sbarA", {
    animationEnabled: true,
    title: {
      text: "ENERGY GENERATION",
      fontFamily: "arial black",
      fontColor: "#695A4",
    },
    axisX: {},
    axisY: {
      valueFormatString: "#MU",
      gridColor: "#B6B1A8",
      tickColor: "#B6B1A8",
    },
    toolTip: {
      shared: true,
      content: toolTipContent,
    },
    data: [
      {
        type: "stackedColumn",
        showInLegend: true,
        color: "#696661",
        name: "Thermal",
        dataPoints: [
          { y: 683.49, label: "Northern" },
          { y: 1326.1, label: "western" },
          { y: 639.01, label: "Southern" },
          { y: 498.78, label: "Eastern" },
          { y: 34.28, label: "Northeastern" },
        ],
      },
      {
        type: "stackedColumn",
        showInLegend: true,
        name: "Nuclear",
        color: "#EDCA93",
        dataPoints: [
          { y: 26.23, label: "Northern" },
          { y: 45.47, label: "western" },
          { y: 67.16, label: "Southern" },
          { y: 58.96, label: "Eastern" },
          { y: 58.96, label: "Northeastern" },
        ],
      },
      {
        type: "stackedColumn",
        showInLegend: true,
        name: "Hydro",
        color: "#695A42",
        dataPoints: [
          { y: 124.4, label: "Northern" },
          { y: 31.53, label: "western" },
          { y: 81.21, label: "Southern" },
          { y: 30.34, label: "Eastern" },
          { y: 4.09, label: "Northeastern" },
        ],
      },
    ],
  });
  chart1.render();

  function toolTipContent(e) {
    var str = "";
    var total = 0;
    var str2, str3;
    for (var i = 0; i < e.entries.length; i++) {
      var str1 =
        '<span style= "color:' +
        e.entries[i].dataSeries.color +
        '"> ' +
        e.entries[i].dataSeries.name +
        "</span>: $<strong>" +
        e.entries[i].dataPoint.y +
        "</strong>bn<br/>";
      total = e.entries[i].dataPoint.y + total;
      str = str.concat(str1);
    }
    str2 =
      '<span style = "color:DodgerBlue;"><strong>' +
      e.entries[0].dataPoint.x.getFullYear() +
      "</strong></span><br/>";
    total = Math.round(total * 100) / 100;
    str3 =
      '<span style = "color:Tomato">Total:</span><strong> $' +
      total +
      "</strong>bn<br/>";
    return str2.concat(str).concat(str3);
  }
};
