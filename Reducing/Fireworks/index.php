
<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="opacity_setter()">
	<div>
	<canvas id="myCanvas">
					Your browser does not support canvas.				
	</canvas>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
        <div class = "logo-photo"><img style = "width:150px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin-top:-45px;"><div class = "points_total" style="color:#ffffff; font-size: 55px; text-align: left; padding-left: 75px; margin-top: 75px;">Fractions Flash Cards</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: blueviolet" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id = "5010" style = "background-color: blue" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id = "5011" style="background-color: green" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div id = "5012" style = "background-color: greenyellow" class="difficulty" onclick="easy_average()">Level:<br>&#9733&#9733&#9733</div><br><div id = "5013" style = "background-color: yellow" class="difficulty" onclick="average()">Level:<br>&#9733&#9733&#9733<br>&#9733</div><div id = "5014" style = "background-color: orange" class="difficulty" onclick="hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733</div><div style = "background-color: red" id = "5015" class="difficulty" onclick="very_hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
