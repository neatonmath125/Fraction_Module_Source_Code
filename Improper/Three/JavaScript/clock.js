var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var timout_explain;
var explanation = "Sorry, thats not the correct answer, please see the correct answer below."
var timeout_alert;
var time_checker = true;
var correct_blank;
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var Set1 = [[3,2,5],[1,2,3],[2,2,5],[3,1,3],[2,1,2],[1,2,5],[2,3,5],[1,1,3],[1,1,2],[3,3,5]]


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
    var list1 = ["5045","5046"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5045 <= master_id){
    localStorage.setItem("practice_title","Covert Operations A Workout 1");
    localStorage.setItem("current_exercise","5045" );
    localStorage.setItem("next_exercise","5046" );
    document.location.href = "game.php"}
}

function easy(){
  if(5046 <= master_id){
  localStorage.setItem("practice_title","Covert Operations A Workout 2");
  localStorage.setItem("current_exercise","5046" );
  localStorage.setItem("next_exercise","5047" );
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

function master(){
    if(turns < 10){
    document.getElementById("clock").className = "clock"
    document.getElementById("checker1").style.opacity=1
    var input1 = document.getElementById("myInput1")
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    document.getElementById("mult").style.opacity=1
    document.getElementById("equal").style.opacity=1
    input1.value=""
    input2.value=""
    input3.value=""
    input1.style.opacity=1
    input2.style.opacity=1
    input3.style.opacity=1
    var frac1 = document.getElementById("frac1")
    var frac2 = document.getElementById("frac2")
    var frac3 = document.getElementById("frac3")
    var frac4 = document.getElementById("frac4")
    frac1.style.opacity=1
    frac2.style.opacity=1
    frac3.style.opacity=1
    frac4.style.opacity=1
    var clock = document.getElementById("clock")
    clock.className = "clock"
    shuffle(Set1)
    var answer = Set1.pop()
    var mixed_whole = document.getElementById("frac1")
    var mixed_fraction = document.getElementById("frac2")
    var middle = document.getElementById("frac3")
    var inproper = document.getElementById("frac4")
    mixed_whole.setAttribute("top",answer[0]);
    mixed_fraction.setAttribute("top",answer[1]);
    mixed_fraction.setAttribute("bottom",answer[2]);
    middle.setAttribute("top",answer[0] + " x " + answer[2] + " + " + answer[1]);
    middle.setAttribute("bottom",answer[2]);
    inproper.setAttribute("top",answer[1] + (answer[0]*answer[2]));
    inproper.setAttribute("bottom",answer[2]);
    timout_explain = setTimeout(show_alert,19900)
    timout_restarter = setTimeout(restarter1, 19800)
    timeout_master = setTimeout(master,20000)}
    else{
        var clock = document.getElementById("clock")
        var choice1 = document.getElementById("frac1")
        var choice2 = document.getElementById("frac2")
        var choice3 = document.getElementById("mult")
        var choice4 = document.getElementById("frac3")
        var choice5 = document.getElementById("equal")
        var correct2 = document.getElementById("frac4")
        var correct3 = document.getElementById("myInput1")
        var equal = document.getElementById("myInput2")
        equal.style.opacity = 0
        clock.style.opacity = 0
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        correct2.style.opacity = 0
        correct3.style.opacity = 0
        if(total_points >= 180){
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

var allowed22 = 1

function on22(){
    allowed22 = 1
}

function off22(){
    allowed22 = 0
}

function checker(){
    if(allowed22 == 1){
    off22()
    setTimeout(on22,2000)
    document.getElementById("clock").className = "nothing"
    var input1 = document.getElementById("myInput1")
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    var mixed_whole = document.getElementById("frac1")
    var mixed_fraction = document.getElementById("frac2")
    var inproper = document.getElementById("frac4")
    var answer55 = mixed_whole.getAttribute("top")
    var answer56 = mixed_fraction.getAttribute("top")
    var answer57 = inproper.getAttribute("top")
    var answer1 = input1.value
    var answer2 = input2.value
    var answer3 = input3.value
    var frac1 = document.getElementById("frac1")
    var frac2 = document.getElementById("frac2")
    var frac3 = document.getElementById("frac3")
    var frac4 = document.getElementById("frac4")
    document.getElementById("checker1").style.opacity=0
    if (answer55 == answer1 && answer56 == answer2 && answer57 == answer3){
        input1.style.opacity=0
        input2.style.opacity=0
        input3.style.opacity=0
        document.getElementById("mult").style.opacity=0
        document.getElementById("equal").style.opacity=0
        frac1.style.opacity=0
        frac2.style.opacity=0
        frac3.style.opacity=0
        frac4.style.opacity=0
            total_points += 20
            clearTimeout(timout_explain)
            clearTimeout(timout_restarter)
            clearTimeout(timeout_master)
            fly_away()
            setTimeout(restarter, 0)
            setTimeout(master,2000)
    }
    else{
        input1.style.opacity=0
        input2.style.opacity=0
        input3.style.opacity=0
        clearTimeout(timout_explain)
        clearTimeout(timout_restarter)
        clearTimeout(timeout_master)
        setTimeout(show_alert,100)
        setTimeout(restarter, 1900)
        setTimeout(master,2000)
    }
}}

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

var enVol = false;
function fly_away(){
        enVol = true;
        $('.ciel').removeClass('stay');
        $('.ciel').addClass('away');
        setTimeout(function(){ stay() }, 4000);
}

function stay(){
    if(enVol === true){
        enVol = false;
        $('.ciel').removeClass('away');
        $('.ciel').addClass('stay');
    }
}