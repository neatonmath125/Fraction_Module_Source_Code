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
var list1 = [["",2, 3, "", 1, 4, 12, "", 11, 12,"+", 4, 3],["",3, 5, "", 3, 10, 10, "", 9, 10,"+", 2, 1],["",4, 9, "", 2, 3, 9, "", 10, 9,"+", 1, 3],["",1, 8, "", 5, 3, 24, "", 43, 24,"+", 3, 8],["",2, 5, "", 3, 8, 40, "", 31, 40,"+", 8, 5],["",1, 8, "", 4, 5, 40, "", 37, 40,"+", 5, 8],["",6, 7, "", 1, 2, 14, "", 19, 14,"+", 2, 7],["",4, 5, "", 3, 8, 40, "", 47, 40,"+", 5, 8],["",3, 8, "", 1, 6, 24, "", 13, 24,"+", 3, 4],["",7, 10, "", 3, 5, 10, "", 1, 10,"-", 1, 2],["",2, 9, "", 1, 6, 18, "", 7, 18,"+", 2, 3],["",4, 7, "", 2, 9, 63, "", 50, 63,"+", 9, 7],["",3, 11, "", 5, 22, 22, "", 1, 2,"+", 2, 1],["",6, 7, "", 1, 3, 21, "", 11, 21,"-", 3, 7],["",4, 11, "", 1, 8, 88, "", 21, 88,"-", 8, 11],["",2, 5, "", 1, 6, 30, "", 7, 30,"-", 6, 5],["",6, 5, "", 7, 10, 10, "", 1, 2,"-", 2, 1],["",4, 15, "", 11, 20, 60, "", 49, 60,"+", 4, 3],["",7, 8, "", 1, 12, 24, "", 23, 24,"+", 3, 2],["",7, 12, "", 1, 6, 12, "", 5, 12,"-", 1, 2],["",4, 3, "", 2, 5, 15, "", 14, 15,"-", 5, 3],["",10, 11, "", 5, 22, 22, "", 15, 22,"-", 2, 1],["",3, 5, "", 2, 9, 45, "", 17, 45,"-", 9, 5],["",5, 6, "", 7, 10, 30, "", 2, 15,"-", 5, 3],["",5, 6, "", 3, 10, 30, "", 17, 15,"+", 5, 3],["",2, 3, "", 1, 6, 6, "", 5, 6,"+", 2, 1],["",2, 3, "", 5, 8, 24, "", 1, 24,"-", 8, 3],["",4, 5, "", 3, 8, 40, "", 47, 40,"+", 8, 5],["",6, 11, "", 7, 33, 33, "", 25, 33,"+", 3, 1],["",5, 16, "", 3, 8, 16, "", 11, 16,"+", 1, 2],["",7, 25, "", 4, 15, 75, "", 41, 75,"+", 3, 5],["",7, 9, "", 5, 12, 36, "", 43, 36,"+", 4, 3],["",8, 9, "", 4, 15, 45, "", 52, 45,"+", 5, 3],["",1, 5, "", 2, 15, 15, "", 1, 3,"+", 3, 1],["",3, 8, "", 5, 12, 24, "", 19, 24,"+", 3, 2],["",7, 20, "", 23, 30, 60, "", 16, 15,"+", 3, 2],["",8, 9, "", 1, 6, 18, "", 19, 18 ,"+", 2, 3],["",10, 21, "", 5, 7, 21, "", 25, 21,"+", 1, 3],["",8, 21, "", 5, 14, 42, "", 32, 42,"+", 2, 3],["", 7, 25, "", 3, 10, 50, "", 29, 50,"+", 2, 5],["",7, 10, "",11, 15, 30, "", 43, 30,"+", 3, 2],["",4, 5, "", 7, 25, 25, "", 27, 25,"+", 5, 1],["",5, 6, "", 7, 12, 12, "", 17, 12,"+", 2, 1],["",3, 8, "", 5, 12, 24, "", 19, 24,"+", 3, 2],["",23, 30, "", 7, 20, 60, "", 5, 12,"-", 2, 3],["",5, 7, "", 10, 21, 21, "", 5, 21,"-", 3, 1],["",8, 21, "", 5, 14, 42, "", 1, 42,"-", 2, 3],["",9, 25, "", 3, 10, 50, "", 3, 50,"-", 2, 5],["",7, 10, "", 11, 15, 30, "", 1, 30,"-", 3, 2],["",4, 5, "", 7, 25, 25, "", 27, 25,"+", 5, 1],["",5, 6, "", 7, 15, 30, "", 39, 30,"+", 5, 2],["",5, 8, "", 7, 6, 24, "", 43, 24,"+", 3, 4],["",13,15, "", 7, 10, 30, "", 1, 6,"-", 2, 3],["",24,25, "", 21, 50, 50, "", 27, 50,"-", 2, 1],["",16,25, "", 11, 75, 75, "", 59, 75,"+", 3, 1],["",4,3, "", 5, 9, 9, "", 7, 9,"-", 3, 1],["",6,11, "", 17, 33, 33, "", 1, 33,"-", 3, 1],["",1,6, "", 4, 15, 30, "", 13, 30,"+", 5, 2],["",7,12, "", 7, 30, 60, "", 7, 20,"-", 5, 2],["",9,10, "", 5, 18, 90, "", 28, 45,"-", 9, 5]]
var list2 = [["-",2, 3, "", 1, 3, 9, "", 1, 9,"+", 1, 3],["-",5, 8, "", 5, 16, 16, "-", 5, 16,"+", 2, 1],["",1, 5, "-", 1, 10, 10, "", 3, 10,"-", 2, 1],["",2, 3, "-", 7, 9, 9, "", 13, 9,"-", 3, 1],["-",3, 4, "", 7, 2, 4, "", 11, 4,"+", 1, 2],["-",1, 4, "", 1, 2, 4, "", 1, 4,"+", 1, 2],["-",2, 3, "", 1, 6, 6, "-", 5, 6,"-", 2, 1],["-",3, 7, "", 7, 2, 14, "", 43, 14,"+", 2, 7],["",7, 4, "-", 3, 5, 20, "", 47, 20,"-", 5, 4],["-",5, 9, "", 1, 2, 18, "-", 1, 18,"+", 2, 9],["",3, 4, "", 7, 8, 8, "-", 1, 8,"-", 2, 1],["-",2, 3, "", 2, 3, 3, "", 0, 3,"+", 1, 1],["-",3, 4, "-", 7, 8, 8, "", 1, 8,"-", 2, 1],["-",7, 4, "-", 11, 4, 1, "", 1, 1,"-", 1, 1],["-",5, 6, "", 1, 2, 6, "-", 1, 3,"+", 1, 3],["-",3, 5, "-", 1, 2, 10, "-", 1, 10,"-", 2, 5],["-",7, 12, "-", 1, 12, 12, "-", 1, 2,"-", 1, 1],["-",5, 4, "", 1, 3, 12, "-", 19, 12,"-", 3, 4],["",13, 14, "", 6, 14, 14, "", 1, 2,"-", 1, 1],["",2, 3, "", 1, 2, 6, "", 7, 6,"+", 2, 3],["-",3, 7, "", 2, 5, 35, "-", 1, 35,"+", 5, 7],["-",5, 14, "",11, 7, 14, "", 17, 14,"+", 1, 2],["-",1, 4, "", 1, 3, 12, "", 1, 12,"+", 3, 4],["",9, 11, "", 5, 33, 33, "", 2, 3,"-", 3, 1],["",1, 6, "", 3, 4, 12, "", 11, 12,"+", 2, 3]]
var list3 = [["-",2, 9, "", 1, 9, 9, "-", 1, 9,"+", 1, 1],["",2, 5, "", 7, 2, 10, "", 39, 10,"+", 2, 5],["",3, 4, "", 5, 9, 36, "", 47, 36,"+", 9, 4],["",1, 5, "", 1, 9, 45, "", 14, 45,"+", 9, 5],["",3, 7, "", 7, 8, 56, "", 73, 56,"+", 8, 7],["",5, 9, "", 1, 2, 18, "", 19, 18,"+", 2, 9],["",5, 12, "", 7, 8, 24, "", 31, 24,"+", 2, 3],["",5, 9, "", 1, 6, 18, "", 13, 18,"+", 2, 3],["-",4, 15, "", 1, 6, 30, "-", 13, 30,"-", 2, 5],["-",1, 4, "", 1, 3, 12, "-", 7, 12,"-", 3, 4],["",1, 6, "", 7, 8, 24, "", 25, 24,"+", 4, 3],["-",6, 11, "", 1, 4, 44, "-", 35, 44,"-", 4, 11],["-",7, 12, "-", 1, 10, 60, "-", 29, 60,"-", 5, 6],["-",5, 4, "", 1, 6, 12, "-", 17, 12,"-", 3, 2],["",3, 7, "", 11, 14, 14, "-", 5, 14,"-", 2, 1],["-",2, 9, "", 1, 6, 18, "-", 1, 18,"+", 2, 3],["-",3, 20, "", 2, 15, 60, "-", 1, 60,"+", 3, 4],["-",5, 8, "", 11, 10, 40, "", 19, 40,"+", 5, 4],["-",13, 11, "", 5, 6, 66, "", 23, 66,"+", 6, 11],["-",7, 12, "", 5, 16, 48, "-", 43, 48,"-", 4, 3],["-",5, 6, "", 3, 8, 24, "-", 11, 24,"+", 4, 3]]
var master_set = [list1, list2, list3]

var turns = 0

function shower11(){
    alert("Nice work!, " +  (5 - turns) + " exercises left to go!")
}

function checker1(){
    var var1 = document.getElementById("input1").value
    var var2 = document.getElementById("input2").value
    if(var1 == (answer[7] + answer[8]) && var2 == answer[9]){
        turns +=1
        runner()
        setTimeout(shower11,2000) 
        if (turns ==5){
            setTimeout(Submit,1900)
            }
        else{
            setTimeout(loader,3000)
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

function checker2(){
    var var1 = document.getElementById("input3").value
    if(var1 == answer[6]){
        runner()
        helper2()
    }
   else{
    alert("Sorry, that's not the lowest common multiple! Please try again!")
    }
}

var helper_mega = 0;
function checker3(){
    var var1 = document.getElementById("input4").value
    var var2 = document.getElementById("input5").value
    var var3 = document.getElementById("input6").value
    var var4 = document.getElementById("input7").value
    var var5 = document.getElementById("input8").value
    var var6 = document.getElementById("input9").value
    if(var1 == answer[11] && var2 == answer[11] && var3 == (answer[0]+(answer[1] * answer[11])) && var4 == answer[12] && var5 == answer[12] && var6 == (answer[3]+(answer[4] * answer[12])) ){
        runner()
        helper3()
    }
    else{
        alert(" Sorry, that's incorrect, keep trying!")

    }
}


// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function checker4(){
    var var1 = document.getElementById("input10").value
    var var2 = document.getElementById("input11").value
    var var3 = document.getElementById("input12").value
    var var4 = document.getElementById("input13").value
    var var5 = document.getElementById("input14").value
    if(var1 == (answer[0] + (answer[11] * answer[1])) || var1 == ( answer[3] + (answer[12] * answer[4]))  && var2 == ( answer[3] + (answer[12] * answer[9])) || var2 == (answer[1] + (answer[11] * answer[8])) && var3 == answer[6] && var4 == answer[8] && var5 == answer[9]){
        turns +=1
        runner()
        setTimeout(shower11,2000) 
        if (turns ==5){
            setTimeout(Submit,1900)
            }
        else{
            setTimeout(loader,3000)
        }
    }
   else{
    if(var4 == (answer[1] + (answer[11] * answer[8])) && var5 == ( answer[3] + (answer[12] * answer[9]))){
        alert("This is the correct answer, but it is not reduced, please reduce it!")
    }
    else{
        alert("Sorry, thats not the correct answer. Please try again!")

    }       
    }
}


function opacity_setter(){
    var list1 = ["5069","5070","5071"]
    for(var x = 0; x < list1.length;x++){
        if(list1[x] > master_id){
            document.getElementById(list1[x]).style.opacity = .25
        }
    }
}

function very_easy(){
    if(5069 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5069" );
    localStorage.setItem("next_exercise","5070" );
    localStorage.setItem("practice_title","Step by Step B Workout 1");
    document.location.href = "game.php"}
}

function easy(){
    if(5070 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5070" );
    localStorage.setItem("next_exercise","5071" );
    localStorage.setItem("practice_title","Step by Step B Workout 2");
    document.location.href = "game.php"}
}

function medium(){
    if(5071 <= master_id){
    localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5071" );
    localStorage.setItem("next_exercise","5072" );
    localStorage.setItem("practice_title","Step by Step B Workout 2");
    document.location.href = "game.php"}
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function loader(){
    var chosen = localStorage.getItem("chosen_set")
    chosen_set = master_set[chosen]
    shuffle(chosen_set)
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
    document.getElementById("input12").value = "" 
    document.getElementById("input13").value = ""
    document.getElementById("input14").value = "" 
    document.getElementById("first_screen").style.display = "block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "none"
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
    document.getElementById("text1").innerHTML = "What is the Lowest Common Multiple (LCM) of " + answer[2] + " and " + answer[5] + " ?"
    document.getElementById("input3").opacity = 1
}

// format should be [sign1,num1, den1, sign2, num2, den2, LCD, sign3, ans_num1, ans_num2,+/-, factor1, factor2]

function helper2(){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "block"
    document.getElementById("text2").innerHTML = "Use the common denominator " + answer[6] + " to make the two fractions equivalent."
    document.getElementById("frac3").setAttribute("top", answer[0] + answer[1]) 
    document.getElementById("frac3").setAttribute("bottom",answer[2]) 
    document.getElementById("frac6").setAttribute("top",answer[3] + answer[4])
    document.getElementById("frac6").setAttribute("bottom",answer[5])
    document.getElementById("frac5").setAttribute("bottom",answer[6])
    document.getElementById("frac8").setAttribute("bottom",answer[6])
}


function helper3(){
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("third_screen").style.display = "none"
    document.getElementById("fourth_screen").style.display = "block"
    document.getElementById("frac9").setAttribute("top", answer[0] + (answer[1] * answer[11])) 
    document.getElementById("frac9").setAttribute("bottom",answer[6]) 
    document.getElementById("frac10").setAttribute("top",answer[3] + (answer[4] * answer[12]))
    document.getElementById("frac10").setAttribute("bottom",answer[6])
    if (answer[10] == "+"){
        document.getElementById("frac11").setAttribute("top"," + " )
    }
    else{
        document.getElementById("frac11").setAttribute("top"," - " )
    }
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


