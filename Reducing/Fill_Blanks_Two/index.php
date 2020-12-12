

<script type="text/javascript">

var master_id=<?php echo $workoutID; ?>;


</script>

<html>
	<body onload="opacity_setter()">
		<div style="z-index:250" id="fog"></div>
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
	<h1 id = "total_points2" style="color:black; font-size: 50px; margin-top: -120px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:black; font-size: 45px; text-align: left; padding-left: 75px; margin-top: 75px;">Equality for All 2</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; margin-top: -30px; font-size: 25px;"><div id = "5028" style = "background-color: rgb(95, 159, 241)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: rgb(137, 206, 137)" id = "5029" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style = "background-color: rgb(194, 233, 136)" id = "5030" class="difficulty" onclick="easy_average()">Level:<br>&#9733&#9733&#9733</div><br><div style = "background-color: rgb(243, 243, 142)" id = "5031" class="difficulty" onclick="average()">Level:<br>&#9733&#9733&#9733<br>&#9733</div><div style = "background-color: rgb(241, 191, 97)" id = "5032" class="difficulty" onclick="hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733</div><div style = "background-color: rgb(238, 113, 113)" id = "5033" class="difficulty" onclick="very_hard()">Level:<br>&#9733&#9733&#9733<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
