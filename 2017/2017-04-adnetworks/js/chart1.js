// Replace this Javascript snippet from JSFiddle starting here...


$(document).ready(function () {
  var categories = ['Acxiom','Content.ad','AWeber','Kixer','Spoutable','Chameleon','Earnify','MediaMath','ScoreCard Research Beacon','Teads','StickyAds','Tapad','TradeDesk','Yahoo Ad Exchange','Adobe Audience Manager','BlueKai','Aggregate Knowledge','DoubleClick Ad Exchange-Seller','Google Adsense','Google Syndication'];



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
        data: [6,5,4,4,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: 'Most removed trackers',
        color:'#FF6165',
        data: [0,0,0,0,0,0,0,0,0,0,-5,-5,-5,-5,-6,-6,-7,-9,-10,-15]
    }]
  });



});

//... and end your pasting of the JavaScript snippet from JSFiddle here
