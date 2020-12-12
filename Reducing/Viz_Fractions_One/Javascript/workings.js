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
var master_list = [["1o5.png","2o5.png","3o5.png","4o5.png","5o5.png"],["1o6.png","2o6.png","3o6.png","4o6.png","5o6.png","6o6.png"],["1o4.png","2o4.png","3o4.png","4o4.png"],["1o8.png","2o8.png","3o8.png","4o8.png","5o8.png","6o8.png","7o8.png","8o8.png"],["1o4.png","2o4.png","3o4.png","4o4.png"],["1o3.png","2o3.png","3o3.png"]]
var master_list2 = ["1/","2/","3/","4/","5/","6/"]
var master_source = "Shape"
var chosen_shape 
var master_url 
var new_array 
var new_new 
var counter = 0
var length_list
var time_out_time2; 
var correct_numerator
var correct_denominator
var explain_timout;
var time_out_time
chosen_shape = localStorage.getItem("shape")
master_url = master_source + master_list2[chosen_shape]
new_array = master_list[chosen_shape]
new_new = shuffle(new_array)
length_list = new_new.length
var title = ["/One","/Two","/Three","/Four","/Five","/Six",]
var practice_title = "Viz Fractions One" + title[chosen_shape]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var completed_exercise
var practice_title


function loader(){
    setTimeout(master,500)
}

function opacity_setter(){
    var list1 = ["5001","5002","5003","5004","5005","5006"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}



function shape1(){    
    if(5001 <= master_id){
    localStorage.setItem("current_exercise","5001" );
    localStorage.setItem("next_exercise","5002" );
    localStorage.setItem("shape", 0);
    localStorage.setItem("margin_top", 0);
    localStorage.setItem("num_dif",5)
    localStorage.setItem("den_dif",7)
    document.location.href = "game.php"}
}

function shape2(){
    if(5002 <= master_id){
    localStorage.setItem("current_exercise","5002" );
    localStorage.setItem("next_exercise","5003" );
    localStorage.setItem("shape", 1);
    localStorage.setItem("margin_top", 0);
    localStorage.setItem("num_dif",6)
    localStorage.setItem("den_dif",8)
    document.location.href = "game.php"}
}

function shape3(){
    if(5003 <= master_id){
    localStorage.setItem("current_exercise","5003" );
    localStorage.setItem("next_exercise","5004" );
    localStorage.setItem("shape", 2);
    localStorage.setItem("margin_top", 0);
    localStorage.setItem("num_dif",4)
    localStorage.setItem("den_dif",6)
    document.location.href = "game.php";}
}

function shape4(){
    if(5004 <= master_id){
    localStorage.setItem("current_exercise","5004" );
    localStorage.setItem("next_exercise","5005" );
    localStorage.setItem("shape", 3);
    localStorage.setItem("margin_top", 125);
    localStorage.setItem("num_dif",8)
    localStorage.setItem("den_dif",10)
    document.location.href = "game.php";}
}

function shape5(){
    if(5005 <= master_id){
    localStorage.setItem("current_exercise","5005" );
    localStorage.setItem("next_exercise","5006" );
    localStorage.setItem("shape", 4);
    localStorage.setItem("margin_top", 0);
    localStorage.setItem("num_dif",4)
    localStorage.setItem("den_dif",6)
    document.location.href = "game.php"}
}

function shape6(){
    if(5006 <= master_id){
    localStorage.setItem("current_exercise","5006" );
    localStorage.setItem("next_exercise","5007" );
    localStorage.setItem("shape", 5);
    localStorage.setItem("margin_top", 125);
    localStorage.setItem("num_dif",3)
    localStorage.setItem("den_dif",5)
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

function master(){
    var mar_top = localStorage.getItem("margin_top")
    document.getElementById("display_photo").style.marginTop = mar_top;
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/"+length_list*20+ "<br> Turns: "+  turns +"/" + length_list
    threshold = Math.floor((20*length_list)/2)
if(turns < length_list){
    document.getElementById("clock").className = "clock"
    var fraction = new_new[counter]
    var picture = master_url + fraction
    correct_numerator = fraction[0]
    correct_denominator = fraction[2]
    var possible_answers = generator()
    possible_answers[0][0] = correct_numerator
    possible_answers[0][1] = correct_denominator
    var cases = shuffle(possible_answers)
    var choice1 = document.getElementById("choice_one")
    var choice2 = document.getElementById("choice_two")
    var choice3 = document.getElementById("choice_three")
    var choice4 = document.getElementById("choice_four")
    var choice5 = document.getElementById("choice_five")
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
    document.getElementById("display_photo").src = picture
    explain_timout = setTimeout(show_explain,19900)
    time_out_time = setTimeout(restarter, 19000)
    time_out_time2 = setTimeout(master, 20000)
    }
    
    else{
        var choice1 = document.getElementById("choice_one")
        var choice2 = document.getElementById("choice_two")
        var choice3 = document.getElementById("choice_three")
        var choice4 = document.getElementById("choice_four")
        var choice5 = document.getElementById("choice_five")
        choice1.style.opacity = 0
        choice2.style.opacity = 0
        choice3.style.opacity = 0
        choice4.style.opacity = 0
        choice5.style.opacity = 0
           if(total_points >= Math.floor(length_list*20*.8)){
           practice_title = current_exercise
                document.getElementById("bb835").innerHTML = "Points: " + total_points + "/"+length_list*20+ "<br> Congrats, you passed! "
                document.getElementById("bb835").style.marginLeft = 0
                document.getElementById("bb835").style.textAlign ="center"
                document.getElementById("asteroids").className = "page page-meteor-canvas"
                document.getElementById("buffer").style.display = ""
                document.getElementById("canvas").style.display = ""
                document.getElementById("backup_star").className = "stars"
                document.getElementById("display_photo").style.opacity = 0
                if(master_id > next_exercsie){
                next_exercsie = master_id
                }
                completed_exercise=current_exercise
                         
                 setTimeout(Submit,4900)
                }
            else{
            practice_title = 0
                document.getElementById("bb835").innerHTML = "Points: " + total_points + "/"+length_list*20+ "<br> Almost, try again!"
                document.getElementById("bb835").style.marginLeft = 0
                document.getElementById("bb835").style.textAlign ="center"
                document.getElementById("display_photo").style.opacity = 0
                next_exercsie = current_exercise
                if(master_id > next_exercsie){
                next_exercsie = master_id}
                setTimeout(Submit,4900)
                }
        }
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
    document.getElementById("clock").className = "clock_blank"
    document.getElementById("clock").style.opacity = "0"
}

function explanation(){
    var string = "Sorry, your choice is incorrect. The figure shown is made up of " + correct_denominator
    string += " tiles, and of the " + correct_denominator + " tiles, " + correct_numerator
    string += " of them are filled in. So, the fraction that represents this shape the best is " + correct_numerator + "/" + correct_denominator + "."
    return string
}

function show_explain(){
    var text = explanation()
    window.alert(text)
}

function checker(id){
    var num_check = document.getElementById(id).getAttribute("top")
    var den_check = document.getElementById(id).getAttribute("bottom")
    document.getElementById("clock").className = "nothing"
    if(num_check == correct_numerator && den_check == correct_denominator){
    if(allowed == true){
    check_off()
    setTimeout(check_on,2000)
    total_points +=20
    turns+=1
    counter +=1
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/"+length_list*20+ "<br> Turns: "+  turns +"/" + length_list
    document.getElementById("clock").style,opacity = "0"
    document.getElementById("clock").className = "clock_blank"
    clearTimeout(explain_timout)
    clearTimeout(time_out_time)
    clearTimeout(time_out_time2)
    setTimeout(master,2000)
    }}
    else{
    turns +=1
    counter +=1
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/"+length_list*20+ "<br> Turns: "+  turns +"/" + length_list
    document.getElementById("clock").style,opacity = "0"
    document.getElementById("clock").className = "clock_blank"
    clearTimeout(explain_timout)
    clearTimeout(time_out_time)
    clearTimeout(time_out_time2)
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

function common(list1, list2,var1,var2){
    var min1 = list2.length
    for(var x=0; x<min1; x++){
        if(list1[x]== var1 && list2[x] == var2){
            return false
        }
    }
    return true
}


function generator(){
    num_dif = localStorage.getItem("num_dif")
    den_dif = localStorage.getItem("den_dif")
    ones = {}
    var numerator = []
    while(numerator.length < 5){
    var r = Math.floor(Math.random()*num_dif) + 1;
    numerator.push(r);
    }
    var denominator = []
    var counter = 0
    while(denominator.length < 5){
    var temp = den_dif
    var r = Math.floor(Math.random()*(temp))+1;
    if(common(numerator, denominator,numerator[counter],r)==true){
            denominator.push(r)
        	counter+=1
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
	NumberCorrect.value=total_points/20;
	NumberAttempted.value=length_list;
	Time.value=0;
	Percent.value=(total_points/(length_list*20))*100;
	PracticeTitle.value=current_exercise;
        PracticeId.value=current_exercise;
        Completed.value = practice_title;
        GoTo.value = next_exercsie;
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