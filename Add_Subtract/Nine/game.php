

<html style="overflow:hidden;">
    <body style="margin:0; overflow: hidden;  background-image: linear-gradient(#00708b, #ffe87e);" onload="loader()">
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
  
      
      <div id = "first_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: transparent; vertical-align: auto; display: none;  ">
        <div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac1_left" onclick="uiui('choice_one')" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac1_right" onclick="uiui('choice_one')" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult155" class = "mult11_2">x</div><div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac2_left" onclick="uiui('choice_one')" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac2_right" onclick="uiui('choice_one')" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="margin-left:0px; padding-right:25px; background-color: rgb(117, 204, 114);" id = "frac3_left" onclick="uiui('choice_one')" class="fraction5" top ="8" bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac3_right" onclick="uiui('choice_one')" class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="input1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -137px; margin-top: -30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input2" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 3px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input3" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><dev id="checker1" onclick="checker1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</dev></p>
        <div id="help1" onclick="helper1()" style="color: black;  width: min-content; background-color:orange; padding:15px; border-radius:5px; font-size: 50px; margin-left: 260px; margin-top: 50px;">Help!</div>		
    </div>
    
    <div id = "second_screen" style="width: 1060px; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: transparent; vertical-align: auto; display: none;   ">
      <div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac4_left"  class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac4_right"  class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult5522" class = "mult11_2">x</div><div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac5_left" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac5_right"  class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult4" class = "mult11_2">=</div><div style="margin-left:0px; padding-right:25px; background-color: rgb(117, 204, 114);" id = "frac5_left" class="fraction5" top ="8" bottom="8" left = "11"></div><div style="margin-left: 70px; background-color: rgb(117, 204, 114); padding-top:64px; padding-bottom: 59px; padding-left: 20px; padding-right:20px; margin-right:0px; font-size: 35px;" id = "mult5" class = "mult11_2">+</div><div style="margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac555_right" class="fraction11" top ="11 + 11" bottom="8" left = "11"></div><input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -244px; margin-top: -15px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input5" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 37px; margin-top: -80px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input6" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 25px; margin-top: -82px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input7" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -95px; margin-top: 35px; width: 55px; margin-right: 50px;" /><div id = "mult6" class = "mult11_2">=</div><div style="margin-left:0px; padding-right:25px; background-color: rgb(117, 204, 114);" id = "frac7_left"  class="fraction5" top ="8" bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac7_right" class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="input8" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -137px; margin-top: -30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input9" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 3px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input10" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /></p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div id="checker1" onclick="checker2_same()" style="color: black; margin-left: 500px; margin-top: -80px; margin-bottom: 50px; padding:10px;font-size:45px; width: fit-content; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</div>		
    </div>

  <div id = "fourth_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 50px; display: inline-block; padding:25px; border-radius: 5px; background-color: white; vertical-align: auto; display: none;     ">
    <h1>Make the fraction components of the mixed fractions have the same denominator.</h1>
      <div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac61_right" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult6" class = "mult11_2">x</div><div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac7_right" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult6" class = "mult11_2">=</div><div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac81_right" class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="input21" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -270px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input22" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><input class = "fraction1" id="input23" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 140px; margin-top: -85px; z-index: 10000; width: 55px;" /><dev id="checker1" onclick="checker22()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</dev></p>
      <div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac71_right" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult6" class = "mult11_2">x</div><div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac7_right" class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult6" class = "mult11_2">=</div><div style="padding-left:25px; margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac82_right" class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="input24" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -270px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input25" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><input class = "fraction1" id="input26" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 140px; margin-top: -85px; z-index: 10000; width: 55px;" /></p>
</div>

<div id = "fifth_screen" style="width: 1060px; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: transparent; vertical-align: auto; display:none;  ">
  <div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac10_left"  class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac10_right"  class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult101" class = "mult11_2">+</div><div style="margin-left:0px; padding-right:5px; background-color: rgb(117, 204, 114);" id = "frac11_left" class="fraction5" top =11 bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "frac11_right"  class="fraction11" top ="11" bottom="8" left = "11"></div><div id = "mult4" class = "mult11_2">=</div><div style="margin-left:0px; padding-right:25px; background-color: rgb(117, 204, 114);" id = "ff" class="fraction5" top ="8" bottom="8" left = "11"></div><div style="margin-left: 70px; background-color: rgb(117, 204, 114); padding-top:64px; padding-bottom: 59px; padding-left: 20px; padding-right:20px; margin-right:0px; font-size: 35px;" id = "mult5" class = "mult11_2">+</div><div style="margin-left:-3px; background-color: rgb(117, 204, 114)" id = "frac66_right" class="fraction11" top ="11 + 11" bottom="8" left = "11"></div><input class = "fraction1" id="input50" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -244px; margin-top: -15px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input51" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 37px; margin-top: -80px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input52" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 25px; margin-top: -82px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input53" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -95px; margin-top: 35px; width: 55px; margin-right: 50px;" /><div id = "mult6" class = "mult11_2">=</div><div style="margin-left:0px; padding-right:25px; background-color: rgb(117, 204, 114);" id = "frac7_left"  class="fraction5" top ="8" bottom="8" left = "11"></div><div style="background-color: rgb(117, 204, 114)" id = "sdf" class="fraction11" top ="11" bottom="8" left = "11"></div><input class = "fraction1" id="input54" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -137px; margin-top: -30px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input55" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: 3px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input56" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /></p>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div id="checker1" onclick="checker3_different()" style="color: black; margin-left: 500px; margin-top: -80px; margin-bottom: 50px; padding:10px;font-size:45px; width: fit-content; border-radius: 5px; background-color: rgb(204, 199, 198)">Enter</div>		
</div>



    </div>
    </div>
    </div>
    </body>
</html>
