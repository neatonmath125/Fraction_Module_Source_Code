
//Get master Id function

var displayed = []
var total_points = 0;
var turns = 0;

var title = ["_one","_two","_three"]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [[2,3,4,3,1,2,2,3],[1,4,1,4,1,1,1,4],[3,2,9,10,5,3,3,2],[3,4,9,2,1,6,3,2],[3,5,9,25,5,3,3,5],[7,5,14,15,3,2,7,5],[22,3,33,27,18,3,11,3],[7,3,14,15,5,2,7,3],[9,11,11,3,27,121,1,1],[8,9,6,7,28,27,2,1],[15,8,10,7,21,16,5,1],[5,12,5,24,2,1,5,12],[7,8,35,24,3,5,7,8],[3,25,6,5,1,10,3,5],[4,5,12,7,7,15,4,1]]
var Set2 = [[21,20,14,5,3,8,7,5],[9,5,3,20,12,1,3,5],[7,9,14,27,3,2,7,9],[3,13,15,26,2,5,3,13],[15,4,25,24,18,5,5,4],[8,9,10,9,4,5,2,9],[11,20,2,15,33,8,1,5],[9,5,3,7,21,5,3,1],[75,2,75,5,5,2,75,1],[15,2,20,3,9,8,5,1],[9,7,6,5,15,14,3,1],[5,6,10,9,3,4,5,3],[14,11,28,5,5,22,14,1],[11,40,33,8,1,15,11,8]]

var question_set = [Set1, Set2]

var den11
var den12
var num11
var num12
var correct
var number_needed

function shape1(){
    if(5109 <= master_id){
    localStorage.setItem("current_exercise","5109")
    localStorage.setItem("next_exercise","5110")
    localStorage.setItem("practice_title", "Divide to Multiply then Reduce Workout 1")
    localStorage.setItem("shape", 0);
    document.location.href = "game.php"}
}

function shape2(){
    if(5110 <= master_id){
    localStorage.setItem("current_exercise","5110")
    localStorage.setItem("next_exercise","5111")
    localStorage.setItem("practice_title", "Divide to Multiply then Reduce Workout 2")
    localStorage.setItem("shape", 1);
    document.location.href = "game.php"}
}



function opacity_setter(){
    var list1 = ["5109","5110"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

var super_answer
var first

function loader55(){
    setTimeout(loader,2500)

}


function loader(){
    document.getElementById("first_screen").style.display = "inline-block"
    if(turns < 5){
    first = 0
    document.getElementById("question5").innerHTML = "Question " + (turns+1) + "/5"
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
    document.getElementById("i5").style.display = "inline-block"
    document.getElementById("i6").style.display = "inline-block"
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
    var chosen55 = localStorage.getItem("chosen_set")
    var answer1 = question_set[chosen55]
    shuffle(answer1)
    super_answer = answer1.pop()
    document.getElementById("fr1").setAttribute("top", super_answer[0])
    document.getElementById("fr1").setAttribute("bottom", super_answer[1])
    document.getElementById("fr2").setAttribute("top", super_answer[2])
    document.getElementById("fr2").setAttribute("bottom", super_answer[3])
    document.getElementById("fr3").setAttribute("top", super_answer[0])
    document.getElementById("fr3").setAttribute("bottom", super_answer[1])
    document.getElementById("fr4").setAttribute("top", super_answer[3])
    document.getElementById("fr4").setAttribute("bottom", super_answer[2])
    }
    else{
        alert("Congradulations, you completed the level!")
        Submit()
    }
}

function submit(){
    var var1 = document.getElementById("i7").value
    var var2 = document.getElementById("i8").value
    if(var1 == super_answer[4] && var2 == super_answer[5]){
        alert("Nice!")
        turns +=1
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
    if(super_answer[6] != 1 && second == 0 && user == 0){
    document.getElementById("i1").style.display = "inline-block"
    document.getElementById("i4").style.display = "inline-block"
    second =1
    user = 1
    }
}

function work2(){
    if(super_answer[7] != 1 && third == 0 && user == 0){
    document.getElementById("i2").style.display = "inline-block"
    document.getElementById("i3").style.display = "inline-block"
    third =1
    user = 1
    }
}

function check1(){
    if(first ==0){
        var var1 = document.getElementById("i5").value
        var var2 = document.getElementById("i6").value
        if(var1 == super_answer[3] && var2 == super_answer[2]){
            alert("Nice!")
            document.getElementById("sq1").style.display = "inline-block"
            document.getElementById("sq2").style.display = "inline-block"
            document.getElementById("sq3").style.display = "inline-block"
            document.getElementById("sq4").style.display = "inline-block"
            document.getElementById("i5").style.display = "none"
            document.getElementById("i6").style.display = "none"
            second = 0
            third = 0
            user = 0
            first = 1
        }
    }
    else if(second == 1){
        var var1 = document.getElementById("i1").value
        var var2 = document.getElementById("i4").value
        if(var1 == (super_answer[0]/super_answer[6]) && var2 == (super_answer[2]/super_answer[6])){
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
    else if(third == 1){
        var var1 = document.getElementById("i2").value
        var var2 = document.getElementById("i3").value
        if(var1 == (super_answer[1]/super_answer[7]) && var2 == (super_answer[3]/super_answer[7])){
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



function explanation(){
    var string = "Sorry, your choice is incorrect. See below for the correct answer."
    return string
}

function show_explain(){
    var answer = explanation()
    window.alert(answer)
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