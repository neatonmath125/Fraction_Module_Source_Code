



<html>
	<body onload="loader()">
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
			<link rel="stylesheet" href="./styles/styles.css">
			<script async src='./Javascript/main.js'></script>
			<script async src='./Javascript/workings.js'></script>
			<div style = "position: absolute; z-index:-1;" width = "2000" height = "1000" id="jsi-firefly-container" class="container"></div>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	
	<div id = "first_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: rgb(118, 151, 223); vertical-align: auto;  ">
			<h1 id = "question" >Question 0/10</h1>
			<h1>Divide, then submit the reduced answer.</h1>
			<div id = "frac1" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
			<div id = "mult1" class = "mult11_2">÷</div>
			<div id = "frac2" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
			<div id = "mult2" class = "mult11_2">=</div>
			<div style="background-color: rgb(139, 204, 131)" id = "frac3" class="fraction_2" top="5" bottom="8"></div>
			<input class = "fraction1" id="input2" type="text" value="" size="5" style="position: absolute; opacity:1; z-index: 1000000; font-size:1.5em; padding: 5px; margin-left: 109px; margin-top: 59px; width: 55px;" />
                        <input class = "fraction1" id="input1" type="text" value="" size="5" style=" position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: 109px; margin-top: 118px; z-index: 100000000; width: 55px;" />
			<div id = "mult1" class = "mult11_2" style="margin-left:25px;" >x</div>
			<div id = "frac4" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
			<div id = "mult2" class = "mult11_2">=</div>
			<div style="background-color: rgb(139, 204, 131)" id = "5" class="fraction_2" top="5" bottom="8"></div>
			<input class = "fraction1" id="input3" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -82px; margin-top: -85px; z-index: 100000000; width: 55px;" />
			<input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; z-index: 1000000; font-size:1.5em; padding: 5px; margin-left: -59px; margin-top: 35px; width: 55px;" />
			<dev id="checker1" onclick="checker()" style="color: black; margin-left: 50px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 204, 131)">Enter</dev></p>
</div>        
      </body>
</html>
