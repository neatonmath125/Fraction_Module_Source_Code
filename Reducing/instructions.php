

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;
var total_first=<?php echo $total_first; ?>;
var total_second=<?php echo $total_second; ?>;
var total_third=<?php echo $total_third; ?>;
var total_fourth=<?php echo $total_fourth; ?>;
var total_fifth=<?php echo $total_fifth; ?>;
var total_sixth=<?php echo $total_sixth; ?>;
var points_gotten = [total_first, total_second, total_third, total_fourth, total_fifth, total_sixth]


</script>

<html>
	<body onload="starter()">
	<div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/background.js'></script>
        <div class = "logo-photo"><img style = "width:150px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin-top: -45px;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-bottom: 10px; font-weight: normal; margin-top: 65px; background: -webkit-linear-gradient(rgb(5, 5, 5), #164581); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Progress</div><div style = "margin-left: 325px; margin-top: -130px; margin-bottom: -30px; font-weight: normal; font-size: 70px; color: yellow;" id = "show_star"  class="directions" ></div><div style = "margin-left: 90px; margin-bottom: 0; margin-top: -210px; font-weight: normal; font-size: 50px; margin-bottom: -30px; color: black;" id="stars" class="directions" ></div><div id = "back_button" style = "margin-top: -90px; margin-left: 965px; font-weight: normal; text-align: center; font-size: 30px; opacity:0;" class="directions" onclick="return_index()">Back</div></h1>
	<div style="margin-left:75px; margin-top: 0px;" class="stat-levels">
			<span class="progress_text">Vizualizations 1: </span><span id = "progress1" style="color:yellow;" class="progress_text"></span><span id="points_completed1" style="color:black;" class="progress_text"></span>
		<div class="stat-1 stat-bar">
		  <span class="stat-bar-rating" id = "bar1" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">Vizualizations 2: </span><span id = "progress2" style="color:yellow;" class="progress_text"></span><span id="points_completed2" style="color:black;" class="progress_text"></span>
		<div class="stat-2 stat-bar">
		  <span class="stat-bar-rating" id = "bar2" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">Fireworks Game: </span><span id = "progress3" style="color:yellow;" class="progress_text"></span><span id="points_completed3" style="color:black;" class="progress_text"></span>
		<div class="stat-3 stat-bar">
		  <span class="stat-bar-rating" id = "bar3" role="stat-bar" style="width: 0%;"></span>
		</div>
		<span class="progress_text">Corral Game: </span><span id = "progress4" style="color:yellow;" class="progress_text"></span><span id="points_completed4" style="color:black;" class="progress_text"></span>
		<div class="stat-4 stat-bar">
			<span class="stat-bar-rating" id = "bar4" role="stat-bar" style="width: 0%;"></span>
		  </div>
		  <span class="progress_text">Fill-In-The-Blanks 1: </span><span style="color:yellow;" id = "progress5" class="progress_text"></span><span id="points_completed5" style="color:black;" class="progress_text"></span>
		  <div class="stat-5 stat-bar">
			<span class="stat-bar-rating" id = "bar5" role="stat-bar" style="width: 0%;"></span>
		  </div>
		  <span class="progress_text">Fill-In-The-Blanks 2: </span><span style="color:yellow;" id = "progress6" class="progress_text"></span><span id="points_completed6" style="color:black;" class="progress_text"></span>
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
