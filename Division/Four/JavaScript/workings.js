//Get master Id function

var turns = 0

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


var Set1 = [["-",1,5,"-",3,4,"",4,15],["-",3,4,"",3,7,"-",7,4],["",7,10,"-",3,4,"-",14,15],["-",1,6,"-",1,3,"",1,2],["-",5,9,"",1,2,"-",10,9],["-",3,5,"-",3,2,"",2,5],["-",4,3,"",4,7,"-",7,3],["",1,10,"-",5,4,"-",2,25],["-",3,8,"-",1,3,"",9,8],["-",5,7,"",2,5,"-",25,14],["-",6,7,"-",1,2,"",12,7],["-",5,6,"",1,2,"-",5,3],["",3,7,"-",1,2,"-",6,7],["-",1,2,"-",3,4,"",2,3],["-",5,3,"",3,5,"-",25,9],["-",2,3,"-",3,2,"",4,9],["-",8,9,"",9,8,"-",64,81],["",7,11,"-",11,4,"-",28,121],["-",3,4,"-",4,3,"",9,16],["-",1,9,"-",11,2,"",2,99]]
var Set2 = [["-",1,10,"",11,3,"-",3,110],["-",5,7,"-",3,5,"",25,21],["-",3,8,"",8,3,"-",9,64],["",4,3,"-",9,4,"-",16,27],["-",3,2,"-",8,3,"",9,16],["-",7,2,"",4,7,"-",49,8],["-",5,1,"-",1,4,"",20,1],["-",1,3,"",3,1,"-",1,9],["",7,1,"-",1,7,"-",49,1],["-",3,7,"-",7,4,"",12,49],["-",1,6,"",6,5,"-",5,36],["-",11,5,"-",11,3,"",3,5],["-",33,2,"",33,3,"-",3,2],["",9,5,"-",2,5,"-",9,2],["-",7,8,"-",1,2,"",7,4],["-",1,1,"",9,5,"-",5,9],["-",1,2,"-",5,3,"",3,10],["-",3,4,"",1,1,"-",3,4],["",7,2,"-",1,4,"-",14,1],["-",3,7,"",4,3,"-",9,28]]
question_master = [Set1, Set2]

var correct_num
var correct_den

function loader(){
    if(turns < 10){
    document.getElementById("question").innerHTML = "Question " + (turns +1) + "/10"
    var chosen_thing = localStorage.getItem("chosen_set")
    var answer_list = question_master[chosen_thing]
    shuffle(answer_list)
    answer5 = answer_list.pop()
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("frac1").setAttribute("top", answer5[0] + answer5[1])
    document.getElementById("frac1").setAttribute("bottom", answer5[2])
    document.getElementById("frac2").setAttribute("top", answer5[3] + answer5[4])
    document.getElementById("frac2").setAttribute("bottom", answer5[5])
    document.getElementById("frac3").setAttribute("top", answer5[0] + answer5[1])
    document.getElementById("frac3").setAttribute("bottom", answer5[2])
    }
    else{
        alert("Congrats, you're done!")
        Submit()
    }
}

//["-",1,10,"",11,3,"",3,110]
function fireworks_off(){
    document.getElementById("firework-canvas").style.opacity = 0
}

function fireworks(){
    document.getElementById("firework-canvas").style.opacity = 1
    setTimeout(fireworks_off,5000)
}

function checker(){
    var1 = document.getElementById("input1").value 
    var2 = document.getElementById("input2").value 
    var3 = document.getElementById("input3").value 
    var4 = document.getElementById("input4").value
    if((var2 == (answer5[3] + answer5[5]) && var1 == answer5[4] && var3 == (answer5[6] + answer5[7]) && var4 == answer5[8]) || (var2 == (answer5[5]) && var1 == (answer5[3] + answer5[4]) && var3 == (answer5[6] + answer5[7]) && var4 == answer5[8]) || (var2 == (answer5[5]) && var1 == (answer5[3] + answer5[4]) && var3 == (answer5[7]) && var4 == ( answer5[6] + answer5[8])) || (var2 == (answer5[3] + answer5[5]) && var1 == (answer5[4]) && var3 == (answer5[7]) && var4 == ( answer5[6] + answer5[8]))){
        turns +=1
        fireworks()
        alert("Nice!")
        loader()
    }
    else if (var2 == (answer5[3] + answer5[5]) && var1 == answer5[4]){
        alert("Your work is correct, but your answer is wrong, please fix it and try again!")
    }
    else if (var3 == (answer5[6] + answer5[7]) && var4 == answer5[8]){
        alert("Your answer is right but your work is wrong, please fix it and try again.")
    }
    else{
        alert("Both your work and answer are wrong, please try again!")
    }
}


function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }





function opacity_setter(){
    var list1 = ["5107","5108"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}



function very_easy(){
    if(5107 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5107" );
    localStorage.setItem("next_exercise","5108" );
    localStorage.setItem("practice_title","Practice Makes Perfect B Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5108 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5108" );
    localStorage.setItem("next_exercise","5109" );
    localStorage.setItem("practice_title","Practice Makes Perfect B Workout 2");
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
    if(master_id > next_exercsie){
        next_exercsie = master_id
    }
NumberCorrect.value=10;
NumberAttempted.value=10;
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