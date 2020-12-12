
<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
    <body onload="opacity_setter()">
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
    <script src="./Javascript/three.js"></script>
    <link rel="stylesheet" href="./styles/styles.css">
    <script  src='./Javascript/workings.js'></script>
    <script  src='./Javascript/asteroids.js'></script>
    <div style="position:absolute; z-index:-100;" id="jsi-manta-container" class="container"></div>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
    <br>
    <br>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -50px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">How Big? A</div><div style = "margin-top: -35px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(194, 157, 230)" class="directions" onclick="instructions()">Instructions</div></h1>
  <p style="text-align: center; align-content: center; font-size: 25px;"><div id="5062" style = "background-color: rgb(107, 107, 243); color: black;" class="difficulty" onclick="very_easy()">Level:<br><br>&#9733</div><div id="5063" style = "background-color: rgb(59, 122, 59); color: black;" class="difficulty" onclick="easy()">Level:<br><br>&#9733&#9733</div><div id="5064" style = "background-color: rgb(65, 114, 87); color: black;" class="difficulty" onclick="medium()">Level:<br><br>&#9733&#9733&#9733</div></p>     
    </div>
    </div>
    </div>
    </body>
</html>
