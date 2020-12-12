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

var Set15 = [[17,5],[18,5],[11,5],[17,3],[18,4],[7,5],[9,5],[12,5],[13,3],[14,3],[17,2],[17,3],[17,4],[19,4]]
var Set25 = [[37,5],[39,7],[27,2],[27,5],[28,6],[29,7],[31,5],[31,6],[43,7],[29,3],[32,3],[28,5],[27,4],[19,2]]
var master_list = [Set15,Set25]

var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");

function directions(){
    document.location.href = "instructions.php"
}

function opacity_setter(){
    var list1 = ["5053","5054"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5053 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5053" );
    localStorage.setItem("next_exercise","5054" );
    localStorage.setItem("practice_title","Mixed Fracking A Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5054 <= master_id){
        localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5054" );
    localStorage.setItem("next_exercise","5055" );
    localStorage.setItem("practice_title","Mixed Fracking A Workout 2");
    document.location.href = "game.php"}
}


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
    setTimeout(on22, 4000)
    var mixed_left = document.getElementById("answer_one2")
    var mixed_right = document.getElementById("answer_one")
    var whole = mixed_left.getAttribute("top")
    var num = mixed_right.getAttribute("top")
    var inproper = document.getElementById("question_one")
    var frac1 = document.getElementById("myInput1")
    var frac2 = document.getElementById("myInput2")
    var equal = document.getElementById("mult")
    var equal1 = document.getElementById("correct_two")
    var equal2 = document.getElementById("correct_two22")
    var whole22 = frac1.value
    var num22 = frac2.value
    if(whole == whole22 && num == num22){
        total_points += 20
        turns +=1
        equal1.style.opacity=0
        equal2.style.opacity=0
        equal.style.opacity=0
        mixed_left.style.opacity =0
        mixed_right.style.opacity=0
        inproper.style.opacity=0
        frac1.style.opacity=0
        frac2.style.opacity=0
        document.getElementById("clock").className = "nothing"
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "/200" + " Turns: " + turns + "/10"
        setTimeout(master,4000)
        clearTimeout(timeout_alert)
        clearTimeout(timeout_master)

    }
    else{
        turns +=1
        frac1.style.opacity=0
        frac2.style.opacity=0
        document.getElementById("clock").className = "nothing"
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "/200" + " Turns: " + turns + "/10"
        setTimeout(show_the_answer,200)
        setTimeout(master,4000)
        clearTimeout(timeout_alert)
        clearTimeout(timeout_master)
    }   
}}

function helper(){
    var inproper = document.getElementById("question_one")
    var num = inproper.getAttribute("top")
    var den = inproper.getAttribute("bottom")
    var explainer33 = " How many times can " + den+ " go into " + num + ", this is the whole number. What is the remainder, that is the numerator?"
    window.alert(explainer33)
}

function shower52(){
    var frac1 = document.getElementById("myInput1")
    var frac2 = document.getElementById("myInput2")
    frac1.style.opacity=0
    frac2.style.opacity=0
    document.getElementById('clock').className = "nothing"
    turns +=1
    setTimeout(show_the_answer,200)
    
}

function show_the_answer(){
    var mixed_left = document.getElementById("answer_one2")
    var mixed_right = document.getElementById("answer_one")
    var whole = mixed_left.getAttribute("top")
    var num = mixed_right.getAttribute("top")
    var den = mixed_right.getAttribute("bottom")
    window.alert("Sorry, thats not the correct answer, the correct answer is " + whole + " and " + num + "/" + den +  " as shown below")

}

function master(){
    if(turns < 10){
        var mixed_left = document.getElementById("answer_one2")
        var mixed_right = document.getElementById("answer_one")
        var inproper = document.getElementById("question_one")
        var frac1 = document.getElementById("myInput1")
        var frac2 = document.getElementById("myInput2")
        var equal = document.getElementById("mult")
        var equal1 = document.getElementById("correct_two")
        var equal2 = document.getElementById("correct_two22")
        equal1.style.opacity=1
        equal2.style.opacity=1
        equal.style.opacity=1
        mixed_left.style.opacity =1
        mixed_right.style.opacity=1
        inproper.style.opacity=1
        frac1.style.opacity=1
        frac2.style.opacity=1
        frac1.value = ""
        frac2.value = ""
    var clock = document.getElementById("clock")
    clock.className = "clock"
    var mixed_left = document.getElementById("answer_one2")
    var mixed_right = document.getElementById("answer_one")
    var inproper = document.getElementById("question_one")
    var choice125 = localStorage.getItem("chosen_set");
    var Set1 = master_list[choice125]
    shuffle(Set1)
    var answer = Set1[0]
    Set1.shift()
    inproper.setAttribute("top",answer[0])
    inproper.setAttribute("bottom",answer[1])
    mixed_left.setAttribute("top",Math.floor(answer[0]/answer[1]))
    mixed_right.setAttribute("top",answer[0]%answer[1])
    mixed_right.setAttribute("bottom",answer[1])
    timeout_alert = setTimeout(shower52,19600)
    timeout_master = setTimeout(master,20000)}
    else{
        var clock = document.getElementById("clock")
        var choice1 = document.getElementById("question_one")
        var choice2 = document.getElementById("mult")
        var choice3 = document.getElementById("answer_one2")
        var choice4 = document.getElementById("answer_one")
        var choice5 = document.getElementById("myInput1")
        var correct1 = document.getElementById("myInput2")
        var correct2 = document.getElementById("correct_two")
        var correct3 = document.getElementById("correct_two22")
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct1.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
        if(total_points >= 180){
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


function explain(first, second, third){
    var string  = "Sorry, both of your answers were not correct. \r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + second[0]/first[0] + "/" + second[0]/first[0] + " = "
    string += second[0] + "/" + second[1] + "\r\n \r\n"
    string += second[0] + "/" + second[1] + " x " + third[0]/second[0] + "/" + third[0]/second[0] + " = "
    string += third[0] + "/" + third[1] + "." + "\r\n \r\n"
    string += first[0] + "/" + first[1] + " x " + third[0]/first[0] + "/" + third[0]/first[0] +" = "
    string += third[0] + "/" + third[1] + " ." 
    return string
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