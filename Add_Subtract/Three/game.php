

<html>
	<body style="background-color:rgb(7, 7, 7)" onload="master()">
		<canvas style="position: absolute; z-index:-100000;" id="cvs" width="1000" height="800"></canvas>		
	<link rel="stylesheet" href="./styles/styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="margin-top:0px; margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div style="margin-left:125px; margin-top: 5px; color: white" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:rgb(255, 253, 253); margin-top: -150px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:rgb(255, 255, 255); margin-left: 155px; margin-top: 210px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<div style=" margin-left: 455px; margin-top:50px;" id = "fraction1" class="fraction" top="5" bottom="8"></div>
	<p style="margin-bottom:50px; margin-left: 50px;"><dev id = "writer1" style="font-size:30px; border-radius:5px; padding:7px; padding-top: 12px; padding-bottom: 7px; background-color:white; margin-bottom: 200px;"> This Fraction is Between the Two Consecutive Integers</dev><input id="input1" style="font-size: 35px;height:55px; border-radius:5px; width:90px;"><dev style="border-radius:5px; font-size:30px; margin-top: 10px; padding:7px; padding-top: 12px; padding-bottom: 7px; background-color:white;" id="writer2"> and </dev><input id="input2" style=" border-radius:5px;font-size: 35px;height:55px;  width:90px;"></p>
</div> 
<p><dev id="checker" onclick="checker()" style="padding:10px; border-radius:5px; background-color:white; font-size:45px; margin-left: 450px; margin-bottom:-500px; z-index: 1000000;">Enter</dev></p>  

</body>
</html>
