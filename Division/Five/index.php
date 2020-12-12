

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
    <body onload="opacity_setter()">
            	<link rel="stylesheet" href="./styles/styles.css">
    <script async src='./Javascript/workings.js'></script>
    <script async src='./Javascript/asteroids.js'></script>
    <script async src='./Javascript/workings.js'></script>
    <canvas style="position:absolute; z-index:-100" id="bgCanvas"></canvas>
<canvas style="position:absolute; z-index:-100" id="terrainCanvas"></canvas>
<div style="position:absolute; z-index:-100" class="landscape">
  <div class="landscapeItem mountains background"></div>
  <div class="landscapeItem mountains midground"></div>
  <div class="landscapeItem mountains foreground"></div>
  <div class="landscapeItem trees background"></div>
  <div class="landscapeItem trees midground"></div>
  <div class="landscapeItem trees foreground"></div>
</div>
      <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -50px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Divide to Multiply Then Reduce</div><div style = "margin-top: -65px; margin-left: 950px; font-weight: normal; font-size: 30px; background-color: rgb(174, 124, 221)" class="directions" onclick="instructions()">Instructions</div></h1>
    <p style="text-align: center; align-content: center; font-size: 25px;"><div id = "5109" style = "background-color: rgb(97, 148, 190); color: black;" class="difficulty" onclick="shape1()">Exercise:<br>&#9733</div><div id = "5110" style="background-color: rgb(66, 126, 66); color: black;" id = "easy" class="difficulty" onclick="shape2()">Exercise:<br>&#9733&#9733</div></p>
    <div style="z-index: -10;" class="clouds">    
    </div>
    </div>
    </div>
    </body>
</html>
