

<script type="text/javascript">
var master_id=<?php echo $workoutID; ?>;
</script>


<html>
	<body onload="opacity_setter()">
	<link rel="stylesheet" href="./styles/styles.css">
	<script async src='./JavaScript/clock.js'></script>
	<script async src='./JavaScript/background.js'></script>
	<div style="z-index: -100; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" id="background">
		<svg width="1366px" height="768px" viewBox="0 0 1366 768" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
			  <!--sky-->
			  <linearGradient x1="50%" y1="0%" x2="50%" y2="78.9682134%" id="sky-1">
				<stop stop-color="#214D6D" offset="0%"></stop>
				<stop stop-color="#D6D6D6" offset="100%"></stop>
			  </linearGradient>
	  
			  <!--sand base -->
			  <linearGradient x1="50%" y1="133.533825%" x2="50%" y2="-37.2871987%" id="base-1">
				<stop stop-color="#AA7580" offset="0%"></stop>
				<stop stop-color="#D6D6D6" offset="100%"></stop>
			  </linearGradient>
	  
			  <!-- pyramids -->
			  <linearGradient x1="73.0340321%" y1="0%" x2="73.0340321%" y2="89.5700206%" id="pyramid-right">
				<stop stop-color="#E1C8B7" offset="0%"></stop>
				<stop stop-color="#AD606B" offset="100%"></stop>
			  </linearGradient>
			  <linearGradient x1="27.6585662%" y1="0%" x2="27.6585662%" y2="116.296382%" id="pyramid-left">
				<stop stop-color="#346095" offset="0%"></stop>
				<stop stop-color="#DB605C" offset="100%"></stop>
			  </linearGradient>
	  
			  <!-- ground -->
			  <radialGradient cx="100%" cy="0%" fx="100%" fy="0%" r="253.793224%" gradientTransform="translate(1.000000,0.000000),scale(0.169839,1.000000),rotate(57.942644),translate(-1.000000,-0.000000)" id="ground-3">
				<stop stop-color="#D0B3AB" offset="0%"></stop>
				<stop stop-color="#712C44" offset="100%"></stop>
			  </radialGradient>
			  <radialGradient cx="100%" cy="0%" fx="100%" fy="0%" r="364.724481%" gradientTransform="translate(1.000000,0.000000),scale(0.178606,1.000000),rotate(180.000000),translate(-1.000000,-0.000000)" id="ground-2">
					<stop stop-color="#CBA899" offset="0%"></stop>
					<stop stop-color="#712C44" offset="100%"></stop>
				</radialGradient>
			  <radialGradient cx="100%" cy="0%" fx="100%" fy="0%" r="537.993228%" gradientTransform="translate(1.000000,0.000000),scale(0.166050,1.000000),rotate(171.288159),translate(-1.000000,-0.000000)" id="ground-1">
					<stop stop-color="#C49088" offset="0%"></stop>
					<stop stop-color="#712C44" offset="100%"></stop>
				</radialGradient>
	  
			  <circle id="path-1" cx="258.5" cy="552.5" r="110.5"></circle>
			  <filter x="-102.3%" y="-101.4%" width="304.5%" height="304.5%" filterUnits="objectBoundingBox" id="filter-2">
					<feMorphology radius="25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
					<feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
					<feGaussianBlur stdDeviation="50" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
				</filter>
	  
			  <!-- stars -->
			  <filter x="-337.5%" y="-337.5%" width="775.0%" height="775.0%" filterUnits="objectBoundingBox" id="stars">
				<feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
				<feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
				<feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
				<feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
			  </filter>
			  <circle id="path-1" cx="206" cy="64" r="2"></circle>
			  <circle id="path-3" cx="2" cy="2" r="2"></circle>
			  <circle id="path-5" cx="305" cy="62" r="2"></circle>
			  <circle id="path-7" cx="88" cy="190" r="2"></circle>
			  <circle id="path-9" cx="465" cy="111" r="2"></circle>
			  <circle id="path-11" cx="393" cy="194" r="2"></circle>
			  <circle id="path-13" cx="377" cy="19" r="2"></circle>
			  <circle id="path-15" cx="943" cy="218" r="2"></circle>
			  <circle id="path-17" cx="557" cy="218" r="2"></circle>
			  <circle id="path-19" cx="1084" cy="115" r="2"></circle>
			  <circle id="path-21" cx="1244" cy="198" r="2"></circle>
			  <circle id="path-23" cx="1149" cy="58" r="2"></circle>
			  <circle id="path-25" cx="842" cy="46" r="2"></circle>
			  <circle id="path-27" cx="838" cy="132" r="2"></circle>
			  <circle id="path-29" cx="1267" cy="15" r="2"></circle>
			  <circle id="path-31" cx="705" cy="17" r="2"></circle>
	  
			  <!-- shooting star -->
			  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="shooting-star">
					<stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
					<stop stop-color="#FFFFFF" offset="100%"></stop>
				</linearGradient>
			</defs>
		  
			<g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			  <g id="sky" fill="url(#sky-1)">
				<rect id="sky-1" x="0" y="0" width="1366" height="540"></rect>
			  </g>
			  <g id="skylight" transform="translate(-60.000000, 63.000000)" fill="#FFFFFF">
				<ellipse id="skylight-1" cx="851.5" cy="376.5" rx="851.5" ry="376.5" style="opacity: 0"></ellipse>
				<ellipse id="skylight-2" cx="904" cy="584.5" rx="755" ry="396.5" style="opacity: 0"></ellipse>
			  </g>
			  <g id="stars" transform="translate(51.000000, 55.000000)">
				<g id="star-16" opacity="0.8">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-1"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
				</g>
				<g id="star-15">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#star-3"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-3"></use>
				</g>
				<g id="star-14">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-5"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-5"></use>
				</g>
				<g id="star-13" opacity="0.2">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-7"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-7"></use>
				</g>
				<g id="star-12">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-9"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-9"></use>
				</g>
				<g id="star-11" opacity="0.7">
				  <use fill="black" fill-opacity="1" filter="url(#filter-12)" xlink:href="#path-11"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-11"></use>
				</g>
				<g id="star-10" opacity="0.4">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-13"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-13"></use>
				</g>
				<g id="star-9">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-15"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-15"></use>
				</g>
				<g id="star-8" opacity="0.3">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-17"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-17"></use>
				</g>
				<g id="star-7" opacity="0.2">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-19"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-19"></use>
				</g>
				<g id="star-6">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-21"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-21"></use>
				</g>
				<g id="star-5" opacity="0.5">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-23"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-23"></use>
				</g>
				<g id="star-4">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-25"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-25"></use>
				</g>
				<g id="star-3">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-27"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-27"></use>
				</g>
				<g id="star-2">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-29"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-29"></use>
				</g>
				<g id="star-1">
				  <use fill="black" fill-opacity="1" filter="url(#stars)" xlink:href="#path-31"></use>
				  <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-31"></use>
				</g>
			  </g>
			  <g id="sun">
				<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
				<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
			  </g>
			  <g id="city" transform="translate(-31.000000, 468.000000)">
				<path d="M156,29 L153,29 L153,20 L148,20 L148,29 L144,29 L144,12 L140,12 L140,6 L136,6 L136,9 L130,12.5 L130,6 L127,6 L127,0 L124,0 L124,9 L120,12 L120,20 L115,20 C115,17.3333333 115,16 115,16 C115,16 114,16 112,16 L112,20 L109,20 L109,29 L106,29 L106,26 L101,26 L101,23 L96,23 L96,15 L91,15 L86,20 L86,12 L83,6 L78,6 L78,0 L74,0 L74,9 L69,9 L65,15 L57,15 L57,9 L53,9 L53,6 L46,6 L46,12.5 L37,12.5 L37,26 L30,26 L30,20 L24,20 L24,26 L21,26 L21,15 L17,15 L17,20 L11,20 L11,23 L7,23 L2,20 L0,23 L0,37 L156,37 L156,29 Z" id="city-left-3" fill="#C2C7CA" transform="translate(31, 0)"></path>
				<path d="M238,29.8918919 L235,29.8918919 L235,25.2702703 L230,25.2702703 L230,29.8918919 L226,29.8918919 L226,21.1621622 L222,21.1621622 L222,18.0810811 L218,18.0810811 L218,19.6216216 L212,21.4189189 L212,18.0810811 L209,18.0810811 L209,15 L206,15 L206,19.6216216 L202,21.1621622 L202,25.2702703 L197,25.2702703 C197,23.9009009 197,23.2162162 197,23.2162162 C197,23.2162162 196,23.2162162 194,23.2162162 L194,25.2702703 L191,25.2702703 L191,29.8918919 L188,29.8918919 L188,28.3513514 L183,28.3513514 L183,26.8108108 L178,26.8108108 L178,22.7027027 L173,22.7027027 L168,25.2702703 L168,21.1621622 L165,18.0810811 L160,18.0810811 L160,15 L156,15 L156,19.6216216 L151,19.6216216 L147,22.7027027 L139,22.7027027 L139,19.6216216 L135,19.6216216 L135,18.0810811 L128,18.0810811 L128,21.4189189 L119,21.4189189 L119,28.3513514 L112,28.3513514 L112,25.2702703 L106,25.2702703 L106,28.3513514 L103,28.3513514 L103,22.7027027 L99,22.7027027 L99,25.2702703 L93,25.2702703 L93,26.8108108 L89,26.8108108 L84,25.2702703 L84,26.8108108 L80,26.8108108 L80,22.7027027 L75,22.7027027 L75,21.1621622 L70,21.1621622 L70,22.7027027 L67,22.7027027 L67,19.6216216 L62,19.6216216 L62,18.0810811 L57,18.0810811 L57,19.6216216 L51,29.8918919 L51,34 L238,34 L238,29.8918919 Z" id="city-left-1" fill="#A3AFB8"></path>
				<polygon id="city-left-2" fill="#C2C7CA" transform="translate(228.500000, 18.500000) scale(-1, 1) translate(-228.500000, -18.500000) " points="249 29 246 29 246 20 241 20 241 29 237 29 237 12 233 12 233 6 229 6 229 9 223 12.5 223 6 220 6 220 0 217 0 217 9 213 12 213 20 208 20 225 37 249 37"></polygon>
				<path d="M1397,29 L1394,29 L1394,20 L1389,20 L1389,29 L1385,29 L1385,12 L1381,12 L1381,6 L1377,6 L1377,9 L1371,12.5 L1371,6 L1368,6 L1368,0 L1365,0 L1365,9 L1361,12 L1361,20 L1356,20 C1356,17.3333333 1356,16 1356,16 C1356,16 1355,16 1353,16 L1353,20 L1350,20 L1350,29 L1347,29 L1347,26 L1342,26 L1342,23 L1337,23 L1337,15 L1332,15 L1327,20 L1327,12 L1324,6 L1319,6 L1319,0 L1315,0 L1315,9 L1310,9 L1306,15 L1298,15 L1298,9 L1294,9 L1294,6 L1287,6 L1287,12.5 L1278,12.5 L1278,26 L1271,26 L1271,20 L1265,20 L1265,26 L1262,26 L1262,15 L1258,15 L1258,20 L1252,20 L1252,23 L1248,23 L1243,20 L1243,23 L1239,23 L1239,15 L1234,15 L1234,12 L1229,12 L1229,15 L1226,15 L1226,9 L1221,9 L1221,6 L1216,6 L1216,9 L1210,9 L1235,37 L1397,37 L1397,29 Z" id="city-right-2" fill="#C2C7CA"></path>
				<path d="M1369,29 L1366,29 L1366,20 L1361,20 L1361,29 L1357,29 L1357,12 L1353,12 L1353,6 L1349,6 L1349,9 L1343,12.5 L1343,6 L1340,6 L1340,0 L1337,0 L1337,9 L1333,12 L1333,20 L1328,20 C1328,17.3333333 1328,16 1328,16 C1328,16 1327,16 1325,16 L1325,20 L1322,20 L1322,29 L1319,29 L1319,26 L1314,26 L1314,23 L1309,23 L1309,15 L1304,15 L1299,20 L1299,12 L1296,6 L1291,6 L1291,0 L1287,0 L1287,9 L1282,9 L1278,15 L1270,15 L1270,9 L1266,9 L1266,6 L1259,6 L1259,12.5 L1250,12.5 L1250,26 L1243,26 L1243,20 L1237,20 L1237,26 L1234,26 L1234,15 L1230,15 L1230,20 L1224,20 L1224,25 L1232,34 L1369,37 L1369,29 Z" id="city-right-1" fill="#A3AFB8"></path>
			  </g>
			  <g id="base" transform="translate(0.000000, 0.000000)" fill="url(#base-1)">
				<rect id="base" x="0" y="502" width="1366" height="266"></rect>
			  </g>      
			  <g id="pyramid-3" transform="translate(848.000000, 334.000000)" opacity="0.7">
				<polygon id="Triangle" fill="url(#pyramid-right)" points="203.5 0 407 228 0 228"></polygon>
				<polygon id="Triangle" fill="url(#pyramid-left)" points="203.5 0 407 228 219 202 162.582546 136.192403"></polygon>
			  </g>
			  <g id="pyramid-2" transform="translate(456.000000, 211.000000)" opacity="0.9">
				<polygon id="Triangle" fill="url(#pyramid-right)" points="331.5 0 663 385 0 385"></polygon>
				<polygon id="Triangle" fill="url(#pyramid-left)" points="331.5 0 663 385 194 385"></polygon>
			  </g>  
			  <g id="pyramid-1" transform="translate(99.000000, 271.000000)">
				<polygon id="pyramid-1-right" fill="url(#pyramid-right)" points="319.5 0 196 353 0 341"></polygon>
				<polygon id="Triangle-1-left" fill="url(#pyramid-left)" points="319.5 0 644 353 194 353"></polygon>
			  </g>
			  <g id="ground" transform="translate(0.000000, 536.000000)">
				<path d="M513,103 C707,21 841,-1.13686838e-13 1006,-8.149037e-14 C1116,-6.00260582e-14 1236,-7.07582141e-14 1366,-1.13686838e-13 L1366,232 L3.74922315e-13,232 C212.666667,200.666667 383.666667,157.666667 513,103 Z" id="ground-3" fill="url(#ground-3)"></path>
				<path d="M382,101 C578,43 712,35 847,26 C937,20 1060.33333,17.6666667 1217,19 L1217,236 L-6.82121026e-13,232 C124,183.333333 251.333333,139.666667 382,101 Z" id="ground-2" fill="url(#ground-2)" opacity="0.9" transform="translate(608.500000, 127.318182) scale(-1, 1) translate(-608.500000, -127.318182) "></path>
				<path d="M351,114 C465,87 570,77 692,67 C773.333333,60.3333333 889.333333,58 1040,60 L1040,232 L-4.54747351e-13,232 C158,171.333333 275,132 351,114 Z" id="ground-1" fill="url(#ground-1)" opacity="0.8" transform="translate(520.000000, 145.653846) scale(-1, 1) translate(-520.000000, -145.653846) "></path>
					</g>
			  <circle id="lensflare-3" fill="#FFFFFF" opacity="0.194698661" cx="172" cy="399" r="44"></circle>
			  <circle id="lensflare-2" fill="#FFFFFF" opacity="0.194698661" cx="148" cy="355" r="22"></circle>
			  <circle id="lensflare-1" fill="#FFFFFF" opacity="0.194698661" cx="216" cy="481" r="24"></circle>
			</g>
		</svg>
	  </div>
	<div style="margin-left:10px;" class = "logo-photo"><img class = "logo-photo" src="logo.png" alt="logo.png"></div>
	<h1 id = "total_points2" style="color:black; font-size: 50px; margin-top: -50px; font-weight: normal; font-family: Arial, Helvetica, sans-serif;"><div class = "points_total" style="color:black; font-size: 60px; text-align: left; padding-left: 75px; margin-top: 75px;">Mixed Results A</div><div style = "margin-top: -65px; margin-left: 559px; font-weight: normal; font-size: 30px; background-color: rgb(196, 160, 229)" class="directions" onclick="directions()">Instructions</div></h1>
	<p style="text-align: center; align-content: center; margin-top: -30px; font-size: 25px;"><div id = "5075" style = "background-color: rgb(95, 159, 241)" class="difficulty" onclick="very_easy()">Level:<br>&#9733</div><div style="background-color: rgb(137, 206, 137)" id = "5076" class="difficulty" onclick="easy()">Level:<br>&#9733&#9733</div><div style="background-color: rgb(137, 138, 206)" id = "5077" class="difficulty" onclick="medium()">Level:<br>&#9733&#9733&#9733</div></p>
	</body>
</html>
