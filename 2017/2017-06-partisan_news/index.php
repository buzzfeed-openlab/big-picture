<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
  		$view = isset($_GET['view']) && $_GET['view'] == 1 ? 'template-view1' : $view;
  		$view = isset($_GET['view']) && $_GET['view'] == 2 ? 'template-view2' : $view;
  		$view = isset($_GET['view']) && $_GET['view'] == 3 ? 'template-view3' : $view;
  		$view = isset($_GET['view']) && $_GET['view'] == 4 ? 'template-view4' : $view;
  		$dev = '';
	   ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Partisan Facebook Pages</title>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="css/solid.2.7.0.css">
    <link rel="stylesheet" type="text/css" href="css/app.css">


  </head>
  <body class="<?php echo $embed; ?> <?php echo $view; ?>">

    <div class="container view1 view">
        <h3 class="subbuzz__title ">Top 20 left- and right-leaning Facebook Pages, by total followers in June 2017</h3>
        <div id="top_left_pages" class = "chart_box_6col"></div>
        <div id="top_right_pages" class = "chart_box_6col"></div>
        <div class="notes">
          Source: Facebook
        </div>
    </div>


    <div class="container view2 view">
        <h3>Growth of left- and right-leaning Facebook Pages in total monthly engagements</h3>

        <div id="page_growth_left" class="chart_box_6col"></div>
        <div id="page_growth_right" class="chart_box_6col"></div>
        <div class="notes">

          Note: Total engagements include all shares, comments and reactions (reactions include likes, loves, wows, hahas, sads and angrys). Donald Trump for President has been abbreviated to DT for President, Trump News Conservative to Trump News Cons., and ClashDaily.com with Doug Giles to ClashDaily.com.
        </div>
    </div>

    <div class="container view3 view">
        <h3>Domain registrations for left- and right-leaning web sites</h3>
        <div id="growth_domains" class="chart_box_12col"></div>
          <div class="notes">
            Source: Who Is </br>
            Note: Of some the most popular partisan sites today, many were registered during the election.
          </div>
    </div>

    <div class="container view4 view">
      <h3>Fox News vs. Occupy Democrats</h3>
      <div class="chart_box_12col" id="top_two_pages"></div>
      <div class="notes">
        Source: Facebook </br>
        Note: Total engagements include all shares, comments and reactions (reactions include likes, loves, wows, hahas, sads and angrys).
      </div>
    </div>

    <div class="container view5 view">
      <h3>User engagement before and after the elections</h3>
      <div class="chart_box_12col" id="total_engagement"></div>
      <div class="notes">
        Source: Facebook </br>
        Note: Total engagements include all shares, comments and reactions (reactions include likes, loves, wows, hahas, sads and angrys).
      </div>
    </div>





  <!-- jQuery (necessary JavaScript plugins) -->
  <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->


  <!-- These are the highcharts code libraries. You need to connect to their code to be able to use the library and make charts -->
  <script src="js/libs/3.1.1.jquery.min.js"></script>
  <script src="js/libs/5.0.12.highcharts.js"></script>
  <script src="js/libs/5.0.12.highcharts-exporting.js"></script>


  <!-- load themes -->
  <script src="js/theme.js"></script>

  <!-- load chart -->
  <script src="js/chart1.js"></script>


  </body>
</html>
