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
var explanation4 = "Sorry, thats not the right answer. See the correct answer below."
var third_one;
var third_two;
var scalar5
var second_answer = false
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/10";
var title = ["_one","_two","_three","_four","_five","_six",]
var super_answer
var timeout_alert 
var timout_restarter 
var timeout_master 

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


function equivalent(num1, den1, num2, den2){
    nummer1 = parseInt(num1)
    denner1 = parseInt(den1)
    nummer2 = parseInt(num2)
    denner2 = parseInt(den2)
    if((nummer1/denner1) == (nummer2/denner2)){
        return true
    }
    else{
        return false
    }

}

var ok_check = 1


function checker2(){
    if(ok_check ==1){
    ok_check = 0
    var num2 = document.getElementById("myInput2_1").value
    var den2 = document.getElementById("myInput2_2").value
    var num3 = document.getElementById("myInput3_1").value
    var den3 = document.getElementById("myInput3_2").value
    var answer = super_answer
    var picture = document.getElementById("picture1")
    var clock = document.getElementById("clock")
    var check = document.getElementById("checker2")
    var frac1 = document.getElementById("correct_one5")
    var frac2 = document.getElementById("correct_one6")
    var frac3 = document.getElementById("correct_one7")
    var input2_1 = document.getElementById("myInput2_1")
    var input2_2 = document.getElementById("myInput2_2")
    var input3_1 = document.getElementById("myInput3_1")
    var input3_2 = document.getElementById("myInput3_2")
    var plus = document.getElementById("+/-")
    var equal = document.getElementById("=")
    input2_1.style.opacity = 0
    input2_2.style.opacity = 0
    input3_1.style.opacity = 0
    input3_2.style.opacity = 0
    check.style.opacity = 0
    clock.className = "nothing"
    clearTimeout(timeout_alert)
    clearTimeout(timout_restarter)
    clearTimeout(timeout_master)
    if((answer[2] == num2 && answer[3] == den2) && ((answer[4] == num3 && answer[5] == den3)) || (answer[2] == num2 && answer[3] == den2) && ((answer[0] * answer[2] == num3 && answer[1] * answer[3] == den3))){
        document.getElementById("car11").style.opacity = 1
        document.getElementById("car11").className = "car"
        picture.style.opacity=0
        frac1.style.opacity=0
        frac2.style.opacity=0
        frac3.style.opacity=0
        plus.style.opacity=0
        equal.style.opacity=0
        turns+=1
        total_points +=20
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points +  " Turn: " + turns + "/10"
        setTimeout(nice, 5500)
        setTimeout(master2, 6000)
    }
    else{
        turns+=1
        document.getElementById("total_points").innerHTML = "Total Points: " + total_points +  " Turn: " + turns + "/10"
        setTimeout(alert57,2000)
        setTimeout(master2,4000)
    }
    }
}

function nice(){
    alert("Nice Work!")
}

function loader55(){
  off()
  master()
}

function directions(){
    document.location.href = "instructions.php"
}

var List1 = ["1_2_1_2_1_4.png","1_2_1_5_1_10.png","1_2_2_3_1_6.png","1_2_2_5_1_5.png","1_2_3_5_3_10.png","1_2_4_5_2_5.png","1_3_1_2_1_6.png","1_3_1_4_1_12.png","1_3_3_4_1_4.png","1_4_1_2_1_8.png","1_4_1_4_1_16.png","1_4_3_4_3_16.png","1_8_1_2_1_16.png","2_3_1_2_1_3.png","2_3_1_3_2_9.png","2_3_1_4_1_6.png","2_3_3_4_1_2.png","3_4_1_2_3_8.png","3_4_3_4_9_16.png"]
var master_list11 = [List1]

function reader(string1){
    counter = 0
    pointer = 0
    var list1 = ["",""]
    while(counter < 2){
        while (string1[pointer] != "_" && string1[pointer] != "."){
            list1[counter] += string1[pointer]
            pointer +=1
        }
        while(string1[pointer] == "_"){
            pointer+=1
        }
        counter +=1
    }
    return list1
}

function reader2(string1){
    counter = 0
    pointer = 0
    var list1 = ["","","","","",""]
    while(counter < 6){
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
    var list1 = ["5085"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }

}


var title5

function very_easy(){
    if(5085 <= master_id){
    localStorage.setItem("chosen_list",0);
    localStorage.setItem("practice_title","Visualizing Multiplication");
    localStorage.setItem("current_exercise","5085" );
    localStorage.setItem("next_exercise","5086" );
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

function master_chooser(){
  var chosen55 = localStorage.getItem("chosen_list")
  if(chosen55 == 0){
    master2()
    off()
  } 
  else{
    master2()
    off()
  }
}


function master2(){
    document.getElementById("car11").style.opacity = 0
    document.getElementById("car11").className = "nothing"
    ok_check = 1
    var picture = document.getElementById("picture1")
    var clock = document.getElementById("clock")
    var clock = document.getElementById("clock")
    var frac1 = document.getElementById("correct_one5")
    var frac2 = document.getElementById("correct_one6")
    var frac3 = document.getElementById("correct_one7")
    var input2_1 = document.getElementById("myInput2_1")
    var input2_2 = document.getElementById("myInput2_2")
    var input3_1 = document.getElementById("myInput3_1")
    var input3_2 = document.getElementById("myInput3_2")
    var checker2 = document.getElementById("checker2")
    var chosen55 = localStorage.getItem("chosen_list")
    var plus = document.getElementById("+/-")
    var equal = document.getElementById("=")
      if(turns < 10){
        plus.style.opacity = 1
        equal.style.opacity = 1
      input2_1.value = ""
      input2_1.style.opacity = 1
      input2_2.value = ""
      input2_2.style.opacity = 1
      input3_1.value = ""
      input3_1.style.opacity = 1
      input3_2.value = ""
      input3_2.style.opacity = 1
      checker2.style.opacity = 1
      frac1.style.opacity = 1
      frac2.style.opacity = 1
      frac3.style.opacity = 1
      clock.className = "clock"
      picture.style.opacity=1
      //var chosen_lister = master_list11[chosen55]
      //shuffle(chosen_lister)
      var chosen_lister = ["1_2_1_2_1_4.png","1_2_1_5_1_10.png","1_2_2_3_1_6.png","1_2_2_5_1_5.png","1_2_3_5_3_10.png","1_2_4_5_2_5.png","1_3_1_2_1_6.png","1_3_1_4_1_12.png","1_3_3_4_1_4.png","1_4_1_2_1_8.png","1_4_1_4_1_16.png","1_4_3_4_3_16.png","1_8_1_2_1_16.png","2_3_1_2_1_3.png","2_3_1_3_2_9.png","2_3_1_4_1_6.png","2_3_3_4_1_2.png","3_4_1_2_3_8.png","3_4_3_4_9_16.png"]
      shuffle(chosen_lister)
      var answer = chosen_lister.pop(0)
      super_answer = reader2(answer)
      frac1.setAttribute("top",super_answer[0])
      frac1.setAttribute("bottom",super_answer[1])
      frac2.setAttribute("top",super_answer[2])
      frac2.setAttribute("bottom",super_answer[3])
      frac3.setAttribute("top",super_answer[4])
      frac3.setAttribute("bottom",super_answer[5])
      picture.src = "Set1/" + answer;
      timeout_alert = setTimeout(alert57,19850)
      timout_restarter = setTimeout(restarter15, 19700)
      timeout_master = setTimeout(master2,20000)}
      else{
        var picture = document.getElementById("picture1")
        var clock = document.getElementById("clock")
        var checker2 = document.getElementById("checker2")
        picture.style.opacity = 0
        clock.style.opacity = 0
        frac1.style.opacity = 0
        frac2.style.opacity = 0
        frac3.style.opacity = 0
        input2_1.style.opacity = 0
        input2_2.style.opacity = 0
        input3_1.style.opacity = 0
        input3_2.style.opacity = 0
        checker2.style.opacity = 0
          if(total_points >= 160){
          practice_title = current_exercise
              document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Nice, you passed!"
              if(master_id > next_exercsie){
                  next_exercsie = master_id}
              setTimeout(Submit,4900)
          }
          
          else{
          practice_title = 0
              document.getElementById("total_points").innerHTML = "Total Points: " + total_points + "<br>" + "Almost, try again!"
              next_exercsie = current_exercise
              var new1 = parseInt(next_exercsie)
              var new2 = parseInt(master_id)
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

function alert57(){
    window.alert(explanation4)
}

function alert55(){
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    input2.style.opacity = 0
    input3.style.opacity = 0
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
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    input2.style.opacity = 0
    input3.style.opacity = 0
    second_answer=false
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/5";
    var clock = document.getElementById("clock")
    clock.className = "northing"
}

function restarter1(){
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/5";
    var clock = document.getElementById("clock")
    clock.className = "nothing"
    var input2 = document.getElementById("myInput2")
    var input3 = document.getElementById("myInput3")
    input2.style.opacity = 0
    input3.style.opacity = 0

}

function restarter15(){
    turns+=1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "   Turn: " + turns + "/5";
    var clock = document.getElementById("clock")
    clock.className = "nothing"
    var input2_1 = document.getElementById("myInput2_1")
    var input2_2 = document.getElementById("myInput2_2")
    var input3_1 = document.getElementById("myInput3_1")
    var input3_2 = document.getElementById("myInput3_2")
    input2_1.style.opacity = 0
    input2_2.style.opacity = 0
    input3_1.style.opacity = 0
    input3_2.style.opacity = 0

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

//////////////////////////////////

