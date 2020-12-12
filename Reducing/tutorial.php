<html>
	<body onload="generator()">
			<div>
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./trial1.php'></script>
	<script async src='./JavaScript/background.js'></script>
	<div class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div class="wrapper_index">
	<h1 id = "total_points2" style="color:black; align-content: center; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div id = "fractions1" class = "points_total" style="color:white; font-size: 65px; text-align: left; padding-left: 70px; background: -webkit-linear-gradient(rgb(5, 5, 5), #164581); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: -25px;">Tutorial Exercise</div> <div style="color:transparent" class="container"><span style="color:transparent" id = "fractions2" class="text1"></span></div><div id = "back_button" style = "margin-top: -80px; margin-left: 585px; font-weight: normal; text-align: center; font-size: 30px; opacity:1;" class="directions" onclick="return_index()">Back</div><div id = "back_button" style = "margin-top: -94px; margin-left: 700px; font-weight: normal; text-align: center; font-size: 30px; opacity:1;" class="directions" onclick="instructions2()">Instructions</div></h1>
    </div>
    <p><div class = "wrapper">
        <div style ="background-color: rgb(106, 177, 106);" id = "first" class="fraction" top =11 bottom="8"></div><div id = "equal1" class = "mult">=</div><div style="background-color: rgb(106, 177, 106)" id = "second" class="fraction" top="5" bottom="8"></div><div id = "equal2" class = "mult">=</div><div style="background-color: rgb(106, 177, 106)" id = "third" class="fraction" top="5" bottom="8"></div></p>
        <br>
        <div class = "fraction1" id = "GCF1">The Greatest Common Factor is: </div><input class = "fraction1" id="myInput1" type="text" value="" size="5" style="font-size:2em; padding: 18px; margin-left: 25px;" /><div id="enter_button" class = "fraction1" style="font-size: 35px; padding:10px; background-color:rgb(106, 177, 106); width: 90px; padding-top:20px; padding-bottom:20px; border-radius: 5px; margin-left:25px; display: inline-block;" onclick="change1()">Enter</div>
        <div class = "fraction1" id = "GCF2" style="opacity:0;">The Reduced Denominator is: </div><input class = "fraction1" id="myInput2" type="text" value="" size="5" style="opacity:0; font-size:2em; padding: 18px; margin-left: 25px;" />
    </body>
</html>