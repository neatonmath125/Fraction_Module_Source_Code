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

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")



var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");

function directions(){
    document.location.href = "instructions.php"
}

function opacity_setter(){
    var list1 = ["5028","5029","5030","5031","5032","5033"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5028 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 4);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("practice_title","Fill In The Blanks Two/One");
    localStorage.setItem("current_exercise","5028" );
    localStorage.setItem("next_exercise","5029" );
    document.location.href = "game.php"}
}

function easy(){
    if(5029 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 4);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("practice_title","Fill In The Blanks Two/Two");
    localStorage.setItem("current_exercise","5029" );
    localStorage.setItem("next_exercise","5030" );
    document.location.href = "game.php"}
}

function easy_average(){
    if(5030 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 4);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("practice_title","Fill In The Blanks Two/Three");
    localStorage.setItem("current_exercise","5030" );
    localStorage.setItem("next_exercise","5031" );
    document.location.href = "game.php"}
}

function average(){
    if(5031 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif", 4);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("practice_title","Fill In The Blanks Two/Four");
    localStorage.setItem("current_exercise","5031" );
    localStorage.setItem("next_exercise","5032" );
    document.location.href = "game.php"}
}

function hard(){
    if(5032 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif",7);
    localStorage.setItem("den_dif",12);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("practice_title","Fill In The Blanks Two/Five");
    localStorage.setItem("current_exercise","5032" );
    localStorage.setItem("next_exercise","5033" );
    document.location.href = "game.php"}
}

function very_hard(){
    if(5033 <= master_id){
    localStorage.setItem("scalar", 5);
    localStorage.setItem("num_dif",7);
    localStorage.setItem("den_dif", 12);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("practice_title","Fill In The Blanks Two/Six");
    localStorage.setItem("current_exercise","5033" );
    localStorage.setItem("next_exercise","5035" );
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

function scalar_answer(starter){
    var r = Math.floor(Math.random()*scalar) + 2;
    var one = starter[0]*r
    var two = starter[1]*r
    return [one,two]
}

function answer(scalar5){
    var r = Math.floor(Math.random()*scalar) + 2;
    var num = r*scalar5[0]
    var den = r*scalar5[1]
    return [num,den]
}

function which_one(){
    var answer = []
    var r = Math.floor(Math.random()*4)
    answer.push(r)
    while(answer.length < 2){
        if(r < 2){
            var b = Math.floor(Math.random()*2) +2
            answer.push(b)
        } 
        else{
            var b = Math.floor(Math.random()*2)
            answer.push(b)
        }
    };
    if(answer[1] < answer[0]){
        return [answer[1],answer[0]]
    }
    return answer
}

function replacer(starter11,scalar11, answer11, which_one){
    if(which_one[0] ==0){
        correct_blank_one = scalar11[0]
        scalar11[0] = "?"
    }
    else if(which_one[0] ==1){
        correct_blank_one = scalar11[1]
        scalar11[1] = "?"
    }
    else if(which_one[0] ==2){
        correct_blank_one = answer11[0]
        answer11[0] = "?"
    }
    else if(which_one[0] ==3){
        correct_blank_one = answer11[1]
        answer11[1] = "?"
    }
    if(which_one[1] ==0){
        correct_blank_two = scalar11[0]
        scalar11[0] = "?"
        return [starter11,scalar11,answer11]
    }
    else if(which_one[1] ==1){
        correct_blank_two = scalar11[1]
        scalar11[1] = "?"
        return [starter11,scalar11,answer11]
    }
    else if(which_one[1] ==2){
        correct_blank_two = answer11[0]
        answer11[0] = "?"
        return [starter11,scalar11,answer11]
    }
    else if(which_one[1] ==3){
        correct_blank_two = answer11[1]
        answer11[1] = "?"
        return [starter11,scalar11,answer11]
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
    var correct = [correct_blank_one,correct_blank_two]
    numerator.push(correct);
    numerator.push([correct_blank_one+1,correct_blank_two+1]);
    numerator.push([correct_blank_one+2,correct_blank_two+2]);
    numerator.push([correct_blank_one-1,correct_blank_two-1]);
    numerator.push([correct_blank_one-2,correct_blank_two-2]);
    shuffle(numerator)
    return numerator
}

function explain(first, second, third){
    var string  = "Sorry, both of your answers are incorrect. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1] + "\r\n \r\n"
    string += second[0] + "/" + second[1] + " x " + third[0]/second[0] + "/" + third[0]/second[0] + " = "
    string += third[0] + "/" + third[1] + "." + "\r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + third[0]/first[0] + "/" + third[0]/first[0] +" = "
    string += third[0] + "/" + third[1] + " ." 
    return string
}

function explain_first_wrong(first, second){
    var string  = "Sorry, your first answer was not correct. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1]
    return string
}

function explain_second_wrong(first, second, third){
    var string  = "Sorry, your second answer was not correct. \r\n \r\n"
    string += second[0] + "/" + second[1] + " x " + third[0]/second[0] + "/" + third[0]/second[0] + " = "
    string += third[0] + "/" + third[1] + "." + "\r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + third[0]/first[0] + "/" + third[0]/first[0] +" = "
    string += third[0] + "/" + third[1] + " ." 
    return string
}

function alert22(first, second, third){
    var string  = "Sorry, you ran out of time, here are the anwers. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1] + "\r\n \r\n"
    string += second[0] + "/" + second[1] + " x " + third[0]/second[0] + "/" + third[0]/second[0] + " = "
    string += third[0] + "/" + third[1] + "." + "\r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + third[0]/first[0] + "/" + third[0]/first[0] +" = "
    string += third[0] + "/" + third[1] + " ." 
    return string
}

function master(){
    if(turns < target){
    turn_on()
    var clock = document.getElementById("clock")
    clock.className = "clock"
    var starter6 = generator()
    var starter5 = starter6[0]
    var scalar7 = scalar_answer(starter5)
    var new1 = scalar7[0]
    var new2 = scalar7[1]
    scalar5 = [new1,new2]
    var answer5 = answer(scalar7)
    explanation = explain(starter5, scalar7, answer5)
    explanation2 = explain_first_wrong(starter5, scalar7)
    explanation3 = explain_second_wrong(starter5, scalar7, answer5)
    explanation4 = alert22(starter5, scalar7, answer5)
    var which_one5 = which_one()
    master_found = replacer(starter5,scalar7, answer5, which_one5)
    answers = answer_generator()
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var correct1 = document.getElementById("correct_one")
    var correct2 = document.getElementById("correct_two")
    var correct3 = document.getElementById("correct_three")
    var equal = document.getElementById("equal")
    choice1.setAttribute('top',answers[0][0])
    choice2.setAttribute('top',answers[1][0])
    choice3.setAttribute('top',answers[2][0])
    choice4.setAttribute('top',answers[3][0])
    choice5.setAttribute('top',answers[4][0])
    correct1.setAttribute('top',master_found[0][0])
    correct1.setAttribute('bottom',master_found[0][1])
    correct2.setAttribute('top',master_found[1][0])
    correct2.setAttribute('bottom',master_found[1][1])
    correct3.setAttribute('top',master_found[2][0])
    correct3.setAttribute('bottom',master_found[2][1])
    correct3.style.opacity=0
    equal.style.opacity=0
    third_one = setTimeout(function(){correct3.style.opacity=1},19700)
    third_two = setTimeout(function(){equal.style.opacity=1},19700)
    timeout_alert = setTimeout(alert55,19700)
    timout_restarter = setTimeout(restarter1, 19800)
    timeout_master = setTimeout(master,20000)}
    else{
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
        if(total_points >= 160){
        practice_title = current_exercise
            document.getElementById("total_points2").className = "points_total"
            document.getElementById("total_points2").style.marginLeft=0
            document.getElementById("total_points2").style.paddingLeft=0
            document.getElementById("total_points2").style.textAlign = "center"
            document.getElementById("total_points2").style.fontSize = 100
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
            document.getElementById("total_points2").style.fontSize = 100
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

function alert1(){
    window.alert(explanation)
}

function first_wrong_explain(){
    window.alert(explanation2)
}

function second_wrong_explain(){
    window.alert(explanation3)
}

function alert55(){
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

function checker(id){
    if(allowed == true){
    var check = document.getElementById(id)
    var chosen_answer = check.getAttribute("top")
    var one = chosen_answer
    if(second_answer==false){
    if (correct_blank_one == one){
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
            var correct3 = document.getElementById("correct_three")
            var equal = document.getElementById("equal")
            equal.style.opacity = 1
            correct3.style.opacity = 1
            var choice1 = document.getElementById("choice_one")
            var choice2 = document.getElementById("choice_two")
            var choice3 = document.getElementById("choice_three")
            var choice4 = document.getElementById("choice_four")
            var choice5 = document.getElementById("choice_five")
            var correct2 = document.getElementById("correct_two")
            shuffle(answers)
            choice1.setAttribute('top',answers[0][1])
            choice2.setAttribute('top',answers[1][1])
            choice3.setAttribute('top',answers[2][1])
            choice4.setAttribute('top',answers[3][1])
            choice5.setAttribute('top',answers[4][1])
            correct2.setAttribute('top',scalar5[0])
            correct2.setAttribute('bottom',scalar5[1])
            second_answer=true
            first_wrong = false
    }
    else{
        var correct3 = document.getElementById("correct_three")
        var equal = document.getElementById("equal")
        equal.style.opacity = 1
        correct3.style.opacity = 1
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var correct2 = document.getElementById("correct_two")
        shuffle(answers)
        choice1.setAttribute('top',answers[0][1])
        choice2.setAttribute('top',answers[1][1])
        choice3.setAttribute('top',answers[2][1])
        choice4.setAttribute('top',answers[3][1])
        choice5.setAttribute('top',answers[4][1])
        correct2.setAttribute('top',scalar5[0])
        correct2.setAttribute('bottom',scalar5[1])
        second_answer=true
        first_wrong = true
    }
    }
    else{
        second_answer=false
        if (correct_blank_two == one){
            if(first_wrong == false){
                check_off()
                setTimeout(check_on,2000)
                total_points += 20
                document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
                clearTimeout(timeout_alert)
                clearTimeout(timout_restarter)
                clearTimeout(timeout_master)
                clearTimeout(third_one)
                clearTimeout(third_two)
                setTimeout(restarter, 0)
                setTimeout(master,2000)
            }
            else{
                total_points+=10
                document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
                clearTimeout(timeout_alert)
                clearTimeout(timout_restarter)
                clearTimeout(timeout_master)
                clearTimeout(third_one)
                clearTimeout(third_two)
                setTimeout(first_wrong_explain,0)
                setTimeout(restarter, 100)
                setTimeout(master,300)
            }
    }
        else{
            if(first_wrong == false){
                total_points += 10
                document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
                clearTimeout(timeout_alert)
                clearTimeout(timout_restarter)
                clearTimeout(timeout_master)
                clearTimeout(third_one)
                clearTimeout(third_two)
                setTimeout(second_wrong_explain,0)
                setTimeout(restarter, 100)
                setTimeout(master,300)
            }
            else{
                clearTimeout(third_one)
                clearTimeout(third_two)
                clearTimeout(timeout_alert)
                clearTimeout(timout_restarter)
                clearTimeout(timeout_master)
            setTimeout(alert1,0)
            setTimeout(restarter, 100)
            setTimeout(master,300)
            }
        }
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
    clearTimeout(timeout_alert)
    clearTimeout(timout_restarter)
    clearTimeout(timeout_master)
    turn_off()
    second_answer=false
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var clock = document.getElementById("clock")
    clock.className = "clock_blank"
}

function restarter1(){
    second_answer=false
    turns+=1
    turn_off()
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