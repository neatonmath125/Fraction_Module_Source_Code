

<html>
		<script async src='./JavaScript/background2.js'></script>
		<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<body onload="master_chooser()">
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
								<div id="light" class="shining-lights-container">
									<div id="light1" class="shining-light-left"></div>
									<div id="light2" class="shining-light-right"></div>
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
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div style="margin-left:125px; margin-top: 35px;" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:white; margin-top: -150px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:white; margin-left: 155px; margin-top: 225px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p>
		<div class = "wrapper">
		<div style="margin-left: -50px; margin-top: 50px; padding: 10px; border-radius: 5px; display: inline-block;"><img id = "picture1" style="padding: 10px; height:200px; margin-right:-50px; margin-top: 50px; background-color: white" src="Set1/2_23_33.v1.cropped.png" alt=""></div><div id = "correct_one" style="width:50px; padding-left: 22px; background-color: rgb(141, 139, 139); margin-top: -230px;" class="fraction11" top =11 bottom="8" left = "11"></div><input class = "fraction1" id="myInput2" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -69px; margin-top: -290px; width: 45px;" /><input class = "fraction1" id="myInput3" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -45px; margin-top: -170px; width: 45px;" /></p>
	</div>
	<div id = "checker" class="checker1" style="margin-left:500px; margin-top:20px; padding:10px; font-size:45px; background-color:rgb(141, 139, 139); width:100px; border-radius: 5px;" onclick="checker()">Enter</div>
</body>
</html>
