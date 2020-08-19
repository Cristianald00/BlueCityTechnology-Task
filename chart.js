// SECTION 2: EXAMPLE Chart
// Makes use of Google Charts

var chartData = [];

function searchData() {

  // RETRIEVE DATA FROM API
  var url = 'https://api.bluecitytechnology.com/s/smp/';
  var dataString = "";

  fetch(url)
  .then(response => response.json())
  //.then(commits => console.log(commits) );
  .then(commits => getData(commits) ); // Go an organize data in arrays

}


function getData(commits) {

  // Collect data and organize in arrays
  var ul = document.getElementById('testc');
  var dataArray = [];
  var headerData = ['Date','ns','nrl','nlr','ne', 'nw'];
  dataArray.push(headerData);

  for (x in commits["data"]) {
    var littleArray = [x];

    // Get each value and if does not exists set to 1
    if ( commits["data"][x]["ns"] ) {
      littleArray.push(commits["data"][x]["ns"]);
    } else {
      littleArray.push(1);
    }
    if ( commits["data"][x]["nrl"] ) {
      littleArray.push(commits["data"][x]["nrl"]);
    } else {
      littleArray.push(1);
    }
    if ( commits["data"][x]["nlr"] ) {
      littleArray.push(commits["data"][x]["nlr"]);
    } else {
      littleArray.push(1);
    }
    if ( commits["data"][x]["ne"] ) {
      littleArray.push(commits["data"][x]["ne"]);
    } else {
      littleArray.push(1);
    }
    if ( commits["data"][x]["nw"] ) {
      littleArray.push(commits["data"][x]["nw"]);
    } else {
      littleArray.push(1);
    }

    dataArray.push(littleArray);

  }
  chartData = dataArray;

  // START GOOGLE CHART
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart);

}


function drawChart() {

  // DRAW CHART
  var data = google.visualization.arrayToDataTable(chartData);

  var options = {
    chart: {
      title: '',
      subtitle: '',
    },
    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 500,
    width: 15000,
    legend: {position: 'in'},
    colors: ['#F2C777', '#BF544B', '#637AA6','#203959', '#BF544B']
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}


searchData();
