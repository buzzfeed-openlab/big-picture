// Replace this Javascript snippet from JSFiddle starting here...


$(document).ready(function () {

  var categories3=['Aol','Bidgear','Clickdealer','Criteo.com','Mantis','Pixfuture','Propel','Teads','Advertise.com','Conversant','Infolinks','Adblade','Earnify','Time2play-online.net ','Taboola','Ad Provider','Feednetwork','Mgid','Popunder','Content.ad','Adsense','Revcontent']



  Highcharts.chart('container3', {
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
        categories: categories3,
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
                'Number of ads served across sites:' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Most served ads',
        color:'#7FCEC2',
        data: [1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5,5,7,8,9,17,22]
    }]
  });

});

//... and end your pasting of the JavaScript snippet from JSFiddle here
