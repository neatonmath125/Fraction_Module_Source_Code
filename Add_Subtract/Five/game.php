

<html>
	<body onload="loader()">
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
      <link rel="stylesheet" href="./styles/styles.css">
      <script async src='./Javascript/main.js'></script>
      <script async src='./Javascript/workings.js'></script>
<figure style="position:absolute;z-index:-1000;" class="mountain k2"></figure>
<figure style="position:absolute;z-index:-1000;" class="mountain everest"></figure>
<figure style="position:absolute;z-index:-1000;" class="mountain blanc"></figure>
<div style="position:absolute;z-index:-1000;" class="bottom"></div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
   
<div id = "first_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none ">
      <div id = "frac1" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">+</div><div id = "frac2" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(139, 204, 131)" id = "frac2.5" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -80px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input2" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><dev id="checker1" onclick="checker1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 204, 131)">Enter</dev></p>
      <div id="help1" onclick="helper1()" style="color: black;  width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 260px; margin-top: 50px;">Help!</div>		
</div>

<div id = "second_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none">
   <h1 id = "text1" >Enter the Lowest Common Denominator between __ and __.</h1>
   <br>
   <h1>Anwer:</h1><input class = "fraction1" id="input3" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 115px; margin-top: -39px; width: 55px;">
   <div id="checker2" onclick="checker2()" style="color: black; margin-top: -20px; margin-left: 200px; padding:10px;font-size:45px; margin-top: -55px; width: 100px; border-radius: 5px; background-color: rgb(139, 204, 131)">Enter</div>
</div>

<div id = "third_screen" style="width: fit-content; margin-top:20px; margin-left: 60px; margin-top: 50px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none ">
   <h1 id ="text2">Using the common denominator __ to make the two fractions equivalent</h1>
   <div id = "frac3" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult3" class = "mult11_2">x</div><div id = "frac4" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult4" class = "mult11_2">=</div><div style="background-color: rgb(139, 204, 131)" id = "frac5" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -277px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input5" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><input class = "fraction1" id="input6" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 140px; margin-top: -80px; width: 55px;" /><dev id="checker1" onclick="checker3()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 204, 131)">Enter</dev></p>
   <div id = "frac6" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult5" class = "mult11_2">x</div><div id = "frac7" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult6" class = "mult11_2">=</div><div style="background-color: rgb(139, 204, 131)" id = "frac8" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input7" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -277px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input8" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /> <input class = "fraction1" id="input9" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 137px; margin-top: -80px; width: 55px;" /><div id="help1" onclick="helper3_2()" style="color: black;  width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 560px; margin-top: -120px;">Help!</div></p>
<br>
<br>
<br>
</div>

<div id = "fourth_screen" style="width: fit-content; margin-top:20px; margin-left: 60px; margin-top: 50px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; width: 950px; display: none; ">
   <h1>Now that the two fractions have the same denominator just add them up!</h1>
	<div id = "frac9" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult7" class = "mult11_2">+</div><div id = "frac10" style="background-color: rgb(139, 204, 131)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult8" class = "mult11_2">=</div><div style="background-color: rgb(139, 204, 131); width: 100px;" id = "frac11" class="fraction_2" top="4  +  4" bottom="8"></div><div id = "equal" class = "mult11_2">=</div><div style="background-color: rgb(139, 204, 131)" id = "frac12" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1_2" id="input10" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -345px; z-index: 10000000; margin-top: -85px; width: 55px;" /><input class = "fraction1" id="input11" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 29px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input12" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -94px; margin-top: 30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input13" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: 165px; margin-top: -85px; width: 55px;"/><input class = "fraction1" id="input14" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;"/><dev id="checker2" onclick="checker4()" style="margin-left: 70px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(139, 204, 131); color: black;">Enter</dev></p>
</div>

      </body>
</html>
