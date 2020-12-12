

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
	<body onload="opacity_setter()">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script async src='./Javascript/clock.js'></script>
			<script async src='./Javascript/background.js'></script>
			<div style="position:absolute;" id="sky">
					<div class="cloud"></div>
					<div class="cat"></div>
				  </div>	
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./Javascript/clock.js'></script>
	<script async src='./Javascript/background.js'></script>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:black; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 25px;">Mixed Dividing</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229); z-index: 10000000;" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; margin-top: -30px; font-size: 25px;"><div id = "5111" style = "background-color: rgb(98, 98, 206); z-index: 10000000;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id = "5112" style = "background-color: rgb(65, 114, 65); z-index: 10000000;" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
</body>
</html>
