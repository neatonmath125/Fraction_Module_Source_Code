var total_points = 0;
var turns = 0;
var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")
var Set11 = ["1_1.png","2_1.png","3_1.png","4_1.png","5_1.png"]
var Set12 = ["1_2.png","2_2.png","3_2.png","4_2.png","5_2.png"]
var Set13 = ["1_3.png","2_3.png","3_3.png","4_3.png","5_3.png"]

var Set21 = ["6_1.png","7_1.png","8_1.png","9_1.png","10_1.png"]
var Set22 = ["6_2.png","7_2.png","8_2.png","9_2.png","10_2.png"]
var Set23 = ["6_3.png","7_3.png","8_3.png","9_3.png","10_3.png"]

var Set31 = ["11_1.png","12_1.png","13_1.png","14_1.png","15_1.png"]
var Set32 = ["11_2.png","12_2.png","13_2.png","14_2.png","15_2.png"]
var Set33 = ["11_3.png","12_3.png","13_3.png","14_3.png","15_3.png"]

var Set1 = [Set11,Set12,Set13]
var Set2 = [Set21,Set22,Set23]
var Set3 = [Set31,Set32,Set33]

var master_set = [Set1,Set2,Set3]

function reader(list55){
    var count = 0
    while(list55[count]!= "_"){
        count +=1
    }
    if(list55[count-2] != "/"){
        return list55[count-2] + list55[count-1]
    }
    else{
        return list55[count-1] 
    }
}




function good(){
	alert("Good Job!")
}

// Chosing the Settings
function very_easy(){
    if(5102 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5102" );
    localStorage.setItem("next_exercise","5103" );
    localStorage.setItem("practice_title","Change Divide to Multiply Workout 1");
    localStorage.setItem("set_number",0);
    document.location.href = "game.php"}
}

function easy(){
    if(5103 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5103" );
    localStorage.setItem("next_exercise","5104" );
    localStorage.setItem("practice_title","Change Divide to Multiply 2");
    localStorage.setItem("set_number",1);
    document.location.href = "game.php"}
}

function medium(){
    if(5104 <= master_id){
    localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5104" );
    localStorage.setItem("next_exercise","5105" );
    localStorage.setItem("practice_title","Change Divide to Multiply Workout 3");
    localStorage.setItem("set_number",1);
    document.location.href = "game.php"}
}

var top;
var middle;
var bottom;
var counter5;

function timout(){
    alert("Sorry, you did not complete the exercise in time, please try again!")
    next_exercsie = current_exercise
    Submit()
}

var timout55

function loader(){
    counter5 = 0;
    top55 = true
    middle55 = true
    bottom55 = true
    var chosen55 = localStorage.getItem("chosen_set")
    var sett1 = master_set[chosen55][0]
    var sett2 = master_set[chosen55][1]
    var sett3 = master_set[chosen55][2]
    var list1 = ["t1","t2","t3","t4","t5"]
    var list2 = ["m1","m2","m3","m4","m5"]
    var list3 = ["b1","b2","b3","b4","b5"]
    var ans1 = [0,0,0,0,0]
    var ans2 = [0,0,0,0,0]
    var ans3 = [0,0,0,0,0]
    shuffle(sett1)
    shuffle(sett2)
    shuffle(sett3)
    for(var x = 0; x <5; x++){
        document.getElementById(list1[x]).src = "./Set11/" + sett1[x]
        ans1[x] = sett1[x]
        document.getElementById(list2[x]).src = "./Set11/" + sett2[x]
        ans2[x] = sett2[x]
        document.getElementById(list3[x]).src = "./Set11/" + sett3[x]
        ans3[x] = sett3[x]
    }
    timeout55 = setTimeout(timeout,60000)
}

var answer_list = [0,0,0]
var answer_list2 = [0,0,0]

function off(){
    document.getElementById("canvas").style.opacity = 0
}

function shower(){
    document.getElementById("canvas").style.opacity = 1
    setTimeout(off, 5000)
}

function check(id){
    if(id[0] == "t" && top55 == true){
        top55 = false
        document.getElementById(id).style.backgroundColor = "yellow"
        answer_list[0] = document.getElementById(id).src
        answer_list2[0] = id
    }
    else if(id[0] == "m" && middle55 == true && top55 == false){
        middle55 = false
        document.getElementById(id).style.backgroundColor = "yellow"
        answer_list[1] = document.getElementById(id).src
        answer_list2[1] = id
    }
    else if (id[0] == "b" && bottom55 == true && middle55 == false && top55 == false){
        bottom55 = false
        document.getElementById(id).style.backgroundColor = "yellow"
        answer_list[2] = document.getElementById(id).src
        answer_list2[2] = id
        if(reader(answer_list[0]) == reader(answer_list[1]) && reader(answer_list[1])  == reader(answer_list[2])){
            document.getElementById(answer_list2[0]).style.display = "none"
            document.getElementById(answer_list2[1]).style.display = "none"
            document.getElementById(answer_list2[2]).style.display = "none"
            shower()
            counter5 += 1
            top55 = true
            middle55 = true
            bottom55 = true
            answer_list = [0,0,0]
            answer_list2 = [0,0,0]
            if(counter5 == 5){
                alert("Nice, you finished the level!")
                clearTimeout(timout55)
                Submit()
            }
        }
        else{
            document.getElementById(answer_list2[0]).style.backgroundColor = "white"
            document.getElementById(answer_list2[1]).style.backgroundColor = "white"
            document.getElementById(answer_list2[2]).style.backgroundColor = "white"
            top55 = true
            middle55 = true
            bottom55 = true
            answer_list = [0,0,0]
            answer_list2 = [0,0,0]
        }
    }
}




function opacity_setter(){
    var list1 = ["5102","5103","5104"]
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


function directions(){
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
NumberCorrect.value=counter5*2;
NumberAttempted.value=10;
Time.value=0;
Percent.value=((counter5*40)/200)*100;
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

