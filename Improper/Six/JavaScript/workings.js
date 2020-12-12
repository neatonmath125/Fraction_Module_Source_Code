//Get master Id function

var displayed = []
var correct_top = 0
var correct_bottom = 0
var threshold = 150
var startTime, endTime;
var stop = false;
var target = 3;
var time_checker = true;
var fish_swim = false;
var answers_correct = 0
var restarter_variable;
var master_variable;
var new12345;
var master_source = "Shape"
var chosen_shape 
var master_url 
var new_array 
var new_new 
var counter = 0
var length_list 
var correct_numerator
var timer_explain
var timer_master
var correct_denominator
var time_out_time
var min_points = 50
var practice_title
var title = ["_one","_two","_three"]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

localStorage.setItem("scalar", 2);
localStorage.setItem("num_dif", 5);
localStorage.setItem("den_dif", 12);
localStorage.setItem("bailout", 13);

function loader(){
    setTimeout(master,200)
}

var List1 = ["3_2.png","4_3.png","5_2.png","5_4.png","7_4.png","7_6.png","8_3.png","9_5.png","9_8.png","11_3.png"]
var List2 = ["7_2.png","9_2.png","11_2.png","11_6.png","11_7.png","13_5.png","13_9.png","25_11.png","29_25.png","33_8.png"]
var master_list = [List1, List2]


function reader(string1){
    counter = 0
    pointer = 0
    var list1 = ["",""]
    while(counter < 2){
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
    var list1 = ["5051","5052"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5051 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5051" );
    localStorage.setItem("next_exercise","5052" );
    localStorage.setItem("practice_title","Pieces and Parts B Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5052 <= master_id){
        localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5052" );
    localStorage.setItem("next_exercise","5053" );
    localStorage.setItem("practice_title","Pieces and Parts B Workout 2");
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

function shower22(){
    var answer = localStorage.getItem("overall_answer")
    var answer1 = reader2(answer)
    window.alert("Sorry, the correct answer is " + answer1[0] + "/" + answer1[1] + ".")
}

var total_points = 0;
var turns = 0;

function master(){
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200  Turns:" + turns + "/10"
    document.getElementById("picture1").style.opacity=1
    document.getElementById("choice_one").style.opacity=1
    document.getElementById("choice_two").style.opacity=1
    document.getElementById("choice_three").style.opacity=1
    document.getElementById("choice_four").style.opacity=1
    document.getElementById("choice_five").style.opacity=1
    document.getElementById("clock").className = "clock"
if(turns < 10){
    document.getElementById("clock").className = "clock"
    chosen_shape = localStorage.getItem("chosen_set")
    shuffle(master_list[chosen_shape])
    var answer_list = []
    for(var x = 0; x < 5; x++){
        answer_list.push(master_list[chosen_shape][x])
    }
    var answer = master_list[chosen_shape].shift()
    var answer55 = reader(answer)
    localStorage.setItem("overall_answer",answer55)
    var new_new = document.getElementById("picture1")
    if(chosen_shape == 0){
        new_new.src = "SetC/" + answer;
  
      }
      else{
        new_new.src = "SetD/" + answer;
      }
    shuffle(answer_list)
    var choice_list = []
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    choice_list.push(choice1)
    choice_list.push(choice2)
    choice_list.push(choice3)
    choice_list.push(choice4)
    choice_list.push(choice5)
    var pos = [[answer55[0],answer55[1]],[parseInt(answer55[0])+1,answer55[1]],[parseInt(answer55[0])-1,answer55[1]],[parseInt(answer55[0])+2,answer55[1]],[parseInt(answer55[0])+3,parseInt(answer55[1])+2]]
    shuffle(pos)
    for(var x = 0; x < 5; x++){
        choice_list[x].setAttribute("top",pos[x][0])
        choice_list[x].setAttribute("bottom",pos[x][1])
    }
    timer_explain = setTimeout(shower22,19900)
    time_out_time = setTimeout(restarter, 19800)
    timer_master = setTimeout(master, 20000)
    }
    else{
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var answer1 = document.getElementById("picture1")
        var clock = document.getElementById("clock")
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        answer1.style.opacity = 0
    if(total_points >= 180){
    practice_title = current_exercise
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Congrats, you passed! "
        document.getElementById("total_points").style.marginLeft = 0
        document.getElementById("total_points").style.textAlign ="center"
        document.getElementById("picture1").style.opacity = 0
        document.getElementById("clock").className = "nothing"
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,5900)
        
    }
    else{
    practice_title = 0
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Almost, try again!"
        document.getElementById("total_points").style.marginLeft = 0
        document.getElementById("total_points").style.textAlign ="center"
        document.getElementById("picture1").style.opacity = 0
        document.getElementById("clock").className = "nothing"
        next_exercsie = current_exercise
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,5900)
    }}
}

function restarter(){
    document.getElementById("clock").className = "nothing"
    turns +=1

}

function explanation(){
    var string = "Sorry, your choice is incorrect. The fraction shown is "+ correct_numerator + "/" + correct_denominator + ". The correct figure should be made up of " + correct_denominator
    string += " tiles, and of the " + correct_denominator + " tiles, " + correct_numerator
    string += " of them should filled in."
    return string
}

function show_explain(){
    var answer = explanation()
    window.alert(answer)
}

function reader2(string1){
    var list1 = []
    var counter = 0
    var pointer = 0
    while(counter < 2){
        var temp = ""
        while(string1[pointer] != "," && pointer < string1.length){
            temp += string1[pointer]
            pointer +=1
        }
        list1.push(temp)
        counter +=1
        pointer +=1
    }
    return list1
}

var allowed22 = 1;

function on22(){
    allowed22 = 1
}

function off22(){
    allowed22 = 0
}

function checker(id){
    if(allowed22==1){
    off22()
    setTimeout(on22,2000)
    var num1 = document.getElementById(id).getAttribute("top")
    var den1 = document.getElementById(id).getAttribute("bottom")
    var answer = localStorage.getItem("overall_answer")
    var answer1 = reader2(answer)
    document.getElementById("picture1").style.opacity=0
    document.getElementById("choice_one").style.opacity=0
    document.getElementById("choice_two").style.opacity=0
    document.getElementById("choice_three").style.opacity=0
    document.getElementById("choice_four").style.opacity=0
    document.getElementById("choice_five").style.opacity=0
    document.getElementById("clock").className = "nothing"
    if(num1 == answer1[0] && den1 == answer1[1]){
    total_points +=20
    turns+=1
    counter +=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200  Turns:" + turns + "/10"
    clearTimeout(time_out_time)
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    setTimeout(master,2000)
    }
    else{
    window.alert("Sorry, the correct answer is " + answer1[0] + "/" + answer1[1] + ".")
    turns +=1
    counter +=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200  Turns:" + turns + "/10"
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    clearTimeout(time_out_time)
    document.getElementById("clock").className = "nothing"
    setTimeout(master, 2000)
    }
}}


function instructions(){
    document.location.href = "instructions.php"
}

function return_index(){
    document.location.href = "index.php"
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