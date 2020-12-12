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
var Set2 = [["-",37,6],["",43,7],["-",49,8],["",55,9],["-",68,11],["",69,11],["-",71,11],"",[51,50],["-",53,50],["",57,50],["-",71,50],["",101,100],["-",111,100],["",123,100],["-",151,100],["",43,6],["-",50,7],["",57,8],["-",64,9],["",79,11],["-",80,11],["",101,50],["-",103,50],["",107,50],["-",121,50],["",201,100],["-",211,100],["",223,100],["-",251,100],["-",49,6],["",57,7],["-",65,8],["",73,9],["-",90,11],["",91,11],["-",93,11],["",55,6],["-",64,7],["",73,8],["-",82,9],["",101,11],["-",102,11],["",104,11],["-",61,6],["",71,7],["-",81,8],["",91,9],["-",112,11],["",113,11],["-",115,11]]

list1 = [[2,2,9,1,5,9,3,7,9,"+"],[4,1,3,5,1,3,9,2,9,"+"],[1,4,5,1,1,5,"",3,5,"-"],[1,7,9,"",5,9,1,2,9,"-"],[1,1,4,2,1,4,3,1,2,"+"],[3,3,4,5,1,4,9,"","","+"],[4,5,6,3,1,6,1,2,3,"-"],[1,3,7,1,1,7,2,4,7,"+"],[1,5,8,"",3,8,1,1,4,"-"],[6,5,9,1,4,9,8,"","","+"],[2,3,4,"",1,4,1,1,2,"-"],[4,2,3,2,2,3,2,"","","-"],[5,9,11,2,"","",3,9,11,"-"],[3,1,4,1,"","",2,1,4,"-"],[8,5,6,5,"","",13,5,6,"+"],[3,3,5,1,"","",2,3,5,"-"],[3,3,4,1,1,4,2,1,2,"-"],[2,3,5,2,1,5,"",2,5,"-"],[4,5,14,1,3,14,3,1,7,"-"],[2,5,12,1,1,12,3,1,2,"+"],[2,3,5,1,2,5,4,"","","+"],[8,9,14,9,3,14,17,6,7,"+"],[6,1,5,3,3,5,9,4,5,"+"],[2,5,7,1,1,7,1,4,7,"-"]]
list2 = [[2,2,9,1,5,9,"",2,3,"-"],[4,1,3,5,2,3,10,"","","+"],[2,1,5,1,4,5,"",2,5,"-"],[1,2,9,"",5,9,"",2,3,"-"],[4,3,4,2,3,4,2,"","","-"],[3,3,8,5,1,8,8,1,2,"+"],[4,1,6,3,5,6,"",1,3,"-"],[1,3,7,1,6,7,3,2,7,"+"],[1,1,8,"",3,8,"",3,4,"-"],[6,4,9,1,5,9,4,8,9,"-"],[2,1,4,"",3,4,1,1,2,"-"],[4,1,3,2,2,3,1,2,3,"-"],[3,7,11,1,9,11,1,9,11,"-"],[3,1,9,1,5,9,1,5,9,"-"],[3,5,6,1,5,6,5,2,3,"+"],[2,3,5,1,4,5,"",4,5,"-"],[3,1,4,1,3,4,1,1,2,"-"],[3,3,7,2,5,7,"",5,7,"-"],[4,11,14,1,9,14,6,3,7,"+"],[2,2,3,1,2,3,4,1,3,"+"]]
list3 = [[2,2,3,1,1,6,3,5,6,"+",6],[4,1,4,5,1,3,9,7,12,"+",12],[1,4,5,1,1,3,"",7,15,"-",15],[1,7,9,"",5,11,1,32,99,"-",99],[1,1,2,2,1,4,3,3,4,"+",4],[3,3,4,5,1,6,8,11,12,"+",12],[4,5,9,3,1,6,1,7,18,"-",18],[1,3,14,1,1,7,2,5,14,"+",14],[1,5,8,"",1,4,1,3,8,"-",8],[6,5,9,1,1,6,7,13,18,"+",18],[2,3,4,"",1,5,2,11,20,"-",20],[4,2,3,2,1,6,2,1,2,"-",6],[5,9,11,2,9,22,3,9,22,"-",22],[3,3,4,1,2,5,2,7,20,"-",20],[8,5,6,"",9,11,9,43,66,"+",66],[3,3,5,1,6,11,2,3,55,"-",55],[3,5,6,1,1,4,2,7,12,"-",12],[2,3,10,2,1,15,"",7,30,"-",30],[4,5,8,1,5,12,3,5,24,"-",24],[2,5,9,1,1,12,3,23,36,"+",36],[2,3,10,1,2,25,3,19,50,"+",50],[8,1,6,9,2,9,17,7,18,"+",18],[6,7,25,3,3,50,8,17,50,"+",50],[2,7,20,1,1,30,1,19,60,"-",60]]
list4 = [[1,1,4,"",1,2,"",3,4,"-",4],[2,1,2,5,2,3,8,1,6,"+",6],[3,1,10,1,4,5,1,3,10,"-",10],[4,2,9,"",1,2,3,13,18,"-",18],[5,1,4,2,3,5,2,13,20,"-",20],[6,3,4,7,3,8,14,1,8,"+",8],[8,1,5,3,5,6,4,11,30,"-",30],[9,3,14,1,6,7,11,1,4,"+",14],[7,1,8,"",1,2,6,5,8,"-",8],[10,1,9,1,5,18,8,1,3,"-",18],[2,3,10,1,11,15,"",17,30,"-",30],[4,1,6,3,2,3,"",1,2,"-",6],[3,7,10,2,9,20,1,1,4,"-",20],[7,4,9,4,5,12,3,1,36,"-",36],[3,5,6,5,5,9,9,7,18,"+",18],[7,1,3,2,3,4,10,1,12,"+",12],[9,1,2,8,3,4,"",3,4,"-",4],[5,5,12,2,5,6,2,7,12,"-",12],[1,2,7,1,9,14,2,13,14,"+",14],[2,1,3,3,1,5,5,8,15,"+",15],[3,1,2,4,3,5,8,1,10,"+",10],[2,5,6,"",3,4,3,7,12,"+",12],[5,2,25,1,4,75,6,2,15,"+",15],["",1,9,3,1,6,3,5,18,"+",18]]

var master_set = [list1, list2, list3, list4]


var allowed22 = 1
var answer

localStorage.setItem("chosen_set",2)


var check_mini1
var check_mini2
var check_mini3
var check_mini4
var check_mini5
var check_mini6

check_mini1=0
check_mini2=0
check_mini3=0
check_mini4=0
check_mini5=0
check_mini6=0

function loader(){
check_mini1=0
check_mini2=0
check_mini3=0
check_mini4=0
check_mini5=0
check_mini6=0
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    if( turns == 5){
        alert("Alright! All done with this section")
        Submit()
    }
    document.getElementById("frac2_left").style.color = "black"
    var correct = localStorage.getItem("chosen_set")
    var answer_set = master_set[correct]
    shuffle(answer_set)
    answer = answer_set.pop()
    document.getElementById("first_screen").style.display = "block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "none"
    document.getElementById("fifth_screen").style.display = "none"
    document.getElementById("frac1_left").setAttribute("top", answer[0])
    document.getElementById("frac1_right").setAttribute("top", answer[1])
    document.getElementById("frac1_right").setAttribute("bottom", answer[2])
    document.getElementById("frac2_left").setAttribute("top", answer[3])
    document.getElementById("frac2_right").setAttribute("top", answer[4])
    if(answer[3] == ""){
        document.getElementById("frac2_left").setAttribute("top", 1)
        document.getElementById("frac2_left").style.color = "transparent"
    }
    document.getElementById("frac2_right").setAttribute("bottom", answer[5])
    document.getElementById("mult155").innerHTML =  answer[9]
}



function loader2_same(){
check_mini1=0
check_mini2=0
check_mini3=0
check_mini4=0
check_mini5=0
check_mini6=0
    document.getElementById("frac5_right").style.color = "black"
    document.getElementById("frac4_right").style.color = "black"
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "block"
    document.getElementById("fourth_screen").style.display = "none"
    document.getElementById("fifth_screen").style.display = "none"
    document.getElementById("frac4_left").setAttribute("top", answer[0])
    document.getElementById("frac4_right").setAttribute("top", answer[1])
    document.getElementById("frac4_right").setAttribute("bottom", answer[2])
    document.getElementById("frac5_left").setAttribute("top", answer[3])
    document.getElementById("frac5_right").setAttribute("top", answer[4])
    document.getElementById("frac5_right").setAttribute("bottom", answer[5])
    var adder = document.getElementById("frac555_right")
    var sign = document.getElementById("mult5522")
    if(answer[9] == "-"){
        adder.setAttribute("top", "11 - 11")
        sign.innerHTML = "-"
    }
    else{
        adder.setAttribute("top", "11 + 11")
        sign.innerHTML = "+"
    }
    if(answer[3] == ""){
        document.getElementById("frac5_left").setAttribute("top", 1)
        document.getElementById("frac5_left").style.color = "transparent"
    }
    if(answer[0] == ""){
        document.getElementById("frac4_left").setAttribute("top", 1)
        document.getElementById("frac4_left").style.color = "transparent"
    }
}

function loader2_different(){
check_mini1=0
check_mini2=0
check_mini3=0
check_mini4=0
check_mini5=0
check_mini6=0
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "block"
    document.getElementById("fifth_screen").style.display = "none"
    document.getElementById("frac61_right").setAttribute("top", answer[1])
    document.getElementById("frac61_right").setAttribute("bottom", answer[2])
    document.getElementById("frac71_right").setAttribute("top", answer[4])
    document.getElementById("frac71_right").setAttribute("bottom", answer[5])
    document.getElementById("frac81_right").setAttribute("bottom", answer[10])
    document.getElementById("frac82_right").setAttribute("bottom", answer[10])
}

function checker22(){
    var chosen_den = parseInt(answer[10])
    var factor1 = chosen_den/ parseInt(answer[2])
    var factor2 = chosen_den/ parseInt(answer[5])
    var correct_num1 = factor1* answer[1]
    var correct_num2 = factor2 * answer[4]
    var val1 = document.getElementById("input21").value
    var val2 = document.getElementById("input22").value
    var val3 = document.getElementById("input23").value
    var val4 = document.getElementById("input24").value
    var val5 = document.getElementById("input25").value
    var val6 = document.getElementById("input26").value
    if(val1 != factor1 || val2 != factor1 || val4 != factor2 || val5 != factor2){
        alert("Check the factor you are scaling by, something is off!")
    }
    else if ( val3 != correct_num1 || val6 != correct_num2){
        alert("The factor that you are scaling by is correct but the numberators are not correct, your multiplication must be off!")
    }
    else{
        var val1 = document.getElementById("input21").value =""
    var val2 = document.getElementById("input22").value = ""
    var val3 = document.getElementById("input23").value = ""
    var val4 = document.getElementById("input24").value = ""
    var val5 = document.getElementById("input25").value = ""
    var val6 = document.getElementById("input26").value = ""
        alert("Nice!")
        loader3()
    }
}


function loader3(){
check_mini1=0
check_mini2=0
check_mini3=0
check_mini4=0
check_mini5=0
check_mini6=0
    document.getElementById("frac11_left").style.color = "black"
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "none"
    document.getElementById("fifth_screen").style.display = "block"
    var actual_den = parseInt(answer[10])
    var multiplier1 = actual_den/ parseInt(answer[2])
    var multiplier2 = actual_den/parseInt(answer[5])
    var num1 = parseInt(answer[1]) * multiplier1
    var num2 = parseInt(answer[4]) * multiplier2
    document.getElementById("frac10_left").setAttribute("top", answer[0])
    document.getElementById("frac10_right").setAttribute("top", num1)
    document.getElementById("frac10_right").setAttribute("bottom", answer[10])
    document.getElementById("frac11_left").setAttribute("top", answer[3])
    document.getElementById("frac11_right").setAttribute("top", num2)
    document.getElementById("frac11_right").setAttribute("bottom", answer[10])
    var adder = document.getElementById("frac66_right")
    var sign = document.getElementById("mult101")
    if(answer[9] == "-"){
        adder.setAttribute("top", "11 - 11")
        sign.innerHTML = "-"
    }
    else{
        adder.setAttribute("top", "11 + 11")
        sign.innerHTML = "+"
    }
    if(answer[3] == ""){
        document.getElementById("frac11_left").setAttribute("top", 1)
        document.getElementById("frac11_left").style.color = "transparent"
    }
    document.getElementById("mult10").innerHTML = answer[9]
}

function checker3_different(){
    check_mini1+=1
    if(check_mini1 == 4){
    loader()
    }
    var whole1 = document.getElementById("input50").value
    var num1 = document.getElementById("input51").value
    var num2 = document.getElementById("input52").value
    var den1 = document.getElementById("input53").value
    var whole2 = document.getElementById("input54").value
    var num3 = document.getElementById("input55").value
    var den2 = document.getElementById("input56").value
    var whole55
    var factor1 = parseInt(answer[10])/ parseInt(answer[2])
    var factor2 = parseInt(answer[10])/ parseInt(answer[5])
    var chosen_num = parseInt(answer[1]) * factor1
    var chosen_num2 = parseInt(answer[4]) * factor2
    if(answer[9] == "-"){
     whole55 = answer[0] - answer[3]
    }
    else{
        whole55 = answer[0] + answer[3]
    }
    if(whole2 == 0 && answer[6] == ""){
        answer[6] = 0
    }
    if(whole2 == answer[6] && num3 == answer[7] && den2 == answer[8]){
        turns +=1
        document.getElementById("input50").value = ""
document.getElementById("input51").value = ""
document.getElementById("input52").value = ""
document.getElementById("input53").value = ""
document.getElementById("input54").value = ""
document.getElementById("input55").value = ""
document.getElementById("input56").value = ""
        alert("Good job, that's the correct answer! Only " + (5-turns) + " turns left to go.")
        loader()
    }
    else if( whole1 != whole55 || num1 != chosen_num || num2 != chosen_num2 || den1 != answer[10]){
        alert("Sorry, your work is wrong, please correct it!")
    }
    else{
        var reduced = reduce(num3, den2)
        if(whole2 == 0 && answer[6] == ""){
            answer[6] = 0
        }
        if(whole2 == answer[6] && num3 == answer[7] && den2 == answer[8]){
            turns +=1
            document.getElementById("input50").value = ""
    document.getElementById("input51").value = ""
    document.getElementById("input52").value = ""
    document.getElementById("input53").value = ""
    document.getElementById("input54").value = ""
    document.getElementById("input55").value = ""
    document.getElementById("input56").value = ""
            alert("Good job, that's the correct answer! Only " + (5-turns) + " turns left to go.")
            loader()
        }
        else if (parseInt(num3) >= parseInt(den2)){
            alert("The fraction is improper! Please make it normal.")
        }
        else if (num3 == "" && whole2 == ""){
            alert("please insert something in the answer section!")
        }
        else if ( Math.abs(reduced[1])!= Math.abs(parseInt(den2)) && Math.abs(reduced[0])!= Math.abs(parseInt(num3))){
            alert("Just to let you know, your answer is not reduced, please reduce it and resubmit.")
        }
        else if( num3.includes("-") && whole2 != ""){
            alert("As a general rule there should be no negative in the fraction portion of the mixed fraction, borrow and get rid of it.")
        }
        else{
            alert("Your fraction is in the correct form, but this is not the correct answer, please try again. Your work is right, so something is going wring in the final stages")
        }
    }
    }



function helper1(){
    var game_set = localStorage.getItem("chosen_set")
    if(game_set == 0 || game_set == 1){
        loader2_same()
    }
    else{
        loader2_different()
    }
}

function checker1(){
    check_mini2 +=1
    if (check_mini2 == 4){
    loader()
    }
    whole = document.getElementById("input1").value
    num = document.getElementById("input2").value
    den = document.getElementById("input3").value
    var reduced = reduce(num, den)
    if(whole == 0 && answer[6] == ""){
        answer[6] = 0
    }
    if(whole == answer[6] && num == answer[7] && den == answer[8]){
        turns +=1
        document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
        alert("Good job, that's the correct answer! Only " + (5-turns) + " turns left to go.")
        loader()
    }
    else if ( Math.abs(reduced[1])!= Math.abs(parseInt(den)) && Math.abs(reduced[0])!= Math.abs(parseInt(num))){
        alert("Just to let you know, your answer is not reduced, please reduce it and resubmit.")
    }
    else if( num.includes("-") && whole != ""){
        alert("As a general rule there should be no negative in the fraction portion of the mixed fraction, borrow and get rid of it.")
    }
    else{
        alert("Your fraction is in the correct form, but this is not the correct answer, please try again.")
    }

}

function checker2_same(){
check_mini3+=1
if(check_mini3 == 4){
loader()
}
var whole1 = document.getElementById("input4").value
var num1 = document.getElementById("input5").value
var num2 = document.getElementById("input6").value
var den1 = document.getElementById("input7").value
var whole2 = document.getElementById("input8").value
var num3 = document.getElementById("input9").value
var den2 = document.getElementById("input10").value
var whole55
if(answer[9] == "-"){
 whole55 = answer[0] - answer[3]
}
else{
    whole55 = answer[0] + answer[3]
}
if( whole1 != whole55 || num1 != answer[1] || num2 != answer[4] || den1 != answer[2]){
    alert("Sorry, your work is wrong, please correct it!")
}
else{
    var reduced = reduce(num3, den2)
    if(whole2 == 0 && answer[6] == ""){
        answer[6] = 0
    }
    if(whole2 == answer[6] && num3 == answer[7] && den2 == answer[8]){
        turns +=1
        document.getElementById("input4").value = ""
document.getElementById("input5").value = ""
document.getElementById("input6").value = ""
document.getElementById("input7").value = ""
document.getElementById("input8").value = ""
vdocument.getElementById("input9").value = ""
document.getElementById("input10").value = ""
        alert("Good job, that's the correct answer! Only " + (5-turns) + " turns left to go.")
        loader()
    }
    else if (parseInt(num3) >= parseInt(den2)){
        alert("The fraction is improper! Please make it normal.")
    }
    else if ( Math.abs(reduced[1])!= Math.abs(parseInt(den2)) && Math.abs(reduced[0])!= Math.abs(parseInt(num3))){
        alert("Just to let you know, your answer is not reduced, please reduce it and resubmit.")
    }
    else if( num3.includes("-") && whole2 != ""){
        alert("As a general rule there should be no negative in the fraction portion of the mixed fraction, borrow and get rid of it.")
    }
    else{
        alert("Your fraction is in the correct form, but this is not the correct answer, please try again. Your work is right, so something is going wring in the final stages")
    }
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
    var list1 = ["5078","5079","5080","5081"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5078 <= master_id){
    localStorage.setItem("current_exercise","5078")
    localStorage.setItem("next_exercise","5079")
    localStorage.setItem("practice_title", "Mixed Results B Workout 1")
    localStorage.setItem("shape", 0);
    document.location.href = "game.php"}
}

function easy(){
    if(5079 <= master_id){
    localStorage.setItem("current_exercise","5079")
    localStorage.setItem("next_exercise","5080")
    localStorage.setItem("practice_title", "Mixed Results B Workout 2")
    localStorage.setItem("shape", 1);
    document.location.href = "game.php"}
}

function medium(){
    if(5080 <= master_id){
    localStorage.setItem("current_exercise","5080")
    localStorage.setItem("next_exercise","5081")
    localStorage.setItem("practice_title", "Mixed Results B Workout 2")
    localStorage.setItem("shape", 1);
    document.location.href = "game.php"}
}


function hard(){
    if(5081 <= master_id){
    localStorage.setItem("current_exercise","5081")
    localStorage.setItem("next_exercise","5082")
    localStorage.setItem("practice_title", "Mixed Results B Workout 2")
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
if(master_id > next_exercsie){
        next_exercsie = master_id
	}
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


