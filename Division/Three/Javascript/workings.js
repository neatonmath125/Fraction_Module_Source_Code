//need a function here to get the master_id from the PHP

var total_points = 0;
var turns = 0;

///////
//////

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


var Set1 = [[1,4,3,5,5,12],[3,4,3,4,1,1],[7,10,5,3,21,50],[1,4,3,1,1,12],[3,4,4,3,9,16],[3,7,1,2,6,7],[2,3,2,3,1,1],[9,4,5,7,63,20],[5,4,1,3,15,4],[8,7,7,8,64,49],[1,2,7,9,9,14],[7,5,1,4,28,5],[7,15,1,5,7,3],[6,5,1,5,6,1],[7,11,5,11,7,5]]
var Set2 = [[5,4,3,7,35,12],[5,8,4,5,25,32],[3,11,11,3,9,121],[1,3,7,9,3,7],[4,5,8,9,9,10],[7,6,3,7,49,18],[7,8,9,4,7,18],[3,2,2,3,9,4],[3,7,2,3,9,14],[3,4,7,8,6,7],[8,9,5,7,56,45],[7,10,7,2,1,5],[5,6,2,3,5,4],[9,2,1,2,9,1],[5,9,4,3,5,12]]
var question_master = [Set1, Set2]



var answer5

function loader(){
    if(turns < 10){
    document.getElementById("question").innerHTML = "Question " + (turns+1) + "/10"
    var chosen_thing = localStorage.getItem("chosen_set")
    var answer_list = question_master[chosen_thing]
    shuffle(answer_list)
    answer5 = answer_list.pop()
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("frac1").setAttribute("top", answer5[0])
    document.getElementById("frac1").setAttribute("bottom", answer5[1])
    document.getElementById("frac2").setAttribute("top", answer5[2])
    document.getElementById("frac2").setAttribute("bottom", answer5[3])
    document.getElementById("frac3").setAttribute("top", answer5[0])
    document.getElementById("frac3").setAttribute("bottom", answer5[1])
    }
    else{
        alert("Congrats, you're done!")
        Submit()
    }
}

function checker(){
    var1 = document.getElementById("input1").value 
    var2 = document.getElementById("input2").value 
    var3 = document.getElementById("input3").value 
    var4 = document.getElementById("input4").value 
    if(var2 == answer5[3] && var1 == answer5[2] && var3 == answer5[4] && var4 == answer5[5]){
        alert("Nice!")
        turns +=1
        loader()
    }
    else if (var1 == answer5[2]  && var2 == answer5[3]){
        alert("Your work is correct, but your answer is wrong, please fix it and try again! Make sure that you submit a reduced answer.")
    }
    else if (var3 == answer5[4] && var4 == answer5[5]){
        alert("Your answer is right but your work is wrong, please fix it and try again.")
    }
    else{
        alert("Both your work and answer are wrong, please try again! Make sure that you submit a reduced answer.")
    }
}


var correct_num
var correct_den



function opacity_setter(){
    var list1 = ["5105","5106"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5105 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5105" );
    localStorage.setItem("next_exercise","5106" );
    localStorage.setItem("practice_title","Practice Makes Perfect A Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5106 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5106" );
    localStorage.setItem("next_exercise","5107" );
    localStorage.setItem("practice_title","Practice Makes Perfect B Workout 1");
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


