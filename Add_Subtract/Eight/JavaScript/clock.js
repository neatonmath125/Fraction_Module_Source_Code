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


///var question_list = [["",1,4,"",2,4,1,"",3,4,"+"],["",2,7,"",3,7,1,"",5,7,"+"],["",1,8,"",4,8,1,"",5,8,"+"],["",8,11,"",2,11,1,"",10,11,"+"],["",3,10,"",4,10,1,"",7,10,"+"],["",5,8,"",2,8,1,"",7,8,"+"],["",1,10,"",8,10,1,"",9,10,"+"],["",1,7,"",2,7,1,"",3,7,"+"],["",4,13,"",1,13,1,"",5,13,"+"],["",6,11,"",2,11,1,"",8,11,"+"],["",11,17,"",3,17,1,"",14,17,"+"],["",2,11,"",4,11,1,"",6,11,"+"],["",6,19,"",3,19,1,"",9,19,"+"],["",1,9,"",4,9,1,"",5,9,"+"],["",2,9,"",2,9,1,"",4,9,"+"],["",4,7,"",2,7,1,"",6,7,"+"],["",2,5,"",1,5,1,"",3,5,"+"],["",1,5,"",3,5,1,"",4,5,"+"],["",1,3,"",1,3,1,"",2,3,"+"],["",5,11,"",3,11,1,"",8,11,"+"],["",3,4,"",2,4,1,"",1,4,"-"],["",5,7,"",3,7,1,"",2,7,"-"],["",4,8,"",1,8,1,"",3,8,"-"],["",8,11,"",8,11,1,"",0,11,"-"],["",7,10,"",4,10,1,"",3,10,"-"],["",5,8,"",2,8,1,"",3,8,"-"],["",9,10,"",8,10,1,"",1,10,"-"],["",6,7,"",2,7,1,"",4,7,"-"],["",4,13,"",1,13,1,"",4,13,"-"],["",6,11,"",2,11,1,"",4,11,"-"],["",11,17,"",3,17,1,"",8,17,"-"],["",9,11,"",4,11,1,"",5,11,"-"],["",6,19,"",3,19,1,"",3,19,"-"],["",9,9,"",1,9,1,"",8,9,"-"],["",7,9,"",2,9,1,"",5,9,"-"],["",4,7,"",2,7,1,"",2,7,"-"],["",2,5,"",1,5,1,"",1,5,"-"],["",4,5,"",3,5,1,"",1,5,"-"],["",2,3,"",1,3,1,"",1,3,"-"],["",5,11,"",3,11,1,"",2,11,"-"]]
///var question_list2 = [["",1,4,"",1,4,2,"",1,2,"+"],["",1,8,"",3,8,4,"",1,2,"+"],["",1,8,"",5,8,2,"",3,4,"+"],["",7,10,"",1,10,2,"",4,5,"+"],["",1,10,"",3,10,2,"",2,5,"+"],["",3,8,"",3,8,2,"",3,4,"+"],["",1,10,"",1,10,2,"",1,5,"+"],["",1,9,"",2,9,3,"",1,3,"+"],["",5,12,"",5,12,2,"",5,6,"+"],["",1,6,"",3,6,2,"",2,3,"+"],["",11,18,"",3,18,2,"",7,9,"+"],["",5,12,"",4,12,3,"",3,4,"+"],["",5,9,"",1,9,3,"",2,3,"+"],["",1,14,"",5,14,2,"",3,7,"+"],["",1,12,"",5,12,6,"",1,2,"+"],["",3,10,"",5,10,2,"",4,5,"+"],["",7,20,"",11,20,2,"",9,10,"+"],["",11,20,"",1,20,4,"",3,5,"+"],["",1,22,"",1,22,2,"",1,11,"+"],["",1,4,"",1,4,1,"",0,4,"-"],["",3,8,"",1,8,2,"",1,4,"-"],["",5,8,"",1,8,4,"",1,2,"-"],["",7,10,"",1,10,2,"",3,5,"-"],["",9,10,"",3,10,2,"",3,5,"-"],["",5,8,"",3,8,2,"",1,4,"-"],["",9,10,"",1,10,2,"",4,5,"-"],["",5,9,"",2,9,3,"",1,3,"-"],["",8,12,"",5,12,3,"",1,4,"-"],["",3,6,"",1,6,2,"",1,3,"-"],["",11,18,"",3,18,2,"",4,9,"-"],["",5,12,"",3,12,2,"",1,6,"-"],["",8,9,"",2,9,3,"",2,3,"-"],["",11,14,"",5,14,2,"",3,7,"-"],["",11,12,"",5,12,6,"",1,2,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
///var question_list3 = [["-",1,8,"",3,8,2,"",1,4,"+"],["",1,8,"-",5,8,4,"-",1,2,"+"],["-",7,10,"",1,10,2,"-",3,5,"+"],["-",3,8,"",3,8,1,"",0,8,"+"],["",7,10,"-",1,10,2,"",3,5,"+"],["",1,9,"-",2,9,1,"-",1,9,"+"],["-",1,6,"",3,6,2,"",1,3,"+"],["-",11,18,"-",3,18,2,"-",7,9,"+"],["-",5,12,"-",1,12,6,"-",1,2,"+"],["-",1,14,"",5,14,2,"",2,7,"+"],["",1,12,"-",5,12,4,"-",1,3,"+"],["-",3,10,"-",5,10,2,"-",4,5,"+"],["-",1,20,"",11,20,10,"",1,2,"+"],["-",1,22,"-",1,22,2,"-",1,11,"+"],["-",3,100,"",53,100,50,"",1,2,"+"],["-",3,8,"",1,8,4,"-",1,2,"-"],["",5,8,"-",1,8,2,"",3,4,"-"],["-",7,10,"",1,10,2,"-",4,5,"-"],["-",5,8,"",1,8,2,"-",3,4,"-"],["",7,10,"-",1,10,2,"",4,5,"-"],["-",5,9,"-",2,9,3,"-",1,3,"-"],["-",3,6,"-",1,6,2,"-",1,3,"-"],["-",11,18,"",3,18,2,"-",7,9,"-"],["",5,12,"",11,12,1,"-",7,12,"-"],["",11,14,"",15,14,2,"-",2,7,"-"],["-",1,12,"",5,12,6,"-",1,2,"-"],["",5,10,"-",3,10,2,"",4,5,"-"],["-",11,20,"",1,20,4,"-",3,5,"-"],["",15,22,"-",2,22,1,"",17,22,"-"],["-",47,100,"",22,100,1,"-",69,100,"-"],["",7,10,"",5,10,2,"",1,5,"-"],["",11,20,"",7,20,4,"",1,5,"-"],["",11,20,"",1,20,10,"",1,2,"-"],["",15,22,"",2,22,2,"",6,11,"-"]]
///master_set = [question_list,question_list2,question_list3]

///
// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

/// up to
var list3 = [["",1,5,3,"",2,2,3],["",1,9,5,"",2,4,5],["",3,4,3,"",4,1,3],["",2,7,3,"",4,1,3],["",3,3,2,"",4,1,2],["",4,7,5,"",5,2,5],["",9,3,2,"",10,1,2],["",5,11,6,"",6,5,6],["",4,6,5,"",5,1,5],["",8,11,4,"",10,3,4],["",1,7,4,"",2,3,4],["",11,9,5,"",12,4,5],["",6,11,8,"",7,3,8],["",4,17,8,"",6,1,8],["",7,15,8,"",8,7,8],["",7,13,7,"",8,6,7],["",10,9,7,"",11,2,7],["",1,5,2,"",3,1,2],["",3,11,7,"",4,4,7],["",1,13,11,"",2,2,11]]
var list2 = [["-",4,3,2,"",2,1,2],["-",1,7,5,"-","",2,5],["-",5,8,5,"",3,2,5],["-",1,11,9,"-","",2,9],["-",7,7,5,"",5,3,5],["-",5,11,9,"",3,7,9],["-",6,5,4,"",4,3,4],["-",2,39,20,"","",1,20],["-",8,7,4,"",6,1,4],["-",9,5,3,"",7,1,3],["-",7,4,3,"",5,2,3],["-",3,31,25,"",1,19,25],["-",1,13,9,"-","",4,9],["-",1,13,11,"-","",2,11],["-",4,19,15,"",2,11,15],["-",3,7,6,"",1,5,6],["-",2,11,8,"","",5,8],["-",9,18,11,"",7,4,11],["-",10,15,11,"",8,7,11],["-",3,8,7,"",1,6,7],["-",10,13,12,"",8,11,12],["-",2,11,6,"","",1,6],["-",4,7,6,"",2,5,6],["-",11,17,15,"",9,13,15],["-",2,5,3,"","",1,3]]
var list1 = [["",4,3,2,"",5,1,2],["",1,7,5,"",2,2,5],["",5,8,5,"",6,3,5],["",1,11,9,"",2,2,9],["",7,7,5,"",8,2,5],["",5,11,9,"",6,2,9],["",6,5,4,"",7,1,4],["",2,39,20,"",3,19,20],["",8,7,4,"",9,3,4],["",9,5,3,"",10,2,3],["",7,4,3,"",8,1,3],["",3,31,25,"",4,6,25],["",1,13,9,"",2,4,9],["",4,13,9,"",5,4,9],["",8,13,10,"",9,3,10],["",4,19,15,"",5,4,15],["",3,7,6,"",4,1,6],["",2,11,8,"",3,3,8],["",9,18,11,"",10,7,11],["",4,3,2,"",5,1,2],["",10,15,11,"",11,4,11],["",3,8,7,"",4,1,7],["",10,13,12,"",11,1,12],["",11,19,15,"",12,4,15],["",2,11,6,"",3,5,6],["",4,11,6,"",5,5,6]]
var master_set = [list1, list2, list3]

var turns = 0


////[sign1, whole1, num1, den1, sign2, num2, den2, sign_ans, whole_ans, num_ans, den_ans, +/-]

function white_choices(){
    document.getElementById("answer_one_left").style.backgroundColor = "white"
    document.getElementById("answer_one_right").style.backgroundColor = "white"
    document.getElementById("answer_two_left").style.backgroundColor = "white"
    document.getElementById("answer_two_right").style.backgroundColor = "white"
    document.getElementById("answer_three_left").style.backgroundColor = "white"
    document.getElementById("answer_three_right").style.backgroundColor = "white"
    document.getElementById("answer_four_left").style.backgroundColor = "white"
    document.getElementById("answer_four_right").style.backgroundColor = "white"
    document.getElementById("answer_five_left").style.backgroundColor = "white"
    document.getElementById("answer_five_right").style.backgroundColor = "white"
}


function white_answers(){
    document.getElementById("choice_one_left").style.backgroundColor = "white"
    document.getElementById("choice_one_right").style.backgroundColor = "white"
    document.getElementById("choice_two_left").style.backgroundColor = "white"
    document.getElementById("choice_two_right").style.backgroundColor = "white"
    document.getElementById("choice_three_left").style.backgroundColor = "white"
    document.getElementById("choice_three_right").style.backgroundColor = "white"
    document.getElementById("choice_four_left").style.backgroundColor = "white"
    document.getElementById("choice_four_right").style.backgroundColor = "white"
    document.getElementById("choice_five_left").style.backgroundColor = "white"
    document.getElementById("choice_five_right").style.backgroundColor = "white"
    document.getElementById("choice_six_left").style.backgroundColor = "white"
    document.getElementById("choice_six_right").style.backgroundColor = "white"
    document.getElementById("choice_seven_left").style.backgroundColor = "white"
    document.getElementById("choice_seven_right").style.backgroundColor = "white"
    document.getElementById("choice_eight_left").style.backgroundColor = "white"
    document.getElementById("choice_eight_right").style.backgroundColor = "white"
    document.getElementById("choice_nine_left").style.backgroundColor = "white"
    document.getElementById("choice_nine_right").style.backgroundColor = "white"
    document.getElementById("choice_ten_left").style.backgroundColor = "white"
    document.getElementById("choice_ten_right").style.backgroundColor = "white"
}

function opacity_choices(){
    document.getElementById("answer_one_left").style.opacity = 1
    document.getElementById("answer_one_right").style.opacity = 1
    document.getElementById("answer_two_left").style.opacity = 1
    document.getElementById("answer_two_right").style.opacity = 1
    document.getElementById("answer_three_left").style.opacity = 1
    document.getElementById("answer_three_right").style.opacity = 1
    document.getElementById("answer_four_left").style.opacity = 1
    document.getElementById("answer_four_right").style.opacity = 1
    document.getElementById("answer_five_left").style.opacity = 1
    document.getElementById("answer_five_right").style.opacity = 1
}


function opacity_answers(){
    document.getElementById("choice_one_left").style.opacity = 1
    document.getElementById("choice_one_right").style.opacity = 1
    document.getElementById("choice_two_left").style.opacity = 1
    document.getElementById("choice_two_right").style.opacity = 1
    document.getElementById("choice_three_left").style.opacity = 1
    document.getElementById("choice_three_right").style.opacity = 1
    document.getElementById("choice_four_left").style.opacity = 1
    document.getElementById("choice_four_right").style.opacity = 1
    document.getElementById("choice_five_left").style.opacity = 1
    document.getElementById("choice_five_right").style.opacity = 1
    document.getElementById("choice_six_left").style.opacity = 1
    document.getElementById("choice_six_right").style.opacity = 1
    document.getElementById("choice_seven_left").style.opacity = 1
    document.getElementById("choice_seven_right").style.opacity = 1
    document.getElementById("choice_eight_left").style.opacity = 1
    document.getElementById("choice_eight_right").style.opacity = 1
    document.getElementById("choice_nine_left").style.opacity = 1
    document.getElementById("choice_nine_right").style.opacity = 1
    document.getElementById("choice_ten_left").style.opacity = 1
    document.getElementById("choice_ten_right").style.opacity = 1
}

function choice(target){
    var var1 = target + "_left"
    var var2 = target + "_right"
    chosen_choice_whole =  document.getElementById(var1).value
    chosen_choice_frac =  document.getElementById(var2).value
    document.getElementById(var1).style.color = "blue"
    document.getElementById(var2).style.color = "blue"
}

function answer(target){
    var var1 = target + "_left"
    var var2 = target + "_right"
    chosen_answer_whole =  document.getElementById(var1).value
    chosen_answer_frac =  document.getElementById(var2).value
    document.getElementById(var1).style.color = "blue"
    document.getElementById(var2).style.color = "blue"
}

var turns = 0
var minicounter

function clocker(){
    document.getElementById("clock").className = "clock"
}

var check_mini1
var check_mini2
var check_mini3 

function master(){
    check_mini1=0
    check_mini2=0
    check_mini3=0
    document.getElementById("points").innerHTML = "Points: " +  total_points + "<br>" + "Turns: "  + turns
    document.getElementById("clock").className = "none"
    setTimeout(clocker, 100)
    minicounter = 0
    var choice_list = ["choice_one","choice_two","choice_three","choice_four","choice_five","choice_six","choice_seven","choice_eight","choice_nine","choice_ten" ]
    var answer_list5 = ["answer_one","answer_two","answer_three","answer_four","answer_five"]
    white_answers()
    white_choices()
    opacity_answers()
    opacity_choices()
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "block"
    var master_list = master_set[2]
    shuffle(master_list)
    answer_list = []
    for(var x = 0; x < 10; x++){
    answer_list.push(master_list[x])
    }
    for(var x = 0; x < 10; x++){
        var left = choice_list[x] + "_left"
        var right = choice_list[x] + "_right"
        document.getElementById(left).setAttribute("top", answer_list[x][5])
        document.getElementById(right).setAttribute("top", answer_list[x][6])
        document.getElementById(right).setAttribute("bottom", answer_list[x][7])
    }
    shuffle(answer_list)
    for(var x = 0; x <5; x++){
        var left = answer_list5[x] + "_left"
        var right = answer_list5[x] + "_right"
        document.getElementById(left).setAttribute("top", answer_list[x][1])
        document.getElementById(right).setAttribute("top", answer_list[x][2])
        document.getElementById(right).setAttribute("bottom", answer_list[x][3])
    }
    if(turns == 3){
        if(total_points > 240){
        practice_title = current_exercise
            number_correct = total_points/20
            number_attempted = 15
            percent_correct = (total_points/ 300) * 100
            alert("Congradulations, you passed!")
            Submit()
        }
        else{
        practice_title = 0
            number_correct = total_points/20
            number_attempted = 15
            percent_correct = (total_points/ 300) * 100
            alert("Sorry, you didn't pass, better luck next time!")
            Submit()
        }
    }
    else{
        time1 = setTimeout(alerter,60000)
        time2 = setTimeout(master, 60100)
    }

}

var time1
var time2

function alerter(){
    turns +=1
    alert("Times up! Next Round")
}


["",4,3,2,"",5,1,2]

var chosen_answer_whole = 100
var chosen_answer_num = 100
var chosen_answer_den = 100
var chosen_name_right = ""
var chosen_name_left = ""

function master_loader(){
    var screen = localStorage.getItem("chosen_set")
    if(screen ==2){
        master()
    }
    else{
        loader()
    }
}

function answer(target){
    white_choices()
    var left = target + "_left"
    var right = target + "_right"
    document.getElementById(left).style.backgroundColor = "yellow"
    document.getElementById(right).style.backgroundColor = "yellow"
    var whole  = document.getElementById(left).getAttribute("top")
    var num = document.getElementById(right).getAttribute("top")
    var den = document.getElementById(right).getAttribute("bottom")
    var adder = Math.floor(num/den)
    var answer_whole = parseInt(whole) + parseInt(adder)
    var answer_num = num%den
    var answer_den = den
    chosen_answer_whole = answer_whole
    chosen_answer_num = answer_num
    chosen_answer_den = answer_den
    chosen_name_left = left
    chosen_name_right = right
}

function hello(){
    alert("Nice, level complete!")
}

function choice(target){
    var left = target + "_left"
    var right = target + "_right"
    var whole  = document.getElementById(left).getAttribute("top")
    var num = document.getElementById(right).getAttribute("top")
    var den = document.getElementById(right).getAttribute("bottom")
    if(whole == chosen_answer_whole && num == chosen_answer_num && den == chosen_answer_den){
        document.getElementById(chosen_name_left).style.opacity = 0
        document.getElementById(chosen_name_right).style.opacity = 0
        document.getElementById(left).style.opacity = 0
        document.getElementById(right).style.opacity = 0
        chosen_answer_whole = 100
        chosen_answer_num = 100
        chosen_answer_den = 100
        chosen_name_left = ""
        chosen_name_right = ""
        total_points +=20
        minicounter +=1
        document.getElementById("points").innerHTML = "Points: " +  total_points + "<br>" + "Turns: "  + turns
        if(minicounter ==5){
            turns +=1
            clearTimeout(time1)
            clearTimeout(time2)
            setTimeout(hello,1000)
            setTimeout(master,1500)
        }
    }
    else{
        chosen_answer_whole = 100
        chosen_answer_num = 100
        chosen_answer_den = 100
        chosen_name_left = ""
        chosen_name_right = ""
        white_choices()
    }
}

////////////////////////////////////////

var answer

var number_correct
var number_attempted
var percent_correct

function checker1(){
    var whole = document.getElementById("input1").value
    var num = document.getElementById("input2").value
    var den = document.getElementById("input3").value
    if(whole == 0 && answer[5] == ""){
        alert("Your answer is correct!")
        answer[5] = 0
    }
    if( whole == answer[5] && num == answer[4] + answer[6] && den == answer[7]){
        if(turns == 4){
            number_correct = 5
            number_attempted = 5
            percent_correct = 100
            alert("Awesome, you completed this exercise!")
            Submit()
        }
        else{
        turns +=1
        alert(" Nice! only " +  (5 - turns) + " turns left to go!")
        loader()
        }
    }
    else{
        alert("Sorry, that's not the correct answer, please try again, if you are stuck press the help button.")
    }
}

function checker2(){
    var whole = document.getElementById("input4").value
    var num = document.getElementById("input5").value
    var den = document.getElementById("input6").value
    if(whole == 0 && answer[5] == ""){
        alert("Your answer is correct and can be simplified")
        answer[5] = 0
    }
    if( whole == answer[5] && num == answer[4] + answer[6] && den == answer[7]){
        if(turns == 4){
            number_correct = 5
            number_attempted = 5
            percent_correct = 100
            alert("Awesome, you completed this exercise!")
            Submit()
        }
        else{
        turns +=1
        alert(" Nice! only " +  (5 - turns) + " turns left to go!")
        loader()
        }
    }
    else{
        alert("Sorry, that's not the correct answer, please try again, if you are stuck press the help button.")
    }
}

function checker3(){
    if(check_mini3 == 4){
    loader()
    }
    var whole = document.getElementById("input7").value
    var num = document.getElementById("input8").value
    var den = document.getElementById("input9").value
    if(whole == 0 && answer[5] == ""){
        alert("Your answer is correct and can be simplified")
        answer[5] = 0
    }
    if( whole == answer[5] && num == answer[4] + answer[6] && den == answer[7]){
        if(turns == 4){
            number_correct = 5
            number_attempted = 5
            percent_correct = 100
            alert("Awesome, you completed this exercise!")
            Submit()
        }
        else{
        turns +=1
        alert(" Nice! only " +  (5 - turns) + " turns left to go!")
        loader()
        }
    }
    else{
        check_mini3 +=1
        alert("Sorry, that's not the correct answer, please try again.")
    }
}




function loader(){
    check_mini1=0
    check_mini2=0
    check_mini3=0
    var chosen_set = localStorage.getItem("chosen_set")
    var chosen_answer 
    if(chosen_set == 0){
        chosen_answer = master_set[0]
    }
    else{
        chosen_answer = master_set[1]
    }
    shuffle(chosen_answer)
    answer = chosen_answer.pop()
    document.getElementById("frac1_left").setAttribute("top", answer[1])
    document.getElementById("frac1_right").setAttribute("top", answer[0] + answer[2])
    document.getElementById("frac1_right").setAttribute("bottom", answer[3])
    document.getElementById("first_screen").style.display = "block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("input3").value = ""
    document.getElementById("input4").value = ""
    document.getElementById("input5").value = ""
    document.getElementById("input6").value = ""
    document.getElementById("input7").value = ""
    document.getElementById("input8").value = ""
    document.getElementById("input9").value = ""
}

function loader2(){
    check_mini1=0
    check_mini2=0
    check_mini3=0
    var chosen_set = localStorage.getItem("chosen_set")
    document.getElementById("frac3_left").setAttribute("top", answer[1])
    document.getElementById("frac3_right").setAttribute("top", answer[0] + answer[2])
    document.getElementById("frac3_right").setAttribute("bottom", answer[3])
    document.getElementById("frac5_right").setAttribute("top", answer[2])
    document.getElementById("frac5_right").setAttribute("bottom", answer[3])
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "block"
    document.getElementById("third_screen").style.display = "none"
    if(chosen_set == 1){
        if(answer[1]>= 2){
            document.getElementById("frac4_left").setAttribute("top", answer[1] - 2)
            document.getElementById("frac4_right").setAttribute("top", answer[3] * 2)
            document.getElementById("frac4_right").setAttribute("bottom", answer[3])
        }
        else{
            document.getElementById("frac4_left").setAttribute("top", answer[1] - 1)
            document.getElementById("frac4_right").setAttribute("top", answer[3])
            document.getElementById("frac4_right").setAttribute("bottom", answer[3])
        }
        document.getElementById("mult5_5").innerHTML = "-"
    }
    else{
        document.getElementById("frac4_left").setAttribute("top", answer[1])
        document.getElementById("frac4_right").setAttribute("top", answer[3])
        document.getElementById("frac4_right").setAttribute("bottom", answer[3])
        document.getElementById("frac5_right").setAttribute("top", answer[2] - answer[3])
        document.getElementById("frac5_right").setAttribute("bottom", answer[3])
        document.getElementById("mult5_5").innerHTML = "+"
    }
}

function loader3(){
    ////
    check_mini1=0
    check_mini2=0
    check_mini3=0
    document.getElementById("frac9_right").style.display = "inline-block"
    document.getElementById("mult5_25").style.display = "inline-block"
    var chosen_set = localStorage.getItem("chosen_set")
    if(chosen_set ==0){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "block"
    document.getElementById("frac7_left").setAttribute("top", answer[1])
    document.getElementById("frac7_right").setAttribute("top", answer[0] + answer[2])
    document.getElementById("frac7_right").setAttribute("bottom", answer[3])
    document.getElementById("frac8_left").setAttribute("top", answer[1])
    document.getElementById("frac9_right").setAttribute("bottom", 1)
    document.getElementById("frac10_right").setAttribute("top", answer[2]- answer[3])
    document.getElementById("frac10_right").setAttribute("bottom", answer[3])
    }
    else{
        document.getElementById("first_screen").style.display = "none"
        document.getElementById("second_screen").style.display = "none"
        document.getElementById("third_screen").style.display = "block"
        document.getElementById("frac7_left").setAttribute("top", answer[1])
        document.getElementById("frac7_right").setAttribute("top", answer[0] + answer[2])
        document.getElementById("frac7_right").setAttribute("bottom", answer[3])
        document.getElementById("frac9_right").style.display = "none"
        document.getElementById("mult5_25").style.display = "none"
        if (answer[1] >= 2){
            document.getElementById("frac8_left").setAttribute("top", answer[1] -2)
        document.getElementById("frac10_right").setAttribute("top", (answer[3] *2) + " - " + answer[2])
        document.getElementById("frac10_right").setAttribute("bottom", answer[3])
        }
        else{
            document.getElementById("frac8_left").setAttribute("top", 0)
            document.getElementById("frac9_right").style.display = "none"
            document.getElementById("frac10_left").setAttribute("top", answer[2]- answer[3])
            document.getElementById("frac10_right").setAttribute("bottom", answer[3])

        }
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function shower11(){
    alert("Nice work!, " +  (5 - turns) + " exercises left to go!")
}


// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]


function opacity_setter(){
    var list1 = ["5075","5076","5077"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5075 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5075" );
    localStorage.setItem("next_exercise","5076" );
    localStorage.setItem("practice_title","Mixed Results A Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5076 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5076" );
    localStorage.setItem("next_exercise","5077" );
    localStorage.setItem("practice_title","Mixed Results A Workout 2");
    document.location.href = "game.php"}
}

function medium(){
    if(5077 <= master_id){
    localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5077" );
    localStorage.setItem("next_exercise","5078" );
    localStorage.setItem("practice_title","Mixed Results A Workout 3");
    document.location.href = "game.php"}
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]





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
        next_exercsie = master_id;
    }
    NumberCorrect.value=number_correct;
	NumberAttempted.value=number_attempted;
	Time.value=0;
	Percent.value=percent_correct;
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




function explainer_show(){
    answers_correct+=1
    var answer = explainer()
}



function game(){
    document.location.href = "game.php"
}

function directions(){
    document.location.href = "instructions.php"
}

function return_index(){
    document.location.href = "index.php"
}
