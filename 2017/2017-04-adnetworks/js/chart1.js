// Replace this Javascript snippet from JSFiddle starting here...


$(document).ready(function () {
  var categories = ['Acxiom','Content.ad','AWeber','Kixer','Spoutable','Chameleon','Earnify','Yieldlab','Lotame','Teads','Tapad','ScoreCard Research Beacon','Adobe Audience Manager','Aggregate Knowledge','RevContent','DoubleClick','AddThis','Google Syndication','DoubleClick Ad Exchange-Seller','Google Adsense'];



  // change of ad networks
  Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ' ' + this.point.category + '</b><br/>' +
                'Change in trackers since the election: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Most added trackers',
        color:'#7FCEC2',
        data: [6,5,4,3,3,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: 'Most removed trackers',
        color:'#FF6165',
        data: [0,0,0,0,0,0,0,0,0,0,-6,-7,-7,-8,-9,-10,-13,-24,-25,-26]
    }]
  });


  
});

//... and end your pasting of the JavaScript snippet from JSFiddle here
