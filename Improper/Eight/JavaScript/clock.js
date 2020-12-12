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

var Set1 = [[3,2],[4,3],[5,3],[5,4],[7,4],[6,5],[7,5],[8,5],[9,5],[11,10],[5,2],[7,3],[8,3],[9,4],[11,4],[11,5],[12,5],[13,5],[14,5],[21,10],[7,2],[10,3],[11,3],[13,4],[15,4],[16,5],[17,5],[18,5],[19,5],[31,10],[9,2],[13,3],[14,3],[17,4],[19,4],[21,5],[22,5],[23,5],[24,5],[41,10],[11,2],[16,3],[17,3],[21,4],[23,4],[26,5],[27,5],[28,5],[29,5],[51,10]]
var Set2 = [[37,6],[43,7],[49,8],[55,9],[68,11],[69,11],[71,11],[51,50],[53,50],[57,50],[71,50],[101,100],[111,100],[123,100],[151,100],[43,6],[50,7],[57,8],[64,9],[79,11],[80,11],[101,50],[103,50],[107,50],[121,50],[201,100],[211,100],[223,100],[251,100],[49,6],[57,7],[65,8],[73,9],[90,11],[91,11],[93,11],[55,6],[64,7],[73,8],[82,9],[101,11],[102,11],[104,11],[61,6],[71,7],[81,8],[91,9],[112,11],[113,11],[115,11]]

var master_set = [Set1,Set2]


var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");

function shower22(){
    var inproper = document.getElementById("question")
    var top = inproper.getAttribute("top")
    var bottom = inproper.getAttribute("bottom")
    var whole = Math.floor(top/bottom)
    var num = top%bottom
    var den = bottom
    window.alert( bottom + " goes into " + top + " " +  whole + " times with a remainder of " + num +"......= " + whole + " and " + num + "/" + bottom + "." )
}

var ok22=1 

function on22(){
        ok22 = 1
}

function off22(){
        ok22 = 0
}

function checker(id){
    if(ok22 == 1){
    off22()
    setTimeout(on22,3900)
    var inproper = document.getElementById("question")
    var num = inproper.getAttribute("top")
    var den = inproper.getAttribute("bottom")
    var frac1 = document.getElementById(id)
    var frac2 = document.getElementById(id+"2")
    var num2 = (parseInt(frac1.getAttribute("bottom"))*parseInt(frac2.getAttribute("top"))) + parseInt(frac1.getAttribute("top"))
    var den2 = frac1.getAttribute("bottom")
    document.getElementById("clock").className = 0
    document.getElementById("choice_one").style.opacity=0
    document.getElementById("choice_one2").style.opacity=0
    document.getElementById("choice_two").style.opacity=0
    document.getElementById("choice_two2").style.opacity=0
    document.getElementById("choice_three").style.opacity=0
    document.getElementById("choice_three2").style.opacity=0
    document.getElementById("choice_four").style.opacity=0
    document.getElementById("choice_four2").style.opacity=0
    document.getElementById("choice_five").style.opacity=0
    document.getElementById("choice_five2").style.opacity=0
    document.getElementById("correct_one").style.opacity=0
    document.getElementById("correct_one2").style.opacity=0
    document.getElementById("question").style.opacity=0
    document.getElementById("mult").style.opacity=0
    if(num == num2 && den2 == den){
        total_points+=20
        turns+=1
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
        setTimeout(master,4000)
        clearTimeout(timeout_alert)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)
    }
    else{
        turns+=1
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
        setTimeout(shower22,200)
        setTimeout(master,4000)
        clearTimeout(timeout_alert)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)

    }
}}

function master(){
    if(turns < 10){
        document.getElementById("clock").className = 1
        document.getElementById("choice_one").style.opacity=1
        document.getElementById("choice_one2").style.opacity=1
        document.getElementById("choice_two").style.opacity=1
        document.getElementById("choice_two2").style.opacity=1
        document.getElementById("choice_three").style.opacity=1
        document.getElementById("choice_three2").style.opacity=1
        document.getElementById("choice_four").style.opacity=1
        document.getElementById("choice_four2").style.opacity=1
        document.getElementById("choice_five").style.opacity=1
        document.getElementById("choice_five2").style.opacity=1
        document.getElementById("correct_one").style.opacity=1
        document.getElementById("correct_one2").style.opacity=1
        document.getElementById("question").style.opacity=1
        document.getElementById("mult").style.opacity=1
        var clock = document.getElementById("clock")
    clock.className = "clock"
    var choice = localStorage.getItem("set")
    var set = master_set[choice]
    shuffle(set)
    var new_set = []
    for(var x = 0; x<5; x++){
        new_set.push(set[x])
    }
    var answer1 = document.getElementById("question")
    answer1.setAttribute("top", new_set[0][0])
    answer1.setAttribute("bottom", new_set[0][1])
    var num55 = new_set[0][0]
    var den55 = new_set[0][1]
    new_set[1][0] = num55 +1
    new_set[1][1] = den55
    new_set[2][0] = num55 +2
    new_set[2][1] = den55
    new_set[3][0] = num55 +den55
    new_set[3][1] = den55
    new_set[4][0] = num55 -1
    new_set[4][1] = den55
    shuffle(new_set)
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    choice1.setAttribute('top',new_set[0][0]%new_set[0][1])
    choice1.setAttribute('bottom',new_set[0][1])

    choice2.setAttribute('top',new_set[1][0]%new_set[1][1])
    choice2.setAttribute('bottom',new_set[1][1])

    choice3.setAttribute('top',new_set[2][0]%new_set[2][1])
    choice3.setAttribute('bottom',new_set[2][1])

    choice4.setAttribute('top',new_set[3][0]%new_set[3][1])
    choice4.setAttribute('bottom',new_set[3][1])

    choice5.setAttribute('top',new_set[4][0]%new_set[4][1])
    choice5.setAttribute('bottom',new_set[4][1])

    
    var choice12 = document.getElementById("choice_one2")
    var choice22 = document.getElementById("choice_two2")
    var choice32 = document.getElementById("choice_three2")
    var choice42 = document.getElementById("choice_four2")
    var choice52 = document.getElementById("choice_five2")
    choice12.setAttribute('top',Math.floor(new_set[0][0]/new_set[0][1]))
    choice22.setAttribute('top',Math.floor(new_set[1][0]/new_set[1][1]))
    choice32.setAttribute('top',Math.floor(new_set[2][0]/new_set[2][1]))
    choice42.setAttribute('top',Math.floor(new_set[3][0]/new_set[3][1]))
    choice52.setAttribute('top',Math.floor(new_set[4][0]/new_set[4][1]))
    timeout_alert = setTimeout(shower22,19800)
    timout_restarter = setTimeout(restarter1, 19700)
    timeout_master = setTimeout(master,20000)}
    else{
        var clock = document.getElementById("clock")
        var choice1 = document.getElementById("question")
        var choice2 = document.getElementById("mult")
        var choice3 = document.getElementById("correct_one2")
        var choice4 = document.getElementById("correct_one")
        var choice5 = document.getElementById("choice_two2")
        var correct1 = document.getElementById("choice_two")
        var correct2 = document.getElementById("choice_three2")
        var correct3 = document.getElementById("choice_three")
        var correct4 = document.getElementById("choice_four2")
        var correct5 = document.getElementById("choice_four")
        var correct6 = document.getElementById("choice_five2")
        var correct7 = document.getElementById("choice_five")
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct1.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
        correct4.style.opacity = 0
        correct5.style.opacity = 0
        correct6.style.opacity = 0
        correct7.style.opacity=0
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

function directions(){
    document.location.href = "instructions.php"
}

function opacity_setter(){
    var list1 = ["5055","5056"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5055 <= master_id){
        localStorage.setItem("set", 0);
    localStorage.setItem("practice_title","Mixed Fracking B Workout 1");
    localStorage.setItem("current_exercise","5055" );
    localStorage.setItem("next_exercise","5056" );
    document.location.href = "game.php"}
}

function easy(){
    if(5056 <= master_id){
    localStorage.setItem("set", 1);
    localStorage.setItem("practice_title","Mixed Fracking B Workout 2");
    localStorage.setItem("current_exercise","5056" );
    localStorage.setItem("next_exercise","5057" );
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