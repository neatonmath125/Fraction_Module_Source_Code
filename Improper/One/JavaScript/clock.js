var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var first_wrong;
var timeout_alert;
var time_checker = true;
var correct_blank_one;
var correct_blank_two;
var master_found;
var explanation
var explanation2
var explanation3
var explanation4 
var third_one;
var third_two;
var scalar5
var second_answer = false
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var title = ["_one","_two","_three","_four","_five","_six",]
var super_answer
var timeout_alert 
var timout_restarter 
var timeout_master 

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var allowed22 = 1

function on22(){
        allowed22 = 1
}

function off22(){
        allowed22 = 0
}


function checker(){
    if(allowed22 ==1){
    off22()
    setTimeout(on22,3000)
    var whole = document.getElementById("myInput1").value
    var num = document.getElementById("myInput2").value
    var den = document.getElementById("myInput3").value
    var answer = super_answer
    var picture = document.getElementById("picture1")
    var clock = document.getElementById("clock")
    var check = document.getElementById("checker")
    var frac1 = document.getElementById("correct_one")
    var frac2 = document.getElementById("correct_one2")
    var input1 = document.getElementById("myInput1")
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    input1.style.opacity = 0
    input2.style.opacity = 0
    input3.style.opacity = 0
    check.style.opacity = 0
    clock.className = "nothing"
    clearTimeout(timeout_alert)
    clearTimeout(timout_restarter)
    clearTimeout(timeout_master)
    if(answer[0] == whole && answer[1] == num && answer[2] == den){
        lightS()
        picture.style.opacity=0
        frac1.style.opacity=0
        frac2.style.opacity = 0
        turns+=1
        total_points +=20
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points +  " Turn: " + turns + "/10"
        setTimeout(master, 3000)
    }
    else{
        turns+=1
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points +  " Turn: " + turns + "/10"
        setTimeout(alert55,2000)
        setTimeout(master,3000)
    }

}}

function loader55(){
  render()
  master()
}

function directions(){
    document.location.href = "instructions.php"
}

var List1 = ["1_2_3.png","2_1_3.png","2_1_8.png","2_2_3.png","2_3_8.png","2_7_8.png","2_7_9.png","3_1_5.png","3_2_9.png","2_3_8.png","3_3_4.png","3_5_6.png","3_5_7.png","3_5_11.png","4_4_5.png","5_3_7.png","5_4_13.png","7_2_3.png"]
var List2 = ["1_1_3.png","1_1_6.png","1_1_8.png","1_2_3.png","2_1_2.png","2_2_9.png","2_3_8.png","3_2_3.png","3_3_7.png","4_1_3.png","4_1_10.png","4_2_3.png","5_1_2.png","6_1_2.png","7_1_5.png","11_1_3.png"]
var master_list11 = [List1, List2]

function reader(string1){
    counter = 0
    pointer = 0
    var list1 = ["","",""]
    while(counter < 3){
        while (string1[pointer] != "_" && string1[pointer] != "."){
            list1[counter] += string1[pointer]
            pointer +=1
        }
        pointer +=1
        counter +=1
    }
    return list1
}


function opacity_setter(){
    var list1 = ["5041","5042"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }

}

function load55(){
  opacity_setter()
  render()
}

var title5

function very_easy(){
    if(5041 <= master_id){
    localStorage.setItem("chosen_list",0);
    localStorage.setItem("practice_title","Pieces and Parts A Workout 1");
    localStorage.setItem("current_exercise","5041" );
    localStorage.setItem("next_exercise","5042" );
    document.location.href = "game.php"}
}

function easy(){
  if(5042 <= master_id){
  localStorage.setItem("chosen_list",1);
  localStorage.setItem("practice_title","Pieces and Parts A Workout 2");
  localStorage.setItem("current_exercise","5042" );
  localStorage.setItem("next_exercise","5043" );
  document.location.href = "game.php"}
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


function master(){
  var picture = document.getElementById("picture1")
  var clock = document.getElementById("clock")
  var clock = document.getElementById("clock")
  var frac1 = document.getElementById("correct_one")
  var frac2 = document.getElementById("correct_one2")
  var input1 = document.getElementById("myInput1")
  var input2 = document.getElementById("myInput2")
  var input3 = document.getElementById("myInput3")
  var checker = document.getElementById("checker")
  var chosen55 = localStorage.getItem("chosen_list")
    if(turns < 10){
    input1.value = ""
    input1.style.opacity = 1
    input2.value = ""
    input2.style.opacity = 1
    input3.value = ""
    input3.style.opacity = 1
    checker.style.opacity = 1
    frac1.style.opacity=1
    frac2.style.opacity = 1
    clock.className = "clock"
    picture.style.opacity=1
    var chosen_lister = master_list11[chosen55]
    shuffle(chosen_lister)
    var answer = chosen_lister.pop(0)
    super_answer = reader(answer)
    explanation4 = "Sorry, thats not the right answer. The correct answer is " + super_answer[0] + " and " + super_answer[1] + "/" + super_answer[2] + " as shown below."
    frac2.setAttribute("top",super_answer[0])
    frac1.setAttribute("top",super_answer[1])
    frac1.setAttribute("bottom",super_answer[2])
    if(chosen55 == 0){
      picture.src = "SetA/" + answer;

    }
    else{
    picture.src = "SetB/" + answer;
    }
    timeout_alert = setTimeout(alert55,19850)
    timout_restarter = setTimeout(restarter1, 19700)
    timeout_master = setTimeout(master,20000)}
    else{
      var picture = document.getElementById("picture1")
      var clock = document.getElementById("clock")
      var frac1 = document.getElementById("correct_one")
      var frac2 = document.getElementById("correct_one2")
      var input1 = document.getElementById("myInput1")
      var input2 = document.getElementById("myInput2")
      var input3 = document.getElementById("myInput3")
      var checker = document.getElementById("checker")
      picture.style.opacity = 0
      clock.style.opacity = 0
      frac1.style.opacity = 0
      frac2.style.opacity = 0
      input1.style.opacity=0
      input2.style.opacity = 0
      input3.style.opacity = 0
      checker.style.opacity = 0
        if(total_points >= 180){
        practice_title = current_exercise
            document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Nice, you passed!"
            if(master_id > next_exercsie){
                next_exercsie = master_id}
            setTimeout(Submit,4900)
        }
        
        else{
        practice_title = 0
            document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Almost, try again!"
            next_exercsie = current_exercise
            if(master_id > next_exercsie){
                next_exercsie = master_id}
            setTimeout(Submit,4900)
        }

    }
    // assign objects their values here
    // find that if numerator/(parseFloat(denominator))
    //https://codepen.io/WebSonick/pen/vjmgu
}

function return_index(){
    document.location.href = "index.php"
}

function checker_on(){
    time_checker = true;
}


function alert55(){
    var input1 = document.getElementById("myInput1")
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    input1.style.opacity = 0
    input2.style.opacity = 0
    input3.style.opacity = 0
    window.alert(explanation4)
}

function turn_off(){
    var clock = document.getElementById("clock")
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct1 = document.getElementById("correct_one")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_three")
        var multiply = document.getElementById("mult")
        var equal = document.getElementById("equal")
        multiply.style.opacity = 0
        equal.style.opacity = 0
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct1.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
}

function turn_on(){
    var clock = document.getElementById("clock")
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct1 = document.getElementById("correct_one")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_three")
        var multiply = document.getElementById("mult")
        var equal = document.getElementById("equal")
        multiply.style.opacity = 1
        equal.style.opacity = 1
        clock.style.opacity = 1
        choice1.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
        choice4.style.opacity = 1
        choice5.style.opacity = 1
        correct1.style.opacity = 1
        correct2.style.opacity = 1
        correct3.style.opacity = 1
}




var allowed = true
function check_on(){
allowed = true
}
function check_off(){
allowed = false
}


function restarter(){
    clearTimeout(timeout_alert)
    clearTimeout(timout_restarter)
    clearTimeout(timeout_master)
    turn_off()
    second_answer=false
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var clock = document.getElementById("clock")
    clock.className = "northing"
}

function restarter1(){
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var clock = document.getElementById("clock")
    clock.className = "nothing"
    document.getElementById("myInput1").style.opacity=0
    document.getElementById("myInput2").style.opacity=0
    document.getElementById("myInput3").style.opacity=0

}

var	NumberCorrect=document.createElement("input");
	NumberCorrect.setAttribute("type","hidden");
	NumberCorrect.setAttribute("name","num_correct");
	
var	NumberAttempted=document.createElement("input");
	NumberAttempted.setAttribute("type","hidden");
	NumberAttempted.setAttribute("name","num_attempted");
	
var	Time=document.createElement("input");
	Time.setAttribute("type","hidden");
	Time.setAttribute("name","time");
	  	  
var PracticeTitle=document.createElement("input");
	PracticeTitle.setAttribute("type","hidden");
	PracticeTitle.setAttribute("name","practice_title");
		
var PracticeId=document.createElement("input");
	PracticeId.setAttribute("type","hidden");
	PracticeId.setAttribute("name","practice_id");
	
var GoTo=document.createElement("input");
	GoTo.setAttribute("type","hidden");
	GoTo.setAttribute("name","go_to");
        
var	Percent=document.createElement("input");
	Percent.setAttribute("type","hidden");
	Percent.setAttribute("name","percent");
	
var Completed=document.createElement("input");
	Completed.setAttribute("type","hidden");
	Completed.setAttribute("name","completed");        
	

function Submit(){
        //document.getElementById("comment1").innerHTML="inside submit ";
        // document.getElementById("commentEnd").innerHTML="in Submit percent "+percent+" ; average time "+averageTime+" ; pass "+pass+";";
    NumberCorrect.value=total_points/20;
    NumberAttempted.value=10;
    Time.value=0;
    Percent.value=(total_points/200)*100;
    PracticeTitle.value=practice_title;
    PracticeId.value=current_exercise;
    Completed.value = practice_title;
    GoTo.value = next_exercsie
    	document.getElementById("form1").appendChild(NumberCorrect);
	document.getElementById("form1").appendChild(NumberAttempted);
	document.getElementById("form1").appendChild(Time);
	document.getElementById("form1").appendChild(PracticeTitle);
	document.getElementById("form1").appendChild(PracticeId);
	document.getElementById("form1").appendChild(GoTo);
	document.getElementById("form1").appendChild(Completed);
	document.getElementById("form1").appendChild(Percent);
	document.getElementById("form1").submit(); 
}	

//////////////////////////////////

var mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }
  //access mouse pos with mouse.x and mouse.y
  function getMousePos(event) {
    return {
      x: window.innerWidth / 2,
      y:  window.innerHeight / 2
    }
  }

  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#000000', 750, 1000);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

        //Create elements here:

  function randint(min, max) {
    return Math.floor(Math.random() * max) + min
  }

  function int(num) {
    return Math.floor(num)
  }
        var stars = []
        var starCount = 10000
        var asteroids = []
        var asteroidCount = 0
        var asteroidSpawn = 100
        var cameraZ = 0
        function newStar() {
          gr = {}
          gr['geometry'] = new THREE.SphereGeometry( 1, 8, 8 )
               gr['material'] = new THREE.MeshBasicMaterial( { color: 'white'} );
              gr['sphere'] = new THREE.Mesh( gr['geometry'], gr['material'] );
          scene.add(gr['sphere'])
          w = window.innerWidth
          h = window.innerHeight
          w2 = w / 2
          h2 = h / 2
          gr['sphere'].position.x = randint(-w2, w)
          gr['sphere'].position.y = randint(-h2, h)
          gr['sphere'].position.z = cameraZ -800
          return gr
        }
  function towards(ax, ay, bx, by, speed) {
    steps_number = Math.max(Math.abs(bx - ax), Math.abs(by - ay))
    stepx = parseFloat(bx - ax) / steps_number
    stepy = parseFloat(by - ay) / steps_number
    return [int(ax + stepx * speed), 
            int(ay + stepy * speed)]
  }

  var lightSpeed = 1
  var speedStop = false
  function lightS() {lightSpeed = 2}

        //end of elements
              camera.position.z = cameraZ;
  
              var render = function () {
                  requestAnimationFrame( render );
          mainloop()
                  renderer.render(scene, camera);
              };
  function mainloop() {
    if (stars.length < starCount) {
      stars.push(newStar())
    }
    if (asteroids.length < asteroidCount) {
      asteroidSpawn -= 1
      if (asteroidSpawn == 0) {
      asteroids.push(newAsteroid())
        asteroidSpawn = 100
      }
    }
    for (var i = 0; i < stars.length; i++) {
      star = stars[i]
      if(star['sphere'].position.z > cameraZ) {
        scene.remove(star['sphere'])
        stars.splice(i, 1)
      }
      star['sphere'].scale.z = lightSpeed
    }
    for (var i = 0; i < asteroids.length; i++) {
      asteroid = asteroids[i]
      if(asteroid['shape'].position.z > cameraZ) {
        scene.remove(asteroid['shape'])
        asteroids.splice(i, 1)
      }
      asteroid['shape'].rotation.x += 0.01
      asteroid['shape'].rotation.y += 0.01
    }
    if (speedStop == false) {
    if (lightSpeed > 1) {
      lightSpeed += 2
    }
      if (lightSpeed > 300) {
        speedStop = true
      }
    }
    else {
      lightSpeed -= 5
      if (lightSpeed < 2) {
        speedStop = false
        lightSpeed = 1
      }
    }
    if (lightSpeed > 150) {
      cameraZ -= lightSpeed / 2
    } else {
    cameraZ -= 1
    }

    //camera.position.z = cameraZ
    lookX = mouse.x - window.innerWidth / 2
    lookX /= 50
    lookX = -lookX
    lookY = mouse.y - window.innerHeight / 2
    lookY /= 50
    //lookY = -lookY
    lookAt = new THREE.Vector3(lookX, lookY, cameraZ - 10);
    camera.position.z = cameraZ
    camera.lookAt(lookAt);
    
  }
  