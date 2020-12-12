

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>


<html>
		<body onload="opacity_setter()">
	<script src="./JavaScript/three.js"></script>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/main.js'></script>
	<script async src='./JavaScript/workings.js'></script>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -10px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Covert Operations C</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(103, 195, 207)" class="directions" onclick="instructions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5049" style = "background-color: blue; height: 150px; width:150px; color: black;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: green; height: 150px; width:150px; color: black;" id="5050" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
	</body>
</html>
