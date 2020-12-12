


<html>
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
		<script async src='./JavaScript/background2.js'></script>
		<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<body class="return-to-base" onload="master_loader()">
			<div style="position:absolute; background:transparent; z-index:-10000;" id="sky">
					<s></s>
					<div id = "fly" style="opacity:0" class="fly">
					  <div class="eye"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="leg"></div>
					  <div class="wing"></div>
					  <div class="light"></div>
					</div>
				  </div>
		<div style="position:absolute; z-index:-10000;" class="stars small"></div>    	
		<div style="position:absolute; z-index:-10000;" class="stars medium"></div>
    	<div style="position:absolute; z-index:-10000;" class="stars large"></div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<br>
	<br>
	<br>
	<br>
	<br>
	<div style="margin-left:125px; margin-top: 65px;" id = "clock" class="clock"></div><h1 id = "total_points2" style="color:black; margin-top: -200px; margin-left: 290px; font-size: 50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points-total" id="total_points" style="color:black; margin-left: 155px; margin-top: 225px;"></div></h1><div id = "points-scored" class="points_scored_blank"></div>
	<p>

		<div id="first_screen" style="border-radius: 5px; height:250px; padding:25px; padding-top: 20px; padding-bottom: 70px; width:1050px; display: none; margin-top:100px; margin-left: 200px; background-color: rgb(52, 52, 107); display: none;">
				<h1 id="question" >Question: 0/10</h1>
			<h1 style="display: inline-block;">The Reciprical of </h1> 
			<div id = "fraction1" style=" display:inline-block; width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107); margin-bottom:-90px;" class="fraction11" top =11 bottom="8"></div>
			<h1 style="display: inline-block;">is </h1>
			<div id = "fraction2" style="width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107);margin-bottom:-90px; display:inline-block" class="fraction11" top =11 bottom="8"></div>
			<h1 style="display: inline-block;">beacuse</h1>
			<div id = "fraction3" style="display:inline-block; width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107);margin-bottom:-90px;" class="fraction11" top =11 bottom="8">
			</div><h1 style="display: inline-block;">X</h1>
			<div id = "fraction4" style="display:inline-block; width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107);margin-bottom:-90px;" class="fraction11" top =11 bottom="8"></div>
			<h1 style="display: inline-block;">=</h1>
			<input class = "fraction1" id="input2" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -520px; margin-top: -8px; z-index: 100000000; width: 55px;" />
                        <input class = "fraction1" id="input1" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -520px; margin-top: 50px; z-index: 100000000; width: 55px;" />
			<input class = "fraction1" id="input4" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -105px; margin-top: -8px; z-index: 100000000; width: 55px;" />
                        <input class = "fraction1" id="input3" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -105px; margin-top: 50px; z-index: 100000000; width: 55px;" />
			<input class = "fraction1" id="input5" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: 20px; margin-top: 15px; z-index: 100000000; width: 55px;" />
			<br>
			<br>
			<br>
			<br>
			<div style="width:150px; padding: 20px; height:45px; margin-left:500px; background-color:royalblue; border-radius: 5px; font-size:35px;" onclick="checker()">Submit</div>
		</div>	

		<div id="second_screen" style="border-radius: 5px; height:250px; padding:25px; padding-top: 20px; padding-bottom: 70px; width:1100px; display: none; margin-top:100px; margin-left: 100px; background-color: rgb(52, 52, 107); ">
			<h1 id="question2" >Question: 0/10</h1>
			<h1 style="display: inline-block;">The Reciprical of </h1>
			<div style="margin-left:0px; padding-left:12px; padding-right:5px; background-color: rgb(52, 52, 107);" id = "frac1_left"  class="fraction5" top =11 bottom="8" left = "11"></div>
			<div style="background-color: rgb(52, 52, 107);" id = "frac1_right"  class="fraction125" top ="11" bottom="8" left = "11"></div>
			<h1 style="display: inline-block;">is </h1>
			<div id = "fraction5" style="width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107);margin-bottom:-90px; display:inline-block" class="fraction11" top =11 bottom="8"></div>
			<h1 style="display: inline-block;">beacuse</h1>
			<div style="margin-left:0px; padding-left:12px; padding-right:5px; background-color: rgb(52, 52, 107);" id = "frac2_left"  class="fraction5" top =11 bottom="8" left = "11"></div>
			<div style="background-color: rgb(52, 52, 107);" id = "frac2_right"  class="fraction125" top ="11" bottom="8" left = "11"></div>
			<h1 style="display: inline-block;">X</h1>
			<div id = "fraction6" style="display:inline-block; width:50px; padding-left: 22px; margin-left: 15px; margin-right:15px; background-color: rgb(52, 52, 107);margin-bottom:-90px;" class="fraction11" top =11 bottom="8"></div>
			<h1 style="display: inline-block;">=</h1>
                        <input class = "fraction1" id="input6" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -530px; margin-top: 15px; z-index: 100000000; width: 65px;" />
			<input class = "fraction1" id="input7" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -530px; margin-top: 75px; z-index: 100000000; width: 65px;" />
			<input class = "fraction1" id="input8" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -115px; margin-top: 15px; z-index: 100000000; width: 65px;" />
                        <input class = "fraction1" id="input9" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -115px; margin-top: 75px; z-index: 100000000; width: 65px;" />
			<input class = "fraction1" id="input10" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: 20px; margin-top: 45px; z-index: 100000000; width: 65px;" />
					<br>
					<div style="width:150px; padding: 20px; height:45px; margin-left:500px; background-color:royalblue; border-radius: 5px; font-size:35px;" onclick="checker2()" >Submit</div>
		
		</div>	
		
</body>
</html>
