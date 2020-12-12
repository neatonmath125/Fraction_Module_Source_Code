

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="master()">
		<div style="z-index:-250" id="fog"></div>
		<div class="ocean"></div>
		<div id="wholeship">
		<div id="ship-container">
			<div class="ship">
				<div class="smokestack ss1">
					<div class="smoke smoke1"></div>
				</div>
				<div class="smokestack ss2"><div class="smoke smoke2"></div></div>
				<div class="smokestack ss3"><div class="smoke smoke3"></div></div>
				<div class="smokestack ss4"><div class="smoke smoke4"></div></div>
				<div class="deck">
					<div class="compartments-lower">
						<div class="door d1"></div>
						<div class="door d2"></div>
						<div class="door d3"></div>
						<div class="door d4"></div>
						<div class="door d5"></div>
						<div class="door d6"></div>
						<div class="door d7"></div>
						<div class="door d8"></div>
						<div class="door d9"></div>
						<div class="door d10"></div>
						<div class="door d11"></div>
						<div class="door d12"></div>
						<div class="door d13"></div>
					</div>
					<div class="compartments-upper">
						<div class="cph cp1"></div>
						<div class="cph cp2"></div>
						<div class="cph cp3"></div>
						<div class="cph cp4"></div>
						<div class="cph cp5"></div>
						<div class="cph cp6"></div>
						<div class="cph cp7"></div>
						<div class="cph cp8"></div>
						<div class="cph cp9"></div>
						<div class="cph cp10"></div>
						<div class="cph cp11"></div>
						<div class="cph cp12"></div>
					</div>
					<div class="roof"></div>
				</div>
				<div class="hull">
					<div class="hull-top">
						<div class="porthole p1"></div>
						<div class="porthole p2"></div>
						<div class="porthole p3"></div>
						<div class="porthole p4"></div>
						<div class="porthole p5"></div>
						<div class="porthole p6"></div>
						<div class="porthole p7"></div>
						<div class="porthole p8"></div>
						<div class="porthole p9"></div>
						<div class="porthole p10"></div>
						<div class="porthole p11"></div>
						<div class="porthole p12"></div>
						<div class="porthole p13"></div>
						<div class="porthole p14"></div>
					</div>
				</div>
			</div>
		</div>
		</div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
        <div class = "logo-photo"><img style = "width:150px; margin-top:-105px;" class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div id = "clock" class="clock" style = "margin-top:10px;"></div><h1 id = "total_points2" style="color:black; margin-top: -100px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:black; margin-left: 25px; margin-top: 75px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p><div class = "wrapper">
		<div style ="background-color: rgb(106, 177, 106);" id = "correct_one" class="fraction" top =11 bottom="8"></div><div id = "mult" class = "mult">=</div><div style="background-color: rgb(106, 177, 106)" id = "correct_two" class="fraction" top="5" bottom="8"></div><div id = "equal" class = "mult">=</div><div style="background-color: rgb(106, 177, 106)" id = "correct_three" class="fraction" top="5" bottom="8"></div></p>
	</div>
	<div class = "wrapper1">
		<p><div  style = "background-color: rgb(118, 156, 165)" id = "choice_one" class="points_scored" onclick="checker('choice_one');"></div><div style = "background-color: rgb(118, 156, 165)" id = "choice_two" class="points_scored" onclick="checker('choice_two')"></div><div style = "background-color: rgb(118, 156, 165)" id = "choice_three" class="points_scored" onclick="checker('choice_three');"></div><div style = "background-color: rgb(118, 156, 165)" id = "choice_four" class="points_scored" onclick="checker('choice_four');"></div><div style = "background-color: rgb(118, 156, 165)" id = "choice_five" class="points_scored" onclick="checker('choice_five');"></div></p>
	</body>
</html>
