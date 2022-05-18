
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['NATIONAL SHARE', 'AREA'],
          [10.55, 342239],
          [9.37, 308350],
          [9.36, 307713],
          [7.33, 240928],
          [5.96, 196024],
          [5.83, 191791],
          [ 4.87,162970],
          [4.73, 155707],
          [4.11, 135191],
          [3.95, 130058],
          [3.49, 112077],
          [2.86,  94163],
          [2.7,  88752],
          [2.54,  83743],
          [2.42,  79714],
          [ 2.38, 78438],
          [ 1.8,  59146],
          [  1.7,  55673],
          [ 1.62,  53483],
          [ 1.53,  50362],
          [ 1.34,  44212],
          [ 1.28,  42241],
          [ 1.18,  38863],
          [ 0.68,  22429],
          [ 0.68,  22327],
          [ 0.64,  21081],
          [ 0.5,  16579],
          [ 0.31,  10486],
          [ 0.21,  7096],
          [ 0.11,  3702],
          [ 0.04,  1483],
          [ 0.01,   603],
          [ 0.01,  492],
          [ 0.003, 114],
        
        ]);

        var options = {
          title: 'AREA OF STATES VS. NATIONAL SHARE',
          hAxis: {title: 'NATIONAL SHARE(%)', minValue: 0},
          vAxis: {title: 'AREA', minValue: 0},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

        chart.draw(data, options);
      }
