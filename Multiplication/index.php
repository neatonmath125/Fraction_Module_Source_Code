

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>

<html>
	<body onload="opacity_setter()">
			<div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/background.js'></script>
	<div class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div class="wrapper_index">
	<h1 id = "total_points2" style="color:black; align-content: center; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div id = "fractions1" class = "points_total" style="color:white; font-size: 65px; text-align: left; padding-left: 70px; background: -webkit-linear-gradient(rgb(5, 5, 5), #164581); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: -25px;">Multiplying Fractions</div><div style="color:transparent" class="container"><span style="color:transparent" id = "fractions2" class="text1"></span></div><div style = "margin-top: -80px; margin-left: 805px; font-weight: normal; text-align: center; font-size: 30px;" class="directions" onclick="instructions()">Progress</div></h1>
	<br>
	<div style="margin-left:120px;" id="MC1" class="text2">Visual Multiplying</div><div style="margin-left:165px;" id="FILL1" class="text2">How Big?</div><div style="margin-left:155px;" id="FILL2" class="text2">Practice Makes Perfect A</div>
	<p style="text-align: center; align-content: center; font-size: 25px;"><img id = "5085" onclick="go_index_one()" onmouseover="on_one()" onmouseout="off_one()"  class="image" src = "Gifs/One.gif" alt="asteroids"><img id = "5086" onclick="go_index_two()" onmouseover="on_two()" onmouseout="off_two()" class="image" src = "Gifs/Two.gif" alt="asteroids"><img id = "5088" onclick="go_index_three()" onmouseover="on_three()" onmouseout="off_three()" class="image" src = "Gifs/Three.gif" alt="asteroids"></p>
	<br>
	<br>
	<br>
	<div style="margin-left:80px;" id="A11" class="text2">Practice Makes Perfect B</div><div style="margin-left:45px;" id="A1" class="text2">Reduce First Then Multiply</div><div style="margin-left:80px;" id="A2" class="text2">Mixed Multiplying</div>
	<p style="text-align: center; align-content: center; font-size: 25px;"><img id = "5089" onclick="go_index_four()" onmouseover="on_four()" onmouseout="off_four()" class="image" src = "Gifs/Four.gif" alt="asteroids"><img id = "5090" onclick="go_index_five()" onmouseover="on_five()" onmouseout="off_five()" class="image" src = "Gifs/Five.gif" alt="asteroids"><img id = "5093" onclick="go_index_seven()" onmouseover="on_seven()" onmouseout="off_seven()" class="image" src = "Gifs/Seven.gif" alt="asteroids"></p>
	</div>
        <div id="pretest" style = "width:350px; margin-left:405px; height:65px; color: black; font-size: 50px;" class="difficulty" onclick="pretest()">Practice Test</div>
	<br>
	<br>
	<br>
        <p style="margin-left:395px; font-size:8pt;">Source code for animations provided at https://github.com/neatonmath125/Source_Code</p>

	</body>
</html>
