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


var Set1 = [[2,2,3,1,5,8,8,1,13,3],[4,1,3,2,1,4,1,3,39,4],[1,4,5,1,1,4,1,5,9,4],[1,7,9,"",5,8,8,1,10,9],[1,1,4,1,1,5,5,2,3,2],[3,3,4,2,1,5,5,1,33,4],[1,1,2,3,1,2,1,1,21,4],[1,3,7,1,3,4,2,7,5,2],[1,5,8,"",3,8,1,1,39,64],[4,1,2,"",1,4,1,1,9,8],[2,2,3,2,1,4,4,3,6,1]]
var Set2 = [[3,1,4,"",1,13,13,1,1,4],[3,1,5,6,1,4,4,5,20,1],[3,3,5,2,1,2,2,5,9,1],[2,1,4,2,1,4,1,1,81,16],[2,1,5,2,3,11,11,5,5,1],[1,5,14,1,2,19,19,7,3,2],[2,1,12,1,1,11,1,12,25,11],[2,2,5,1,2,3,3,5,4,1],[1,3,14,1,11,17,17,14,2,1],[6,2,5,3,1,8,8,5,20,1],[2,6,7,1,1,10,10,1,22,7]]
var master_questions = [Set1, Set2]
var super_answer

    
function very_easy(){
    if(5093 <= master_id){
    localStorage.setItem("chosen_set", 0)
    localStorage.setItem("practice_title","Covert Operations A Workout 1");
    localStorage.setItem("current_exercise","5092" );
    localStorage.setItem("next_exercise","5093" );
    document.location.href = "game.php"}
}

function easy(){
  if(5094 <= master_id){
    localStorage.setItem("chosen_set", 1)
  localStorage.setItem("practice_title","Covert Operations A Workout 2");
  localStorage.setItem("current_exercise","5093" );
  localStorage.setItem("next_exercise","5090" );
  document.location.href = "game.php"}
}

function loader(){
    document.getElementById("first_screen").style.display = "inline-block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("h1").innerHTML = "Question " + turns + "/5" 
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    if(turns < 5){
        var chosen25 = localStorage.getItem("chosen_set")
        var answer25 = master_questions[chosen25]
        shuffle(answer25)
        super_answer = answer25.pop()
        document.getElementById("frac1_left").setAttribute("top", super_answer[0])
        document.getElementById("frac1_right").setAttribute("top", super_answer[1])
        document.getElementById("frac1_right").setAttribute("bottom", super_answer[2])
        document.getElementById("frac2_left").setAttribute("top", super_answer[3])
        document.getElementById("frac2_right").setAttribute("top", super_answer[4])
        document.getElementById("frac2_right").setAttribute("bottom", super_answer[5])
    }
    else{
        alert("Congrats, you finished the level!")
        Submit()
    }
}

var num1
var num2
var den1
var den2

function check11(){
    num1 = super_answer[2] * super_answer[0] + super_answer[1]
    num2 = super_answer[5] * super_answer[3] + super_answer[4]
    den1 = super_answer[2]
    den2 = super_answer[5]
    var var1 = document.getElementById("input1").value
    var var2 = document.getElementById("input2").value 
    var var3 = document.getElementById("input3").value 
    var var4 = document.getElementById("input4").value
    if(var1 == num1 && var2 == den1 && var3 == num2 && var4 == den2){
        alert("Nice Job!")
        loader2()
    }
    else{
        alert("Sorry, your conversion is not correct, please try again.")
    }
}

function loader2(){
    if(turns < 5){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "inline-block"
    first = 1
    document.getElementById("question5").innerHTML = "Question " + turns + "/5"
    document.getElementById("i1").value = ""
    document.getElementById("i2").value = ""
    document.getElementById("i3").value = ""
    document.getElementById("i4").value = ""
    document.getElementById("i5").value = ""
    document.getElementById("i6").value = ""
    document.getElementById("i7").value = ""
    document.getElementById("i8").value = ""
    document.getElementById("i1").style.display = "none"
    document.getElementById("i2").style.display = "none"
    document.getElementById("i3").style.display = "none"
    document.getElementById("i4").style.display = "none"
    document.getElementById("i5").style.display = "none"
    document.getElementById("i6").style.display = "none"
    document.getElementById("i7").style.display = "inline-block"
    document.getElementById("i8").style.display = "inline-block"
    document.getElementById("sq1").style.display = "none"
    document.getElementById("sq2").style.display = "none"
    document.getElementById("sq3").style.display = "none"
    document.getElementById("sq4").style.display = "none"
    document.getElementById("s1").style.opacity = 0
    document.getElementById("s2").style.opacity = 0
    document.getElementById("s3").style.opacity = 0
    document.getElementById("s4").style.opacity = 0
    document.getElementById("fr3").setAttribute("top", num1)
    document.getElementById("fr3").setAttribute("bottom", den1)
    document.getElementById("fr4").setAttribute("top", num2)
    document.getElementById("fr4").setAttribute("bottom", den2)
    document.getElementById("sq1").style.display = "inline-block"
            document.getElementById("sq2").style.display = "inline-block"
            document.getElementById("sq3").style.display = "inline-block"
            document.getElementById("sq4").style.display = "inline-block"
            document.getElementById("i5").style.display = "none"
            document.getElementById("i6").style.display = "none"
            second = 0
            third = 0
            first = 1
            user = 0
    }
    else{
        alert("Congratulations  , you completed the level!")
        Submit()
    }
}

function submit(){
    var var1 = document.getElementById("i7").value
    var var2 = document.getElementById("i8").value
    if(var1 == super_answer[8] && var2 == super_answer[9]){
        turns +=1
        alert("Nice!")
        loader()
    }
    else{
        alert("Sorry, this is wrong answer, make sure that you have done the work correctly!")
    }
}

var second
var third
var user

function work1(){
    if(super_answer[8] != 1 && second == 0 && user == 0){
    document.getElementById("i1").style.display = "inline-block"
    document.getElementById("i4").style.display = "inline-block"
    second =1
    user = 1
    }
}

function work2(){
    if(super_answer[9] != 1 && third == 0 && user == 0){
    document.getElementById("i2").style.display = "inline-block"
    document.getElementById("i3").style.display = "inline-block"
    third =2
    user = 1
    }
}

function check1(){
    if(first ==0){
        var var1 = document.getElementById("i5").value
        var var2 = document.getElementById("i6").value
        if(var1 == den2 && var2 == num2){
            alert("Nice!")
            document.getElementById("sq1").style.display = "inline-block"
            document.getElementById("sq2").style.display = "inline-block"
            document.getElementById("sq3").style.display = "inline-block"
            document.getElementById("sq4").style.display = "inline-block"
            document.getElementById("i5").style.display = "none"
            document.getElementById("i6").style.display = "none"
            second = 0
            third = 0
            first = 1
            user = 0
        }
    }
    else if(second == 1){
        var var1 = document.getElementById("i1").value
        var var2 = document.getElementById("i4").value
        if(var1 == (num1/super_answer[6]) && var2 == (den2/super_answer[6])){
            document.getElementById("s1").style.opacity = 1
            document.getElementById("s4").style.opacity = 1
            alert("Nice")
            user =0
            second = 2
        }
        else{
            alert("Sorry, this is not the correct work, make sure your work is reduced fully.")
        }
    }
    else if(third == 2){
        var var1 = document.getElementById("i2").value
        var var2 = document.getElementById("i3").value
        if(var1 == (den1/super_answer[7]) && var2 == (num2/super_answer[7])){
            document.getElementById("s2").style.opacity = 1
            document.getElementById("s3").style.opacity = 1
            alert("Nice")
            user =0
            third = 2
        }
        else{
            alert("Sorry, this is not the correct work, make sure your work is reduced fully.")
        }
    }
    else{
        alert("Sorry, this work is wrong, please try again!")
    }
}


function elim_counter(list1){
    var counter = 0
    for(x = 8; x++; x < 14){
        if(list1[x] != 1){
            counter +=1
        }
    }
    return counter
}

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


function directions(){
    document.location.href = "instructions.php"
}

function loader55(){
    opacity_setter()
    master()
}

function opacity_setter(){
    var list1 = ["5092","5093"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
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

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
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
	NumberCorrect.value=5;
	NumberAttempted.value=5;
	Time.value=0;
	Percent.value=100;
	PracticeTitle.value=practice_title;
    PracticeId.value=master_id;
    Completed.value = current_exercise
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
