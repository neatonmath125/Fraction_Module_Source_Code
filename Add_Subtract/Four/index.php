

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
	<body onload="opacity_setter()">
		<canvas style="position:absolute; z-index:-100;" id="canvas"></canvas>

		<div class="mountain-one">
		  <div class="mountain-top1">
			 <div class="mountain-cap1"></div>
		  </div>
		  
		 </div>
		<div class="mountain-two">
		  <div class="mountain-top2">
			<div class="mountain-cap2"></div>
		   </div>
		  </div>
		
		<div class="mountain-three">
		  <div class="mountain-top3">
			<div class="mountain-cap3"></div>
		  </div>
		</div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./Javascript/main.js'></script>
	<script async src='./Javascript/workings.js'></script>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -10px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Step By Step A</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(103, 195, 207)" class="directions" onclick="instructions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5066" style = "background-color: rgb(110, 110, 240); color: black;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: rgb(81, 134, 81); color: black;" id="5067" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style="background-color: rgb(93, 63, 141); color: black;" id="5068" class="difficulty" onclick="medium()">Level:<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
