
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
   var data = google.visualization.arrayToDataTable([
      ['Region', 'Production'],
      ['Northern', 4183.48],
      ['Western', 7018.05],
      ['Southern', 3936.9],
      ['Eastern', 2931.22],
      ['Northeastern', 518.05]
   ]);

   var options = {
      title: 'ENERGY GENERATION FROM LAST 5 DAYS',
      pieHole: 0.4,
   };

   var chart = new google.visualization.PieChart(document.getElementById('donut'));
   chart.draw(data, options);
}
