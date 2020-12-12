

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
		<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<body onload="opacity_setter()">
			<div style="position:absolute; background:transparent; z-index:-10000;" id="sky">
					<s></s>
					<div class="fly">
					  <div class="eye"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="wing"></div>
					  <div class="light"></div>
					</div>
				  </div>
		<div style="position:absolute; z-index:-10000;" class="stars small"></div>    	
		<div style="position:absolute; z-index:-10000;" class="stars medium"></div>
    	<div style="position:absolute; z-index:-10000;" class="stars large"></div>
	<div style="margin-left:10px; margin-bottom:0px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: -50px; margin-top: -50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Reciprocal Basics</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; font-size: 25px;"><div id="5100" style = "background-color: rgb(115, 115, 212)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id="5101" style = "background-color: rgb(115, 184, 212)" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
	</body>
</html>
