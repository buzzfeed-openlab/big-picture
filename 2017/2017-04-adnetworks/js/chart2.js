// Replace this Javascript snippet from JSFiddle starting here...


$(document).ready(function () {

  var categories2 = ['BlueKai','Kixer','RevContent','Quantcast','eXelate','Google Syndication','ScoreCard Research Beacon','DoubleClick Ad Exchange-Seller','Google Adsense','DoubleClick']




  Highcharts.chart('container2', {
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
        categories: categories2,
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
            return '<b>' + this.point.category + '</b><br/>' +
                'Change in trackers since the election: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Most prominent trackers across fake news sites',
        color:'#7FCEC2',
        data: [17,18,18,19,20,31,35,37,39,45]
    }]
  });




});

//... and end your pasting of the JavaScript snippet from JSFiddle here
