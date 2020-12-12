var displayed = []
var total_points = 0;
var turns = 0;
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
var answer_final_one
var answer_final_two
var var1 = 0

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


Set1 = [["",14,5],["",11,3],["",12,5],["",61,10],["-",35,3],["-",11,10],["-",47,10],["",23,7],["-",47,9],["",14,3],["-",13,10],["",11,5],["",17,3],["-",17,10],["",13,5],["-",41,10],["",25,7],["",48,5]]
Set2 = [["",92,9],["-",66,7],["",90,11],["-",64,9],["",85,7],["-",502,5],["-",43,10],["",24,7],["-",46,9],["",52,5],["-",102,11],["",26,3],["-",65,9],["",57,8],["-",91,8],["",87,7],["-",702,7],["-",50,9],["",72,7],["-",75,8],["",42,5],["-",68,9],["",53,8],["-",59,5],["",86,7],["-",302,3],["",23,3],["",19,10],["",41,10],["",27,7],["",52,9],["",32,3],["",58,7],["",77,10],["",55,9],["",47,4],["",89,7],["",902,9]]
master_sets = [Set1, Set2]

function redo(){
    var1 = 0
    master()
}

function explanation(){
    var question55 = document.getElementById("choice_one")
    var num = question55.getAttribute("top")
    var den = question55.getAttribute("bottom")
    var string = "Sorry, your choice is incorrect. The fraction shown is between " + answer_final_one + " and " + answer_final_two + "."
    return string                                                              
}

var allowed22 = 1

function off22(){
    allowed22 = 0
}

function on22(){
    allowed22 = 1
}

function checker11(){
    if(allowed22 ==1){
    off22()
    setTimeout(on22, 4000)
    var frac1 = document.getElementById("myInput1").value
    var frac2 = document.getElementById("myInput2").value
    document.getElementById("myInput1").style.opacity=0
    document.getElementById("myInput2").style.opacity=0
    document.getElementById("writer1").style.opacity=0
    document.getElementById("writer2").style.opacity=0
    document.getElementById("checker").style.opacity=0
    document.getElementById("clock").className = "nothing"
    clearTimeout(timer_explain)
    clearTimeout(time_out_time)
    clearTimeout(timer_master)
    document.getElementById("clock").className = "nothing"
    if((frac1 == answer_final_one && frac2 == answer_final_two)||(frac1 == answer_final_two && frac2 == answer_final_one)){
        var1 = 1
        turns +=1
        total_points+=20
        setTimeout(redo, 3900)
    }
    else{
        turns +=1
        var1 = 2
        setTimeout(show_explain,3900)
        setTimeout(redo, 4000)
    }

}}

function master(){
    var frac1 = document.getElementById("myInput1")
    var frac2 = document.getElementById("myInput2")
    frac1.value=""
    frac2.value=""
    frac1.style.opacity=1
    frac2.style.opacity=1
    document.getElementById("choice_one").style.opacity=1
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ "<br> Turns: "+  turns +"/10"
    var chosen_set55 = localStorage.getItem("chosen_set")
if(turns < 10){
    document.getElementById("myInput1").style.opacity=1
    document.getElementById("myInput2").style.opacity=1
    document.getElementById("choice_one").style.opacity=1
    document.getElementById("writer1").style.opacity=1
    document.getElementById("writer2").style.opacity=1
    document.getElementById("checker").style.opacity=1
    document.getElementById("clock").className = "clock"
    var chosen_set125 = master_sets[chosen_set55]
    shuffle(chosen_set125)
    var Set1 = chosen_set125.pop()
    var question55 = document.getElementById("choice_one")
    question55.setAttribute("top", Set1[0]+Set1[1])
    question55.setAttribute("bottom", Set1[2])
    answer_final_one = Set1[0] + Math.floor(Set1[1]/Set1[2])
    answer_final_two = Set1[0] + (Math.floor(Set1[1]/Set1[2])+1)
    timer_explain = setTimeout(show_explain,19900)
    time_out_time = setTimeout(restarter, 19800)
    timer_master = setTimeout(master, 20000)
    }
    else{
    document.getElementById("myInput1").style.opacity=0
    document.getElementById("myInput2").style.opacity=0
    document.getElementById("choice_one").style.opacity=0
    document.getElementById("writer1").style.opacity=0
    document.getElementById("writer2").style.opacity=0
    document.getElementById("checker").style.opacity=0
    document.getElementById("clock").className = "nothing"
    if(total_points >= 180){
    practice_title = current_exercise
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ "<br> Congrats, you passed! "
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,9900)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ "<br> Almost, try again!"
        next_exercsie = current_exercise
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,9900)
    }}
}


function opacity_setter(){
    var list1 = ["5043","5044"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5043 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5043" );
    localStorage.setItem("next_exercise","5044" );
    localStorage.setItem("practice_title","How Big? Workout 1");
    localStorage.setItem("set_number",0);
    document.location.href = "game.php"}
}

function easy(){
    if(5044 <= master_id){
        localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5044" );
    localStorage.setItem("next_exercise","5045" );
    localStorage.setItem("practice_title","How Big? Workout 2");
    localStorage.setItem("set_number",1);
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


function restarter(){
    document.getElementById("clock").className = "nothing"
    turns +=1
    counter +=1
}


function show_explain(){
    var answer = explanation()
    window.alert(answer)
}


function setter(){
    document.getElementById("fish").style.animationPlayState = "paused"
    fish_swim = false
}


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

////////////

