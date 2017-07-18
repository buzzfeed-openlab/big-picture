function sum(numbers) {
  return _.reduce(numbers, function(result, current) {
    return result + parseFloat(current);
  }, 0);
};

function format_num(n) {
  // adding commas
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function format_rate(r) {
  // rounding to one decimal place
  return Math.round(r*10)/10;
};

function format_pct(p) {
  return String(Math.round(p*1000)/10)+'%'
}

Array.prototype.SumArray = function (arr) {
  var sum = [];
  if (arr != null && this.length == arr.length) {
    for (var i = 0; i < arr.length; i++) {
      sum.push(this[i] + arr[i]);
    }
  }

  return sum;
};


// setting highcharts theme
Highcharts.theme = {
  colors: ['#505168', '#DCC48E', '#3C7D89', '#88bb92', '#a14a76', '#D49A6C', '#D46D62', '#9CB250'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: '"Open Sans", "Helvetica", sans-serif'
    }
  },
  title: {
    style: {
      color: '#555',
      font: '18px "Open Sans", "Helvetica", sans-serif'
    }
  },
  legend: {
    itemStyle: {
      font: '9pt "Open Sans", "Helvetica", sans-serif',
      color: '#555'
    }
  },
  lang: {
    thousandsSep: ','
  }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);



var Helper = Helper || {}
var Helper = {
  // some re-usable chart components
  chart_components: {
    line_marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                      hover: {
                        enabled: true
                      }
                    }
                  }
  },
  prep_plot_lines: function(plot_line_data) {
    prepped = []
    for (i=0;i<plot_line_data.length;i++) {
      prepped.push({
        value: plot_line_data[i]['value'],
        color: '#777',
        width: 1,
        label: {
          rotation: 0,
          style: {
            fontSize: '9px'
          },
          useHTML: true,
          text: plot_line_data[i]['text']
        },
        zIndex:4
      });
    };
    return prepped;
  },
  area_duration: function(data, name, plotlines, tooltip, xlab, ylab, xmin, xmax) {
    prepped_data = [];
    total = data.reduce(function(a,b) { return a + b; }, 0);
    sum_so_far = 0;
    for (i=0;i<data.length;i++) {
      sum_so_far += data[i];
      percentile = Math.round(sum_so_far/total * 100);
      prepped_data.push({y: data[i], pct: percentile });
    }

    var chart = {
        type: 'area',
        zoomType: 'x'
      }
    var yAxis = {
        min: 0,
        title: {
          text: ylab
        }
      }
    var xAxis = {
        min: xmin,
        max: xmax,
        title: {
          text: xlab
        },
        plotLines: plotlines
      }
    var plotOptions = {
        area: {
          marker: this.chart_components.line_marker
        }
      }
    var series = [{
        name: name,
        color: '#77567A',
        data: prepped_data
      }]

    // TODO: use highchart_opts instead
    return this.highcharts_opts_old(chart, null, null, yAxis, xAxis, plotOptions, tooltip, series)

  },
  area_trend: function(series, tooltip, xlab, ylab, start_year, chart_type) {
    var chart = {
      type: chart_type
    };
    var yAxis = {
      min: 0,
      title: {
        text: ylab
      }
    };
    var xAxis = {
      title: {
        text: xlab
      },
    };
    var plotOptions = {};
    plotOptions[chart_type] = {
      pointStart: start_year,
      marker: this.chart_components.line_marker
    };
    if (chart_type == 'line') {
      plotOptions[chart_type]['lineWidth'] = 3;
      plotOptions[chart_type]['marker']['enabled'] = true;
      plotOptions[chart_type]['marker']['symbol'] = 'circle';
      plotOptions[chart_type]['marker']['radius'] = 4;
      yAxis['endOnTick'] = false;
    };

    if (series.length > 1) {
      var legend = {};
    } else {
      var legend = null;
    };

    var chart_config = {
      chart: chart,
      legend: legend,
      yAxis: yAxis,
      xAxis: xAxis,
      plotOptions: plotOptions,
      tooltip: tooltip,
      series: series
    };

    return this.highcharts_opts(chart_config);

  },
  // TODO: get rid of this, only use highcharts_opts
  highcharts_opts_old: function(chart, title, legend, yAxis, xAxis, plotOptions, tooltip, series) {
    if (title == null) {
      title = {text: ''}
    }
    if (legend == null) {
      legend = {enabled: false}
    }
    if (tooltip == null) {
      tooltip = {enabled: false}
    }
    return {
      chart: chart,
      credits: {enabled: false},
      title: title,
      legend: legend,
      yAxis: yAxis,
      xAxis: xAxis,
      tooltip: tooltip,
      plotOptions: plotOptions,
      series: series
    }
  },
  // highcharts opt helper that assumes a bunch of defaults if they are not set
  highcharts_opts: function(opts) {
    if (!_.has(opts, 'title')||opts.title==null) {
      opts.title = {text: ''};
    };
    if (!_.has(opts, 'legend')||opts.legend==null) {
      opts.legend = {enabled: false};
    };
    if (!_.has(opts, 'tooltip'||opts.tooltip==null)) {
      opts.tooltip = {enabled: false};
    }
    opts.credits = {enabled: false};

    return opts;
  },

  population_breakdown_opts: function(chart_title, data){
    var chart_config = {
      chart: {type: 'column', zoomType: 'y'},
      yAxis: {
        title: {
          text: 'Population'
        },
        endOnTick: false
      },
      xAxis: {
        type: 'category'
      },
      tooltip: {},
      series: [{
        name: 'Population',
        data: data
      }],
      title: {
        text: chart_title
      }
    };
    return this.highcharts_opts(chart_config);
  },

  spending_drilldown_opts: function(data, k_cat, k_subcat, k_val){
    var cats =  _.chain(data)
                  .groupBy(k_cat)
                  .map(function(value, key){
                    return{
                      k: key,
                      spending: sum(_.pluck(value, k_val))
                    };
                  })
                  .sortBy('spending')
                  .value()
                  .reverse();

    var series_data = [];
    var drilldown_series_data = [];
    $.each(cats, function(i, cat){
      var cat_data = {
        name: cat.k,
        drilldown: cat.k,
        y: cat.spending
      };
      series_data.push(cat_data);

      var subcat_data = _.chain(data)
                          .filter(function(row){ return row[k_cat] == cat.k; })
                          .groupBy(k_subcat)
                          .map(function(value, key){
                            return [key, sum(_.pluck(value, k_val))]
                          })
                          .sortBy(function(thing){
                            return thing[1]
                          })
                          .value()
                          .reverse();
      var subcat_obj = {
        name: cat.k,
        id: cat.k,
        data: subcat_data
      };
      drilldown_series_data.push(subcat_obj);
    });

    var chart_opts = {
      chart: {
        type: 'column',
      },
      credits: {enabled: false},
      title: {
        text: ''
      },
      subtitle: {
        text: '<i class="fa fa-hand-pointer-o fa-fw fa-rotate-180" aria-hidden="true"></i> click on a department to drill down',
        useHTML: true
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total spending'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '${point.y:,.0f}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: $<b>{point.y:,.0f}</b><br/>'
      },
      series: [{
        name: 'Spending',
        colorByPoint: true,
        data: series_data
      }],
      drilldown: {
        series: drilldown_series_data
      }
    };
    return chart_opts;
  },

  staffing_resources: function(el, csv_file, sector_name){

    var spending_drilldown_opts = this.spending_drilldown_opts;

    $.when($.get(csv_file)).then(
      function(raw_data){

        var data = $.csv.toObjects(raw_data);

        chart_opts = spending_drilldown_opts(data, 'department', 'job_category', 'annual_salary');
        $(el).highcharts(chart_opts);

      }
    )
  }
}
