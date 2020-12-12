

<html>
	<body onload="starter()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="position: absolute; z-index: -10000000"    class="subspace">
		<div class="hosnian-prime"></div>
		</div>
	</div>
	<div style="margin-left:10px; margin-top: -140px; position: absolute;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>

	<div id = "first_screen" style="width: fit-content; margin-top:100px; margin-left: 200px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none ">
		<p><div id = "frac1" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
                <div id = "mult1" class = "mult11_2">+</div><div id = "frac2" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
                <div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(139, 190, 206)" id = "frac2.5" class="fraction_2" top="5" bottom="8"></div>
                <input class = "fraction1" id="input2" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 557px; margin-top: 195px; width: 60px; height: 45px;" />
		<input class = "fraction1" id="input1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 562px; margin-top: 255px; z-index: 10000; width: 60px; height: 45px;" />
                <dev id="checker1" onclick="checker1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 190, 206)">Enter</dev></p>
		<div id="help1" onclick="helper1()" style="color: black;  width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 260px; margin-top: 50px;">Help!</div>		
  </div>
  
  <div id = "second_screen" style="width: fit-content; height: fit-content; margin-top:50px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none; ">
	 <h1 id = "text1" >Click "Go" to get multiples of the question fractions, then select the fractions with the lowest common denominator.</h1>
	 <br>
	 <br>
	 <br>
	 <br>
	 <br>
	 <div id="checker2" onclick="shower()" style="color: black; margin-top: -20px; margin-left: 200px; padding:10px;font-size:45px; margin-top: -55px; width: 100px; border-radius: 5px; background-color: rgb(139, 190, 206); display: inline-block">Go</div>	 <div id="checker2" onclick="checker2()" style="color: black; display: inline-block; margin-top: -20px; margin-left: 200px; padding:10px;font-size:45px; margin-top: -55px; width: 150px; border-radius: 5px; background-color: rgb(230, 205, 95)">Check</div>
	 <br>
	 <div id = "frac3" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult3" class = "mult11_2">=</div><div id = "shower1" onclick="chooser1('shower1',1)" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div onclick="chooser1('shower3',2)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower3" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower5',3)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower5" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower7',4)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower7" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower9',5)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower9" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower11',6)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower11" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower13',7)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower13" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser1('shower15',8)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower15" class="fraction_2" top="5" bottom="8"></div>
	 <br>
	 <div id = "frac4" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult3" class = "mult11_2">=</div><div id = "shower2" onclick="chooser2('shower2',1)" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div onclick="chooser2('shower4',2)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower4" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower6',3)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower6" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower8',4)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower8" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower10',5)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower10" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower12',6)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower12" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower14',7)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower14" class="fraction_2" top="5" bottom="8"></div><div onclick="chooser2('shower16',8)" style="background-color: rgb(139, 190, 206); margin-left: 10px;" id = "shower16" class="fraction_2" top="5" bottom="8"></div>
	</div>
  
	<div id = "third_screen" style="width: fit-content; margin-top:100px; margin-left: 185px; margin-top: 150px; display: inline-block; padding:55px; padding-top: 25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none; ">
		<div id = "frac5" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult7" class = "mult11_2">+</div><div id = "frac6" style="background-color: rgb(139, 190, 206)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(139, 190, 206)" id = "frac6" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input3" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 572px; margin-top: 255px; z-index: 10000; width: 60px; height: 45px;" /><input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 570px; margin-top: 195px; width: 60px; height: 45px;" /><dev id="checker1" onclick="checker3()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 190, 206)">Enter</dev></p>
  </div>

	</body>
</html>
