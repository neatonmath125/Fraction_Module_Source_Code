var bank1 = [[1,2],[1,3],[1,4],[1,5],[1,6],[1,10],[1,2],[2,3],[3,4],[2,5],[3,5],[5,6]]
var bank2 = [[2,7],[4,7],[6,7],[3,8],[5,8],[7,8],[3,5],[4,5],[5,6],[2,9],[4,9],[5,9]]
var bank3 = [[7,9],[8,9],[1,13],[2,13],[5,11],[7,10],[7,11],[4,7],[5,9],[5,11],[12,13]]
var total_banks = [bank1, bank2, bank3]
var displayed = []
var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var threshold = 240
var startTime, endTime;
var stop = false;
var target = 3;
var time_checker = true;
var scalar = localStorage.getItem("scalar");
var num_dif = localStorage.getItem("num_dif");
var den_dif = localStorage.getItem("den_dif");
var bailout = localStorage.getItem("bailout");
var corral_denom = localStorage.getItem("corral_denom");
var corral_num = localStorage.getItem("corral_num");
var answer_denom = localStorage.getItem("answer_denom");
var answer_num = localStorage.getItem("answer_num");
var corral_denom = localStorage.getItem("corral_denom");
var corral_num = localStorage.getItem("corral_num");
var answer_denom = localStorage.getItem("answer_denom");
var answer_num = localStorage.getItem("answer_num");
var fish_swim = false;
var answers_correct = 0
var restarter_variable;
var master_variable;
var new12345;
var explain_list = []
var timout_explain;
var title = ["_one","_two","_three","_four","_five","_six",]
var turns = 0

///////
//////

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


var question_list = [["",1,4,"",2,4,1,"",3,4,"+"],["",2,7,"",3,7,1,"",5,7,"+"],["",1,8,"",4,8,1,"",5,8,"+"],["",8,11,"",2,11,1,"",10,11,"+"],["",3,10,"",4,10,1,"",7,10,"+"],["",5,8,"",2,8,1,"",7,8,"+"],["",1,10,"",8,10,1,"",9,10,"+"],["",1,7,"",2,7,1,"",3,7,"+"],["",4,13,"",1,13,1,"",5,13,"+"],["",6,11,"",2,11,1,"",8,11,"+"],["",11,17,"",3,17,1,"",14,17,"+"],["",2,11,"",4,11,1,"",6,11,"+"],["",6,19,"",3,19,1,"",9,19,"+"],["",1,9,"",4,9,1,"",5,9,"+"],["",2,9,"",2,9,1,"",4,9,"+"],["",4,7,"",2,7,1,"",6,7,"+"],["",2,5,"",1,5,1,"",3,5,"+"],["",1,5,"",3,5,1,"",4,5,"+"],["",1,3,"",1,3,1,"",2,3,"+"],["",5,11,"",3,11,1,"",8,11,"+"],["",3,4,"",2,4,1,"",1,4,"-"],["",5,7,"",3,7,1,"",2,7,"-"],["",4,8,"",1,8,1,"",3,8,"-"],["",8,11,"",8,11,1,"",0,11,"-"],["",7,10,"",4,10,1,"",3,10,"-"],["",5,8,"",2,8,1,"",3,8,"-"],["",9,10,"",8,10,1,"",1,10,"-"],["",6,7,"",2,7,1,"",4,7,"-"],["",4,13,"",1,13,1,"",3,13,"-"],["",6,11,"",2,11,1,"",4,11,"-"],["",11,17,"",3,17,1,"",8,17,"-"],["",9,11,"",4,11,1,"",5,11,"-"],["",6,19,"",3,19,1,"",3,19,"-"],["",9,9,"",1,9,1,"",8,9,"-"],["",7,9,"",2,9,1,"",5,9,"-"],["",4,7,"",2,7,1,"",2,7,"-"],["",2,5,"",1,5,1,"",1,5,"-"],["",4,5,"",3,5,1,"",1,5,"-"],["",2,3,"",1,3,1,"",1,3,"-"],["",5,11,"",3,11,1,"",2,11,"-"]]
var question_list2 = [["",1,4,"",1,4,2,"",1,2,"+"],["",1,8,"",3,8,4,"",1,2,"+"],["",1,8,"",5,8,2,"",3,4,"+"],["",7,10,"",1,10,2,"",4,5,"+"],["",1,10,"",3,10,2,"",2,5,"+"],["",3,8,"",3,8,2,"",3,4,"+"],["",1,10,"",1,10,2,"",1,5,"+"],["",1,9,"",2,9,3,"",1,3,"+"],["",5,12,"",5,12,2,"",5,6,"+"],["",1,6,"",3,6,2,"",2,3,"+"],["",11,18,"",3,18,2,"",7,9,"+"],["",5,12,"",4,12,3,"",3,4,"+"],["",5,9,"",1,9,3,"",2,3,"+"],["",1,14,"",5,14,2,"",3,7,"+"],["",1,12,"",5,12,6,"",1,2,"+"],["",3,10,"",5,10,2,"",4,5,"+"],["",7,20,"",11,20,2,"",9,10,"+"],["",11,20,"",1,20,4,"",3,5,"+"],["",1,22,"",1,22,2,"",1,11,"+"],["",1,4,"",1,4,1,"",0,4,"-"],["",3,8,"",1,8,2,"",1,4,"-"],["",5,8,"",1,8,4,"",1,2,"-"],["",7,10,"",1,10,2,"",3,5,"-"],["",9,10,"",3,10,2,"",3,5,"-"],["",5,8,"",3,8,2,"",1,4,"-"],["",9,10,"",1,10,2,"",4,5,"-"],["",5,9,"",2,9,3,"",1,3,"-"],["",8,12,"",5,12,3,"",1,4,"-"],["",3,6,"",1,6,2,"",1,3,"-"],["",11,18,"",3,18,2,"",4,9,"-"],["",5,12,"",3,12,2,"",1,6,"-"],["",8,9,"",2,9,3,"",2,3,"-"],["",11,14,"",5,14,2,"",3,7,"-"],["",11,12,"",5,12,6,"",1,2,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
var question_list3 = [["-",1,8,"",3,8,2,"",1,4,"+"],["",1,8,"-",5,8,4,"-",1,2,"+"],["-",7,10,"",1,10,2,"-",3,5,"+"],["-",3,8,"",3,8,1,"",0,8,"+"],["",7,10,"-",1,10,2,"",3,5,"+"],["",1,9,"-",2,9,1,"-",1,9,"+"],["-",1,6,"",3,6,2,"",1,3,"+"],["-",11,18,"-",3,18,2,"-",7,9,"+"],["-",5,12,"-",1,12,6,"-",1,2,"+"],["-",1,14,"",5,14,2,"",2,7,"+"],["",1,12,"-",5,12,4,"-",1,3,"+"],["-",3,10,"-",5,10,2,"-",4,5,"+"],["-",1,20,"",11,20,10,"",1,2,"+"],["-",1,22,"-",1,22,2,"-",1,11,"+"],["-",3,100,"",53,100,50,"",1,2,"+"],["-",3,8,"",1,8,4,"-",1,2,"-"],["",5,8,"-",1,8,2,"",3,4,"-"],["-",7,10,"",1,10,2,"-",4,5,"-"],["-",5,8,"",1,8,2,"-",3,4,"-"],["",7,10,"-",1,10,2,"",4,5,"-"],["-",5,9,"-",2,9,3,"-",1,3,"-"],["-",3,6,"-",1,6,2,"-",1,3,"-"],["-",11,18,"",3,18,2,"-",7,9,"-"],["",5,12,"",11,12,1,"-",7,12,"-"],["",11,14,"",15,14,2,"-",2,7,"-"],["-",1,12,"",5,12,6,"-",1,2,"-"],["",5,10,"-",3,10,2,"",4,5,"-"],["-",11,20,"",1,20,4,"-",3,5,"-"],["",15,22,"-",2,22,1,"",17,22,"-"],["-",47,100,"",22,100,1,"-",69,100,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
master_set = [question_list,question_list2,question_list3]

///
// format should be [num1, den1, num2, den2, gcf, ans_num1, ans_num2]
var answer;


function checker1(){
    var var1 = document.getElementById("input1").value
    var var2 = document.getElementById("input2").value
    if((var1 == (answer[7] + answer[8]) && var2 == answer[9])||(var1 == (answer[7] + answer[8]) && answer[8] == 0)){
        turns +=1
        alert("Nice work!, " +  (10 - turns) + " exercises left to go!")
        if (turns ==10){
            setTimeout(Submit,5900)
            }
        else{
            loader1()
        }
    }
   else{

    if(var1 == (answer[7] + (answer[6] * answer[8])) && var2 == answer[2]){
        alert("This is the correct answer, but it is not reduced, please reduce it, if you get stuck please press on the help button.")
    }
    else{
        alert("Sorry, thats not the correct answer. Please try again, or if you are stuck ,click on the help button.")

    }       
    }
}

function checker2(){
    var var1 = document.getElementById("input3").value
    var var2 = document.getElementById("input4").value
    var var3 = document.getElementById("input5").value
    var var4 = document.getElementById("input6").value
    var var5 = document.getElementById("input7").value
    if(var1 == (answer[0] + answer[1]) && var2 == (answer[3] + answer[4]) && var3 == answer[2] && var4 ==(answer[7] + answer[8]) && var5 == answer[9]){
        turns +=1
        alert("Nice work!, " +  (10 - turns) + " exercises left to go!")
        if (turns ==10){
            setTimeout(Submit,5900)
            }
        else{
            loader1()
        }
    }
   else{

    if(var4 ==(answer[7] + answer[8]) && var5 == answer[9]){
        alert("Your answer is right but your work is wrong, make sure everythig is correct!")
    }
    else if(var1 == (answer[0] + answer[1]) && var2 == (answer[4] + answer[3]) && var3 == answer[2]){
        alert("Your work looks right, but you answer is incorrect, double check it, and if you need help reducing it, click on the 'Help' button")
    }
    else{
        alert("Something is wrong with your work, make sure you can at least get the ' ___ + ___ / ___' section right before you ask for help")
    }    
    }
}

var helper_mega = 0;
function checker3(){
    var var1 = document.getElementById("input8").value
    var var2 = document.getElementById("input9").value
    var var3 = document.getElementById("input10").value
    var var4 = document.getElementById("input11").value
    if(var3 == (answer[7] + answer[8])  && var4 == answer[9]){
        turns +=1
        alert("Nice work!, " +  (10 - turns) + " exercises left to go!")
        if (turns ==10){
            setTimeout(Submit,5900)
            }
        else{
            loader1()
        }
    }
   else if (helper_mega==0){
    if(var1 == answer[7] && var2 == answer[7]){
        alert(" You are reducing by the right factor, division must just be slightly off, keep trying!")
    }
    else{
        alert("Sorry, thats not the right factor to reduce by, keep trying! If you get really stuck you can ask for help!")
    }           
    }
    else{
        alert(" Sorry, that's incorrect. Your division must just be slightly off, keep trying!")

    }
}

function lets_start2(){
    loop()
    master()
}

function opacity_setter(){
    var list1 = ["5066","5067","5068"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5066 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5066" );
    localStorage.setItem("next_exercise","5067" );
    localStorage.setItem("practice_title","Step by Step A Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5067 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5067" );
    localStorage.setItem("next_exercise","5068" );
    localStorage.setItem("practice_title","Step by Step A Workout 2");
    document.location.href = "game.php"}
}

function medium(){
    if(5068 <= master_id){
    localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5068" );
    localStorage.setItem("next_exercise","5069" );
    localStorage.setItem("practice_title","Step by Step A Workout 3");
    document.location.href = "game.php"}
}


function loader1(){
    var chosen = localStorage.getItem("chosen_set")
    chosen_set = master_set[chosen]
    shuffle(chosen_set)
    helper_mega = 0
    answer = chosen_set.pop()
    document.getElementById("input1").value = "" 
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("input5").value = "" 
    document.getElementById("input6").value = ""
    document.getElementById("input7").value = ""
    document.getElementById("input8").value = ""
    document.getElementById("input9").value = "" 
    document.getElementById("input10").value = ""
    document.getElementById("input11").value = "" 
    document.getElementById("first_screen").style.display = "block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("frac1").setAttribute("top", answer[0] + answer[1]) 
    document.getElementById("frac1").setAttribute("bottom",answer[2]) 
    document.getElementById("frac2").setAttribute("top",answer[3] + answer[4])
    document.getElementById("frac2").setAttribute("bottom",answer[5])
    document.getElementById("mult1").innerHTML = answer[10] 
}

function helper1(){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "block"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("frac4").setAttribute("top",answer[0] + answer[1]) 
    document.getElementById("frac4").setAttribute("bottom",answer[2])
    document.getElementById("frac5").setAttribute("top",answer[3] + answer[4])
    document.getElementById("frac5").setAttribute("bottom",answer[5])
    if(answer[10] == "+"){
    document.getElementById("frac6").setAttribute("top", " + " )
    }
    else{
    document.getElementById("frac6").setAttribute("top", " - " )
    }
    document.getElementById("frac6").setAttribute("bottom",answer[2])
    document.getElementById("mult523").innerHTML = answer[10] 
}

function helper2(){
    if(answer[10] == "+"){
        alert( "The numerator of the answer should be " + answer[0] + answer[1] + " + " + answer[3] + answer[4] + " which is equal to " + (parseInt(answer[0] + answer[1]) + parseInt(answer[3] + answer[4]))  + ". The denominator is " + answer[2] + " it remains the same when you are adding fractions together.")
        }
    else{
        alert( "The numerator of the answer should be " + answer[0] + answer[1] + " - " + answer[3] + answer[4] + " which is equal to " + (parseInt(answer[0] + answer[1]) - parseInt(answer[3] + answer[4])) + ". The denominator is " + answer[2] + " it remains the same when you are adding fractions together.")
        }
    var temp = answer[6] * answer[8]
    var new_temp = answer[7] + temp
    document.getElementById("help3").style.opacity = 1
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "block"
    document.getElementById("input8").style.opacity = 1;
    document.getElementById("input9").style.opacity = 1
    document.getElementById("input10").style.opacity = 1;
    document.getElementById("frac8").setAttribute("top",new_temp + " /  " + answer[6]) 
    document.getElementById("frac8").setAttribute("bottom",answer[2]+ " /  " + answer[6]) 
}

function helper3(){
    document.getElementById("input8").style.opacity = 0;
    document.getElementById("input9").style.opacity = 0
    helper_mega = 1
    document.getElementById("help3").style.opacity = 0
}



var bank_number

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




function explainer_show(){
    answers_correct+=1
    var answer = explainer()
    window.alert(answer)
}

function start_time() {
    startTime = new Date();
  };

function game(){
    document.location.href = "game.php"
}

function instructions(){
    document.location.href = "instructions.php"
}

function return_index(){
    document.location.href = "index.php"
}


loader1()