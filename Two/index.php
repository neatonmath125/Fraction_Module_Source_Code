

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>

<html>
	<body onload = "opacity_setter()">
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
		<link rel="stylesheet" href="./styles/styles.css">
		<script async src='./JavaScript/clock.js'></script>
		<script async src='./JavaScript/background.js'></script>
		<div style="position:absolute; z-index:-100;" id="jsi-sea-container" class="container"></div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:black; font-size: 50px; margin-top: 0px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:black; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">How Big?</div><div style = "margin-top: -45px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; margin-top: 30px; font-size: 25px;"><div id = "5086" style = "background-color: rgb(95, 159, 241); color: black;" class="difficulty" onclick="very_easy()">Level:<br><br>&#9733</div><div style="background-color: rgb(137, 206, 137); color: black" id = "5087" class="difficulty" onclick="easy()">Level:<br><br>&#9733&#9733</div></p>
	</body>
</html>
