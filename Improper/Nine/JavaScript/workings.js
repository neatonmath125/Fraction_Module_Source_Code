//Get master Id function

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
var title = ["_one","_two","_three"]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [["-",3,2],["",4,3],["-",5,3],["",5,4],["-",7,4],["",6,5],["-",7,5],["",8,5],["-",9,5],["",11,10],["-",5,2],["",7,3],["-",8,3],["",9,4],["-",11,4],["",11,5],["-",12,5],["",13,5],["-",14,5],["",21,10],["-",7,2],["",10,3],["-",11,3],["",13,4],["-",15,4],["-",16,5],["",17,5],["-",18,5],["",19,5],["-",31,10],["",9,2],["-",13,3],["",14,3],["-",17,4],["",19,4],["-",21,5],["",22,5],["-",23,5],["",24,5],["-",41,10],["",11,2],["-",16,3],["",17,3],["-",21,4],["",23,4],["-",26,5],["",27,5],["-",28,5],["",29,5],["-",51,10]]
var Set2 = [["-",37,6],["",43,7],["-",49,8],["",55,9],["-",68,11],["",69,11],["-",71,11],["",51,50],["-",53,50],["",57,50],["-",71,50],["",101,100],["-",111,100],["",123,100],["-",151,100],["",43,6],["-",50,7],["",57,8],["-",64,9],["",79,11],["-",80,11],["",101,50],["-",103,50],["",107,50],["-",121,50],["",201,100],["-",211,100],["",223,100],["-",251,100],["-",49,6],["",57,7],["-",65,8],["",73,9],["-",90,11],["",91,11],["-",93,11],["",55,6],["-",64,7],["",73,8],["-",82,9],["",101,11],["-",102,11],["",104,11]]

var question_set = [Set1, Set2];

var allowed22 = 1

function on22(){
     allowed22 = 1   
}

function off22(){
     allowed22 = 0   
}


function checker(){
    if(allowed22 ==1){
    off22()
    setTimeout(on22,2000)
    var answer54 = document.getElementById("answer")
    var num = parseInt(answer54.getAttribute("top"))
    var den = parseInt(answer54.getAttribute("bottom"))
    var frac1 = document.getElementById("myInput1")
    var frac2 = document.getElementById("myInput2")
    var frac3 = document.getElementById("myInput3")
    var whole = parseInt(frac1.value)
    var num2 = parseInt(frac2.value)
    var den2 = parseInt(frac3.value)
    if(den == den2 && (den2*whole + (whole/Math.abs(whole)* num2)) == num){
    document.getElementById("myInput1").style.opacity = 0
    document.getElementById("myInput2").style.opacity = 0
    document.getElementById("myInput3").style.opacity = 0
    document.getElementById("answer").style.opacity = 0
    document.getElementById("question").style.opacity = 0
    document.getElementById("question2").style.opacity = 0
    document.getElementById("mult").style.opacity = 0
    document.getElementById("enter1").style.opacity = 0
    total_points +=20
    turns+=1
    counter +=1
    clearTimeout(time_out_time)
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    document.getElementById("clock").className = "nothing"
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Turns: "+  turns +"/10"
    setTimeout(master,2000)
    }
    else{
    turns +=1
    counter +=1
    document.getElementById("myInput1").style.opacity = 0
    document.getElementById("myInput2").style.opacity = 0
    document.getElementById("myInput3").style.opacity = 0
    clearTimeout(timer_explain)
    clearTimeout(timer_master)
    clearTimeout(time_out_time)
    document.getElementById("clock").className = "nothing"
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Turns: "+  turns +"/10"
    setTimeout(show_explain,200)
    setTimeout(master, 2000)
    }
}}

function shower11(){
    turns +=1
    counter +=1
    document.getElementById("myInput1").style.opacity = 0
    document.getElementById("myInput2").style.opacity = 0
    document.getElementById("myInput3").style.opacity = 0
    document.getElementById("clock").className = "nothing"
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Turns: "+  turns +"/10"
}

function master(){
if(turns < 10){
    document.getElementById("myInput1").style.opacity = 1
    document.getElementById("myInput2").style.opacity = 1
    document.getElementById("myInput3").style.opacity = 1
    document.getElementById("myInput1").value = ""
    document.getElementById("myInput2").value = ""
    document.getElementById("myInput3").value = ""
    document.getElementById("answer").style.opacity = 1
    document.getElementById("question").style.opacity = 1
    document.getElementById("question2").style.opacity = 1
    document.getElementById("mult").style.opacity = 1
    document.getElementById("enter1").style.opacity = 1
    document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Turns: "+  turns +"/10"
    document.getElementById("clock").className = "clock"
    var chosen  = localStorage.getItem("set")
    var bank1 = question_set[chosen]
    var answer55 = document.getElementById("answer")
    shuffle(bank1)
    var bank = bank1.pop()
    answer55.setAttribute("top", bank[0] + bank[1])
    answer55.setAttribute("bottom", bank[2])
    var chosen1 = document.getElementById("question2")
    chosen1.setAttribute("top", bank[0] + Math.floor(bank[1]/bank[2]))
    var chosen2 = document.getElementById("question")
    chosen2.setAttribute("top", bank[1]%bank[2])
    chosen2.setAttribute("bottom",bank[2])
    timer_explain = setTimeout(show_explain,19900)
    time_out_time = setTimeout(shower11, 19800)
    timer_master = setTimeout(master, 20000)
    }
    else{
        document.getElementById("myInput1").style.opacity = 0
        document.getElementById("myInput2").style.opacity = 0
        document.getElementById("myInput3").style.opacity = 0
        document.getElementById("answer").style.opacity = 0
        document.getElementById("question").style.opacity = 0
        document.getElementById("question2").style.opacity = 0
        document.getElementById("mult").style.opacity = 0
        document.getElementById("enter1").style.opacity = 0
    if(total_points >= 180){
    practice_title = current_exercise
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Congrats, you passed! "
        document.getElementById("total_points").style.marginLeft = 0
        document.getElementById("total_points").style.textAlign ="center"
        document.getElementById("clock").className = "nothing"
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,9900)        
    }
    else{
    practice_title = 0
        document.getElementById("total_points").innerHTML = "Points: " + total_points + "/200"+ "<br> Almost, try again!"
        document.getElementById("total_points").style.marginLeft = 0
        document.getElementById("total_points").style.textAlign ="center"
        document.getElementById("clock").className = "nothing"
        next_exercsie = current_exercise
        if(master_id > next_exercsie){
                next_exercsie = master_id}
        setTimeout(Submit,9900)
    }}
}

function loader(){
    setTimeout(master,200)
}

function opacity_setter(){
    var list1 = ["5057","5058"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function shape1(){
    if(5057 <= master_id){
    localStorage.setItem("current_exercise","5057")
    localStorage.setItem("next_exercise","5058")
    localStorage.setItem("practice_title", "Mixed Fracking C Workout 1")
    localStorage.setItem("shape", 0);
    document.location.href = "game.php"}
}

function shape2(){
    if(5058 <= master_id){
    localStorage.setItem("current_exercise","5058")
    localStorage.setItem("next_exercise","5059")
    localStorage.setItem("practice_title", "Mixed Fracking C Workout 2")
    localStorage.setItem("shape", 1);
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



function explanation(){
    var chosen1 = document.getElementById("question2")
    var whole = chosen1.getAttribute("top")
    var chosen2 = document.getElementById("question")
    var num = chosen2.getAttribute("top")
    var den = chosen2.getAttribute("bottom")
    var string = "Sorry, your choice is incorrect. The correct answer is " + whole + " and " + num + "/" + den + " as shown below."
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
NumberCorrect.value=total_points/20;
NumberAttempted.value=10;
Time.value=0;
Percent.value=(total_points/200)*100;
PracticeTitle.value=practice_title;
PracticeId.value=master_id;
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