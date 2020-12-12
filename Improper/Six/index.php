

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;

</script>


<html>
    <body onload="opacity_setter()">
            	<link rel="stylesheet" href="./styles/styles.css">
    <script async src='./JavaScript/workings.js'></script>
    <script async src='./JavaScript/asteroids.js'></script>
    <div style="position:absolute; z-index: -1000000;" class="wrap">
      </div>
      </div>
      
      <div class="ocean"></div>
      <div class="ocean-overlay"></div>
      <div class="here-there">
        <div class="traslate">
          <div class="ship">
            <div class="bottom-1">
              <div class="bottom-1-top"></div>
              <div class="bottom-1-top-left"></div>
              <div class="bottom-1-top-right">
                <div class="bottom-1-top-right-window"></div>
              </div>
            </div>
            <div class="ship-body">
              <div class="middle-window"></div>
              <div class="blue-strip-top"></div>
              <div class="blue-strip-bottom"></div>
              <div class="ship-body-top-back">
                <div class="blue-strip-top-half"></div>
              </div>
              <div class="chimney-base">
                <div class="chimney"></div>
                <div class="chimney"></div>
              </div>
            </div>
            <div class="ship-body-top-front">
              <div class="top-antenna"></div>
              <div class="circular-base"></div>
              <div class="circular-base-1"></div>
            </div>
            <div class="ship-body-top-front-mirror"></div>
          </div>
        </div>
        </div>
      </div>
    	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:white; font-size: 50px; font-weight: normal; margin-top: -10px; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:#ffffff; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Pieces and Parts B</div><div style = "margin-top: -65px; margin-left: 659px; font-weight: normal; font-size: 30px; background-color: rgb(170, 116, 221)" class="directions" onclick="instructions()">Instructions</div></h1>
    <p style="text-align: center; align-content: center; font-size: 25px;"><div id = "5051" style = "background-color: rgb(123, 123, 247)" class="difficulty" onclick="very_easy()">Exercise:<br>&#9733</div><div id = "5052" style = "background-color: rgb(99, 168, 99)" class="difficulty" onclick="easy()">Exercise:<br>&#9733&#9733</div></p>
    <div style="z-index: -10;" class="clouds">    
    </div>
    </div>
    </div>
    </body>
</html>
