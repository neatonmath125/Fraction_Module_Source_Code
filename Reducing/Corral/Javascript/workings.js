//need a function here to get the master_id from the PHP


var bank1 = [[1,2],[1,3],[1,4],[1,5],[1,6],[1,10],[1,2],[2,3],[3,4],[2,5],[3,5],[5,6]]
var bank2 = [[2,7],[4,7],[6,7],[3,8],[5,8],[7,8],[3,5],[4,5],[5,6],[2,9],[4,9],[5,9]]
var bank3 = [[7,9],[8,9],[1,13],[2,13],[5,11],[7,10],[7,11],[4,7],[5,9],[5,11],[12,13]]
var total_banks = [bank1, bank2, bank3]
var displayed = []
var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var threshold = 240
var startTime, endTime;
var stop = false;
var target = 3;
var time_checker = true;
var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");
var corral_denom = localStorage.getItem("corral_denom");
var corral_num = localStorage.getItem("corral_num");
var answer_denom = localStorage.getItem("answer_denom");
var answer_num = localStorage.getItem("answer_num");
var corral_denom = localStorage.getItem("corral_denom");
var corral_num = localStorage.getItem("corral_num");
var answer_denom = localStorage.getItem("answer_denom");
var answer_num = localStorage.getItem("answer_num");
var selected_choice = localStorage.getItem("selected_choice")
var fish_swim = false;
var answers_correct = 0
var restarter_variable;
var master_variable;
var new12345;
var explain_list = []
var timout_explain;
var title = ["_one","_two","_three","_four","_five","_six",]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

function lets_start(){
    loop()
    opacity_setter()
}

function lets_start2(){
    loop()
    master()
}

function opacity_setter(){
    var list1 = ["5016","5017","5018","5019","5020","5021"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5016 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 3);
    localStorage.setItem("den_dif", 6);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("bank", 0);
    localStorage.setItem("current_exercise","5016" );
    localStorage.setItem("next_exercise","5017" );
    localStorage.setItem("practice_title","Corral" + title[0]);
    document.location.href = "game.php"}
}

function easy(){
    if(5017 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 3);
    localStorage.setItem("den_dif", 6);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("bank", 0);
    localStorage.setItem("current_exercise","5017" );
    localStorage.setItem("next_exercise","5018" );
    localStorage.setItem("practice_title","Corral" + title[1]);
    document.location.href = "game.php"}
}

function easy_average(){
    if(5018 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 6);
    localStorage.setItem("den_dif", 9);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("bank", 1);
    localStorage.setItem("current_exercise","5018" );
    localStorage.setItem("next_exercise","5019" );
    localStorage.setItem("practice_title","Corral" + title[2]);
    document.location.href = "game.php"}
}

function average(){
    if(5019 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 6);
    localStorage.setItem("den_dif", 9);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("bank", 1);
    localStorage.setItem("current_exercise","5019" );
    localStorage.setItem("next_exercise","5020" );
    localStorage.setItem("practice_title","Corral" + title[3]);
    document.location.href = "game.php"}
}

function hard(){
    if(5020 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif",9);
    localStorage.setItem("den_dif",12);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("bank", 2);
    localStorage.setItem("current_exercise","5020" );
    localStorage.setItem("next_exercise","5021" );
    localStorage.setItem("practice_title","Corral" + title[4]);
    document.location.href = "game.php"}
}

function very_hard(){
    if(5021 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif",9);
    localStorage.setItem("den_dif", 12);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("bank", 2);
    localStorage.setItem("current_exercise","5021" );
    localStorage.setItem("next_exercise","5022" );
    localStorage.setItem("practice_title","Corral" + title[5]);
    document.location.href = "game.php"}
}

function restarter(){
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var choice6 = document.getElementById("choice_six")
    var choice7 = document.getElementById("choice_seven")
    var choice8 = document.getElementById("choice_eight")
    var choice9 = document.getElementById("choice_nine")
    var choice10 = document.getElementById("choice_ten")
    var answer1 = document.getElementById("correct_one")
    var answer2 = document.getElementById("correct_two")
    var answer3 = document.getElementById("correct_three")
    var answer4 = document.getElementById("correct_four")
    var answer5 = document.getElementById("correct_five")
    choice1.style.backgroundColor = "White"
    choice2.style.backgroundColor = "White"
    choice3.style.backgroundColor = "White"
    choice4.style.backgroundColor = "White"
    choice5.style.backgroundColor = "White"
    choice6.style.backgroundColor = "White"
    choice7.style.backgroundColor = "White"
    choice8.style.backgroundColor = "White"
    choice9.style.backgroundColor = "White"
    choice10.style.backgroundColor = "White"
    choice1.style.opacity = 1
    choice2.style.opacity = 1
    choice3.style.opacity = 1
    choice4.style.opacity = 1
    choice5.style.opacity = 1
    choice6.style.opacity = 1
    choice7.style.opacity = 1
    choice8.style.opacity = 1
    choice9.style.opacity = 1
    choice10.style.opacity = 1
    answer1.style.opacity = 1
    answer2.style.opacity = 1
    answer3.style.opacity = 1
    answer4.style.opacity = 1
    answer5.style.opacity = 1
    var clock = document.getElementById("clock")
    clock.className = "clock_blank"
    turns+=1
}


function selector(id){
    var check = document.getElementById(id)
    var numerator = check.getAttribute("top")
    var denominator = check.getAttribute("bottom")
    localStorage.setItem("corral_denom", denominator);
    localStorage.setItem("corral_num", numerator);
    localStorage.setItem("selected_choice", id);
    corral_denom = localStorage.getItem("corral_denom");
    corral_num = localStorage.getItem("corral_num");
    var choice1 = document.getElementById("correct_one")
    var choice2 = document.getElementById("correct_two")
    var choice3 = document.getElementById("correct_three")
    var choice4 = document.getElementById("correct_four")
    var choice5 = document.getElementById("correct_five")
    choice1.style.backgroundColor = "White"
    choice2.style.backgroundColor = "White"
    choice3.style.backgroundColor = "White"
    choice4.style.backgroundColor = "White"
    choice5.style.backgroundColor = "White"
    check.style.backgroundColor = "rgb(55, 168, 233)"
}

function checker(id){
    var check = document.getElementById(id)
    var numerator = check.getAttribute("top")
    var denominator = check.getAttribute("bottom")
    var selected_choice = localStorage.getItem("selected_choice")
    document.getElementById(selected_choice).style.backgroundColor = "White"
    if(corral_denom != 0 && corral_denom != 0){
        if (corral_num/parseFloat(corral_denom) === numerator/parseFloat(denominator)){
            check.style.opacity = 0
            localStorage.setItem("corral_denom", 0);
            localStorage.setItem("corral_num", 0);
            localStorage.setItem("answer_denom", 0);
            localStorage.setItem("answer_num", 0);
            document.getElementById(selected_choice).style.opacity = 0
            document.getElementById(selected_choice).setAttribute('top',0)
            document.getElementById(selected_choice).setAttribute('bottom',0)
            document.getElementById("fish").style.animationPlayState = "running"
            total_points += 20
            document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 Turns: " + turns +"/3"
            answers_correct+=1
            if(fish_swim == false){
            fish_swim = true
            new12345 = setTimeout(setter, 5000)
            }
        }
    }
    if(answers_correct==5){
        answers_correct = 0
        clearTimeout(timout_explain)
        clearTimeout(restarter_variable)
        clearTimeout(master_variable)
        setTimeout(restarter,0)
        setTimeout(master, 100)
    }
}

function setter(){
    document.getElementById("fish").style.animationPlayState = "paused"
    fish_swim = false
}

function already_there(counter,list1, list2, possible){
    var test = list1[counter]
    for(var x = 0; x < list2.length; x++){
        if(list2[x] == possible){
            if(list1[x] == test){
                list1[counter] = bailout
                return true;
            }
        }
    }
    return false;
}

function common(var1,var2){
    var min1 = Math.min(var1,var2)
    for(var x=2; x<min1; x++){
        if(var1%x ==0 && var2%x ==0){
            return false
        }
    }
    return true
}
//
function generator(){
    shuffle(total_banks[bank_number])
    final = []
    for(var i = 0; i < 10; i ++){
    final.push(total_banks[bank_number][i])
    }
    return final;   
}

function answer(numerator, denominator){
    var r = Math.floor(Math.random()*scalar) + 2;
    var new_num = r*numerator
    var new_den = r*denominator
    var list1 = [new_num, new_den]
    return list1;
}

var bank_number

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
    if(turns < target){
    var choice1 = document.getElementById("correct_one")
        var choice2 = document.getElementById("correct_two")
        var choice3 = document.getElementById("correct_three")
        var choice4 = document.getElementById("correct_four")
        var choice5 = document.getElementById("correct_five")
        choice1.style.backgroundColor = "White"
        choice2.style.backgroundColor = "White"
        choice3.style.backgroundColor = "White"
        choice4.style.backgroundColor = "White"
        choice5.style.backgroundColor = "White"
    start_time()
    bank_number = localStorage.getItem("bank");
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 Turns: " + turns +"/3"
    localStorage.setItem("corral_denom", 0);
    localStorage.setItem("corral_num", 0);
    localStorage.setItem("answer_denom", 0);
    localStorage.setItem("answer_num", 0);
    var clock = document.getElementById("clock")
    clock.className = "clock"
    var cases = generator()
    var displayed = []
    var seen = {}
    explain_list = []
    while(displayed.length < 5){
    var temp = Math.floor(Math.random()*9) + 1;
    if(!(temp in seen)){
    seen[temp] = 0
    var display_num = cases[temp][0]
    var display_den = cases[temp][1]
    var display_question = answer(display_num,display_den)
    explain_list.push([display_num,display_den,display_question[0],display_question[1]])
    displayed.push(display_question)
    }
    }
    var correct1 = document.getElementById("correct_one")
    var correct2 = document.getElementById("correct_two")
    var correct3 = document.getElementById("correct_three")
    var correct4 = document.getElementById("correct_four")
    var correct5 = document.getElementById("correct_five")
    var correct_fractions = []
    correct_fractions.push(correct1)
    correct_fractions.push(correct2)
    correct_fractions.push(correct3)
    correct_fractions.push(correct4)
    correct_fractions.push(correct5)
    for(var x = 0; x < correct_fractions.length; x++){
        correct_fractions[x].setAttribute('top',displayed[x][0])
        correct_fractions[x].setAttribute('bottom',displayed[x][1])
    }
    choice_fractions = []
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var choice6 = document.getElementById("choice_six")
    var choice7 = document.getElementById("choice_seven")
    var choice8 = document.getElementById("choice_eight")
    var choice9 = document.getElementById("choice_nine")
    var choice10 = document.getElementById("choice_ten")
    choice_fractions.push(choice1)
    choice_fractions.push(choice2)
    choice_fractions.push(choice3)
    choice_fractions.push(choice4)
    choice_fractions.push(choice5)
    choice_fractions.push(choice6)
    choice_fractions.push(choice7)
    choice_fractions.push(choice8)
    choice_fractions.push(choice9)
    choice_fractions.push(choice10)
    for(var x = 0; x < choice_fractions.length; x++){
        choice_fractions[x].setAttribute('top',cases[x][0])
        choice_fractions[x].setAttribute('bottom',cases[x][1])
    }
    timout_explain = setTimeout(explainer_show,44800)
    restarter_variable =  setTimeout(restarter,44900)
    master_variable = setTimeout(master,45000)
    }
    else{
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var choice6 = document.getElementById("choice_six")
    var choice7 = document.getElementById("choice_seven")
    var choice8 = document.getElementById("choice_eight")
    var choice9 = document.getElementById("choice_nine")
    var choice10 = document.getElementById("choice_ten")
    choice1.style.opacity = 0
    choice2.style.opacity = 0
    choice3.style.opacity = 0
    choice4.style.opacity = 0
    choice5.style.opacity = 0
    choice6.style.opacity = 0
    choice7.style.opacity = 0
    choice8.style.opacity = 0
    choice9.style.opacity = 0
    choice10.style.opacity = 0
    var correct1 = document.getElementById("correct_one")
    var correct2 = document.getElementById("correct_two")
    var correct3 = document.getElementById("correct_three")
    var correct4 = document.getElementById("correct_four")
    var correct5 = document.getElementById("correct_five")
    correct1.style.opacity = 0
    correct2.style.opacity = 0
    correct3.style.opacity = 0
    correct4.style.opacity = 0
    correct5.style.opacity = 0
    document.getElementById("clock").className = "black_clock"
    if(total_points >= threshold){
    practice_title = current_exercise
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 <br> Congrats, you passed! "
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        clearTimeout(new12345)
        setInterval(document.getElementById("fish").style.animationPlayState = "running",100)
        setTimeout(Submit,5900)
        //setTimeout(return_index,6000)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 <br> Almost, try again! "
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        next_exercsie = current_exercise
        setTimeout(Submit,5900)
        //setTimeout(return_index,6000)
    }
    }
}


function explainer(){
    var string = "Sorry, you didn't answer all of the questions. \r\n \r\n"
    string += explain_list[0][0]+'/'+explain_list[0][1] + " x " + explain_list[0][2]/explain_list[0][0] + "/" + explain_list[0][2]/explain_list[0][0] + " = " + explain_list[0][2]+'/'+explain_list[0][3] + "\r\n"
    string += explain_list[1][0]+'/'+explain_list[1][1] + " x " + explain_list[1][2]/explain_list[1][0] + "/" + explain_list[1][2]/explain_list[1][0] + " = " + explain_list[1][2]+'/'+explain_list[1][3] + "\r\n"
    string += explain_list[2][0]+'/'+explain_list[2][1] + " x " + explain_list[2][2]/explain_list[2][0] + "/" + explain_list[2][2]/explain_list[2][0] + " = " + explain_list[2][2]+'/'+explain_list[2][3] + "\r\n"
    string += explain_list[3][0]+'/'+explain_list[3][1] + " x " + explain_list[3][2]/explain_list[3][0] + "/" + explain_list[3][2]/explain_list[3][0] + " = " + explain_list[3][2]+'/'+explain_list[3][3] + "\r\n"
    string += explain_list[4][0]+'/'+explain_list[4][1] + " x " + explain_list[4][2]/explain_list[4][0] + "/" + explain_list[4][2]/explain_list[4][0] + " = " + explain_list[4][2]+'/'+explain_list[4][3] + "\r\n"
    return string
}

function explainer_show(){
    var answer = explainer()
    window.alert(answer)
}

function start_time() {
    startTime = new Date();
  };

function game(){
    document.location.href = "game.php"
}

function instructions(){
    document.location.href = "instructions.php"
}

function return_index(){
    document.location.href = "index.php"
}

var canvas = document.getElementById('bgCanvas');
var ctx = canvas.getContext('2d');
var particles = [];
var particleCount = 300;

for(var i=0; i<particleCount;i++)
  particles.push(new particle());

function particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 300;
  this.speed =  Math.random() < 0.5 ? .25 : .15;
  this.radius = Math.random() * 3;
  this.opacity = (Math.random() * 100) / 1000;
}


function loop() {
  requestAnimationFrame(loop);
  draw();
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = 'lighter';
  for(var i=0; i<particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2, false);
    ctx.fill();
    p.y -= p.speed;
    if(p.y <= -10)
      particles[i] = new particle();
  }
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
        //document.getElementById("end").innerHTML+=" - inside submit ";
        // document.getElementById("commentEnd").innerHTML="in Submit percent "+percent+" ; average time "+averageTime+" ; pass "+pass+";";
	NumberCorrect.value=total_points/20;
	NumberAttempted.value=15;
	Time.value=0;
	Percent.value=(total_points/300)*100;
	PracticeTitle.value=practice_title;
    PracticeId.value=current_exercise;
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
