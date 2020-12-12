

<html>
	<body onload="master()">
			<div style="z-index:-10000; position: absolute;" class="ciel stay transparent">
					<div style="z-index:-10000; margin-top:-100px;" class="avion">
							 <div class="helice"></div>
			</div></div>		
	<link rel="stylesheet" href="./styles/styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="margin-top:0px; margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div style="margin-left:125px; margin-top: 5px;" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:white; margin-top: -200px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:white; margin-left: 155px; margin-top: 225px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p style="margin-top:250; z-index:100000">
		<div class = "wrapper" style="z-index:1000">
				<div style="margin-left:0px; background-color: rgb(204, 199, 198)" id = "frac1" class="fraction5" top =11 bottom="8" left = "11"></div><div id = "frac2" style="background-color: rgb(204, 199, 198)"  class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult" class = "mult11">=</div><div style="background-color: rgb(204, 199, 198); width: 150px;" id = "frac3" class="fraction" top="4 x 5 + 4" bottom="8"></div><div id = "equal" class = "mult11">=</div><div style="background-color: rgb(204, 199, 198)" id = "frac4" class="fraction" top="5" bottom="8"></div><input class = "fraction1" id="myInput1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -415px; z-index: 10000000; margin-top: -85px; width: 45px;" /><input class = "fraction1" id="myInput2" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 75px; margin-top: -85px; z-index: 10000; width: 45px;" /><input class = "fraction1" id="myInput3" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 175px; margin-top: -85px; width: 45px;" /><dev id="checker1" onclick="checker()" style="margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</dev></p>
	</div>
</body>
</html>
