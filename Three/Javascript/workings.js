
//need a function here to get the master_id from the PHP

var total_points = 0;
var turns = 0;

///////

//////

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [[1,4,3,5,3,20],[3,4,3,4,9,16],[7,10,7,4,49,40],[1,4,2,1,1,2],[3,4,4,3,1,1],[3,7,1,2,3,14],[2,3,2,3,4,9],[9,4,3,7,27,28],[6,4,1,3,1,2],[8,7,7,8,1,1],[1,2,7,8,7,16],[7,4,1,4,7,16],[7,11,11,5,7,5],[5,6,3,5,1,2],[9,2,2,9,1,1]]
var Set2 = [[5,4,3,2,15,8],[5,8,4,5,1,2],[3,11,11,3,1,1],[1,3,7,9,7,27],[4,5,8,9,32,45],[7,8,9,4,63,32],[7,6,3,7,1,2],[3,2,2,3,1,1],[3,7,2,3,2,7],[3,4,7,8,21,32],[8,9,5,3,40,27],[7,10,5,7,1,2],[5,16,16,5,1,1],[6,5,1,5,6,25],[5,9,6,5,2,3]]
var question_master = [Set1,Set2]

function lets_start(){
    loop()
    opacity_setter()
    master()
}

function jellyon(){
    document.getElementById("jelly1").style.display = "inline-block"
    document.getElementById("jelly2").style.display = "inline-block"
    document.getElementById("jelly3").style.display = "inline-block"
    document.getElementById("jelly4").style.display = "inline-block"
    document.getElementById("jelly5").style.display = "inline-block"
    document.getElementById("jelly6").style.display = "inline-block"
    document.getElementById("jelly7").style.display = "inline-block"
}

function jellyoff(){
    document.getElementById("jelly1").style.display = "none"
    document.getElementById("jelly2").style.display = "none"
    document.getElementById("jelly3").style.display = "none"
    document.getElementById("jelly4").style.display = "none"
    document.getElementById("jelly5").style.display = "none"
    document.getElementById("jelly6").style.display = "none"
    document.getElementById("jelly7").style.display = "none"
}
var correct_num
var correct_den

function loader(){
    var chosen_thing = localStorage.getItem("chosen_set")
    document.getElementById('input1').value = ""
    document.getElementById('input2').value = ""
    if (turns < 10){
        var frac1 = document.getElementById("frac1")
        var frac2 = document.getElementById("frac2")
        shuffle(question_master[chosen_thing])
        var answer = question_master[chosen_thing].pop()
        frac1.setAttribute("top",answer[0])
        frac1.setAttribute("bottom",answer[1])
        frac2.setAttribute("top",answer[2])
        frac2.setAttribute("bottom",answer[3])
        correct_num = answer[4]
        correct_den = answer[5]
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
        jellyon()
        setTimeout(nice,5000)
        setTimeout(jellyoff,4900)
        turns +=1
        document.getElementById("question").innerHTML = "Question " + turns + "/10" 
        setTimeout(loader,5500)
    }
    else if (reduced_num != num || reduced_den != den){
        alert("Your answer is not reduced, please reduce it and then see if it is correct!")
    }
    else{
        alert("Your answer is reduced but not correct, please try again!")
    }
}



function lets_start2(){
    loop()
    master()
}

function opacity_setter(){
    var list1 = ["5088","5089"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}


function very_easy(){
    if(5088 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5088" );
    localStorage.setItem("next_exercise","5089" );
    localStorage.setItem("practice_title","Practice makes Perfect A Workout 1");
    document.location.href = "game.php"}
}
function easy(){
    if(5088.5 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5089" );
    localStorage.setItem("next_exercise","5090" );
    localStorage.setItem("practice_title","Practice makes Perfect A Workout 2");
    document.location.href = "game.php"}
}

function return_index(){
    document.location.href = "index.php"
}

function instructions(){
    document.location.href = "instructions.php"
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


