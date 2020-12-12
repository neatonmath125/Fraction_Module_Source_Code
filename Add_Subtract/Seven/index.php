

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
	<body onload="opacity_setter()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="position: absolute; z-index: -10000000"    class="subspace">
		<div class="hosnian-prime"></div>
		</div>
	</div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<br>
	<br>
	<h1 id = "total_points2" style="color:white; font-size: 50px; margin-left:20px; margin-top: -50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Step By Step C</div><div style = "margin-top: -65px; margin-left: 159px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="instructions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; margin-top: -30px; margin-left: 590px; font-size: 25px;"><div id = "5072" style = "background-color: rgb(95, 159, 241); margin-left:-300px; margin-top:80px;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: rgb(125, 201, 169); margin-top: 80px;" id = "5073" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style="background-color: rgb(95, 196, 95); margin-top: 80px;" id = "5074" class="difficulty" onclick="medium()">Level:<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
