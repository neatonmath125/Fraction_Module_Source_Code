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
var master_list = [["1o3.png","1o5.png","1o6.png","1o8.png","2o4.png","2o5.png","2o8.png"],["2o3.png","3o4.png","3o5.png","3o6.png","5o8.png"],["3o3.png","3o4.png","4o5.png","4o6.png","5o6.png","7o8.png"]]
var master_list2 = ["_low/","_mid/","_high/"]
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
var title = ["/One","/Two","/Three"]

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

function opacity_setter(){
    var list1 = ["5007","5008","5009"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function shape1(){
    if(5007 <= master_id){
    localStorage.setItem("current_exercise","5007")
    localStorage.setItem("next_exercise","5008")
    localStorage.setItem("practice_title", "Viz Fractions Two" + title[0])
    localStorage.setItem("shape", 0);
    document.location.href = "game.php"}
}

function shape2(){
    if(5008 <= master_id){
    localStorage.setItem("current_exercise","5008")
    localStorage.setItem("next_exercise","5009")
    localStorage.setItem("practice_title", "Viz Fractions Two" + title[1])
    localStorage.setItem("shape", 1);
    document.location.href = "game.php"}
}

function shape3(){
    if(5009 <= master_id){
    localStorage.setItem("current_exercise","5009")
    localStorage.setItem("next_exercise","5010")
    localStorage.setItem("practice_title", "Viz Fractions Two" + title[2])
    document.location.href = "game.php"
    localStorage.setItem("shape", 2);}
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

function master(){
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br> Turns: "+  turns +"/5"
if(turns < 5){
    document.getElementById("clock").className = "clock"
    chosen_shape = localStorage.getItem("shape")
    master_url = master_source + master_list2[chosen_shape]
    new_array = master_list[chosen_shape]
    new_new = shuffle(new_array)
    var r = Math.floor(Math.random()*4) + 1;
    var fraction = new_new[r]
    correct_numerator = fraction[0]
    correct_denominator = fraction[2]
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
    var answer1 = document.getElementById("display_photo")
    choice1.src = master_url + new_new[0]
    choice2.src = master_url + new_new[1]
    choice3.src = master_url + new_new[2]
    choice4.src = master_url + new_new[3]
    choice5.src = master_url + new_new[4]
    answer1.setAttribute('top',correct_numerator)
    answer1.setAttribute('bottom',correct_denominator)
    timer_explain = setTimeout(show_explain,19800)
    time_out_time = setTimeout(restarter, 19900)
    timer_master = setTimeout(master, 20000)
    }
    else{
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        var answer1 = document.getElementById("display_photo")
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
        answer1.style.opacity = 0
    if(total_points >= 80){
    practice_title = current_exercise
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br> Congrats, you passed! "
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        document.getElementById("hello_ufo").style.opacity = 1
        document.getElementById("display_photo").style.opacity = 0
        document.getElementById("clock").className = "nothing"
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,4900)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br> Almost, try again!"
        document.getElementById("bb835").style.marginLeft = 0
        document.getElementById("bb835").style.textAlign ="center"
        document.getElementById("display_photo").style.opacity = 0
        document.getElementById("clock").className = "nothing"
        next_exercsie = current_exercise
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,4900)
    }}
}

function asteroid_off(){
    document.getElementById("asteroids").className = "twinkling"
    document.getElementById("buffer").style.display = "none"
    document.getElementById("canvas").style.display = "none"
    document.getElementById("backup_star").className = "nothing"
}


function restarter(){
    turns +=1
    counter +=1
    master()
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

function checker(id){
    var num1 = document.getElementById(id).src
    var den1 = document.getElementById(id).src
    var num_check = num1[num1.length-7]
    var den_check = den1[den1.length-5]
    if(num_check == correct_numerator && den_check == correct_denominator){
    if(allowed == true){
    check_off()
    setTimeout(check_on,2000)
    total_points +=20
    turns+=1
    counter +=1
    clearTimeout(time_out_time)
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    document.getElementById("clock").className = "nothing"
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br> Turns: "+  turns +"/5"
    setTimeout(master,2000)
    }}
    else{
    turns +=1
    counter +=1
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    clearTimeout(time_out_time)
    document.getElementById("clock").className = "nothing"
    setTimeout(show_explain,0)
    setTimeout(master, 100)
    }
}

var allowed = true
function check_on(){
allowed = true
}
function check_off(){
allowed = false
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
    num_dif = localStorage.getItem("num_dif")
    den_dif = localStorage.getItem("den_dif")
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
    	if(numerator[counter] ===1) {
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

function answer(numerator, denominator){
    scalar = localStorage.getItem("scalar")
    var r = Math.floor(Math.random()*scalar) + 2;
    var new_num = r*numerator
    var new_den = r*denominator
    var list1 = [new_num, new_den]
    return list1;
}

function start_time() {
    startTime = new Date();
  };


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
NumberAttempted.value=5;
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