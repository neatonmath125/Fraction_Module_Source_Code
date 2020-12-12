

<html>
	<body onload="opacity_setter()">
			<div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./trial1.php'></script>
	<script async src='./JavaScript/background.js'></script>
        <div class = "logo-photo"><img style = "width:150px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div class="wrapper_index">
	<h1 id = "total_points2" style="color:black; align-content: center; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div id = "fractions1" class = "points_total" style="color:white; font-size: 65px; text-align: left; padding-left: 70px; background: -webkit-linear-gradient(rgb(5, 5, 5), #164581); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: -25px;">Equivalent Fractions</div><div style="color:transparent" class="container"><span style="color:transparent" id = "fractions2" class="text1"></span></div><div style = "margin-top: -80px; margin-left: 705px; font-weight: normal; text-align: center; font-size: 30px;" class="directions" onclick="instructions()">Progress</div><div style = "margin-top: -93px; margin-left: 875px; font-weight: normal; text-align: center; font-size: 30px;" class="directions" onclick="go_tutorial()">Tutorial</div></h1>
	<div style="margin-left:140px;" id="viz1" class="text2">Viz Fractions 1</div><div style="margin-left:155px;" id="viz2" class="text2">Viz Fractions 2</div><div style="margin-left:145px;" id="fireworks" class="text2">Fraction Flash Cards</div>
	<p style="text-align: center; align-content: center; font-size: 25px;"><img id = "5000" onclick="viz_one()" onmouseover="on_one()" onmouseout="off_one()"  class="image" src = "Gifs/Asteroid_chosen.gif" alt="asteroids"><img id = "5007" onclick="viz_two()" onmouseover="on_two()" onmouseout="off_two()" class="image" src = "Gifs/Space_Ship_chosen.gif" alt="asteroids"><img id = "5010" onclick="fireworks()" onmouseover="on_three()" onmouseout="off_three()" class="image" src = "Gifs/firework.gif" alt="Gifs/fireworkspart2.gif"></p>
	<br>
        <br>
	<div style="margin-left:130px;" id="corral" class="text2">Fraction Corral</div><div style="margin-left:160px;" id="fill1" class="text2">Equality for All 1</div><div style="margin-left:150px;" id="fill2" class="text2">Equality for All 2</div>
	<p style="text-align: center; align-content: center; font-size: 25px;"><img id = "5016" onclick="corral()" onmouseover="on_four()" onmouseout="off_four()" class="image" src = "Gifs/Corral_Chosen.gif" alt="asteroids"><img id = "5022" onclick="fill_one()" onmouseover="on_five()" onmouseout="off_five()" class="image" src = "Gifs/Birds_chosen.gif" alt="asteroids"><img id = "5028" onclick="fill_two()" onmouseover="on_six()" onmouseout="off_six()" class="image" src = "Gifs/Boat_chosen.gif" alt="asteroids"></p>
	</div>
	<br>
	<br>
        <p style="margin-left:395px; font-size:8pt;">Source code for animations provided at https://github.com/neatonmath125/Source_Code</p>
	</body>
</html>
