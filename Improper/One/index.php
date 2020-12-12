
<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>


<html>
		<canvas id="field"></canvas>
	<body onload="load55()">
	<script src="./JavaScript/three.js"></script>
	<script async src='./JavaScript/background.js'></script>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<div style="margin-left:10px; margin-bottom:0px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: -50px; margin-top: -50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Pieces and Parts A</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5041" style = "background-color: rgb(115, 115, 212)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id="5042" style = "background-color: rgb(145, 206, 145)" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
	</body>
</html>
