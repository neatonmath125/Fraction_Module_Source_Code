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
var fish_swim = false;
var answers_correct = 0
var restarter_variable;
var master_variable;
var new12345;
var explain_list = []
var timout_explain;
var title = ["_one","_two","_three","_four","_five","_six",]

///////
//////

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [[1,1,2],[1,1,3],[1,2,3],[1,1,4],[1,3,4],[1,1,5],[1,2,5],[1,3,5],[1,4,5],[1,1,10],[2,1,2],[2,1,3],[2,2,3],[2,1,4],[2,3,4],[2,1,5],[2,2,5],[2,3,5],[2,4,5],[2,1,10]]
var Set3 = [[3,1,2],[3,1,3],[3,2,3],[3,1,4],[3,3,4],[3,1,5],[3,2,5],[3,3,5],[3,4,5],[3,1,10],[4,1,2],[4,1,3],[4,2,3],[4,1,4],[4,3,4],[4,1,5],[4,2,5],[4,3,5],[4,4,5],[4,1,10]]
var question_master = [Set1,Set3]

function lets_start(){
    loop()
    opacity_setter()
    master()
}

function selector(id){
    var check = document.getElementById(id)
    var new_id = id+"2"
    var newer5 = document.getElementById(new_id)
    var whole = newer5.getAttribute("top")
    var numerator = check.getAttribute("top")
    var denominator = check.getAttribute("bottom")
    localStorage.setItem("corral_denom", denominator);
    localStorage.setItem("corral_num", (denominator * whole) + numerator);
    localStorage.setItem("selected_choice", id);
    localStorage.setItem("selected_choice2", new_id);
    corral_denom = localStorage.getItem("corral_denom");
    corral_num = localStorage.getItem("corral_num");
    var choice1 = document.getElementById("correct_one")
    var choice2 = document.getElementById("correct_one2")
    var choice3 = document.getElementById("correct_two")
    var choice4 = document.getElementById("correct_two2")
    var choice5 = document.getElementById("correct_three")
    var choice6 = document.getElementById("correct_three2")
    var choice7 = document.getElementById("correct_four")
    var choice8 = document.getElementById("correct_four2")
    var choice9 = document.getElementById("correct_five")
    var choice10 = document.getElementById("correct_five2")
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
    check.style.backgroundColor = "green"
    newer5.style.backgroundColor = "green"
}

function animation_start(){
    document.getElementById("plane").style.animationPlayState = "running"
}

function animation_stop(){
    document.getElementById("plane").style.animationPlayState = "paused"
}

function switch_animation(){
    animation_on = false
}
var animation_on = false

function checker(id){
    var check = document.getElementById(id)
    var numerator = check.getAttribute("top")
    var denominator = check.getAttribute("bottom")
    var selected_choice = localStorage.getItem("selected_choice")
    var selected_choice2 = localStorage.getItem("selected_choice2")
    var whole = parseInt(document.getElementById(selected_choice2).getAttribute("top"))
    var top  = parseInt(document.getElementById(selected_choice).getAttribute("top"))
    var bottom = parseInt(document.getElementById(selected_choice).getAttribute("bottom"))
    document.getElementById(selected_choice).style.backgroundColor = "White"
    document.getElementById(selected_choice2).style.backgroundColor = "White"
    if(corral_denom != 0 && corral_denom != 0){
        if (((bottom * whole) + top) == numerator && bottom == denominator){
            check.style.opacity = 0
            localStorage.setItem("corral_denom", 0);
            localStorage.setItem("corral_num", 0);
            localStorage.setItem("answer_denom", 0);
            localStorage.setItem("answer_num", 0);
            document.getElementById(selected_choice).style.opacity = 0
            document.getElementById(selected_choice2).style.opacity = 0
            document.getElementById(selected_choice).setAttribute('top',0)
            document.getElementById(selected_choice).setAttribute('bottom',0)
            document.getElementById(selected_choice2).setAttribute('top',0)
            total_points += 20
            document.getElementById("plane1").className = "nothing"
            document.getElementById("plane1").className = "plane-frame"
            if(animation_on == false){
            animation_on = true
            setTimeout(switch_animation,5000)
            animation_start()
            setTimeout(animation_stop,5000)
            }
            document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 Turns: " + turns +"/3"
            answers_correct+=1
        }
    }
    if(answers_correct==5){
        answers_correct = 0
        turns +=1
        document.getElementById("clock").className = "nothing"
        clearTimeout(timout_explain)
        clearTimeout(restarter_variable)
        clearTimeout(master_variable)
        setTimeout(master, 4000)
    }
}

function lets_start2(){
    loop()
    master()
}

function opacity_setter(){
    var list1 = ["5047","5048"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5047 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5047" );
    localStorage.setItem("next_exercise","5048" );
    localStorage.setItem("practice_title","Covert Operations B Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5048 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5048" );
    localStorage.setItem("next_exercise","5049" );
    localStorage.setItem("practice_title","Covert Operations B Workout 2");
    document.location.href = "game.php"}
}


function loader(){
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
    var choice11 = document.getElementById("correct_one")
    var choice21= document.getElementById("correct_one2")
    var choice31 = document.getElementById("correct_two")
    var choice41 = document.getElementById("correct_two2")
    var choice51 = document.getElementById("correct_three")
    var choice61 = document.getElementById("correct_three2")
    var choice71 = document.getElementById("correct_four")
    var choice81 = document.getElementById("correct_four2")
    var choice91 = document.getElementById("correct_five")
    var choice101 = document.getElementById("correct_five2")
    choice11.style.opactiy = 0
    choice21.style.opactiy = 0
    choice31.style.opactiy = 0
    choice41.style.opactiy = 0
    choice51.style.opactiy = 0
    choice61.style.opactiy = 0
    choice71.style.opactiy = 0
    choice81.style.opactiy = 0
    choice91.style.opactiy = 0
    choice101.style.opactiy = 0
    var choice55 = document.getElementById("p1")
    choice55.style.opacity=0
    document.getElementById("clock").opacity = 0
}

function restarter(){
    turns +=1
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
    var choice1 = document.getElementById("correct_one")
    var choice2 = document.getElementById("correct_one2")
    var choice3 = document.getElementById("correct_two")
    var choice4 = document.getElementById("correct_two2")
    var choice5 = document.getElementById("correct_three")
    var choice6 = document.getElementById("correct_three2")
    var choice7 = document.getElementById("correct_four")
    var choice8 = document.getElementById("correct_four2")
    var choice9 = document.getElementById("correct_five")
    var choice10 = document.getElementById("correct_five2")
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
    var clock = document.getElementById("clock")
    clock.className = "clock_blank"
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
    document.getElementById("plane").className = "plane-container"
    var set_number = localStorage.getItem("chosen_set");
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 Turns: " + turns +"/3"
    var clock = document.getElementById("clock")
    clock.className = "clock"
    answer = question_master[set_number]
    shuffle(answer)
    var selected_answer = []
    for (var x = 0; x< 10; x++){
        selected_answer.push(answer[x])
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
        correct_fractions[x].setAttribute('top',selected_answer[x][1])
        correct_fractions[x].setAttribute('bottom',selected_answer[x][2])
        correct_fractions[x].style.opacity = 1
    }
    var correct12 = document.getElementById("correct_one2")
    var correct22 = document.getElementById("correct_two2")
    var correct32 = document.getElementById("correct_three2")
    var correct42 = document.getElementById("correct_four2")
    var correct52 = document.getElementById("correct_five2")
    var correct_fractions2 = []
    correct_fractions2.push(correct12)
    correct_fractions2.push(correct22)
    correct_fractions2.push(correct32)
    correct_fractions2.push(correct42)
    correct_fractions2.push(correct52)
    for(var x = 0; x < correct_fractions2.length; x++){
        correct_fractions2[x].setAttribute('top',selected_answer[x][0])
        correct_fractions2[x].style.opacity = 1
    }
    shuffle(selected_answer)
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
        choice_fractions[x].setAttribute('top',selected_answer[x][0] * selected_answer[x][2] + selected_answer[x][1])
        choice_fractions[x].setAttribute('bottom',selected_answer[x][2])
        choice_fractions[x].style.opacity = 1

    }
    timout_explain = setTimeout(loader,60000)
    restarter_variable = setTimeout(restarter,62900)
    master_variable = setTimeout(master,63000)
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
        var choice11 = document.getElementById("correct_one")
        var choice21 = document.getElementById("correct_one2")
        var choice31 = document.getElementById("correct_two")
        var choice41 = document.getElementById("correct_two2")
        var choice51 = document.getElementById("correct_three")
        var choice61 = document.getElementById("correct_three2")
        var choice71 = document.getElementById("correct_four")
        var choice81 = document.getElementById("correct_four2")
        var choice91 = document.getElementById("correct_five")
        var choice101 = document.getElementById("correct_five2")
        choice11.style.opactiy = 0
        choice21.style.opactiy = 0
        choice31.style.opactiy = 0
        choice41.style.opactiy = 0
        choice51.style.opactiy = 0
        choice61.style.opactiy = 0
        choice71.style.opactiy = 0
        choice81.style.opactiy = 0
        choice91.style.opactiy = 0
        choice101.style.opactiy = 0
    document.getElementById("clock").className = "black_clock"
    if(total_points >= 270){
    practice_title = current_exercise
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 <br> Congrats, you passed! "
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,4000)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/300 <br> Almost, try again! "
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        next_exercsie = current_exercise
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,4000)
    }
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
        //document.getElementById("comment1").innerHTML="inside submit ";
        // document.getElementById("commentEnd").innerHTML="in Submit percent "+percent+" ; average time "+averageTime+" ; pass "+pass+";";
	NumberCorrect.value=total_points/20;
        NumberAttempted.value=15;
	Time.value=0;
	Percent.value=(total_points/300)*100;
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
    answers_correct+=1
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

