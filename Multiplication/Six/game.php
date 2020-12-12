

<html>
        <body onload=master_loader()>
                <link rel="stylesheet" href="./styles/styles.css">
    <script  src='./Javascript/workings.js'></script>
    <script async src='./Javascript/asteroids.js'></script>
    <script async src='./Javascript/workings.js'></script>
    <svg style="position:absolute; margin-top:-100px; margin-left:-10px; z-index:-10" version="1.1" class="ship" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
<circle id="sun" class="ship1" cx="520.8" cy="369.8" r="44.9"/>
  <rect id="smoke1"  x="173" y="225" width="18" height="10"/>
  <rect id="smoke2"  x="173" y="225" width="18" height="10"/>
  <rect id="smoke3"  x="173" y="225" width="18" height="10"/>
  <rect id="smoke4"  x="173" y="225" width="18" height="10"/>
<g id="ship">
  <polyline class="ship3" points="261.4,274.1 266.7,246.9 272.1,274.3 261.4,274.1 		"/>
  <ellipse class="ship1" cx="267.1" cy="253.7" rx="13.6" ry="13.3"/>
  <path class="ship3" d="M274.8,244c5.2,4.1,6,11.6,1.8,16.9c0,0-2.4-5.9-7.6-10c-5.2-4.1-11.1-4.7-11.1-4.7
    C262.1,240.9,269.6,239.9,274.8,244z"/>
  <polyline class="ship1" points="269.6,274.3 272.1,274.3 270.9,268.1 		"/>
  <polygon class="ship3" points="389.3,371.2 108.9,371.2 85.7,319.9 86.2,315.7 97.2,315.1 111.6,274.3 318.2,274.1 318.4,286.7
    331.6,286.6 332,296.9 344.9,296.9 345.5,319 447.5,310.5 		"/>
  <path class="ship1" d="M294.6,274.2l23.6,0l0.2,12.6l13.2-0.1l0.4,10.2h12.9l1.4,23.7c0,0-79.5,6.6-123.1,7.3
    c-34.4,0.5,97.4-8.2,97.4-8.2l-0.7-20.2l-15.9-0.2l0.1-11h-9.8L294.6,274.2z"/>
  <g>
    <polygon class="ship1" points="195.1,275 167,275 172.2,238.8 189.9,238.8 			"/>
    <polygon class="ship3" points="189.3,275 167,275 172.2,238.8 187.5,238.8 			"/>
  </g>
  <path class="ship4" d="M189.4,240H173c-1.2,0-2.1-0.9-2.1-2.1v0c0-1.2,0.9-2.1,2.1-2.1h16.4c1.2,0,2.1,0.9,2.1,2.1v0
    C191.5,239,190.6,240,189.4,240z"/>
  <polygon class="ship5" points="294.6,288.2 199.8,288.2 190.6,297.5 103.4,297.5 110.1,277.5 294.5,277.6 		"/>
  <path class="ship1" d="M134.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C136.9,285.6,135.9,286.7,134.6,286.7z"/>
  <path class="ship6" d="M131.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6
    C132.9,281,132.3,281.6,131.6,281.6z"/>
  <path class="ship3" d="M134.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C136.9,285.6,135.9,286.7,134.6,286.7z"/>
  <path class="ship1" d="M163.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C165.9,285.6,164.9,286.7,163.6,286.7z"/>
  <path class="ship6" d="M160.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6
    C161.9,281,161.3,281.6,160.6,281.6z"/>
  <path class="ship3" d="M163.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C165.9,285.6,164.9,286.7,163.6,286.7z"/>
  <path class="ship1" d="M191.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5l0.6-3.6h23.5l0.6,3.6C193.9,285.6,192.9,286.7,191.6,286.7z"/>
  <path class="ship6" d="M188.6,281.6h-14.5c-0.7,0-1.3-0.6-1.3-1.3v-0.6c0-0.7,0.6-1.3,1.3-1.3h14.5c0.7,0,1.3,0.6,1.3,1.3v0.6
    C189.9,281,189.3,281.6,188.6,281.6z"/>
  <path class="ship3" d="M191.6,286.7h-20.4c-1.3,0-2.3-1.2-2.1-2.5h24.6C193.9,285.6,192.9,286.7,191.6,286.7z"/>
  <g id="windows">
    <rect x="299.9" y="278.2" class="ship7" width="2.2" height="3"/>
    <rect x="311.9" y="291.2" class="ship7" width="2.2" height="3"/>
    <rect x="330.9" y="303.2" class="ship7" width="2.2" height="3"/>
    <rect x="308.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="281.6" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="256.6" y="291.2" class="ship7" width="2.5" height="3"/>
    <rect x="252.1" y="291.2" class="ship7" width="2.5" height="3"/>
    <rect x="266.7" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="232.5" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="192.4" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="186.7" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="181.1" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="175.5" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="157.1" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="151.4" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="123.1" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="117.4" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="111.7" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="106.1" y="303.2" class="ship7" width="2.5" height="3"/>
    <rect x="275.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="270.1" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="264.4" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="239.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="234.1" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="228.4" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="223.9" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="218.2" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="212.6" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="206.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="201.1" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="168.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="163.1" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="157.4" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="152.9" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="147.2" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="141.6" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="135.8" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="130.1" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="124.4" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="119.9" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="114.2" y="315.8" class="ship7" width="2.5" height="3"/>
    <rect x="108.6" y="315.8" class="ship7" width="2.5" height="3"/>
    <path class="ship7" d="M298.8,292.6c0-0.8-0.7-1.5-1.5-1.5H270c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h27.4
      C298.2,294.1,298.8,293.4,298.8,292.6z"/>
    <path class="ship7" d="M248.9,292.6c0-0.8-0.7-1.5-1.5-1.5H231c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h16.5
      C248.3,294.1,248.9,293.4,248.9,292.6z"/>
    <path class="ship7" d="M216.7,292.6c0-0.8-0.7-1.5-1.5-1.5H201c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h14.3
      C216,294.1,216.7,293.4,216.7,292.6z"/>
    <path class="ship7" d="M307.3,303.1h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6c0.8,0,1.5-0.7,1.5-1.5
      S308.2,303.1,307.3,303.1z"/>
    <path class="ship7" d="M314.6,278.2h-9.9c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.9c0.8,0,1.5-0.7,1.5-1.5
      S315.4,278.2,314.6,278.2z"/>
    <path class="ship7" d="M261.8,303.1h-12.1c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h12.1c0.8,0,1.5-0.7,1.5-1.5
      S262.6,303.1,261.8,303.1z"/>
    <path class="ship7" d="M227.3,303.1h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6c0.8,0,1.5-0.7,1.5-1.5
      S228.2,303.1,227.3,303.1z"/>
    <path class="ship7" d="M197.2,315.7h-17.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h17.3c0.8,0,1.5-0.7,1.5-1.5
      S198,315.7,197.2,315.7z"/>
    <path class="ship7" d="M149.8,304.6c0-0.8-0.7-1.5-1.5-1.5h-18.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18.6
      C149.2,306.1,149.8,305.4,149.8,304.6z"/>
    <path class="ship7" d="M304.7,315.8h-16c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h16c0.8,0,1.5-0.7,1.5-1.5S305.5,315.8,304.7,315.8
      z"/>
    <path class="ship7" d="M260.8,315.8h-11.1c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h11.1c0.8,0,1.5-0.7,1.5-1.5
      S261.6,315.8,260.8,315.8z"/>
    <path class="ship7" d="M327.5,291.1h-9.9c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h9.9c0.8,0,1.5-0.7,1.5-1.5
      S328.4,291.1,327.5,291.1z"/>
    <path class="ship7" d="M341.5,303.1h-5.7c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h5.7c0.8,0,1.5-0.7,1.5-1.5
      S342.3,303.1,341.5,303.1z"/>
  </g>
  <path class="ship3" d="M389.3,371.2H108.9l59.4-48.2c0,0,108.7-1.2,148.9-4.3c27.7-2.2,132.4-10.1,132.4-10.1L389.3,371.2z"/>
  <path class="ship8" d="M389.3,371.2H108.9l-23.2-51.3c0,0,54.7,1.3,138.9,2.5c43.6,0.6,218.9-7.9,218.9-7.9L389.3,371.2z"/>
  <path class="ship9" d="M418.7,323.4c0,0-124.7,8.3-168.8,9.2c-44.1,0.9-115.9,0-156.5-3.9"/>
  <rect x="238.9" y="228.7" class="ship1" width="2" height="46.2"/>
  <line class="ship10" x1="239.9" y1="228.7" x2="221.5" y2="274.5"/>
  <line class="ship10" x1="240.5" y1="228.7" x2="258.9" y2="274.5"/>
  <polygon class="ship3" points="240.6,228.7 238.9,228.7 238.9,274.8 240.7,274.8 		"/>
  <path class="ship1" d="M250.5,237.7h-21c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h21c0.4,0,0.7,0.3,0.7,0.7l0,0
    C251.2,237.4,250.9,237.7,250.5,237.7z"/>
  <path class="ship1" d="M247.6,243.3h-15.1c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h15.1c0.4,0,0.7,0.3,0.7,0.7l0,0
    C248.3,242.9,248,243.3,247.6,243.3z"/>
  <path class="ship1" d="M245.7,249.6h-11.4c-0.4,0-0.7-0.3-0.7-0.7l0,0c0-0.4,0.3-0.7,0.7-0.7h11.4c0.4,0,0.7,0.3,0.7,0.7l0,0
    C246.5,249.2,246.1,249.6,245.7,249.6z"/>
</g>
<rect id="sea" x="0" y="370" class="ship2" width="600" height="230"/>
<path id="wave6" d="M324.3,382.1c0,0-23.2,2.1-56.7-3"/>
<path id="wave5" d="M378.1,378.6c0,0-13.8,3.4-34.5,3.5"/>
<path id="wave4" d="M127,375.2c0,0-21.7,5.4-54.4,5.5"/>
<path id="wave3"  d="M93.1,390.5c0,0-25.7,2.3-62.9-3.4"/>
<path id="wave2"  d="M200,381c0,0-25.7,2.3-62.9-3.4"/>
<path id="wave1"  d="M253.6,375.5c0,0-21.8,3.6-42.4,5.3"/>
<path id="spindript" class="ship1" d="M256.9,371h114.2h25.3c0,0,10.9-3.6,9-8.1s-4.5-3.6-10.9,0.9c0,0-6.3,4.5-11.8,2.7
  c-5.4-1.8-6.3-5.4-14.5-4.5c-8.1,0.9-6.3,3.6-19,5.4c-12.7,1.8-16.3-3.6-19.9-4.5S296.8,368.3,256.9,371z"/>
  <g>
    <path id="wave1"  d="M538.2,424.7c0,0-21.6,0.7-41.8-0.4"/>
    <path id="wave2"  d="M559.7,388.6c0,0-32.6,2.3-79.8-3.4"/>
    <path id="wave3"  d="M545.5,411c0,0-21.7,5.4-54.4,5.5"/>
    <path id="wave4"  d="M545.9,403.9c0,0-20.5,2.3-50.4-1.5"/>
    <path id="wave5" d="M553.3,375.1c0,0-29,4.2-72.1,2.2"/>
  </g>


</svg>
      <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
      
      <div id = "first_screen" style="width: fit-content; position: absolute; margin-top:70px; margin-left: 260px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
        <h1 id="question1">Question 0/10</h1>
        <h1>Click on a number in a numerator, then <br> click on a number in the denominator that <br>  shares a common factor.</h1>
        <div id = "frac1" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac2" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><dev id="checker1" onclick="replace1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Reduce</dev></p>
        <div id = "sq1" onclick="selector_square1_1('sq1')" style = "margin-left:22px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
      <div id = "sq2" onclick="selector_square1_2('sq2')" style = "margin-left:22px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
      <div id = "sq3" onclick="selector_square1_1('sq3')" style = "margin-left:215px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
      <div id = "sq4" onclick="selector_square1_2('sq4')" style = "margin-left:215px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
      </div> 

      <div id = "second_screen" style="width: fit-content; position: absolute; margin-top:70px; margin-left: 260px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
        <h1>Insert the reduced numbers.</h1>
        <div id = "frac3" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac4" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><dev id="checker1" onclick="check1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Replace</dev></p>
        <input id="in1" style = "margin-left:72px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
      <input id="in2" style = "margin-left:72px; margin-top: -90px;width:60px; height:40px; position: absolute;font-size: 25px; "></input>
      <input id="in3" style = "margin-left:265px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
      <input id="in4" style = "margin-left:265px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
      </div> 

     <div id = "third_screen" style="width: fit-content; margin-top:100px; margin-left: 260px; margin-top: 150px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
      <h1>OK, now find the reduced answer!</h1>
      <div id = "frac5" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac6" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(189, 202, 187)" id = "frac2.5" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input1" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -80px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input2" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><dev id="checker1" onclick="checker1()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Enter</dev></p>
   </div> 

   <div id = "fourth_screen" style="width: fit-content; position: absolute; margin-top:70px; margin-left: 260px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
    <h1 id="question2">Question 0/5</h1>
    <h1>Click on a number in a numerator, then <br> click on a number in the denominator that <br>  shares a common factor.</h1>
    <div id = "frac7"  style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac8" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac9" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><dev id="checker1" onclick="replace21()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Reduce</dev></p>
    <div id = "sq5" onclick="selector_square21_1('sq5')" style = "margin-left:22px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
  <div id = "sq6" onclick="selector_square21_2('sq6')" style = "margin-left:22px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
  <div id = "sq7" onclick="selector_square21_1('sq7')" style = "margin-left:215px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
  <div id = "sq8" onclick="selector_square21_2('sq8')" style = "margin-left:215px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
  <div id = "sq9" onclick="selector_square21_1('sq9')" style = "margin-left:409px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
  <div id = "sq10" onclick="selector_square21_2('sq10')" style = "margin-left:409px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:red; opacity:.5"></div>
</div> 

<div id = "fifth_screen" style="width: fit-content; position: absolute; margin-top:70px; margin-left: 260px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
  <h1>Insert the reduced numbers.</h1>
  <div id = "frac10" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac11" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac12" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><dev id="checker1" onclick="check21()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Replace</dev></p>
  <input id="in5" style = "margin-left:72px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="in6" style = "margin-left:72px; margin-top: -90px;width:60px; height:40px; position: absolute;font-size: 25px; "></input>
<input id="in7" style = "margin-left:265px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="in8" style = "margin-left:265px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="in9" style = "margin-left:459px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="in10" style = "margin-left:459px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
</div> 

<div id = "sixth_screen" style="width: fit-content; margin-top:100px; margin-left: 160px; margin-top: 150px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
  <h1>OK, now find the reduced answer!</h1>
  <div id = "frac13" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac14" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "frac15" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult2" class = "mult11_2">=</div><div style="background-color: rgb(189, 202, 187)" id = "frac2.5" class="fraction_2" top="5" bottom="8"></div><input class = "fraction1" id="input51" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -80px; margin-top: -85px; z-index: 10000; width: 55px;" /><input class = "fraction1" id="input52" type="text" value="" size="5" style="opacity:1; z-index: 10000; font-size:1.5em; padding: 5px; margin-left: -55px; margin-top: 35px; width: 55px;" /><dev id="checker1" onclick="checker212()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Enter</dev></p>
</div> 

<div id = "seventh_screen" style="width: 700px; position: absolute; margin-top:70px; margin-left: 260px; margin-top: 100px; display: none; padding:25px; border-radius: 5px; background-color: rgb(140, 203, 240); vertical-align: auto;  ">
  <h1 id="question3">Question 0/10</h1>
  <h1>Click on a number in a numerator, then <br> click on a number in the denominator that <br>  shares a common factor.</h1>
  <div id = "fr1" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">x</div><div id = "fr2" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><div id = "mult1" class = "mult11_2">=</div><div id = "fr3" style="background-color: rgb(189, 202, 187)"  class="fraction_2" top ="11" bottom="8" left = "11"></div><dev id="checkme" onclick="check25()" style="position:absolute; color: black; margin-left: 50px; margin-top:30px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Check</dev><dev id="replaceme" onclick="submit25()" style=" position:absolute; color: black; margin-left: 50px; margin-top:120px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(189, 202, 187)">Submit</dev></p>
  <div id = "s1" class="two"  style = "margin-left:22px; margin-top: -142px;width:60px; position: absolute;"></div>
<div id = "s2" class="two"  style = "margin-left:22px; margin-top: -90px; width:60px; position: absolute; "></div>
<div id = "s3" class="two"  style = "margin-left:215px; margin-top: -142px; width:60px; position: absolute; "></div>
<div id = "s4" class="two"  style = "margin-left:215px; margin-top: -90px; width:60px; position: absolute; "></div>
<input id="i1" style = "margin-left:72px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="i2" style = "margin-left:72px; margin-top: -90px;width:60px; height:40px; position: absolute;font-size: 25px; "></input>
<input id="i3" style = "margin-left:265px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="i4" style = "margin-left:265px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="i5" style = "margin-left:412px; margin-top: -145px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<input id="i6" style = "margin-left:412px; margin-top: -90px;width:60px; height:40px; position: absolute; font-size: 25px;"></input>
<div id = "sq1" onclick="square115()" style = "z-index:1000; margin-left:22px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
<div id = "sq2" onclick="square125()" style = "z-index:1000; margin-left:22px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
<div id = "sq3" onclick="square115()" style = "z-index:1000; margin-left:215px; margin-top: -165px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
<div id = "sq4" onclick="square125()" style = "z-index:1000; margin-left:215px; margin-top: -90px;width:60px; height:60px; position: absolute; background-color:transparent; opacity:.5"></div>
</div> 

        </body>
</html>
