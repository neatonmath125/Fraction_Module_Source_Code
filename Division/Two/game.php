


<html>
	<body onload="loader()">
		<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.js"></script>
		<link rel="stylesheet" href="./styles/styles.css">
		<script async src='./JavaScript/clock.js'></script>
		<script async src='./JavaScript/background.js'></script>
		<div style="position:absolute; z-index:-100;" id="jsi-sea-container" class="container"></div>
    <div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
    <canvas style="z-index:-1000; opacity: 0;" id="canvas"></canvas>
	<br>
    <br>
    <br>
    <div style="margin-left:460px; margin-top:-20px;" id = "clock" class="clock" ></div>
    <br>
    <br>
    <br>
    <br>
    <div style="margin-left:170px;">
    <img id="t1" onclick="check('t1')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="top.png" alt="">   
    <img id="t2" onclick="check('t2')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="top.png" alt="">
    <img id="t3" onclick="check('t3')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="top.png" alt="">
    <img id="t4" onclick="check('t4')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="top.png" alt="">
    <img id="t5" onclick="check('t5')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="top.png" alt="">
    </div>
    <br>

    <div style="margin-left:170px;">
            <img id="m1" onclick="check('m1')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="middle.png" alt="">   
            <img id="m2" onclick="check('m2')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="middle.png" alt="">
            <img id="m3" onclick="check('m3')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="middle.png" alt="">
            <img id="m4" onclick="check('m4')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="middle.png" alt="">
            <img id="m5" onclick="check('m5')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:25px; width:120px;height:100px;" src="middle.png" alt="">
            </div>

            <br>

            <div style="margin-left:110px;">
                    <img id="b1" onclick="check('b1')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:95px; width:60px; height:100px;" src="answer.png" alt="">   
                    <img id="b2" onclick="check('b2')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:95px; width:60px; height:100px;" src="answer.png" alt="">
                    <img id="b3" onclick="check('b3')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:95px; width:60px;height:100px;" src="answer.png" alt="">
                    <img id="b4" onclick="check('b4')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:95px; width:60px;height:100px;" src="answer.png" alt="">
                    <img id="b5" onclick="check('b5')" style="background-color:white; padding:10px; border-radius:5px; display:inline-block; margin-left:95px; width:60px;height:100px;" src="answer.png" alt="">    
                </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
	</body>
</html>
