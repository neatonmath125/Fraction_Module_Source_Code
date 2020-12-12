

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>


<html>
    <body onload="opacity_setter()">
      <div style="z-index:-100;" id="container">
        <canvas id="waterfall"></canvas>
      </div>
      <link rel="stylesheet" href="./styles/styles.css">
    <script async src='./JavaScript/workings.js'></script>
    <script async src='./JavaScript/asteroids.js'></script>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -50px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">How Big?</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: blueviolet" class="directions" onclick="instructions()">Instructions</div></h1>
  <p style="text-align: center; align-content: center; font-size: 25px;"><div id="5043" style = "background-color: blue; color: black;" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div id="5044" style = "background-color: green; color: black;" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div></p>     
    </div>
    </div>
    </div>
    </body>
</html>
