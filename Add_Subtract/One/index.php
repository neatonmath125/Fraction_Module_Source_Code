

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
		<script async src='./JavaScript/background2.js'></script>
		<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<body onload="opacity_setter()">
		<div style="position:absolute; z-index: -100;">
			<div id="scene">
				<div class="sky">
					<div class="stars layer" data-depth="0.3">
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
					</div>
				</div>
				<div class="container">
					<div class="top layer" data-depth="0.1">
						<div class="light-house">
							<div class="top-triangle">
								<div class="top-triangle-circle-top"></div>
								<div class="top-triangle-circle-middle"></div>
								<div class="top-triangle-circle"></div>
								<div class="glow layer" data-depth="0.01"></div>
								<div class="shining-lights-container">
									<div class="shining-light-left"></div>
									<div class="shining-light-right"></div>
								</div>
								<div class="top-ledge"></div>
								<div class="top-bars">
									<div class="top-bar-1 topbar"></div>
									<div class="top-bar-2 topbar"></div>
									<div class="top-bar-3 topbar"></div>
									<div class="top-bar-4 topbar"></div>
									<div class="top-bar-5 topbar"></div>
									<div class="top-bar-6 topbar"></div>
								</div>
								<div class="top-railings">
									<div class="top-railing-1 railing"></div>
									<div class="top-railing-2 railing"></div>
									<div class="top-railing-3 railing"></div>
									<div class="top-railing-4 railing"></div>
									<div class="top-railing-5 railing"></div>
									<div class="top-railing-6 railing"></div>
								</div>
								<div class="mid-ledge"></div>
								<div class="mid-railings">
									<div class="overlay"></div>
									<div class="mid-railings-rail">
										<div class="mid-rail mid-rail-1"></div>
										<div class="mid-rail mid-rail-2"></div>
										<div class="mid-rail mid-rail-3"></div>
										<div class="mid-rail mid-rail-5"></div>
										<div class="mid-rail mid-rail-6"></div>
									</div>
									<div class="left-mid-railings"></div>
									<div class="right-mid-railings"></div>
								</div>
							</div>
							<div class="panel-container" id="rotate-x">
								<div class="left-mid-roof"></div>
								<div class="left-mid-roof-2"></div>
								<div class="panel"></div>
							</div>
							<div class="light"></div>
							<div class="right-attachment">
								<div class="right-roof"></div>
								<div class="right-building"></div>
							</div>
							<div class="lighthouse-lights">
								<div class="light-right-top light"></div>
								<div class="light-left-middle light"></div>
							</div>
							<div class="lighthouse-bottom-lights">
								<div class="light-right-bottom light"></div>
								<div class="light-left-bottom light"></div>
							</div>
							<div class="back-rocks">
								<div class="back-rock-1"></div>
								<div class="back-rock-2"></div>
								<div class="back-rock-3"></div>
							</div>
							<div class="front-rocks">
								<div class="front-rock-1"></div>
								<div class="satellite"></div>
								<div class="front-rock-2"></div>
								<div class="front-rock-3"></div>
							</div>
							<div class="shooting-stars"></div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div  class="bottom" style="padding-left:500px;padding-right:500px; padding-bottom:20px; background-color: #093d4a ;position: absolute;z-index: -100;">
			</div>
	<div style="margin-left:10px; margin-bottom:0px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: -50px; margin-top: -50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:white; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Pieces and Parts</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
        <p style="text-align: center; align-content: center; font-size: 25px;"><div id="5060" style = "background-color: rgb(115, 115, 212)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id="5061" style = "background-color: rgb(145, 206, 145)" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>
	</body>
</html>
