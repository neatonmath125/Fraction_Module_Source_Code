
<html>
		<canvas id="field"></canvas>
	<body onload="master()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div style="margin-left:125px; margin-top: 5px;" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:white; margin-top: -200px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:white; margin-left: 155px; margin-top: 225px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p style="margin-top:100; margin-left: 50px;">
		<div style="margin-left:350px;" class = "wrapper">
				<div style="background-color: rgb(243, 142, 102)" style="margin-left:250px;" id = "question_one" class="fraction" top="5" bottom="8"></div><div style="color:white" id = "mult" class = "mult11">=</div><div style="padding-right:20px; background-color: rgb(243, 142, 102)" id = "answer_one2"  class="fraction5" top =11 bottom="8" left = "11"></div><div style="margin-right:10px; background-color: rgb(243, 142, 102)" id = "answer_one"  class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="myInput1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -110px; margin-top: -25px; width: 45px;" /><input class = "fraction1" id="myInput2" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 0px; margin-top: -85px; width: 45px;" /></p>
				<div style="background-color: rgb(243, 205, 102); width: 150px; margin-bottom: 10px; margin-left:-20px; display: inline-block;" onclick="checker()" id = "correct_two" class="points_scored">Enter</div><div style="background-color: rgb(243, 205, 102); width: 150px; margin-bottom: 10px; margin-left:50px; display: inline-block;" onclick="helper()" id = "correct_two22" class="points_scored"> Help</div>
	</div>
	</body>
</html>
