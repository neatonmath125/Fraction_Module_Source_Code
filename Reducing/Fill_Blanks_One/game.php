

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="master()">
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
	<div id = "clock" class="clock" style = "margin-top:55px;"></div><h1 id = "total_points2" style="color:black; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:black; margin-left: 25px; margin-top: 75px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p><div class = "wrapper">
		<div style="background-color: rgb(106, 177, 106); margin-left: 125px;" id = "correct_two" class="fraction" top="5" bottom="8"></div><div id = "equal" class = "mult">=</div><div style="background-color: rgb(106, 177, 106)" id = "correct_three" class="fraction" top="5" bottom="8"></div></p>
	</div>
	<div class = "wrapper1">
		<p><div  style = "background-color: rgb(167, 161, 161)" id = "choice_one" class="points_scored" onclick="checker('choice_one');"></div><div style = "background-color: rgb(167, 161, 161)" id = "choice_two" class="points_scored" onclick="checker('choice_two')"></div><div style = "background-color: rgb(167, 161, 161)" id = "choice_three" class="points_scored" onclick="checker('choice_three');"></div><div style = "background-color: rgb(167, 161, 161)" id = "choice_four" class="points_scored" onclick="checker('choice_four');"></div><div style = "background-color: rgb(167, 161, 161)" id = "choice_five" class="points_scored" onclick="checker('choice_five');"></div></p>
	</div>
	</body>
        
</html>
