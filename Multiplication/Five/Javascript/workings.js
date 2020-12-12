//Get master Id function

var turns = 0

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


var Set1 = [["-",1,5,"-",3,4,"",3,20],["-",3,4,"",3,7,"-",9,28],["",7,10,"-",3,4,"-",21,40],["-",1,6,"-",1,3,"",1,18],["-",5,9,"",1,2,"-",5,18],["-",3,5,"-",3,2,"",9,10],["-",4,3,"",4,7,"-",16,21],["",1,10,"-",5,4,"-",1,8],["-",3,8,"-",1,3,"",1,8],["-",5,7,"",2,5,"-",2,7],["-",6,7,"-",1,2,"",3,7],["-",5,6,"",1,2,"-",5,12],["",3,7,"-",1,2,"-",3,14],["-",1,2,"-",3,4,"",3,8],["-",5,3,"",3,5,"-",1,1],["-",1,2,"-",5,3,"",5,6],["-",3,4,"",1,1,"-",3,4],["",7,2,"-",1,4,"-",7,8],["-",1,1,"",9,5,"-",9,5],["-",1,9,"-",11,2,"",11,18]]
var Set2 = [["-",2,3,"-",3,2,"",1,1],["-",8,9,"",9,8,"-",1,1],["",7,11,"-",11,4,"-",7,4],["-",3,4,"-",4,3,"",1,1],["-",1,10,"",11,3,"-",11,30],["-",5,7,"-",3,5,"",3,7],["-",3,8,"",8,3,"-",1,1],["",4,3,"-",9,4,"-",3,1],["-",3,2,"-",8,3,"",4,1],["-",7,2,"",4,7,"-",2,1],["-",5,1,"-",1,4,"",5,4],["-",1,3,"",3,1,"-",1,1],["",7,1,"-",1,7,"-",1,1],["-",3,7,"-",7,4,"",3,4],["-",1,6,"",6,5,"-",1,5],["-",11,5,"-",3,11,"",3,5],["-",33,2,"",3,33,"-",3,2],["",9,5,"-",2,5,"-",18,25],["-",7,8,"-",1,2,"",7,16],["-",3,7,"",4,3,"-",4,7]]
var master_question = [Set1, Set2]
var correct_num
var correct_den

function loader(){
    document.getElementById('input1').value = ""
    document.getElementById('input2').value = ""
    var chosen_thing = localStorage.getItem("chosen_set")
    if (turns < 10){
        var frac1 = document.getElementById("frac1")
        var frac2 = document.getElementById("frac2")
        shuffle(master_question[chosen_thing])
        var answer = master_question[chosen_thing].pop()
        frac1.setAttribute("top",answer[0] + answer[1])
        frac1.setAttribute("bottom",answer[2])
        frac2.setAttribute("top",answer[3] + answer[4])
        frac2.setAttribute("bottom",answer[5])
        correct_num = answer[6] + answer[7]
        correct_den = answer[8]
    }
    else{
        alert("Awesome, you're done with this level, way to go!")
        setTimeout(Submit,2000)
    }
}


function nice(){
    alert("Nice Work!")

}

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }



function checker(){
    var num = document.getElementById('input1').value
    var den = document.getElementById('input2').value
    var reduced_num = reduce(num, den)[0]
    var reduced_den = reduce(num, den)[1]
    if (correct_num == num && correct_den == den){
        setTimeout(nice,100)
        turns +=1
        document.getElementById("question").innerHTML = "Question " + turns + "/10" 
        setTimeout(loader,500)
    }
    else if (reduced_num != num || reduced_den != den){
        alert("Your answer is not reduced, please reduce it and then see if it is correct!")
    }
    else{
        alert("Your answer is reduced but not correct, please try again!")
    }
}

function opacity_setter(){
    var list1 = ["5090", "5091"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5089 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5090" );
    localStorage.setItem("next_exercise","5091" );
    localStorage.setItem("practice_title","Practice Makes Perfect B Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5089.5 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5091" );
    localStorage.setItem("next_exercise","5094" );
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