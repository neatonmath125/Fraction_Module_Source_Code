
<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="lets_start()">
	<div>
	<canvas id="bgCanvas">
					Your browser does not support canvas.				
	</canvas>
	<link rel="stylesheet" href="./styles/styles.css">
	<link rel="stylesheet" href="./new.php">
	<script async src='./Javascript/main.js'></script>
	<script async src='./Javascript/workings.js'></script>
        <div class = "logo-photo"><img style = "width:150px; margin-top:10px; margin-left:10px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -50px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Fraction Corral</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(103, 195, 207)" class="directions" onclick="instructions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5016" style = "background-color: blue; color: black;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: green; color: black;" id="5017" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style = "background-color: greenyellow; color: black;" id="5018" class="difficulty" onclick="easy_average()">Level:<br>&#9733&#9733&#9733</div><br><div style = "background-color: yellow; color: black;" id="5019" class="difficulty" onclick="average()">Level:<br>&#9733&#9733&#9733<br>&#9733</div><div style = "background-color: orange; color: black;" id="5020" class="difficulty" onclick="hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733</div><div style = "background-color: red; color: black;" id="5021" class="difficulty" onclick="very_hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
