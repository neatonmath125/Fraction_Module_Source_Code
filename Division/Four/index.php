

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
    <body onload="opacity_setter()">
      <link rel="stylesheet" href="./styles/styles.css">
  <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
    <script async src='./JavaScript/workings.js'></script>
    <script async src='./JavaScript/asteroids.js'></script>
    <canvas style="position:absolute;z-index:-10000;" id="cvs" width="2000" height="1000"></canvas>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>     
    <h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -10px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Practice Makes Perfect B</div><div style = "margin-top: -65px; margin-left: 799px; font-weight: normal; font-size: 30px; background-color: rgb(170, 116, 221)" class="directions" onclick="instructions()">Instructions</div></h1>
      <p style="text-align: center; align-content: center; font-size: 25px;"><div id = "5107" style = "background-color: rgb(123, 123, 247); color: black" class="difficulty" onclick="very_easy()">Exercise:<br>&#9733</div><div id = "5108" style = "background-color: rgb(123, 152, 247); color: black" class="difficulty" onclick="easy()">Exercise:<br>&#9733&#9733</div></p>
  </body>
</html>
