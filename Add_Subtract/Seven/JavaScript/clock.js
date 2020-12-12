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
var just_case = 0

///////
//////

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


///var question_list = [["",1,4,"",2,4,1,"",3,4,"+"],["",2,7,"",3,7,1,"",5,7,"+"],["",1,8,"",4,8,1,"",5,8,"+"],["",8,11,"",2,11,1,"",10,11,"+"],["",3,10,"",4,10,1,"",7,10,"+"],["",5,8,"",2,8,1,"",7,8,"+"],["",1,10,"",8,10,1,"",9,10,"+"],["",1,7,"",2,7,1,"",3,7,"+"],["",4,13,"",1,13,1,"",5,13,"+"],["",6,11,"",2,11,1,"",8,11,"+"],["",11,17,"",3,17,1,"",14,17,"+"],["",2,11,"",4,11,1,"",6,11,"+"],["",6,19,"",3,19,1,"",9,19,"+"],["",1,9,"",4,9,1,"",5,9,"+"],["",2,9,"",2,9,1,"",4,9,"+"],["",4,7,"",2,7,1,"",6,7,"+"],["",2,5,"",1,5,1,"",3,5,"+"],["",1,5,"",3,5,1,"",4,5,"+"],["",1,3,"",1,3,1,"",2,3,"+"],["",5,11,"",3,11,1,"",8,11,"+"],["",3,4,"",2,4,1,"",1,4,"-"],["",5,7,"",3,7,1,"",2,7,"-"],["",4,8,"",1,8,1,"",3,8,"-"],["",8,11,"",8,11,1,"",0,11,"-"],["",7,10,"",4,10,1,"",3,10,"-"],["",5,8,"",2,8,1,"",3,8,"-"],["",9,10,"",8,10,1,"",1,10,"-"],["",6,7,"",2,7,1,"",4,7,"-"],["",4,13,"",1,13,1,"",4,13,"-"],["",6,11,"",2,11,1,"",4,11,"-"],["",11,17,"",3,17,1,"",8,17,"-"],["",9,11,"",4,11,1,"",5,11,"-"],["",6,19,"",3,19,1,"",3,19,"-"],["",9,9,"",1,9,1,"",8,9,"-"],["",7,9,"",2,9,1,"",5,9,"-"],["",4,7,"",2,7,1,"",2,7,"-"],["",2,5,"",1,5,1,"",1,5,"-"],["",4,5,"",3,5,1,"",1,5,"-"],["",2,3,"",1,3,1,"",1,3,"-"],["",5,11,"",3,11,1,"",2,11,"-"]]
///var question_list2 = [["",1,4,"",1,4,2,"",1,2,"+"],["",1,8,"",3,8,4,"",1,2,"+"],["",1,8,"",5,8,2,"",3,4,"+"],["",7,10,"",1,10,2,"",4,5,"+"],["",1,10,"",3,10,2,"",2,5,"+"],["",3,8,"",3,8,2,"",3,4,"+"],["",1,10,"",1,10,2,"",1,5,"+"],["",1,9,"",2,9,3,"",1,3,"+"],["",5,12,"",5,12,2,"",5,6,"+"],["",1,6,"",3,6,2,"",2,3,"+"],["",11,18,"",3,18,2,"",7,9,"+"],["",5,12,"",4,12,3,"",3,4,"+"],["",5,9,"",1,9,3,"",2,3,"+"],["",1,14,"",5,14,2,"",3,7,"+"],["",1,12,"",5,12,6,"",1,2,"+"],["",3,10,"",5,10,2,"",4,5,"+"],["",7,20,"",11,20,2,"",9,10,"+"],["",11,20,"",1,20,4,"",3,5,"+"],["",1,22,"",1,22,2,"",1,11,"+"],["",1,4,"",1,4,1,"",0,4,"-"],["",3,8,"",1,8,2,"",1,4,"-"],["",5,8,"",1,8,4,"",1,2,"-"],["",7,10,"",1,10,2,"",3,5,"-"],["",9,10,"",3,10,2,"",3,5,"-"],["",5,8,"",3,8,2,"",1,4,"-"],["",9,10,"",1,10,2,"",4,5,"-"],["",5,9,"",2,9,3,"",1,3,"-"],["",8,12,"",5,12,3,"",1,4,"-"],["",3,6,"",1,6,2,"",1,3,"-"],["",11,18,"",3,18,2,"",4,9,"-"],["",5,12,"",3,12,2,"",1,6,"-"],["",8,9,"",2,9,3,"",2,3,"-"],["",11,14,"",5,14,2,"",3,7,"-"],["",11,12,"",5,12,6,"",1,2,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
///var question_list3 = [["-",1,8,"",3,8,2,"",1,4,"+"],["",1,8,"-",5,8,4,"-",1,2,"+"],["-",7,10,"",1,10,2,"-",3,5,"+"],["-",3,8,"",3,8,1,"",0,8,"+"],["",7,10,"-",1,10,2,"",3,5,"+"],["",1,9,"-",2,9,1,"-",1,9,"+"],["-",1,6,"",3,6,2,"",1,3,"+"],["-",11,18,"-",3,18,2,"-",7,9,"+"],["-",5,12,"-",1,12,6,"-",1,2,"+"],["-",1,14,"",5,14,2,"",2,7,"+"],["",1,12,"-",5,12,4,"-",1,3,"+"],["-",3,10,"-",5,10,2,"-",4,5,"+"],["-",1,20,"",11,20,10,"",1,2,"+"],["-",1,22,"-",1,22,2,"-",1,11,"+"],["-",3,100,"",53,100,50,"",1,2,"+"],["-",3,8,"",1,8,4,"-",1,2,"-"],["",5,8,"-",1,8,2,"",3,4,"-"],["-",7,10,"",1,10,2,"-",4,5,"-"],["-",5,8,"",1,8,2,"-",3,4,"-"],["",7,10,"-",1,10,2,"",4,5,"-"],["-",5,9,"-",2,9,3,"-",1,3,"-"],["-",3,6,"-",1,6,2,"-",1,3,"-"],["-",11,18,"",3,18,2,"-",7,9,"-"],["",5,12,"",11,12,1,"-",7,12,"-"],["",11,14,"",15,14,2,"-",2,7,"-"],["-",1,12,"",5,12,6,"-",1,2,"-"],["",5,10,"-",3,10,2,"",4,5,"-"],["-",11,20,"",1,20,4,"-",3,5,"-"],["",15,22,"-",2,22,1,"",17,22,"-"],["-",47,100,"",22,100,1,"-",69,100,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
///master_set = [question_list,question_list2,question_list3]

///
// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

/// up to
var list1 = [["",2, 3, "", 1, 4, 12, "", 11, 12,"+", 4, 3],["",3, 5, "", 3, 10, 10, "", 9, 10,"+", 2, 1],["",4, 9, "", 2, 3, 9, "", 10, 9,"+", 1, 3],["",1, 8, "", 5, 3, 24, "", 43, 24,"+", 3, 8],["",2, 5, "", 3, 8, 40, "", 31, 40,"+", 8, 5],["",1, 8, "", 4, 5, 40, "", 37, 40,"+", 5, 8],["",6, 7, "", 1, 2, 14, "", 19, 14,"+", 2, 7],["",4, 5, "", 3, 8, 40, "", 47, 40,"+", 5, 8],["",3, 8, "", 1, 6, 24, "", 13, 24,"+", 3, 4],["",7, 10, "", 3, 5, 10, "", 1, 10,"-", 1, 2],["",2, 9, "", 1, 6, 18, "", 7, 18,"+", 2, 3],["",3, 11, "", 5, 22, 22, "", 1, 2,"+", 2, 1],["",6, 7, "", 1, 3, 21, "", 11, 21,"-", 3, 7],["",4, 11, "", 1, 8, 88, "", 21, 88,"-", 8, 11],["",2, 5, "", 1, 6, 30, "", 7, 30,"-", 6, 5],["",6, 5, "", 7, 10, 10, "", 1, 2,"-", 2, 1],["",4, 15, "", 11, 20, 60, "", 49, 60,"+", 4, 3],["",7, 8, "", 1, 12, 24, "", 23, 24,"+", 3, 2]]
var list2 = [["-",2, 3, "", 1, 3, 3, "-", 1, 3,"+", 1, 1],["-",5, 8, "", 5, 16, 16, "-", 5, 16,"+", 2, 1],["",1, 5, "-", 1, 10, 10, "", 3, 10,"-", 2, 1],["",2, 3, "-", 7, 9, 9, "", 13, 9,"-", 3, 1],["-",3, 4, "", 7, 2, 4, "", 11, 4,"+", 1, 2],["-",1, 4, "", 1, 2, 4, "", 1, 4,"+", 1, 2],["-",2, 3, "", 1, 6, 6, "-", 5, 6,"-", 2, 1],["-",3, 7, "", 7, 2, 14, "", 43, 14,"+", 2, 7],["",7, 4, "-", 3, 5, 20, "", 47, 20,"-", 5, 4],["",3, 4, "", 7, 8, 8, "-", 1, 8,"-", 2, 1],["-",2, 3, "", 2, 3, 3, "", 0, 3,"+", 1, 1],["-",3, 4, "-", 7, 8, 8, "", 1, 8,"-", 2, 1],["-",5, 6, "", 1, 2, 6, "-", 1, 3,"+", 1, 3],["-",3, 5, "-", 1, 2, 10, "-", 1, 10,"-", 2, 5],["-",7, 12, "-", 1, 12, 12, "-", 1, 2,"-", 1, 1],["-",5, 4, "", 1, 3, 12, "-", 19, 12,"-", 3, 4],["",13, 14, "", 6, 14, 14, "", 1, 2,"-", 1, 1],["",2, 3, "", 1, 2, 6, "", 7, 6,"+", 2, 3],["-",3, 7, "", 2, 5, 35, "-", 1, 35,"+", 5, 7]]
var list3 = [["-",2, 9, "", 1, 9, 9, "-", 1, 9,"+", 1, 1],["",2, 5, "", 7, 2, 10, "", 39, 10,"+", 2, 5],["",3, 7, "", 7, 8, 56, "", 73, 56,"+", 8, 7],["",5, 9, "", 1, 2, 18, "", 19, 18,"+", 2, 9],["",5, 12, "", 7, 8, 24, "", 31, 24,"+", 2, 3],["",5, 9, "", 1, 6, 18, "", 13, 18,"+", 2, 3],["-",4, 15, "", 1, 6, 30, "-", 13, 30,"-", 2, 5],["-",1, 4, "", 1, 3, 12, "-", 7, 12,"-", 3, 4],["",1, 6, "", 7, 8, 24, "", 25, 24,"+", 4, 3],["-",7, 12, "-", 1, 10, 60, "-", 29, 60,"-", 5, 6],["-",5, 4, "", 1, 6, 12, "-", 17, 12,"-", 3, 2],["",3, 7, "", 11, 14, 14, "-", 5, 14,"-", 2, 1],["-",2, 9, "", 1, 6, 18, "-", 1, 18,"+", 2, 3],["-",3, 20, "", 2, 15, 60, "-", 1, 60,"+", 3, 4],["-",5, 8, "", 11, 10, 40, "", 19, 40,"+", 5, 4],["-",7, 12, "", 5, 16, 48, "-", 43, 48,"-", 4, 3],["-",5, 6, "", 3, 8, 24, "-", 11, 24,"+", 4, 3]]
var master_set = [list1, list2, list3]

var turns = 0

function shower11(){
    alert("Nice work!, " +  (5 - turns) + " exercises left to go!")
}

function checker1(){
    var var1 = document.getElementById("input2").value
    var var2 = document.getElementById("input1").value
    if(var1 == (answer[7] + answer[8]) && var2 == answer[9]){
        turns +=1
        setTimeout(shower11,500) 
        if (turns ==5){
            
            setTimeout(Submit,5900)
            }
        else{
            setTimeout(loader,2000)
        }
    }
   else{

    if(var1 == (answer[7] + (answer[6] * answer[8])) && var2 == answer[1]){
        alert("This is the correct answer, but it is not reduced, please reduce it, if you get stuck please press on the help button.")
    }
    else{
        alert("Sorry, thats not the correct answer. Please try again, or if you are stuck ,click on the help button.")

    }       
    }
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function helper3_2(){
    alert("Multiply by 1!")
}

var chose1
var chose2

function checker2(){
    if((answer[2] * chose1) == (answer[5] * chose2)){
        helper2()
    }
   else{
    alert("Sorry, that's not the lowest common multiple! Please try again!")
    }
}

var helper_mega = 0;
function checker3(){
    just_case +=1
    var var1 = document.getElementById("input4").value
    var var2 = document.getElementById("input3").value
    reduced = reduce(parseInt(var1), parseInt(var2))
    if(var1 == (answer[7] + answer[8]) && var2 == answer[9]){
        just_case = 0
        turns +=1 
        if(turns == 5){
        Submit()
        }
        shower11()
        loader()
    }
    else if(just_case == 3){
    alert("OK, time for a new question.")
    loader()
    }
    else if ( Math.abs(reduced[1])!= Math.abs(parseInt(answer[9])) && Math.abs(reduced[0])!= Math.abs(parseInt(answer[7] + answer[8]))){
        alert("Just to let you know, your answer is not reduced, please reduce it and resubmit.")
    }
    else{
        alert(" Sorry, that's incorrect, keep trying! Make sure that your fraction is reduced!")

    }
}


function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }


function starter(){
    setTimeout(loader,5000)
}

function opacity_setter(){
    var list1 = ["5072","5073","5074"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5072 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5072" );
    localStorage.setItem("next_exercise","5073" );
    localStorage.setItem("practice_title","Step by Step C Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5073 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5073" );
    localStorage.setItem("next_exercise","5074" );
    localStorage.setItem("practice_title","Step by Step C Workout 2");
    document.location.href = "game.php"}
}

function medium(){
    if(5074 <= master_id){
    localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5074" );
    localStorage.setItem("next_exercise","5075" );
    localStorage.setItem("practice_title","Step by Step C Workout 3");
    document.location.href = "game.php"}
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function loader(){
    hidder()
    chose1 = 1000000
    chose2 = 0
    var chosen = localStorage.getItem("chosen_set")
    chosen_set = master_set[chosen]
    shuffle(chosen_set)
    answer = chosen_set.pop()
    document.getElementById("input1").value = "" 
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("first_screen").style.display = "block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("frac1").setAttribute("top", answer[0] + answer[1]) 
    document.getElementById("frac1").setAttribute("bottom",answer[2]) 
    document.getElementById("frac2").setAttribute("top",answer[3] + answer[4])
    document.getElementById("frac2").setAttribute("bottom",answer[5])
    document.getElementById("mult1").innerHTML = answer[10] 
}

function shower(){
    greymaker1()
    greymaker2()
    setTimeout(enlighten1,1000,"shower1",1)
    setTimeout(enlighten2,1000,"shower2",1)
    setTimeout(enlighten1,2000,"shower3",2)
    setTimeout(enlighten2,2000,"shower4",2)
    setTimeout(enlighten1,3000,"shower5",3)
    setTimeout(enlighten2,3000,"shower6",3)
    setTimeout(enlighten1,4000,"shower7",4)
    setTimeout(enlighten2,4000,"shower8",4)
    setTimeout(enlighten1,5000,"shower9",5)
    setTimeout(enlighten2,5000, "shower10",5)
    setTimeout(enlighten1,6000,"shower11",6)
    setTimeout(enlighten2,6000,"shower12",6)
    setTimeout(enlighten1,7000,"shower13",7)
    setTimeout(enlighten2,7000,"shower14",7)
    setTimeout(enlighten1,8000,"shower15",8)
    setTimeout(enlighten2,8000,"shower16",8)
}

function hidder(){
    hider("shower1")
    hider("shower2")
    hider("shower3")
    hider("shower4")
    hider("shower5")
    hider("shower6")
    hider("shower7")
    hider("shower8")
    hider("shower9")
    hider("shower10")
    hider("shower11")
    hider("shower12")
    hider("shower13")
    hider("shower14")
    hider("shower15")
    hider("shower16")
}



function chooser1(target,factor){
    chose1 = factor
    greymaker1()
    document.getElementById(target).style.backgroundColor = "rgb(194, 206, 139)"
}

function chooser2(target, factor){
    chose2 = factor
    greymaker2()
    document.getElementById(target).style.backgroundColor = "rgb(194, 206, 139)"

}

function greymaker1(){
    document.getElementById("shower1").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower3").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower5").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower7").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower9").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower11").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower13").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower15").style.backgroundColor = "rgb(139, 190, 206)"
}

function greymaker2(){
    document.getElementById("shower2").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower4").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower6").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower8").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower10").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower12").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower14").style.backgroundColor = "rgb(139, 190, 206)"
    document.getElementById("shower16").style.backgroundColor = "rgb(139, 190, 206)"
}

function hider(target){
    var current = document.getElementById(target)
    current.style.opacity = 0
}

function enlighten1(target, iteration){
    var current = document.getElementById(target)
    current.style.opacity = 1
    current.setAttribute("top", answer[0] + (answer[1]* iteration))
    current.setAttribute("bottom", answer[2] * iteration)
}

function enlighten2(target, iteration){
    var current = document.getElementById(target)
    current.style.opacity = 1
    current.setAttribute("top", answer[3] + (answer[4]* iteration))
    current.setAttribute("bottom", answer[5] * iteration)
}

function helper1(){
    document.getElementById("frac3").setAttribute("top", answer[0] + answer[1]) 
    document.getElementById("frac3").setAttribute("bottom",answer[2]) 
    document.getElementById("frac4").setAttribute("top",answer[3] + answer[4])
    document.getElementById("frac4").setAttribute("bottom",answer[5])
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "block"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("text1").innerHTML = "Find the first pair of fractions with the same denominator ?"
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function helper2(){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "block"
    document.getElementById("frac5").setAttribute("top", answer[0] + (answer[1] * answer[11])) 
    document.getElementById("frac5").setAttribute("bottom",answer[6]) 
    document.getElementById("frac6").setAttribute("top",answer[3] + (answer[4] * answer[12]))
    document.getElementById("frac6").setAttribute("bottom",answer[6])
    document.getElementById("mult7").innerHTML = answer[10]
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




function explainer_show(){
    answers_correct+=1
    var answer = explainer()
    window.alert(answer)
}



function game(){
    document.location.href = "game.php"
}

function instructions(){
    document.location.href = "instructions.php"
}

function return_index(){
    document.location.href = "index.php"
}

