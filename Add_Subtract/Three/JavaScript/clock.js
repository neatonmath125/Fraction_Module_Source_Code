var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var timout_explain;
var explanation 
var timeout_alert;
var time_checker = true;
var correct_blank;
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var Set1 = [[-1,0,"-",2,3],[8,9,"",17,2],[-3,-2,"-",12,5],[1,2,"",4,3],[-1,0,"-",11,17],[1,2,"",7,5],[-2,-1,"-",3,2],[0,1,"",16,17],[-3,-2,"-",26,12],[4,5,"",33,7],[-7,-6,"-",31,5],[0,1,"",14,15],[-4,-3,"-",22,7],[3,4,"",31,10],[-1,0,"-",6,7],[2,3,"",14,5],[-4,-3,"-",7,2],[3,4,"",18,5],[-3,-2,"-",55,20],[11,12,"",100,9],[0,1,"",1,9]]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

// $('.myclass').css('color: red')
//document.getElementById('mydiv').className = 'newclass';
/*var bg = document.getElementById("myBg");
bg.style.width = imgWidth + "px";
bg.style.height = imgHeight + "px";*/
//localStorage.setItem("scalar", 2);
//localStorage.setItem("num_dif", 2);
//localStorage.setItem("den_dif", 7);
//localStorage.setItem("bailout", 3);

var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");

function directions(){
    document.location.href = "instructions.php"
}

function loader55(){
    opacity_setter()
    master()
}

function opacity_setter(){
    var list1 = ["5065"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5065 <= master_id){
    localStorage.setItem("practice_title","How Big B Workout 1");
    localStorage.setItem("current_exercise","5065" );
    localStorage.setItem("next_exercise","5066" );
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


function explain(first, second){
    var string  = "Sorry, thats not the correct answer. See the correct answer below!"
    return string
}

var correct_answer

function master(){
    check_ok = 1
    if(turns < 10){
    document.getElementById("clock").className = "clock"
    document.getElementById("checker").style.opacity=1
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    input1.value=""
    input2.value=""
    input1.style.opacity=1
    input2.style.opacity=1
    var frac1 = document.getElementById("fraction1")
    frac1.style.opacity=1
    var clock = document.getElementById("clock")
    clock.className = "clock"
    shuffle(Set1)
    var answer = Set1.pop()
    frac1.setAttribute("top",answer[2] + answer[3]);
    frac1.setAttribute("bottom",answer[4]);
    correct_answer = answer
    explanation = " Sorry, that's not the correct answer, the fraction " + answer[2] + answer[3] + "/" + answer[4] +  " is between the consecutive integers " + answer[0] + " and " + answer[1] + "."
    timout_explain = setTimeout(show_alert,19900)
    timout_restarter = setTimeout(restarter1, 19800)
    timeout_master = setTimeout(master,20000)}
    else{
        var clock = document.getElementById("clock")
        var fraction1 = document.getElementById("fraction1")
        var input1 = document.getElementById("input1")
        var input2 = document.getElementById("input2")
        var writer1 = document.getElementById("writer1")
        var writer2 = document.getElementById("writer2")
        var checker = document.getElementById("checker")
        clock.style.opacity = 0
        fraction1.style.opacity = 0
        input1.style.opacity = 0
        input2.style.opacity = 0
        writer1.style.opacity = 0
        writer2.style.opacity = 0
        checker.style.opacity = 0
        if(total_points >= 160){
        practice_title = current_exercise
            document.getElementById("total_points2").className = "points_total"
            document.getElementById("total_points2").style.marginLeft=0
            document.getElementById("total_points2").style.paddingLeft=0
            document.getElementById("total_points2").style.textAlign = "center"
            document.getElementById("total_points2").style.fontSize = 75
            document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Nice, you passed!"
            if(master_id > next_exercsie){
                next_exercsie = master_id
            }
            setTimeout(Submit,4900)

        }
        else{
        practice_title = 0
            document.getElementById("total_points2").className = "points_total"
            document.getElementById("total_points2").style.marginLeft=0
            document.getElementById("total_points2").style.paddingLeft=0
            document.getElementById("total_points2").style.textAlign = "center"
            document.getElementById("total_points2").style.fontSize = 75
            document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Almost, try again!"
            next_exercsie = current_exercise
            if(master_id > next_exercsie){
                next_exercsie = master_id
            }
            setTimeout(Submit,4900)
        }

    }
}

function return_index(){
    document.location.href = "index.php"
}

function checker_on(){
    time_checker = true;
}

function show_alert(){
    window.alert(explanation)
}

var allowed22 = 1

function on22(){
    allowed22 = 1
}

function off22(){
    allowed22 = 0
}

var check_ok = 1

function checker(){
    if(check_ok ==1){
    check_ok = 0
    document.getElementById("clock").className = "nothing"
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value
    var answer1 = correct_answer[0]
    var answer2 = correct_answer[1]
    var frac1 = document.getElementById("fraction1")
    document.getElementById("checker").style.opacity=0
    if (input1 == answer1 && input2 == answer2){
        frac1.style.opacity=0
        total_points += 20
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
        clearTimeout(timout_explain)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)
        start1()
        alert("Nice Work!")
        setTimeout(stop1, 7000)
        setTimeout(restarter, 4900)
        setTimeout(master,5000)
    }
    else{
        clearTimeout(timout_explain)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)
        setTimeout(show_alert,100)
        setTimeout(restarter, 1900)
        setTimeout(master,2000)
    }
}
}

function restarter(){
    clearTimeout(timout1)
    clearTimeout(timout2)
    clearTimeout(timeout3)
    clearTimeout(timeout4)
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var clock = document.getElementById("clock")
    clock.className = "clock_blank"
}

function restarter1(){
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var clock = document.getElementById("clock")
    clock.className = "nothing"

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
    PracticeId.value=master_id;
    Completed.value = practice_title
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



class RenderLoop {
    constructor(cb, fps = 0) {
      this.currentFps = 0;
      this.isActive = false;
      this.msLastFrame = performance.now();
      this.cb = cb;
      this.totalTime = 0;
  
      if (fps && typeof fps === 'number' && !Number.isNaN(fps)) {
        this.msFpsLimit = 1000 / fps;
        this.run = () => {
          const currentTime = performance.now();
          const msDt = currentTime - this.msLastFrame;
          this.totalTime += msDt;
          const dt = msDt / 1000;
          
          if (msDt >= this.msFpsLimit) {
            this.cb(dt, this.totalTime);
            this.currentFps = Math.floor(1.0 / dt);
            this.msLastFrame = currentTime;
          }
  
          if (this.isActive) window.requestAnimationFrame(this.run);
        };
      } else {
        this.run = () => {
          const currentTime = performance.now();
          const dt = (currentTime - this.msLastFrame) / 1000;
          this.totalTime += (currentTime - this.msLastFrame);
          this.cb(dt, this.totalTime);
          this.currentFps = Math.floor(1.0 / dt);
          this.msLastFrame = currentTime;
          if (this.isActive) window.requestAnimationFrame(this.run);
        };
      }
    }
  
    changeCb(cb) {
      this.cb = cb;
    }
  
    start() {
      this.msLastFrame = performance.now();
      this.isActive = true;
      window.requestAnimationFrame(this.run);
      return this;
    }
  
    stop() {
      this.isActive = false;
      return this;
    }
}



const particles = [];
const fireworks = [];

class Particle {
    constructor(x, y, colorObj, bornTime) {
        this.x = x;
		this.y = y;
		this.startX = x;
		this.startY = y;
		this.speed = Math.random()/2;
		this.angle = Math.random() * 2 * Math.PI;            //
		this.color = colorObj;
		this.gravity = 1/1000;
		this.speedX0 = this.speed * Math.cos(this.angle);
		this.speedY0 = this.speed * Math.sin(this.angle);
		this.lastX = this.x;
		this.lastY = this.y;
		this.alpha = 0.6 + 0.4 * Math.random();
		this.decay = (10 + 40 * Math.random())/800;
		this.bornTime = bornTime; 
    }

    update(index, tNow) {
        this.lastX = this.x;
        this.lastY = this.y;
        var timeSpan = tNow - this.bornTime;
        this.x = this.startX + this.speedX0 * timeSpan;
        this.y = this.startY + this.speedY0 * timeSpan + 0.5 * this.gravity * timeSpan * timeSpan;
        this.alpha -= this.decay;
        if(this.alpha < 0.05 || outRange(this.x,this.y,cvsWidth,cvsHeight)){
         particles.splice(index,1);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.lastX,this.lastY);
        ctx.lineTo(this.x,this.y);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(' + this.color.red + ',' + this.color.green + ',' +this.color.blue + ',' + this.alpha + ')';
        ctx.stroke();
    }
}

class Firework {
    constructor(startX, startY, colorObj, bornTime) {
        this.x = startX;
        this.y = startY;
        this.speed = -Math.random() * 0.1;
        this.endX = startX;
        this.endY = 100 + 200* Math.random();
        this.color = colorObj;
        this.alpha = 0.6 + 0.4 * Math.random();
        this.bornTime = bornTime;
        this.coordLast = [
         {x: this.x,y: this.y},
         {x: this.x,y: this.y},
         {x: this.x,y: this.y}
        ];
        this.tLast = bornTime;
        this.accerlation = - (0.002 + 0.003 * Math.random());
    }

    update(index, tNow) {
       this.coordLast[2].y = this.coordLast[1].y;
       this.coordLast[1].y = this.coordLast[0].y;
       this.coordLast[0].y = this.y;
       this.y += this.speed * (tNow - this.tLast);
       this.tLast = tNow;
       this.speed += this.accerlation;
       if(this.y <= this.endY){
        fireworks.splice(index,1);
        createParticles(this.endX,this.endY,200 + 500 *Math.random(), tNow);
       }
    }
    
    draw() {
      ctx.beginPath();
      let rand = Math.round(Math.random() * 2);
      ctx.moveTo(this.x,this.coordLast[rand].y);
      ctx.lineTo(this.x,this.y);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(' + this.color.red + ',' + this.color.green + ',' +this.color.blue + ',' + this.alpha + ')';
      ctx.stroke();
    }
}

const outRange = function(x,y,w,h){
    return x < 0 || x > w || y < 0 || y > h;
}

const createParticles = function(x,y,counts, bornTime){
    for(var i = 0;i < counts;i++){
        particles.push(new Particle(x,y,getRandomColor(),bornTime));
    }
}


const getRandomColor = function(){
    var red =Math.round(255 * Math.random());
    var green =Math.round(255 * Math.random());
    var blue =Math.round(255 * Math.random());
    return {
        red: red,
        green: green,
        blue: blue
    };
}

const updateParticles = function(t){
    for(let i = particles.length - 1;i >= 0; i--){
        particles[i].update(i,t);
    }
}

const drawParticles = function(){
    for(let i = particles.length - 1;i >= 0; i--){
        particles[i].draw();
    }
}

const createFirework = function(bornTime){
    // let bornTime = +new Date();
    fireworks.push(new Firework((0.1 + 0.8 * Math.random()) * cvsWidth,cvsHeight ,getRandomColor(),bornTime));

}

const updateFireworks = function(t){
    for(let i = fireworks.length - 1;i >= 0;i--){
        fireworks[i].update(i,t);
    }
}

const drawFireworks = function(){
    for(let i = fireworks.length - 1;i >= 0;i--){
        fireworks[i].draw();
    }
}

const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');

const { width: cvsWidth, height: cvsHeight } = canvas.getBoundingClientRect();

let tNow = 0;
let timeStart = performance.now();
let createFireworAccu = 0;
var new_loop = new RenderLoop((dt, totalTime) => {
    totalTime *= 0.66;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0,0,cvsWidth,cvsHeight);
    updateParticles(totalTime);
    updateFireworks(totalTime);
    ctx.globalCompositeOperation = 'lighter';
    drawParticles();
    drawFireworks();
    createFireworAccu += dt * 1000;
    if (createFireworAccu >= 500) {
      createFirework(totalTime);
      createFireworAccu = 0;
    }
})

function start1(){
    document.getElementById('cvs').style.opacity = 1
    new_loop.start()
}

function stop1(){
    document.getElementById('cvs').style.opacity = 0
    new_loop.stop()
}
