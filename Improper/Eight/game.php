

<html>
	<body onload="master()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div class="grass"></div>
	<div class="sun"></div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div style= "margin-top:20px;" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:black; margin-top: -50px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:black; margin-left: 25px; margin-top: 75px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<div style="margin-left:350px; margin-top: -50px;" class = "wrapper1">
			<p><div style="background-color: rgb(80, 146, 67)" style="margin-left:250px;" id = "question" class="fraction" top="5" bottom="8"></div><div style="color:black" id = "mult" class = "mult11">=</div><div style="margin-left:0px; background-color: rgb(80, 146, 67)" id = "correct_one2" onclick="checker('correct_one')" class="fraction5" top =? bottom="8" left = "11"></div><div id = "correct_one" style = "background-color: rgb(80, 146, 67)" onclick="checker('correct_one')" class="fraction11" top ="?" bottom="?" left = "?"></div></p>
		</div>
		<div style="margin-left:150px; margin-top:50px;" class = "wrapper1">
			<p><div style="margin-left:0px; background-color: rgb(117, 204, 114);" id = "choice_one2" onclick="checker('choice_one')" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "choice_one" onclick="checker('choice_one')" class="fraction11" top ="11" bottom="8" left = "11"></div><div style="margin-left:50px; background-color: rgb(117, 204, 114)" id = "choice_two2" onclick="checker('choice_two')" class="fraction5" top =? bottom="?" left = "?"></div><div style="background-color: rgb(117, 204, 114)" id = "choice_two" onclick="checker('choice_two')" class="fraction11" top ="?" bottom="8" left = "11"></div><div style="margin-left:50px; background-color: rgb(117, 204, 114)" id = "choice_three2" onclick="checker('choice_three')" class="fraction5" top =11 bottom="8" left = "11"></div><div id = "choice_three" onclick="checker('choice_three')" style="background-color: rgb(117, 204, 114)" class="fraction11" top ="11" bottom="8" left = "11"></div><div style="margin-left:50px; background-color: rgb(117, 204, 114)" id = "choice_four2" onclick="checker('choice_four')" class="fraction5" top =11 bottom="8" left = "11"></div><div id = "choice_four" onclick="checker('choice_four')" class="fraction11" top ="11" bottom="8" style="background-color: rgb(117, 204, 114)" left = "11"></div><div style="margin-left:50px; background-color: rgb(117, 204, 114)" id = "choice_five2" onclick="checker('choice_five')" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "choice_five" onclick="checker('choice_five')" class="fraction11" top ="11" bottom="8" left = "11"></div></p>
		</div>
	</body>
</html>
