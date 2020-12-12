var total_points = 0;
var turns = 0;


var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [["",8,1],["",11,1],["",7,1],["",99,1],["",13,1],["",25,1],["",2,1],["",1,1],["-",1,1],["-",2,3],["-",1,7],["",5,2],["",1,2],["",7,8],["-",9,7],["-",9,5],["",3,7],["",4,11],["",11,6],["",8,5],["",5,12],["-",10,3],["",14,11],["",5,9],["",4,13],["",23,6],["",8,5],["-",11,7],["-",25,2],["",5,8]]
var Set2 = [["",2,3,5],["",4,1,7],["",3,2,5],["",2,1,2],["",8,4,5],["",7,3,10],["",2,9,10],["",6,5,7],["",9,1,4],["",10,3,5],["-",11,3,5],["-",4,3,7],["-",2,3,5],["-",8,1,2],["-",7,3,5],["-",2,3,10],["-",6,5,6],["-",9,6,11],["-",10,2,3],["-",1,4,9]]
var master_set = [Set1, Set2]

function very_easy(){
    if(5100 <= master_id){
    localStorage.setItem("chosen_list",0);
    localStorage.setItem("practice_title","Reciprocal Basics Workout 1");
    localStorage.setItem("current_exercise","5100" );
    localStorage.setItem("next_exercise","5101" );
    document.location.href = "game.php"}
}

function easy(){
    if(5101 <= master_id){
    localStorage.setItem("chosen_list",1);
    localStorage.setItem("practice_title","Reciprocal Basics Workout 2");
    localStorage.setItem("current_exercise","5101" );
    localStorage.setItem("next_exercise","5102" );
    document.location.href = "game.php"}
}

function master_loader(){
    var chosen25 = localStorage.getItem("chosen_list")
    if(chosen25 == 0){
        loader1()
    }
    else{
        loader2()
    }
}

function fly_off(){
    document.getElementById("fly").style.opacity = 0
}

function fly(){
    document.getElementById("fly").style.opacity = 1
    setTimeout(fly_off, 10000)
}

var super_answer
var timout

function loader1(){
    document.getElementById("clock").className = "clock"
    document.getElementById("question").innerHTML = "Question " + (turns +1) + "/10" 
    if(turns< 10){
    document.getElementById("first_screen").style.display = "inline-block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("input5").value = ""
    shuffle(Set1)
    super_answer = Set1.pop()
    document.getElementById("fraction1").setAttribute("top", super_answer[0] + super_answer[1])
    document.getElementById("fraction1").setAttribute("bottom", super_answer[2])
    document.getElementById("fraction3").setAttribute("top", super_answer[0] + super_answer[1])
    document.getElementById("fraction3").setAttribute("bottom", super_answer[2])
    timout = setTimeout(restarter,30000)
    }
    else{
        if(total_points >=160){
        practice_title = current_exercise
        alert("Congrats, you completed the level!")
        Submit()
        }
        else{
        practice_title = 0
        next_exercsie = current_exercise
        alert("Sorry, you did not completed the level, please try again!")
        }
    }

}

function checker(){
    document.getElementById("clock").className = "nothing"
    clearTimeout(timout)
    var den1 = document.getElementById("input1").value
    var num1 = document.getElementById("input2").value
    var den2 = document.getElementById("input3").value
    var num2 = document.getElementById("input4").value
    var whole = document.getElementById("input5").value
    if(num1 == (super_answer[0] + super_answer[2]) && num2 == (super_answer[0] + super_answer[2]) && den1 == super_answer[1] && den2 == super_answer[1] && whole == 1){
        turns +=1
        total_points += 20
        fly()
        setTimeout(loader1,250)
        alert("Nice!")
    }
    else(
        restarter()
    )
}

function restarter(){
    document.getElementById("clock").className = "nothing"
    turns +=1
    alert("Sorry, the reciprical of " + super_answer[0] + super_answer[1] + " / " + super_answer[2] + " is " + super_answer[0] + super_answer[2] + " / " + super_answer[1] + " .")
    setTimeout(loader1,250)
}

var timout2 

function loader2(){
    document.getElementById("clock").className = "clock"
    document.getElementById("question2").innerHTML = "Question " + (turns +1) + "/10" 
    if(turns< 10){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "inline-block"
    document.getElementById("input6").value = ""
    document.getElementById("input7").value = ""
    document.getElementById("input8").value = ""
    document.getElementById("input9").value = ""
    document.getElementById("input10").value = ""
    shuffle(Set2)
    super_answer = Set2.pop()
    document.getElementById("frac1_left").setAttribute("top", super_answer[0] + super_answer[1])
    document.getElementById("frac1_right").setAttribute("top", super_answer[2])
    document.getElementById("frac1_right").setAttribute("bottom", super_answer[3])
    document.getElementById("frac2_left").setAttribute("top", super_answer[0] + super_answer[1])
    document.getElementById("frac2_right").setAttribute("top", super_answer[2])
    document.getElementById("frac2_right").setAttribute("bottom", super_answer[3])
    timout2 = setTimeout(restarter2,30000)
    }
    else{
        if(total_points >=160){
        alert("Congrats, you completed the level!")
        Submit()
        }
        else{
        next_exercsie = current_exercise
        alert("Sorry, you did not completed the level, please try again!")
        }
    }
}

function restarter2(){
    document.getElementById("clock").className = "nothing"
    turns +=1
    alert("Sorry, the reciprical of " + super_answer[0] + super_answer[1] + " and " + super_answer[2] + " / " + super_answer[3] + " is " + super_answer[3] + " / " + super_answer[0] + (super_answer[2] +  super_answer[1] * super_answer[3]) + " .")
    setTimeout(loader2,250)
}

function checker2(){
    document.getElementById("clock").className = "nothing"
    clearTimeout(timout2)
    var num1 = document.getElementById("input6").value
    var den1 = document.getElementById("input7").value
    var num2 = document.getElementById("input8").value
    var den2 = document.getElementById("input9").value
    var whole = document.getElementById("input10").value
    if((den1 == (super_answer[0] + (super_answer[2] +  super_answer[1] * super_answer[3])) && den2 == (super_answer[0] + (super_answer[2] +  super_answer[1] * super_answer[3])) && num1 == super_answer[3] && num2 == super_answer[3] && whole == 1)||(den1 == ((super_answer[2] +  super_answer[1] * super_answer[3])) && den2 == ((super_answer[2] +  super_answer[1] * super_answer[3])) && num1 == (super_answer[0] + super_answer[3]) && num2 == (super_answer[0] +super_answer[3]) && whole == 1)||(den1 == (super_answer[0] + (super_answer[2] +  super_answer[1] * super_answer[3])) && den2 == ((super_answer[2] +  super_answer[1] * super_answer[3])) && num1 == (super_answer[3]) && num2 == (super_answer[0] + super_answer[3]) && whole == 1)||((den1 == (super_answer[2] +  super_answer[1] * super_answer[3])) && den2 == (super_answer[0] + (super_answer[2] +  super_answer[1] * super_answer[3])) && num1 == (super_answer[0] + super_answer[3]) && num2 == (super_answer[3]) && whole == 1)){
        alert("Nice!")
        total_points +=20
        turns +=1
        fly()
        setTimeout(loader2,250)
    }
    else(
        restarter2()
    )
}




function directions(){
    document.location.href = "instructions.php"
}




function opacity_setter(){
    var list1 = ["5100","5101"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }

}


var title5






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

