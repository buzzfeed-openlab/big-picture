// Replace this Javascript snippet from JSFiddle starting here...


$(document).ready(function () {

  blue ='#66ADF5';
  red = '#F28C85';
  light_red = '#FCE8E7';
  light_blue = '#CCE4FC';
  grown_left = '#66ADF5';
  shrunk_left = '#CCE4FC';
  grown_right = '#F28C85';
  shrunk_right = '#FCE8E7';
  // top left pages
  Highcharts.chart('top_left_pages', {
      chart: {
          type: 'bar',
          marginLeft:150
      },
      title: {
          text: 'Left-leaning Pages'
      },
      xAxis: {
          categories: [
              'NowThis','Upworthy','Occupy Democrats','The Other 98%','ATTN:','Truth Examiner','Proud Liberals','Michael Moore','Liberal American','MSNBC','The Young Turks','ThinkProgress','Being Liberal','New Century Times','Mother Jones','Opposition Report','New Blue United','True Activist','Left Action','Addicting Info'
            ],
          title: {
              text: null
          },
          minorTickLength: 0,
          tickLength: 0,
          width:250
      },
      yAxis: {
          min: 0,
          max:16000000,
          title: {
              text: '',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          },
          tickInterval: 1000000
      },
      tooltip: {
          valueSuffix: ''
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: false
              }
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Total number of followers as of July 17, 2017',
          color: blue,
          data: [11637339,11252491,6654496,4975393,4762315,3568620,2403204,2265429,2108798,1962976,1811149,1779980,1673986,1592639,1544342,1506842,1476462,1467820,1415744,1401544]
      }]
  });

  // top right
    Highcharts.chart('top_right_pages', {
        chart: {
            type: 'bar',
            marginLeft:150
        },
        title: {
            text: 'Right-leaning Pages'
        },
        xAxis: {
            categories: [
              'Fox News','ForAmerica','Faith Family America','American News','Western Journalism','The Daily Caller','WD Americans Online','American Center for Law and Justice','Conservative Tribune','Donald Trump For President','Right Wing News','Secure America Now','Breitbart','MRCTV','Sean Hannity','Donald Trump Is Our President','The Political Insider','Conservative News Today','NewsBusters.org','Allen West'
            ],
            title: {
                text: null
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            min: 0,
            max:16000000,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            tickInterval: 1000000
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total number of followers as of July 17, 2017',
            color: red,
            data: [
              15554630,7924091,5892024,5566287,5170275,4868522,4268773,4081897,4070742,3826062,3588604,3532137,3519500,3231015,3179098,3063918,3007726,2948521,2785588,2750471
            ]
        }]
    });


      // slope graphs
      //left
      $(function () {
          $('#page_growth_left').highcharts({
          chart: {
              renderTo:'page_growth',
              defaultSeriesType:'line',
              marginTop:100
          },
          title:{
              text:'Left-leaning pages'
          },
          legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'center',
            verticalAlign: 'top',
            borderWidth:1,
            // x: 250,
            y: 65,
            labelFormatter: function () {
              if (this.name == "NowThis"){
                return 'grown since March 2016';
              } else if (this.name == "Occupy Democrats"){
                return 'no data in March 2016';
              } else if (this.name == "Truth Examiner"){
                return 'shrunken since March 2016';
              }

            }
          },
          tooltip: {
              formatter: function() {
                  return this.series.name + ' ' + this.y;
              }
          },
          xAxis: {
              opposite:true,
              tickLength:0,
              lineColor: '#fff',
              categories:['March 2016','March 2017'],
              title:{
                  text:''
              },
              labels:{
                style:{
                    fontWeight:'bold',
                    fontSize:14
                }
              }
          },
          yAxis: {
              gridLineWidth:0,
                min: 0,
              max:40000000,
              labels:{
                  enabled:false,
              },
              title:{
                  text:'',
             }
          },
          tooltip:{
            formatter:function(){
                if(this.x == 'March 2017'){
                    return this.series.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                } else{
                  return this.point.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                }
            }
          },
          plotOptions: {
              line:{
                  lineWidth:2,
                  shadow:false,
                  color:'#ccc',
                  fontWeight:'100',
                  marker:{
                      radius:2,
                      symbol: 'circle'
                  },
                  dataLabels:{
                      enabled:true,
                      style:{
                        fontSize: "10px",
                        fontWeight:"normal",
                      },
                      align:'left',
                      x:0,
                      y:10,
                      width:500,
                      formatter:function(){
                          if(this.x == 'March 2017'){
                              return this.series.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                          }
                      }
                  },
              },
              scatter:{
                  shadow:false,
                  color:'#666',
                  marker:{
                      radius:2
                  },
                  dataLabels:{
                      enabled:true,
                      align:'right',
                      style:{
                        fontSize: "10px",
                        fontWeight:"normal",
                      },
                      x:0,
                      y:10,
                      formatter:function(){
                          return this.point.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                      }
                  }
              }
          },
          series: [
            {name: 'NowThis', color:shrunk_left, data:[22751278,18783790]},
            {name: 'Upworthy', color:shrunk_left, data:[8231964,5459343], showInLegend: false},
            {name: 'Being Liberal', color:shrunk_left, data:[5160854,5115601], showInLegend: false},
            {name: 'Liberal America', color:shrunk_left, data:[2459376,2406922], showInLegend: false},
            {name: 'Addicting Info', color:shrunk_left, data:[3844800,2183557], showInLegend: false},
            {name: 'MSNBC', color:shrunk_left, data:[2292659,2075205], showInLegend: false},
            {name: 'Occupy Democrats', color:grown_left, data:[26394599,36673027]},
            {name: 'The Other 98%', color:grown_left, data:[12244729,19753039], showInLegend: false},
            {name: 'Proud Liberals', color:grown_left, data:[1470734,5961902], showInLegend: false},
            {name: 'ATTN:', color:grown_left, data:[4421326,5793239], showInLegend: false},
            {name: 'Daily Kos', color:grown_left, data:[4057336,4329118], showInLegend: false},
            {name: 'The Raw Story', color:grown_left, data:[1402696,3243523], showInLegend: false},
            {name: 'Bipartisan Report', color:grown_left, data:[1862553,3029988], showInLegend: false},
            {name: 'Proud Democrat', color:grown_left, data:[50559,2481165], showInLegend: false},
            {name: 'The Young Turks', color:grown_left, data:[2136335,2322745], showInLegend: false},
            {name: 'Mother Jones', color:grown_left, data:[784004,2181902], showInLegend: false},
            {name: 'FreakOutNation', color:grown_left, data:[1244448,2073894], showInLegend: false},
            {name: 'Truth Examiner', color:grown_left, data:[0,10240180],dashStyle:'shortdot'},
            {name: 'Liberal American', color:grown_left, data:[0,2371347],dashStyle:'shortdot', showInLegend: false},
            {name: 'New Century Times', color:grown_left, data:[0,1896647],dashStyle:'shortdot', showInLegend: false},
            {
               type:'scatter',
               data: [
                  {'x':0,'y': 26394599, color:grown_left, name: 'Occupy Democrats'},
                  {'x':0,'y': 12244729, color:grown_left, name: 'The Other 98%'},
                  {'x':0,'y': 22751278, color:shrunk_left, name: 'NowThis'},
                  {'x':0,'y': 0, color:grown_left, name: 'Truth Examiner'},
                  {'x':0,'y': 1470734, color:grown_left, name: 'Proud Liberals'},
                  {'x':0,'y': 4421326, color:grown_left, name: 'ATTN:'},
                  {'x':0,'y': 8231964, color:shrunk_left, name: 'Upworthy'},
                  {'x':0,'y': 5160854, color:shrunk_left, name: 'Being Liberal'},
                  {'x':0,'y': 4057336, color:grown_left, name: 'Daily Kos'},
                  {'x':0,'y': 1402696, color:grown_left, name: 'The Raw Story'},
                  {'x':0,'y': 1862553, color:grown_left, name: 'Bipartisan Report'},
                  {'x':0,'y': 50559, color:grown_left, name: 'Proud Democrat'},
                  {'x':0,'y': 2459376, color:shrunk_left, name: 'Liberal America'},
                  {'x':0,'y': 0, color:grown_left, name: 'Liberal American'},
                  {'x':0,'y': 2136335, color:grown_left, name: 'The Young Turks'},
                  {'x':0,'y': 3844800, color:shrunk_left, name: 'Addicting Info'},
                  {'x':0,'y': 784004, color:grown_left, name: 'Mother Jones'},
                  {'x':0,'y': 2292659, color:shrunk_left, name: 'MSNBC'},
                  {'x':0,'y': 1244448, color:grown_left, name: 'FreakOutNation'},
                  {'x':0,'y': 0, color:grown_left, name: 'New Century Times'}
                 ]
            }]
        });
      });

      $(function () {
          $('#page_growth_right').highcharts({
          chart: {
              renderTo:'page_growth',
              defaultSeriesType:'line',
              marginTop:100
          },
          title:{
              text:'Right-leaning pages'
          },
          legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'center',
            verticalAlign: 'top',
            borderWidth:1,
            // x: 250,
            y: 65,
            labelFormatter: function () {
              if (this.name == "Fox News"){
                return 'grown since March 2016';
              } else if (this.name == "Conservative Media"){
                return 'no data in March 2016';
              } else if (this.name == "DT For President"){
                return 'shrunken since March 2016';
              }

            }
          },
          tooltip: {
              formatter: function() {
                  return this.series.name + ' ' + this.y;
              }
          },
          xAxis: {
              opposite:true,
              tickLength:0,
              lineColor: '#fff',
              categories:['March 2016','March 2017'],
              title:{
                  text:''
              },
              labels:{
                style:{
                    fontWeight:'bold',
                    fontSize:14
                }
              }
          },
          yAxis: {
              gridLineWidth:0,
              min: 0,
              max:40000000,
              labels:{
                  enabled:false,
              },
              title:{
                  text:'',
             }
          },
          tooltip:{
            formatter:function(){
                if(this.x == 'March 2017'){
                    return this.series.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                } else{
                  return this.point.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                }
            }
          },
          plotOptions: {
              line:{
                  lineWidth:2,
                  shadow:false,
                  color:'#ccc',
                  fontWeight:'100',
                  marker:{
                      radius:2,
                      symbol: 'circle'
                  },
                  dataLabels:{
                      enabled:true,
                      style:{
                        fontSize: "11px",
                        fontWeight:"normal",
                      },
                      align:'left',
                      x:0,
                      y:10,
                      width:500,
                      formatter:function(){
                          if(this.x == 'March 2017'){
                              return this.series.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                          }
                      }
                  },
              },
              scatter:{
                  shadow:false,
                  color:'#666',
                  marker:{
                      radius:2
                  },
                  dataLabels:{
                      enabled:true,
                      align:'right',
                      style:{
                        fontSize: "11px",
                        fontWeight:"normal",
                      },
                      x:0,
                      y:10,
                      formatter:function(){
                          return this.point.name + ' (' + Highcharts.numberFormat(this.y / 1000000) +'m)';
                      }
                  }
              }
          },
          series: [
            {name:'Fox News', color: grown_right, data:[27600038,28339288]},
            {name:'Breitbart', color: grown_right, data:[9066729,11473250], showInLegend: false},
            {name:'Conservative Media', color: grown_right, data:[0,10943531], dashStyle:'shortdot'},
            {name:'Faith Family America', color: grown_right, data:[6216784,7990326], showInLegend: false},
            {name:'DT For President', color: shrunk_right, data:[8284190,7270320]},
            {name:'Mad World News', color: grown_right, data:[3517386,6931152], showInLegend: false},
            {name:'WD Americans Online', color: grown_right, data:[3180729,6618724], showInLegend: false},
            {name:'Liberty Writers', color: grown_right, data:[3266,5476322], showInLegend: false},
            {name:'Sean Hannity', color: grown_right, data:[2306415,5434544],showInLegend: false},
            {name:'ClashDaily.com', color: grown_right, data:[1686457,5096118],showInLegend: false},
            {name:'Allen West', color: grown_right, data:[4005581,4940022],showInLegend: false},
            {name:'USA Politics Today', color: grown_right, data:[65281,4913451],showInLegend: false},
            {name:'The Daily Caller', color: grown_right, data:[3200779,4705991],showInLegend: false},
            {name:'American News', color: shrunk_right, data:[16394130,4449413],showInLegend: false},
            {name:'Allen West Republic', color: grown_right, data:[2135465,3507125],showInLegend: false},
            {name:'The Political Insider', color: shrunk_right, data:[8294477,3194820],showInLegend: false},
            {name:'Dennis Michael Lynch', color: grown_right, data:[956592,3012197],showInLegend: false},
            {name:'Conservative Post', color: shrunk_right, data:[3186997,2806611],showInLegend: false},
            {name:'The Federalist Papers', color: shrunk_right, data:[3982474,2804366],showInLegend: false},
            {name:'Western Journalism', color: shrunk_right, data:[3232290,2730373],showInLegend: false},

            {
               type:'scatter',
               data: [
                 { 'x': 0, 'y': 27600038, color:grown_right, name:'Fox News'},
                  { 'x': 0, 'y': 9066729, color:grown_right, name:'Breitbart'},
                  { 'x': 0, 'y': 0, color:grown_right, name:'Conservative Media'},
                  { 'x': 0, 'y': 6216784, color:grown_right, name:'Faith Family America'},
                  { 'x': 0, 'y': 8284190, color:shrunk_right, name:'DT For President'},
                  { 'x': 0, 'y': 3517386, color:grown_right, name:'Mad World News'},
                  { 'x': 0, 'y': 3180729, color:grown_right, name:'WD Americans Online'},
                  { 'x': 0, 'y': 3266, color:grown_right, name:'Liberty Writers'},
                  { 'x': 0, 'y': 2306415, color:grown_right, name:'Sean Hannity'},
                  { 'x': 0, 'y': 1686457, color:grown_right, name:'ClashDaily.com'},
                  { 'x': 0, 'y': 4005581, color:grown_right, name:'Allen West'},
                  { 'x': 0, 'y': 65281, color:grown_right, name:'USA Politics Today'},
                  { 'x': 0, 'y': 3200779, color:grown_right, name:'The Daily Caller'},
                  { 'x': 0, 'y': 16394130, color:shrunk_right, name:'American News'},
                  { 'x': 0, 'y': 2135465, color:grown_right, name:'Allen West Republic'},
                  { 'x': 0, 'y': 8294477, color:shrunk_right, name:'The Political Insider'},
                  { 'x': 0, 'y': 956592, color:grown_right, name:'Dennis Michael Lynch'},
                  { 'x': 0, 'y': 3186997, color:shrunk_right, name:'Conservative Post'},
                  { 'x': 0, 'y': 3982474, color:shrunk_right, name:'The Federalist Papers'},
                  { 'x': 0, 'y': 3232290, color:shrunk_right, name:'Western Journalism'}

                 ]
            }]
        });
      });


      // column graph for registration
      Highcharts.chart('growth_domains', {
          chart: {
              type: 'column'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: ['Jan-2015','Feb-2015','Mar-2015','Apr-2015','May-2015','Jun-2015','Jul-2015','Aug-2015','Sep-2015','Oct-2015','Nov-2015','Dec-2015','Jan-2016','Feb-2016','Mar-2016','Apr-2016','May-2016','Jun-2016','Jul-2016','Aug-2016','Sep-2016','Oct-2016','Nov-2016','Dec-2016','Jan-2017','Feb-2017','Mar-2017','Apr-2017','May-2017'
            ],
            tickInterval:3,
            minorTickLength: 0,
          },
          yAxis: {
              min: 0,
              max:25,
              title: {
                  text: ''
              },
              minorTickLength: 0
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y} </b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Left',
              color: blue,
              data: [0,1,0,1,0,0,1,2,1,1,3,1,2,7,0,3,1,1,5,5,2,4,5,2,1,1,2,0,0]

          }, {
              name: 'Right',
              color:red,
              data: [3,3,2,2,2,2,4,5,3,3,6,8,9,7,9,12,17,13,21,11,11,13,18,9,6,13,11,2,1]

          }]
        });



        // line graph for occupy vs fox news
        Highcharts.chart('top_two_pages', {
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                  'Apr-2015','Apr-2015','Apr-2015','Apr-2015','May-2015','May-2015','May-2015','May-2015','May-2015','Jun-2015','Jun-2015','Jun-2015','Jun-2015','Jul-2015','Jul-2015','Jul-2015','Jul-2015','Aug-2015','Aug-2015','Aug-2015','Aug-2015','Aug-2015','Sep-2015','Sep-2015','Sep-2015','Sep-2015','Oct-2015','Oct-2015','Oct-2015','Oct-2015','Nov-2015','Nov-2015','Nov-2015','Nov-2015','Nov-2015','Dec-2015','Dec-2015','Dec-2015','Dec-2015','Jan-2016','Jan-2016','Jan-2016','Jan-2016','Jan-2016','Feb-2016','Feb-2016','Feb-2016','Feb-2016','Mar-2016','Mar-2016','Mar-2016','Mar-2016','Apr-2016','Apr-2016','Apr-2016','Apr-2016','May-2016','May-2016','May-2016','May-2016','May-2016','Jun-2016','Jun-2016','Jun-2016','Jun-2016','Jul-2016','Jul-2016','Jul-2016','Jul-2016','Jul-2016','Aug-2016','Aug-2016','Aug-2016','Aug-2016','Sep-2016','Sep-2016','Sep-2016','Sep-2016','Oct-2016','Oct-2016','Oct-2016','Oct-2016','Oct-2016','Nov-2016','Nov-2016','Nov-2016','Nov-2016','Dec-2016','Dec-2016','Dec-2016','Dec-2016','Jan-2017','Jan-2017','Jan-2017','Jan-2017','Jan-2017','Feb-2017','Feb-2017','Feb-2017','Feb-2017','Mar-2017','Mar-2017','Mar-2017','Mar-2017','Apr-2017'
              ],
              tickInterval:10,
              minorTickLength: 0,
            },
            yAxis: {
                min: 0,
                //max:,
                title: {
                    text: ''
                },
                minorTickLength: 0
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Occupy Democrats',
                color: blue,
                data: [603878,684105,1063326,1057558,979753,1057606,2059497,1638826,1733126,2879994,2811191,3071137,2692363,6679392,2329631,2598901,2036114,2361001,3322076,2087592,4606959,2644745,3842442,4501373,5530236,5380005,4050860,4953043,3870941,7694902,4363165,5369262,8293450,7149629,3412274,3880210,8254904,6177571,2653877,3362896,6659509,8421224,5429927,2527555,5305283,5845599,5507707,4546939,4637746,7995055,5435931,5375009,4326123,4394587,3676809,2805229,3464882,6355521,5706100,4173284,1174203,2786903,9962830,6911813,6867877,6892496,8518206,9854088,6510815,7640323,4089673,10282803,5665014,7222293,8635489,5300654,10133564,11397148,11917507,17773852,12795091,9322997,9116204,12702544,16810638,12221999,9907644,6209881,7551268,8337601,5729797,5857739,7718383,16369031,26226334,10846225,15978713,13540965,14957355,9702287,6789312,6389295,8859674,11119166,5585589]

            }, {
                name: 'Fox News',
                color:red,
                data: [2849403,5380183,4082909,4324377,5530768,3380774,4524486,4190611,4178135,3447014,4950044,3560419,3961840,5798897,5305499,5383789,4467231,4411611,4200277,3777802,3965018,3666018,4709126,4282542,3576652,3373666,4680062,3607939,3712902,4359179,4837745,3688884,5765901,6202785,3932833,5703261,5609548,6021999,3595091,3490082,4943252,5283703,4136663,4014636,5626494,4029318,4407992,5390215,8940482,6455269,5563803,4755309,5708686,4002960,2971084,4360527,4763396,4781509,4497083,4647788,6591635,4654815,6838394,6805244,6067387,7771196,10196396,8578128,11034342,10059541,6444344,6750427,6907667,7353366,6800415,12042746,7217357,7263915,9094356,8950760,9427320,9936598,10083927,12002930,17148592,8198216,8082274,8992443,8394161,8402687,7617120,7029285,8386020,10274512,18766252,17317532,14120495,10616904,9907011,7548751,8254761,5828754,7002954,6312790,3792844]

            }]
          });


          Highcharts.chart('total_engagement', {
              chart: {
                  type: 'line'
              },
              title: {
                  text: ''
              },
              xAxis: {
                  categories: [
                    '5-Apr-2015','12-Apr-2015','19-Apr-2015','26-Apr-2015','3-May-2015','10-May-2015','17-May-2015','24-May-2015','31-May-2015','7-Jun-2015','14-Jun-2015','21-Jun-2015','28-Jun-2015','5-Jul-2015','12-Jul-2015','19-Jul-2015','26-Jul-2015','2-Aug-2015','9-Aug-2015','16-Aug-2015','23-Aug-2015','30-Aug-2015','6-Sep-2015','13-Sep-2015','20-Sep-2015','27-Sep-2015','4-Oct-2015','11-Oct-2015','18-Oct-2015','25-Oct-2015','1-Nov-2015','8-Nov-2015','15-Nov-2015','22-Nov-2015','29-Nov-2015','6-Dec-2015','13-Dec-2015','20-Dec-2015','27-Dec-2015','3-Jan-2016','10-Jan-2016','17-Jan-2016','24-Jan-2016','31-Jan-2016','7-Feb-2016','14-Feb-2016','21-Feb-2016','28-Feb-2016','6-Mar-2016','13-Mar-2016','20-Mar-2016','27-Mar-2016','3-Apr-2016','10-Apr-2016','17-Apr-2016','24-Apr-2016','1-May-2016','8-May-2016','15-May-2016','22-May-2016','29-May-2016','5-Jun-2016','12-Jun-2016','19-Jun-2016','26-Jun-2016','3-Jul-2016','10-Jul-2016','17-Jul-2016','24-Jul-2016','31-Jul-2016','7-Aug-2016','14-Aug-2016','21-Aug-2016','28-Aug-2016','4-Sep-2016','11-Sep-2016','18-Sep-2016','25-Sep-2016','2-Oct-2016','9-Oct-2016','16-Oct-2016','23-Oct-2016','30-Oct-2016','6-Nov-2016','13-Nov-2016','20-Nov-2016','27-Nov-2016','4-Dec-2016','11-Dec-2016','18-Dec-2016','25-Dec-2016','1-Jan-2017','8-Jan-2017','15-Jan-2017','22-Jan-2017','29-Jan-2017','5-Feb-2017','12-Feb-2017','19-Feb-2017','26-Feb-2017','5-Mar-2017','12-Mar-2017','19-Mar-2017','26-Mar-2017','2-Apr-2017'
                ],
                tickInterval:10,
                minorTickLength: 0,
              },
              yAxis: {
                  min: 0,
                  //max:,
                  title: {
                      text: ''
                  },
                  minorTickLength: 0
              },
              tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                      '<td style="padding:0"><b>{point.y} </b></td></tr>',
                  footerFormat: '</table>',
                  shared: true,
                  useHTML: true
              },
              plotOptions: {
                  column: {
                      pointPadding: 0.2,
                      borderWidth: 0
                  }
              },
              series: [{
                  name: 'Left-leaning sites',
                  color: blue,
                  // data: [42239272,31253055,38352467,44918582,41834666,46117098,44734756,35682630,40494646,51495231,57438342,45355641,42430193,36288466,36655708,39709533,29339114,30562898,35820898,51463773,68631582,66059916,59839084,55217970,51511864,39536515]
                  data:[3348252,3758684,4728609,4287612,5541282,5613672,6335658,7095909,5353815,6470638,6065627,6953800,10990048,10835443,9047588,9092934,6228915,7101191,7857088,7646854,10009535,7228048,8652344,9222768,13440025,12121381,9304522,9914810,9288027,12948902,9273787,10610980,15243361,14774261,8899893,9656519,17208874,14340761,11834214,8981176,14848101,15164874,11635415,9867726,17766835,16119884,15203477,12427379,16175272,21873414,14297594,18996278,14584922,15065510,13269228,10587525,13755410,15132257,14826851,14534557,8601605,11001436,20468245,18447222,20011993,24154858,21526657,21455605,18664344,19616116,16840684,23488015,18363177,20666779,31608869,19706742,25149466,31682702,27968849,31829026,28771568,23804519,27989238,36054250,39259115,29067591,28236219,22208998,24137666,26479832,18297424,18770379,21429912,32962579,49537552,40262335,37840623,35317627,33644945,23739106,21885111,21634273,26573164,27264391,16663376]

              }, {
                  name: 'Right-leaning sites',
                  color:red,
                  // data: [56608052,67487918,58204732,63304538,66761335,80179633,83726417,80180985,81056601,94676369,129285604,79354270,58876653,60174761,54637263,53760578,51132209,53867607,57532539,68293962,103099236,94748323,91790152,75342111,70709614,59929241]
                  data: [7523147,12900930,10718132,12246534,13789063,10564610,11965194,11590618,11240701,11183613,11574289,9435617,12056472,14618916,16181708,16164190,14830010,12246443,12496903,12522195,12884033,12350549,14655326,14401237,12502352,11331319,14226956,12491541,12717408,14016372,14009857,12611002,15963700,22550553,16873670,18349391,21027551,19139637,15717509,15590090,17152015,16597548,14579036,16852015,17229843,14928909,15517440,16220492,21674670,16063708,15770589,17024906,14045536,13253815,11870159,13640937,13425726,14184461,15442067,14834056,18546352,15735092,18398021,19267621,14654878,18803618,23598711,20607102,26920594,22261720,20084781,19415183,20379069,19181121,17547411,24580323,19291579,18211525,23372493,23568381,27192082,25255562,24370066,31660056,44683583,23702563,19441236,19932306,17134402,16439273,17855367,16178653,18876423,22375325,38569256,31848409,30232131,22720501,22232488,16815267,21297081,14199138,15041087,15133544,9490073]
              }]
            });




});

//... and end your pasting of the JavaScript snippet from JSFiddle here
