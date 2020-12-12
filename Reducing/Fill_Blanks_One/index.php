

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="opacity_setter()">
			<canvas style="margin-bottom:500px;" id="canv"></canvas>
			<div style="margin-bottom:500px;" class="c1 one"></div>
			<div style="margin-bottom:500px;" class="c1 two"></div>
			<div style="margin-bottom:500px;" class="c1 three"></div>
			<div style="margin-bottom:500px;" class="c1 four"></div>
			<div style="margin-bottom:500px;" class="c2 one"></div>
			<div style="margin-bottom:200px;" class="c2 two"></div>
			<div style="margin-bottom:500px;" class="c2 three"></div>
			<div style="margin-bottom:500px;" class="c2 four"></div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
        <div class = "logo-photo"><img style = "width:150px; margin-top:0px; margin-left:0px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:black; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; margin-top:-40px;"><div class = "points_total" style="color:black; font-size: 45px; text-align: left; padding-left: 75px; margin-top: 75px;">Equality for All 1</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5022" style = "background-color: rgb(95, 159, 241)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: rgb(137, 206, 137)" id="5023" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style = "background-color: rgb(194, 233, 136)" id="5024" class="difficulty" onclick="easy_average()">Level:<br>&#9733&#9733&#9733</div><br><div style = "background-color: rgb(243, 243, 142)" id="5025" class="difficulty" onclick="average()">Level:<br>&#9733&#9733&#9733<br>&#9733</div><div style = "background-color: rgb(241, 191, 97)" id="5026" class="difficulty" onclick="hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733</div><div style = "background-color: rgb(238, 113, 113)" id="5027" class="difficulty" onclick="very_hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
