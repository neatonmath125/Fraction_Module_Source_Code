

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;
var total_first=<?php echo $total_first; ?>;
var total_second=<?php echo $total_second; ?>;
var total_third=<?php echo $total_third; ?>;
var total_fourth=<?php echo $total_fourth; ?>;
var total_fifth=<?php echo $total_fifth; ?>;
var total_fifth=<?php echo $total_sixth; ?>;
var completed_list = [total_first, total_second, total_third, total_fourth, total_fifth, total_sixth]

</script>

<html>
	<body onload="starter()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
	<script async src='./JavaScript/background.js'></script>
	<script async src='./JavaScript/background2.js'></script>
<div style="z-index:-1" id="confetti"></div>
	<div class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; z-index: -100000; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin-top: -45px;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-bottom: 10px; font-weight: normal; margin-top: 65px; background: -webkit-linear-gradient(rgb(5, 5, 5), #164581); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Progress</div><div style = "margin-left: 325px; margin-top: -130px; margin-bottom: -30px; font-weight: normal; font-size: 70px; color: yellow;" id = "show_star"  class="directions" ></div><div style = "margin-left: 90px; margin-bottom: 0; margin-top: -210px; font-weight: normal; font-size: 50px; margin-bottom: -30px; color: black;" id="stars" class="directions" ></div><div id = "back_button" style = "margin-top: -90px; margin-left: 965px; font-weight: normal; text-align: center; z-index:10000; font-size: 30px; opacity:0;" class="directions" onclick="return_index()">Back</div></h1>
	<div style="margin-left:75px; z-index:-100; margin-top: 0px;" class="stat-levels">
			<span class="progress_text">Visual Multiplying: </span><span id = "progress1" style="color:yellow;" class="progress_text"></span><span id="points_completed1" style="color:black;" class="progress_text"></span>
		<div style="z-index:-100;" class="stat-1 stat-bar">
		  <span class="stat-bar-rating" id = "bar1" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">How Big?: </span><span id = "progress2" style="color:yellow;" class="progress_text"></span><span id="points_completed2" style="color:black;" class="progress_text"></span>
		<div class="stat-2 stat-bar">
		  <span class="stat-bar-rating" id = "bar2" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">Practice Makes Perfect A: </span><span id = "progress3" style="color:yellow;" class="progress_text"></span><span id="points_completed3" style="color:black;" class="progress_text"></span>
		<div class="stat-3 stat-bar">
		  <span class="stat-bar-rating" id = "bar3" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">Practice Makes Perfect B: </span><span id = "progress4" style="color:yellow;" class="progress_text"></span><span id="points_completed4" style="color:black;" class="progress_text"></span>
		<div class="stat-4 stat-bar">
			<span class="stat-bar-rating" id = "bar4" role="stat-bar" style="width: 0%;"></span>
		  </div>
		  <span class="progress_text">Simplifying by Steps: </span><span style="color:yellow;" id = "progress5" class="progress_text"></span><span id="points_completed5" style="color:black;" class="progress_text"></span>
		  <div class="stat-5 stat-bar">
			<span class="stat-bar-rating" id = "bar5" role="stat-bar" style="width: 0%;"></span>
		  </div>
                  <span class="progress_text">Mixed Multiplying: </span><span style="color:yellow;" id = "progress6" class="progress_text"></span><span id="points_completed6" style="color:black;" class="progress_text"></span>
		  <div class="stat-6 stat-bar">
			<span class="stat-bar-rating" id = "bar6" role="stat-bar" style="width: 0%;"></span>
		  </div>
	  </div>   
	  <br>
	  <br>
	  <br>
	  <br>
</body>
</html>
