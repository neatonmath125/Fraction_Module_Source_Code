

<html>
	<body onload="loader()">		
	<link rel="stylesheet" href="./styles/styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script async src='./Javascript/clock.js'></script>
	<script async src='./Javascript/background.js'></script>
	<div style="position:absolute;" id="sky">
			<div class="cloud"></div>
			<div class="cat"></div>
		  </div>

	<div style="margin-top:0px; margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<div id = "first_screen" style="width: 1000; margin-top:100px; margin-left: 60px; margin-top: 70px; display: inline-block; padding:25px; border-radius: 5px; background-color: rgb(124, 135, 185); vertical-align: auto; ">
			<h1 id = "h1" style="color:white;">Question 0/5</h1>
			<div style="margin-left:100px; padding-right:5px; background-color: rgb(174, 197, 173);" id = "frac1_left"  class="fraction5" top =11 bottom="8" left = "11"></div>
			<div style="background-color: rgb(174, 197, 173);" id = "frac1_right"  class="fraction11" top ="11" bottom="8" left = "11"></div>
			<div id = "mult155" class = "mult11_2">÷</div>
			<div style="margin-left:0px; padding-right:5px; background-color: rgb(174, 197, 173);" id = "frac2_left"  class="fraction5" top =11 bottom="8" left = "11"></div>
			<div style="background-color: rgb(174, 197, 173);" id = "frac2_right"  class="fraction11" top ="11" bottom="8" left = "11"></div>
			<div id = "mult2" class = "mult11_2">=</div>
			<div id = "fr10" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
			<div id = "mult1" class = "mult11_2">÷</div>
			<div id = "fr11" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
			<input class = "fraction1" id="input1" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -285px; margin-top: 60px; z-index: 10000; width: 55px;" />
			<input class = "fraction1" id="input2" type="text" value="" size="5" style="position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: -285px; margin-top: 120px; z-index: 10000; width: 55px;" />
			<input class = "fraction1" id="input3" type="text" value="" size="5" style="position: absolute; opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -85px; margin-top: 60px; width: 55px;" />
			<input class = "fraction1" id="input4" type="text" value="" size="5" style="position: absolute; opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -85px; margin-top: 120px; width: 55px;" />
			<div id="help1" onclick="check11()" style="color: black;  width: fit-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 260px; margin-top: 50px;">Check</div>		
		</div>
		
		<div id = "second_screen" style="width: 1100px; position: absolute; margin-top:70px; margin-left: 60px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(124, 135, 185); vertical-align: auto;  ">
				<h1 id="question5">Question 0/5</h1>
				<h1></h1>
				<div id = "fr1" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
				<div style="margin-left:17px; margin-right:17px;" id = "mult1" class = "mult11_2">÷</div>
				<div id = "fr2" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
				<div id = "mult1" class = "mult11_2">=</div>
				<div id = "fr3" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
				<div id = "mult1" class = "mult11_2">x</div>
				<div id = "fr4" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
				<div id = "mult1" class = "mult11_2">=</div>
				<div id = "fr5" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
				<dev id="checkme" onclick="check1()" style="position:absolute; color: black; margin-left: 50px; margin-top:30px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Check</dev>
				<dev id="replaceme" onclick="submit()" style=" position:absolute; color: black; margin-left: 50px; margin-top:120px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Submit</dev></p>
				<div id = "s1" class="two"  style = "margin-left:410px; margin-top: -142px;width:60px; position: absolute;"></div>
			  <div id = "s2" class="two"  style = "margin-left:410px; margin-top: -90px; width:60px; position: absolute; "></div>
			  <div id = "s3" class="two"  style = "margin-left:605px; margin-top: -142px; width:60px; position: absolute; "></div>
			  <div id = "s4" class="two"  style = "margin-left:605px; margin-top: -90px; width:60px; position: absolute; "></div>
			  <input id="i1" style = "margin-left:472px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			  <input id="i2" style = "margin-left:472px; margin-top: -90px;width:60px; height:40px; position: absolute;font-size: 25px; "></input>
			  <input id="i3" style = "margin-left:665px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			  <input id="i4" style = "margin-left:665px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			
			  <input id="i5" style = "margin-left:610px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			  <input id="i6" style = "margin-left:610px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			
			  <input id="i7" style = "margin-left:812px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			  <input id="i8" style = "margin-left:812px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
			  <div id = "sq1" onclick="work1()" style = "z-index:1000; margin-left:422px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
			  <div id = "sq2" onclick="work2()" style = "z-index:1000; margin-left:422px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
			  <div id = "sq3" onclick="work1()" style = "z-index:1000; margin-left:615px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
			  <div id = "sq4" onclick="work2()" style = "z-index:1000; margin-left:615px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
			  </div> 

</body>
</html>
