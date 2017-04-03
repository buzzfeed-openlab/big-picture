
// setting highcharts theme
Highcharts.theme = {
  // colors: ['#E93F33'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: '"Proxima Nova", "Helvetica", sans-serif'
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
  }
};


// Apply the theme
Highcharts.setOptions(Highcharts.theme);
