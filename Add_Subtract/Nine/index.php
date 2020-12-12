

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html style="overflow:hidden;">
    <body style="margin:0;  background-image: linear-gradient(#00708b, #ffe87e);" onload="opacity_setter()">
            	<link rel="stylesheet" href="./styles/styles.css">
    <script async src='./Javascript/workings.js'></script>
    <script async src='./Javascript/asteroids.js'></script>
    <div style="z-index: -1000; background-image: linear-gradient(#00708b, #ffe87e);" class="world">
        <div style="z-index:-100000" class="sun"></div>
        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>
        <div class="star star-6"></div>
        <div class="star star-7"></div>
        <div class="star star-8"></div>
        <div class="star star-9"></div>
        <div class="star star-10"></div>
        <div class="star-falling"></div>
        <div style = "z-index:-1000; position: absolute;"class="mountains">
          <div class="mountain-line mountain-line-front">
            <div class="mountain"></div>
          </div>
          <div class="mountain-line mountain-line-mid">
            <div class="mountain mountain-1"></div>
            <div class="mountain mountain-2"></div>
          </div>
          <div class="mountain-line mountain-line-back">
            <div class="mountain mountain-1"></div>
            <div class="mountain mountain-2"></div>
            <div class="mountain mountain-3"></div>
          </div>
        </div>
    </div>
      <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -50px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Mixed Results B</div><div style = "margin-top: -65px; margin-left: 600px; font-weight: normal; font-size: 30px; background-color: rgb(174, 124, 221)" class="directions" onclick="instructions()">Instructions</div></h1>
    <p style="z-index:100000;text-align: center; align-content: center; font-size: 25px;"><div id = "5078" style = "background-color: rgb(97, 148, 190); z-index:1000" class="difficulty" onclick="very_easy()">Exercise:<br>&#9733</div><div id = "5079" style="background-color: rgb(66, 126, 66); z-index:1000" id = "easy" class="difficulty" onclick="easy()">Exercise:<br>&#9733&#9733</div><div id = "5080" style="background-color: rgb(66, 87, 126); z-index:1000" id = "easy" class="difficulty" onclick="medium()">Exercise:<br>&#9733&#9733&#9733</div></p>
    <p style="z-index:100000;text-align: center; align-content: center; font-size: 25px;"><div id = "5081" style="background-color: rgb(112, 66, 126); z-index:1000" id = "easy" class="difficulty" onclick="hard()">Exercise:<br>&#9733&#9733&#9733<br>&#9733</div></p>
    <div style="z-index: -10;" class="clouds">    
    </div>
    </div>
    </div>
    </body>
</html>
