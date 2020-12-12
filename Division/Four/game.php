

<html>
        <body onload="loader()">
          <link rel="stylesheet" href="./styles/styles.css">
          <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
          <script async src='./JavaScript/asteroids.js'></script>  
          <script async src='./JavaScript/workings.js'></script>
            <canvas style="position:absolute;z-index:-10000; opacity: 0;" id="cvs" width="2000" height="1000"></canvas>
            <div style="margin-top:-50px; margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
            <div id = "first_screen" style="width: fit-content; margin-top:100px; margin-left: 60px; margin-top: 150px; display: inline-block; padding:25px; border-radius: 5px; background-color: transparent; vertical-align: auto;  ">
                <h1 id = "question" >Question 0/10</h1>
                <h1>Multiply, then submit the reduced answer.</h1>
                <div id = "frac1" style="background-color: rgb(211, 202, 202)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
                <div id = "mult1" class = "mult11_2">÷</div>
                <div id = "frac2" style="background-color: rgb(211, 202, 202)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
                <div id = "mult2" class = "mult11_2">=</div>
                <div style="background-color: rgb(211, 202, 202)" id = "frac3" class="fraction_2" top="5" bottom="8"></div>
                <input class = "fraction1" id="input2" type="text" value="" size="5" style="position: absolute; opacity:1; z-index: 1000000; font-size:1.5em; padding: 5px; margin-left: 109px; margin-top: 59px; width: 55px;" />
                <input class = "fraction1" id="input1" type="text" value="" size="5" style=" position: absolute; opacity:1; font-size:1.5em; padding: 5px; margin-left: 109px; margin-top: 118px; z-index: 100000000; width: 55px;" />
                <div id = "mult1" class = "mult11_2" style="margin-left:25px;" >x</div>
                <div id = "frac4" style="background-color: rgb(211, 202, 202)"  class="fraction_2" top ="11" bottom="8" left = "11"></div>
                <div id = "mult2" class = "mult11_2">=</div>
                <div style="background-color: rgb(211, 202, 202)" id = "frac5" class="fraction_2" top="5" bottom="8"></div>
                <input class = "fraction1" id="input3" type="text" value="" size="5" style="opacity:1; font-size:1.5em; padding: 5px; margin-left: -82px; margin-top: -85px; z-index: 100000000; width: 55px;" />
                <input class = "fraction1" id="input4" type="text" value="" size="5" style="opacity:1; z-index: 1000000; font-size:1.5em; padding: 5px; margin-left: -60px; margin-top: 35px; width: 55px;" />
                <dev id="checker1" onclick="checker()" style="color: black; margin-left: 100px; padding:10px;font-size:45px; border-radius: 5px; background-color: rgb(211, 202, 202)">Enter</dev></p>
          </div>
          
        </body>
</html>
