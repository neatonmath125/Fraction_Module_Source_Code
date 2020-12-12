var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var timeout_alert;
var questions_right = 0;
var time_checker = true;
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var title = ["/One","/Two","/Three","/Four","/Five","/Six"]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

// $('.myclass').css('color: red')
//document.getElementById('mydiv').className = 'newclass';
/*var bg = document.getElementById("myBg");
bg.style.width = imgWidth + "px";
bg.style.height = imgHeight + "px";*/

var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");

function directions(){
    document.location.href = "instructions.php"
}

function loader(){
    setTimeout(master,200)
}

function opacity_setter(){
    var list1 = ["5010","5011","5012","5013","5014","5015"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5010 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("current_exercise","5010" );
    localStorage.setItem("next_exercise","5011" );
    localStorage.setItem("practice_title", "Fireworks/One")
    document.location.href = "game.php"}
}

function easy(){
    if(5011 <= master_id){
    localStorage.setItem("scalar", 6);
    localStorage.setItem("num_dif", 2);
    localStorage.setItem("den_dif", 7);
    localStorage.setItem("bailout", 3);
    localStorage.setItem("current_exercise","5011" );
    localStorage.setItem("next_exercise","5012" );
    localStorage.setItem("practice_title", "Fireworks/Two")
    document.location.href = "game.php"}
}

function easy_average(){
    if(5012 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif", 5);
    localStorage.setItem("den_dif", 10);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("current_exercise","5012" );
    localStorage.setItem("next_exercise","5013" );
    localStorage.setItem("practice_title", "Fireworks/Three")
    document.location.href = "game.php"}
}

function average(){
    if(5013 <= master_id){
    localStorage.setItem("scalar", 6);
    localStorage.setItem("num_dif", 5);
    localStorage.setItem("den_dif", 10);
    localStorage.setItem("bailout", 5);
    localStorage.setItem("current_exercise","5013" );
    localStorage.setItem("next_exercise","5014" );
    localStorage.setItem("practice_title", "Fireworks/Four")
    document.location.href = "game.php"}
}

function hard(){
    if(5014 <= master_id){
    localStorage.setItem("scalar", 2);
    localStorage.setItem("num_dif",11);
    localStorage.setItem("den_dif", 18);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("current_exercise","5014" );
    localStorage.setItem("next_exercise","5015" );
    localStorage.setItem("practice_title", "Fireworks/Five")
    document.location.href = "game.php"}
}

function very_hard(){
    if(5015 <= master_id){
    localStorage.setItem("scalar", 6);
    localStorage.setItem("num_dif",11);
    localStorage.setItem("den_dif", 18);
    localStorage.setItem("bailout", 11);
    localStorage.setItem("current_exercise","5015" );
    localStorage.setItem("next_exercise","5016" );
    localStorage.setItem("practice_title", "Fireworks/Six")
    document.location.href = "game.php"}
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
    ones = {}
    var numerator = []
    while(numerator.length < 5){
    var r = Math.floor(Math.random()*num_dif) + 1;
    numerator.push(r);
    }
    var denominator = []
    var counter = 0
    while(denominator.length < 5){
    var r = Math.floor(Math.random() *den_dif) + 1;
    var mod = r%numerator[counter]
    if(numerator[counter] < r){
    	if(numerator[counter] ===1 && already_there(counter,numerator, denominator, r)===false){
        	denominator.push(r)
        	counter+=1
            }
        else if(mod!=0 && common(numerator[counter],r)==true && already_there(counter,numerator, denominator, r)===false){
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

function answer(numerator, denominator){
    var r = Math.floor(Math.random()*scalar) + 2;
    var new_num = r*numerator
    var new_den = r*denominator
    var list1 = [new_num, new_den]
    return list1;
}

function master(){
    if(turns < target){
    start_time()
    var cases = generator()
    var temp = Math.floor(Math.random()*4) + 1;
    var display_num = cases[temp][0]
    var display_den = cases[temp][1]
    correct_top = cases[temp][0]
    correct_bottom = cases[temp][1]
    var clock = document.getElementById("clock")
    clock.className = "clock"
    var display_question = answer(display_num,display_den)
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var correct1 = document.getElementById("correct_one")
    var correct2 = document.getElementById("correct_two")
    choice1.setAttribute('top',cases[0][0])
    choice1.setAttribute('bottom',cases[0][1])
    choice2.setAttribute('top',cases[1][0])
    choice2.setAttribute('bottom',cases[1][1])
    choice3.setAttribute('top',cases[2][0])
    choice3.setAttribute('bottom',cases[2][1])
    choice4.setAttribute('top',cases[3][0])
    choice4.setAttribute('bottom',cases[3][1])
    choice5.setAttribute('top',cases[4][0])
    choice5.setAttribute('bottom',cases[4][1])
    correct1.setAttribute('top',display_question[0])
    correct1.setAttribute('bottom',display_question[1])
    correct2.className = "fraction"
    correct2.style.padding= 60
    correct2.style.backgroundColor = "#FFB6C1"
    correct2.style.marginLeft = 135
    correct2.setAttribute('top',display_question[0])
    correct2.setAttribute('bottom',display_question[1])
    timout1 = setTimeout(alertFunc1, 4000)
    timout2 = setTimeout(alertFunc2, 8000)
    timeout3 = setTimeout(alertFunc3, 12000)
    timeout4 = setTimeout(alertFunc4, 16000)
    timeout_alert = setTimeout(function() { alert(display_num+"/"+display_den+ " is equivalent to " + display_question[0]+"/"+display_question[1] + " you just have to multiply the first fraction by " + display_question[0]/display_num+"/"+display_question[0]/display_num + "."); }, 19800);
    timout_restarter = setTimeout(restarter1, 19900)
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
        document.getElementById("fireworks").className = "pyro"
        document.getElementById("points-scored").className = "points_scored_blank"
        choice3.className = "nothing"
        correct1.className = "nothing"
        correct2.style.opacity = 0
        choice1.className = "nothing"
        choice2.style.opacity = 0
        choice3.className = "nothing"
        choice4.className = "nothing"
        choice5.className = "nothing"
        clock.className = "nothing"
        if(total_points >= 60){
        practice_title = current_exercise
            linebreak = document.createElement("br");
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
            next_exercise = current_exercise
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

function alertFunc1(){
    var correct2 = document.getElementById("correct_two")
    correct2.style.padding = 50
    correct2.style.backgroundColor = "rgb(250, 121, 141)"
    correct2.style.marginLeft = 145
}

function alertFunc2(){
    var correct2 = document.getElementById("correct_two")
    correct2.style.padding = 40
    correct2.style.backgroundColor = "rgb(247, 86, 110)"
    correct2.style.marginLeft = 155
}

function alertFunc3(){
    var correct2 = document.getElementById("correct_two")
    correct2.style.padding = 30
    correct2.style.backgroundColor = "rgb(248, 50, 79)"
    correct2.style.marginLeft = 165
}

function alertFunc4(){
    var correct2 = document.getElementById("correct_two")
    correct2.style.padding = 20
    correct2.style.backgroundColor = "rgb(252, 5, 42)"
    correct2.style.marginLeft = 175
}

function checker_on(){
    time_checker = true;
}

function checker(id){
    if(allowed == true){
    if(time_checker == true){
    time_checker = false
    setTimeout(checker_on,500)
    var shown = document.getElementById("correct_two")
    var shown_num = shown.getAttribute("top")
    var shown_den = shown.getAttribute("bottom")
    var check = document.getElementById(id)
    var numerator = check.getAttribute("top")
    var denominator = check.getAttribute("bottom")
    var seconds = end_time()
    if (numerator/parseFloat(denominator) === correct_top/parseFloat(correct_bottom)){
        check_off()
        setTimeout(check_on,2000)
        if(seconds < 4){
            total_points += 10
            document.getElementById("total_points").innerHTML = "POINTS: " + total_points + "   Turn: " + turns + "/10";            
            ten_on = setTimeout(plus_ten_on,0)
            ten_off = setTimeout(plus_ten_off,1500)
            if(turns <target -1){
            setTimeout(turn_on,0)
            setTimeout(turn_off,1700)}
            setTimeout(restarter, 0)
            setTimeout(master,2000)
        }
        else if( seconds < 8){
            total_points += 8
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";            
            eight_on = setTimeout(plus_eight_on,0)
            eight_off = setTimeout(plus_eight_off,1500)
            if(turns <target -1){
            setTimeout(turn_on,0)
            setTimeout(turn_off,1700)}
            setTimeout(restarter, 0)
            setTimeout(master,2000)
        }
        else if (seconds < 12){
            total_points += 6
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
            six_on = setTimeout(plus_six_on,0)
            six_off = setTimeout(plus_six_off,1500)
            if(turns <target -1){
            setTimeout(turn_on,0)
            setTimeout(turn_off,1700)}
            setTimeout(restarter, 0)
            setTimeout(master,2000)
        }
        else if (seconds < 16){
            total_points += 4
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
            four_on = setTimeout(plus_four_on,0)
            four_off = setTimeout(plus_four_off,1500)
            if(turns <target -1){
            setTimeout(turn_on,0)
            setTimeout(turn_off,1700)}
            setTimeout(restarter, 0)
            setTimeout(master,2000)
        }
        else{
            total_points += 2
            document.getElementById("total_points").innerHTML = "Points: " + total_points + "  Turn: " + turns + "/10";            
            two_on = setTimeout(plus_two_on,0)
            two_off = setTimeout(plus_two_off,1500)
            if(turns <target -1){
            setTimeout(turn_on,0)
            setTimeout(turn_off,1700)}
            setTimeout(restarter, 0)
            setTimeout(master,2000)
        }
    }
    else{
        var clock = document.getElementById("clock")
        clock.className = "clock_blank"
        setTimeout(function() { alert("Sorry, thats incorrect! " + correct_top+"/"+correct_bottom + " is equivalent to " + shown_num+"/"+shown_den + " you just have to multiply the first fraction by " + shown_num/correct_top+"/"+shown_num/correct_top + "."); }, 0);
        check_off()
        setTimeout(check_on,400)
        setTimeout(restarter, 0)
        setTimeout(master,400)
    }}
}}

var allowed = true
function check_on(){
allowed = true
}
function check_off(){
allowed = false
}

function turn_on(){
    document.getElementById("fireworks").className = "pyro"
}

function turn_off(){
    document.getElementById("fireworks").className = "nothing"
}

function plus_ten_on(){
    document.getElementById("points-scored").className = "points_scored"
    document.getElementById("points-scored").setAttribute('top',"+10")
    document.getElementById("points-scored").style.backgroundColor="green"
}

function plus_ten_off(){
    document.getElementById("points-scored").className = "points_scored_blank"
}

function plus_eight_on(){
    document.getElementById("points-scored").className = "points_scored"
    document.getElementById("points-scored").setAttribute('top',"+8")
    document.getElementById("points-scored").style.backgroundColor="yellowgreen"
}

function plus_eight_off(){
    document.getElementById("points-scored").className = "points_scored_blank"
}

function plus_six_on(){
    document.getElementById("points-scored").className = "points_scored"
    document.getElementById("points-scored").setAttribute('top',"+6")
    document.getElementById("points-scored").style.backgroundColor="yellow"
}

function plus_six_off(){
    document.getElementById("points-scored").className = "points_scored_blank"
}

function plus_four_on(){
    document.getElementById("points-scored").className = "points_scored"
    document.getElementById("points-scored").setAttribute('top',"+4")
    document.getElementById("points-scored").style.backgroundColor="orange"
}

function plus_four_off(){
    document.getElementById("points-scored").className = "points_scored_blank"
}

function plus_two_on(){
    document.getElementById("points-scored").className = "points_scored"
    document.getElementById("points-scored").setAttribute('top',"+2")
    document.getElementById("points-scored").style.backgroundColor="red"
}

function plus_two_off(){
    document.getElementById("points-scored").className = "points_scored_blank"
}

function restarter(){
    clearTimeout(timout1)
    clearTimeout(timout2)
    clearTimeout(timeout3)
    clearTimeout(timeout4)
    clearTimeout(timeout_alert)
    clearTimeout(timout_restarter)
    clearTimeout(timeout_master)
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var correct2 = document.getElementById("correct_two")
    correct2.className = 'fraction_blank'
    var clock = document.getElementById("clock")
    clock.className = "clock_blank"
}

function restarter1(){
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
    var correct2 = document.getElementById("correct_two")
    correct2.className = 'fraction_blank'
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
NumberCorrect.value=total_points/10;
NumberAttempted.value=10;
Time.value=0;
Percent.value=(total_points/100)*100;
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