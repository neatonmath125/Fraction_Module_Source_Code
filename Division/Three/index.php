

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>



<html>
	<body onload="opacity_setter()">
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
		<link rel="stylesheet" href="./styles/styles.css">
		<script async src='./Javascript/main.js'></script>
		<script async src='./Javascript/workings.js'></script>
		<div style = "position: absolute; z-index:-1;" width = "2000" height = "1000" id="jsi-firefly-container" class="container"></div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -10px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Practice Makes Perfect A</div><div style = "margin-top: -65px; margin-left: 789px; font-weight: normal; font-size: 30px; background-color: rgb(103, 195, 207)" class="directions" onclick="instructions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5105" style = "background-color: rgb(110, 110, 240); color: black;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id="5106" style = "background-color: rgb(110, 240, 116); color: black;" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
	</body>
</html>
