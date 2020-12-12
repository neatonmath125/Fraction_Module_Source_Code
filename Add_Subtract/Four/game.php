

<html>
	<body onload="loader1()">
      <canvas style="position:absolute; z-index:-100;" id="canvas"></canvas>

		<div class="mountain-one">
		  <div class="mountain-top1">
			 <div class="mountain-cap1"></div>
		  </div>
		  
		 </div>
		<div class="mountain-two">
		  <div class="mountain-top2">
			<div class="mountain-cap2"></div>
		   </div>
		  </div>
		
		<div class="mountain-three">
		  <div class="mountain-top3">
			<div class="mountain-cap3"></div>
		  </div>
      </div>
      <link rel="stylesheet" href="./styles/styles.css">
   <script  src='./Javascript/main.js'></script>
    <script  src='./Javascript/workings.js'></script>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
		
		<div id = "first_screen" style="margin-top:100px; margin-left: 250px; vertical-align: auto; display:none; ">
				<div id = "frac1" style="background-color: rgb(204, 199, 198)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">+</div><div id = "frac2" style="background-color: rgb(204, 199, 198)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(204, 199, 198)" id = "frac3" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -80px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input2" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><dev id="checker1" onclick="checker1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</dev></p>
				<div id="help1" onclick="helper1()" style="color: black;  width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 260px; margin-top: 50px;">Help!</div>		
	</div>
	
	<div id = "second_screen" style=" display:none; margin-left: 210px; margin-top: 100px;">
	<div id = "frac4" style="background-color: rgb(204, 199, 198)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult523" class = "mult11_2">+</div><div id = "frac5" style="background-color: rgb(204, 199, 198)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult" class = "mult11_2">=</div><div style="background-color: rgb(204, 199, 198); width: 100px;" id = "frac6" class="fraction_2" top="4  +  4" bottom="8"></div><div id = "equal" class = "mult11_2">=</div><div style="background-color: rgb(204, 199, 198)" id = "frac7" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1_2" id="input3" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -345px; z-index: 10000000; margin-top: -85px; width: 55px;" /><input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 32px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input5" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -92px; margin-top: 30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input6" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 160px; margin-top: -85px; width: 55px;"/><input class = "fraction1" id="input7" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;"/><dev id="checker2" onclick="checker2()" style="margin-left: 70px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(204, 199, 198); color: black;">Enter</dev></p>
	<div id="help2" onclick="helper2()" style=" color:black; width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 300px; margin-top: 50px;">Help!</div>		
</div>

<div id = "third_screen" style=" margin-left: 350px; margin-top: 100px; display: none;">
<div style="background-color: rgb(204, 199, 198); width: 100px;" id = "frac8" class="fraction_2" top="4    /   4" bottom="4    /   4"></div><div id = "equal" class = "mult11_2">=</div><div style="background-color: rgb(204, 199, 198)" id = "frac9" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1_2" id="input8" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -258px; z-index: 10000000; margin-top: -85px; width: 55px;" /><input class = "fraction1" id="input9" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -56px; margin-top: 30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input10" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 125px; margin-top: -85px; width: 55px;"/><input class = "fraction1" id="input11" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;"/><dev id="checker3" onclick="checker3()" style="margin-left: 70px; padding:10px;font-size:45px; border-radius: 5px; color: black; background-color: rgb(204, 199, 198)">Enter</dev></p>
	<div id="help3" onclick="helper3()" style="color:black; width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 160px; margin-top: 50px;">Help!</div>		
</div>


      </body>
</html>
