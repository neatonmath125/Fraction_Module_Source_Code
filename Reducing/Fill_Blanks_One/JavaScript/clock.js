var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var timout_explain;
var explanation;
var explanation255;
var timeout_alert;
var time_checker = true;
var correct_blank;
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var title = ["_one","_two","_three","_four","_five","_six",]

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

function opacity_setter(){
    var list1 = ["5022","5023","5024","5025","5026","5027"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5022 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 4);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("current_exercise","5022" );
    localStorage.setItem("next_exercise","5023" );
    localStorage.setItem("practice_title","Fill In The Blanks One/One");
    document.location.href = "game.php"}
}

function easy(){
    if(5023 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 4);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("current_exercise","5023" );
    localStorage.setItem("next_exercise","5024" );
    localStorage.setItem("practice_title","Fill In The Blanks One/Two");
    document.location.href = "game.php"}
}

function easy_average(){
    if(5024 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 4);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("current_exercise","5024" );
    localStorage.setItem("next_exercise","5025" );
    localStorage.setItem("practice_title","Fill In The Blanks One/Three");
    document.location.href = "game.php"}
}

function average(){
    if(5025 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 4);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("current_exercise","5025" );
    localStorage.setItem("next_exercise","5026" );
    localStorage.setItem("practice_title","Fill In The Blanks One/Four");
    document.location.href = "game.php"}
}

function hard(){
    if(5026 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif",7);
    localStorage.setItem("den_dif",11);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("current_exercise","5026" );
    localStorage.setItem("next_exercise","5027" );
    localStorage.setItem("practice_title","Fill In The Blanks One/Five");
    document.location.href = "game.php"}
}

function very_hard(){
    if(5027 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif",7);
    localStorage.setItem("den_dif", 11);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("current_exercise","5027" );
    localStorage.setItem("next_exercise","5028" );
    localStorage.setItem("practice_title","Fill In The Blanks One/Six");
    document.location.href = "game.php"}
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
    var numerator = []
    while(numerator.length < 1){
    var r = Math.floor(Math.random()*num_dif) + 1;
    numerator.push(r);
    }
    var denominator = []
    var counter = 0
    while(denominator.length < 1){
    var r = Math.floor(Math.random() *den_dif) + 1;
    var mod = r%numerator[counter]
    if(numerator[counter] < r){
    	if(numerator[counter] ===1){
        	denominator.push(r)
        	counter+=1
            }
        else if(mod!=0 && common(numerator[counter],r)==true){
            denominator.push(r)
        	counter+=1
        	}
    }
}
    final = []
    for(var i = 0; i < numerator.length; i ++){
    var temp1 = numerator[i]
    var temp2 = denominator[i]
    final.push([temp1, temp2])
    }
    return final;   
}

function scalar_answer(){
    var r = Math.floor(Math.random()*scalar) + 2;
    var found = false
    while(found == false){
        var b = Math.floor(Math.random()*scalar) + 4;
        if (b > r){
            found = true
        };
    };
    return [r,b]
}

function equiv(){
    var r = Math.floor(Math.random()*scalar) + 2
    return r
}

function answer(starter12,scalar){
    var temp = equiv()
    var num = temp*starter12[0]
    var den = temp*starter12[1]
    return [num,den]
}

function which_one(){
    var r = Math.floor(Math.random()*4)
    return r
}

function replacer(starter,scalar, answer, which_one){
    if(which_one ==0){
        correct_blank = starter[0]
        starter[0] = "?"
        return [starter,scalar,answer]
    }
    else if(which_one ==1){
        correct_blank = starter[1]
        starter[1] = "?"
        return [starter,scalar,answer]
    }
    else if(which_one ==2){
        correct_blank = answer[0]
        answer[0] = "?"
        return [starter,scalar,answer]
    }
    else{
        correct_blank = answer[1]
        answer[1] = "?"
        return [starter,scalar,answer]
    }
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

function check_if_in(array,number){
    for(var x = 0; x < array.length; x++){
        if(array[x] == number){
            return false
        }
    }
    return true
}

function answer_generator(){
    var numerator = []
    numerator.push(correct_blank)
    while(numerator.length < 5){
    var r = Math.floor(Math.random()*(correct_blank+5));
    if(check_if_in(numerator,r)==true){
        numerator.push(r);
        }
    }
    var answer = shuffle(numerator)
    return answer
}



function explain(first, second){
    var string  = "Sorry, thats not the correct answer. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1]
    return string
}

function explain255(first, second){
    var string  = "Good Job! Your answer is correct. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1]
    return string
}


function master(){
    if(turns < target){
    turn_on()
    var clock = document.getElementById("clock")
    clock.className = "clock"
    var starter6 = generator()
    var starter5 = starter6[0]
    var scalar5 = scalar_answer()
    var answer5 = answer(starter5,scalar5)
    explanation = explain(starter5,answer5)
    explanation255 = explain255(starter5,answer5)
    var which_one5 = which_one()
    var master_found = replacer(starter5,scalar5, answer5, which_one5)
    answers = answer_generator()
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var correct2 = document.getElementById("correct_two")
    var correct3 = document.getElementById("correct_three")
    choice1.setAttribute('top',answers[0])
    choice2.setAttribute('top',answers[1])
    choice3.setAttribute('top',answers[2])
    choice4.setAttribute('top',answers[3])
    choice5.setAttribute('top',answers[4])
    correct2.setAttribute('top',master_found[0][0])
    correct2.setAttribute('bottom',master_found[0][1])
    correct3.setAttribute('top',master_found[2][0])
    correct3.setAttribute('bottom',master_found[2][1])
    timout_explain = setTimeout(show_alert,19800)
    timout_restarter = setTimeout(restarter1, 19900)
    timeout_master = setTimeout(master,20000)}
    else{
        var clock = document.getElementById("clock")
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_three")
        var equal = document.getElementById("equal")
        equal.style.opacity = 0
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
        if(total_points >= 160){
        practice_title = current_exercise
            document.getElementById("total_points2").className = "points_total"
            document.getElementById("total_points2").style.marginLeft=0
            document.getElementById("total_points2").style.paddingLeft=0
            document.getElementById("total_points2").style.textAlign = "center"
            document.getElementById("total_points2").style.fontSize = 75
            document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Nice, you passed!"
            if(master_id > next_exercsie){
                next_exercsie = master_id}
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
                next_exercsie = master_id}
            setTimeout(Submit,4900)
        }

    }
    // assign objects their values here
    // find that if numerator/(parseFloat(denominator))
    //https://codepen.io/WebSonick/pen/vjmgu
}

function turn_on(){
    var clock = document.getElementById("clock")
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_three")
        var equal = document.getElementById("equal")
        equal.style.opacity = 1
        clock.style.opacity = 1
        choice1.style.opacity = 1
        choice2.style.opacity = 1
        choice3.style.opacity = 1
        choice4.style.opacity = 1
        choice5.style.opacity = 1
        correct2.style.opacity = 1
        correct3.style.opacity = 1
}

function turn_off(){
    var clock = document.getElementById("clock")
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_three")
        var equal = document.getElementById("equal")
        equal.style.opacity = 0
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
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

function show_alert255(){
    window.alert(explanation255)
}

function checker(id){
    if(allowed ==true){
    var check = document.getElementById(id)
    var chosen_answer = check.getAttribute("top")
    if (correct_blank == chosen_answer){
            check_off()
            setTimeout(check_on,2000)
            total_points += 20
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
            turn_off()
            clearTimeout(timout_explain)
            clearTimeout(timout_restarter)
            clearTimeout(timeout_master)
            setTimeout(restarter, 0)
            setTimeout(master,2000)
            setTimeout(show_alert255,0)

    }
    else{
        clearTimeout(timout_explain)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)
        setTimeout(show_alert,0)
        setTimeout(restarter, 100)
        setTimeout(master,300)
    }
}}

var allowed = true
function check_on(){
allowed = true
}
function check_off(){
allowed = false
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
    clock.className = "clock_blank"
}

function start_time() {
    startTime = new Date();
  };

function end_time() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  return seconds
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