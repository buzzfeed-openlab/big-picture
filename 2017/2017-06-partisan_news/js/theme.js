
// setting highcharts theme
Highcharts.theme = {
  // colors: ['#E93F33'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: '"Proxima Nova", "Helvetica", sans-serif',
      fontWeight:"normal"
    }
  },
  title: {
    style: {
      color: '#555',
      font: '18px "Proxima Nova", "Helvetica", sans-serif',
      align: 'left'
    }
  },
  legend: {
    itemStyle: {
      font: '9pt "Proxima Nova", "Helvetica", sans-serif',
      color: '#555'
    },
    navigation:{
      enabled:false
    }
  },
  lang: {
    thousandsSep: ','
  },
  credits: {
      enabled: false
  },
  exporting: {
         enabled: false
  },
  plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
  }
};


// Apply the theme
Highcharts.setOptions(Highcharts.theme);
