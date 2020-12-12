//Get master Id function

var displayed = []
var total_points = 0;
var turns = 0;

var title = ["_one","_two","_three"]

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [[2,3,3,4,1,2,2,3],[1,4,4,1,1,1,1,4],[5,2,9,10,9,4,5,1],[3,4,2,9,1,6,3,2],[3,5,5,3,1,1,3,5],[2,5,1,6,1,15,2,1],[22,3,5,11,10,3,11,1],[2,7,14,3,4,3,1,7],[2,3,15,2,5,1,2,3],[9,5,5,3,3,1,3,5],[7,9,6,7,2,3,7,3],[15,8,4,5,3,2,5,4],[5,9,18,25,2,5,5,9],[7,8,24,35,3,5,7,8],[7,5,3,7,3,5,7,1],[11,2,2,33,1,3,11,2],[4,5,5,7,4,7,1,5],[1,2,4,5,2,5,1,2],[9,5,5,3,3,1,3,5],[7,9,6,7,2,3,7,3],[3,5,15,21,3,7,3,5],[15,4,24,25,18,5,5,4],[8,9,3,10,4,15,2,3],[11,2,2,9,11,9,1,2]]
var Set2 = [[1,5,5,3,3,7,1,7,1,1,5,3,1,1],[5,2,4,5,1,9,2,9,5,1,2,1,1,1],[5,11,22,3,4,15,8,9,1,1,11,1,5,1],[2,3,4,5,9,8,3,5,1,4,1,1,2,3],[8,3,11,5,3,8,11,5,1,1,1,1,8,3],[14,11,4,21,11,5,8,15,7,1,1,1,1,11],[5,12,18,15,1,7,1,14,5,1,6,1,1,1],[1,9,5,8,4,5,1,18,1,5,1,4,1,1],[2,5,5,6,3,1,1,1,2,1,5,3,1,1],[1,2,2,3,3,5,1,5,1,1,2,3,1,1],[3,2,4,3,7,5,14,5,3,1,2,1,1,1],[7,3,2,5,3,5,14,25,1,1,1,1,1,3]]

var question_set = [Set1, Set2]

var den11
var den12
var num11
var num12
var correct
var number_needed

function shape1(){
    if(5090 <= master_id){
    localStorage.setItem("current_exercise","5094")
    localStorage.setItem("next_exercise","5095")
    localStorage.setItem("practice_title", "Reduce First then Multiply Workout 1")
    localStorage.setItem("shape", 0);
    document.location.href = "game.php"}
}

function shape2(){
    if(5091 <= master_id){
    localStorage.setItem("current_exercise","5095")
    localStorage.setItem("next_exercise","5096")
    localStorage.setItem("practice_title", "Reduce First then Multiply Workout 2")
    localStorage.setItem("shape", 1);
    document.location.href = "game.php"}
}

function shape3(){
    if(5092 <= master_id){
    localStorage.setItem("current_exercise","5096")
    localStorage.setItem("next_exercise","5097")
    localStorage.setItem("practice_title", "Reduce First then Multiply Workout 3")
    localStorage.setItem("shape", 2);
    document.location.href = "game.php"}
}


function master_loader(){
    var chosen55 = localStorage.getItem("shape")
    if(chosen55 == 0){
        setTimeout(loader1,1000)
    }
    else if(chosen55 == 1){
        setTimeout(loader2_2, 1000)
    }
    else{
        setTimeout(loader2_3, 1000)
    }
}

function elim_counter1(list55){
    var counter = 0
    for(var x = 6;x < list55.length; x++){
        if(list55[x] != 1){
            counter +=1
        }
    }
    return counter
}



function loader1(){
    if(turns < 10){
        document.getElementById("question1").innerHTML = "Question " + turns + "/10"
        sqaures_off()
        document.getElementById('first_screen').style.display = "inline-block"
        document.getElementById('second_screen').style.display = "none"
        document.getElementById('third_screen').style.display = "none"
        shuffle(Set1)
        var answer = Set1.pop()
        number_needed = elim_counter1(answer)
        document.getElementById('frac1').setAttribute("top", answer[0])
        document.getElementById('frac1').setAttribute("bottom", answer[1])
        document.getElementById('frac2').setAttribute("top", answer[2])
        document.getElementById('frac2').setAttribute("bottom", answer[3])
        num11 = answer[0]
        den11 = answer[1]
        num12 = answer[2]
        den12 = answer[3]
        correct = answer
    }
    else{
        alert("Awesome, you're done with this lesson!")
        Submit()
    }
}

var square11 = 0
var square12 = 0

/// for 1,3,5,7,9
function selector_square1_1(id){
    if(id == square11){
        document.getElementById(id).style.opacity = 0
        square11 = 0
    }
    else if(square11==0){
        document.getElementById(id).style.opacity = .3
        square11 = id
    }
}

// for 2,4,6,8,10
function selector_square1_2(id){
    if(id == square12){
        document.getElementById(id).style.opacity = 0
        square12 = 0
    }
    else if (square12==0){
        document.getElementById(id).style.opacity = .3
        square12 = id
    }
}



function replace1(){
    if(square11 == "sq1" && square12 == "sq4" && correct[6] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq3" && square12 == "sq1" && correct[7] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 != 0 && square12!= 0 && !(square11 == "sq1" && square12 == "sq2") && !(square11 == "sq3" && square12 == "sq4")){
        inputs_off()
        document.getElementById('first_screen').style.display = "none"
        document.getElementById('second_screen').style.display = "inline-block"
        document.getElementById("frac3").setAttribute("top",document.getElementById("frac1").getAttribute("top"))
        document.getElementById("frac3").setAttribute("bottom",document.getElementById("frac1").getAttribute("bottom") )
        document.getElementById("frac4").setAttribute("top",document.getElementById("frac2").getAttribute("top") )
        document.getElementById("frac4").setAttribute("bottom",document.getElementById("frac2").getAttribute("bottom") )
        if(square11 == "sq1"){
            document.getElementById("in1").style.display = "inline-block"
        }
        else{
            document.getElementById("in3").style.display = "inline-block"
        }
        if(square12 == "sq2"){
            document.getElementById("in2").style.display = "inline-block"
        }
        else{
            document.getElementById("in4").style.display = "inline-block"
        }
    }
    else{
        alert("You are selecting two numbers within the same fraction, please try again")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
}

function check1(){
    if(square11 == "sq1" && square12 == "sq4"){
        var val1 = document.getElementById('in1').value
        var val2 = document.getElementById('in4').value
        if(val1 == correct[0]/correct[6] && val2 == correct[3]/correct[6]){
            alert("Nice!")
            document.getElementById('frac1').setAttribute("top", correct[0]/correct[6])
            document.getElementById('frac2').setAttribute("bottom", correct[3]/correct[6])
            document.getElementById('frac3').setAttribute("top", correct[0]/correct[6])
            document.getElementById('frac4').setAttribute("bottom", correct[3]/correct[6])
            correct[0] = correct[0]/correct[6]
            correct[3] = correct[3]/correct[6]
            correct[6] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            square11 = 0
            square12 = 0
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader5()
            }
            else{
                document.getElementById("first_screen").style.display = "inline-block"
                document.getElementById("second_screen").style.display = "none"
            }
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in1').value = ""
            document.getElementById("in4").value = ""
        }
    }
    else if(square11 == "sq3" && square12 == "sq2"){
        var val1 = document.getElementById('in2').value
        var val2 = document.getElementById('in3').value
        if(val1 == correct[1]/correct[7] && val2 == correct[2]/correct[7]){
            alert("Nice!")
            document.getElementById('frac1').setAttribute("bottom", correct[1]/correct[7])
            document.getElementById('frac2').setAttribute("top", correct[2]/correct[7])
            document.getElementById('frac3').setAttribute("bottom", correct[1]/correct[7])
            document.getElementById('frac4').setAttribute("top", correct[2]/correct[7])
            correct[1] = correct[1]/correct[7]
            correct[2] = correct[2]/correct[7]
            correct[7] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            square11 = 0
            square12 = 0
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader5()
            }
            else{
                document.getElementById("first_screen").style.display = "inline-block"
                document.getElementById("second_screen").style.display = "none"
            }
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in2').value = ""
            document.getElementById("in3").value = ""
        }
    }
}

function loader5(){
    document.getElementById("third_screen").style.display = "inline-block"
    document.getElementById("second_screen").style.display = "none"
    document.getElementById("first_screen").style.display = "none"
    document.getElementById("frac5").setAttribute("top",document.getElementById("frac1").getAttribute("top"))
    document.getElementById("frac5").setAttribute("bottom",document.getElementById("frac1").getAttribute("bottom") )
    document.getElementById("frac6").setAttribute("top",document.getElementById("frac2").getAttribute("top") )
    document.getElementById("frac6").setAttribute("bottom",document.getElementById("frac2").getAttribute("bottom") )
}

function sqaures_off(){
    document.getElementById('sq1').style.opacity = 0
    document.getElementById('sq2').style.opacity = 0
    document.getElementById('sq3').style.opacity = 0
    document.getElementById('sq4').style.opacity = 0
    document.getElementById('sq5').style.opacity = 0
    document.getElementById('sq6').style.opacity = 0
    document.getElementById('sq7').style.opacity = 0
    document.getElementById('sq8').style.opacity = 0
    document.getElementById('sq9').style.opacity = 0
    document.getElementById('sq10').style.opacity = 0
}

function inputs_off(){
    document.getElementById('in1').style.display = "none"
    document.getElementById('in2').style.display = "none"
    document.getElementById('in3').style.display = "none"
    document.getElementById('in4').style.display = "none"
    document.getElementById('in5').style.display = "none"
    document.getElementById('in6').style.display = "none"
    document.getElementById('in7').style.display = "none"
    document.getElementById('in8').style.display = "none"
    document.getElementById('in9').style.display = "none"
    document.getElementById('in10').style.display = "none"
}

function checker1(){
    var num1 = document.getElementById("input1").value
    var den1 = document.getElementById("input2").value
    if(num1 == correct[4] && den1 == correct[5]){
        alert("Nice!")
        turns +=1
        total_points +=20
        sqaures_off()
        inputs_off()
        document.getElementById("input1").value = ""
        document.getElementById("input2").value = ""
        loader1()
    }
    else{
        alert("Sorry, this answer is incorrect, please try again.")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function elim_counter2(list55){
    var counter = 0
    for(var x = 8;x < list55.length; x++){
        if(list55[x] != 1){
            counter +=1
        }
    }
    return counter
}



function loader2_2(){
    if(turns < 10){
        document.getElementById("question2").innerHTML = "Question " + turns + "/5"
        document.getElementById('fourth_screen').style.display = "inline-block"
        document.getElementById('fifth_screen').style.display = "none"
        document.getElementById('sixth_screen').style.display = "none"
        sqaures_off()
        shuffle(Set2)
        var answer = Set2.pop()
        number_needed = elim_counter2(answer)
        document.getElementById('frac7').setAttribute("top", answer[0])
        document.getElementById('frac7').setAttribute("bottom", answer[1])
        document.getElementById('frac8').setAttribute("top", answer[2])
        document.getElementById('frac8').setAttribute("bottom", answer[3])
        document.getElementById('frac9').setAttribute("top", answer[4])
        document.getElementById('frac9').setAttribute("bottom", answer[5])
        num11 = answer[0]
        den11 = answer[1]
        num12 = answer[2]
        den12 = answer[3]
        correct = answer
    }
    else{
        alert("Awesome, you're done with this lesson!")
        Submit()
    }
}

var square11 = 0
var square12 = 0

/// for 1,3,5,7,9
function selector_square21_1(id){
    if(id == square11){
        document.getElementById(id).style.opacity = 0
        square11 = 0
    }
    else if(square11==0){
        document.getElementById(id).style.opacity = .3
        square11 = id
    }
}

// for 2,4,6,8,10
function selector_square21_2(id){
    if(id == square12){
        document.getElementById(id).style.opacity = 0
        square12 = 0
    }
    else if (square12==0){
        document.getElementById(id).style.opacity = .3
        square12 = id
    }
}

// 5/6 7/8 9/10

function replace21(){
    if(square11 == "sq5" && square12 == "sq8" && correct[8] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq7" && square12 == "sq10" && correct[9] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq7" && square12 == "sq6" && correct[10] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq9" && square12 == "sq8" && correct[11] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq5" && square12 == "sq10" && correct[12] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 == "sq9" && square12 == "sq6" && correct[13] == 1){
        alert("Sorry, these two do not share a common factor other than 1.")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
    else if(square11 != 0 && square12!= 0 && !(square11 == "sq5" && square12 == "sq6") && !(square11 == "sq7" && square12 == "sq8")&& !(square11 == "sq9" && square12 == "sq10")){
        inputs_off()
        document.getElementById('fourth_screen').style.display = "none"
        document.getElementById('fifth_screen').style.display = "inline-block"
        document.getElementById("frac10").setAttribute("top",document.getElementById("frac7").getAttribute("top"))
        document.getElementById("frac10").setAttribute("bottom",document.getElementById("frac7").getAttribute("bottom") )
        document.getElementById("frac11").setAttribute("top",document.getElementById("frac8").getAttribute("top") )
        document.getElementById("frac11").setAttribute("bottom",document.getElementById("frac8").getAttribute("bottom") )
        document.getElementById("frac12").setAttribute("top",document.getElementById("frac9").getAttribute("top") )
        document.getElementById("frac12").setAttribute("bottom",document.getElementById("frac9").getAttribute("bottom") )

        if(square11 == "sq5"){
            document.getElementById("in5").style.display = "inline-block"
        }
        else if(square11 == "sq7"){
            document.getElementById("in7").style.display = "inline-block"
        }
        else{
            document.getElementById("in9").style.display = "inline-block"
        }
        if(square12 == "sq6"){
            document.getElementById("in6").style.display = "inline-block"
        }
        else if(square12 == "sq8"){
            document.getElementById("in8").style.display = "inline-block"
        }
        else{
            document.getElementById("in10").style.display = "inline-block"
        }
    }
    else{
        alert("You are selecting two numbers within the same fraction, please try again")
        square11 = 0
        square12 = 0
        sqaures_off()
    }
}

function check21(){
    if(square11 == "sq5" && square12 == "sq8"){
        var val1 = document.getElementById('in5').value
        var val2 = document.getElementById('in8').value
        if(val1 == correct[0]/correct[8] && val2 == correct[3]/correct[8]){
            alert("Nice!")
            document.getElementById('frac7').setAttribute("top", correct[0]/correct[8])
            document.getElementById('frac8').setAttribute("bottom", correct[3]/correct[8])
            document.getElementById('frac10').setAttribute("top", correct[0]/correct[8])
            document.getElementById('frac11').setAttribute("bottom", correct[3]/correct[8])
            correct[0] = correct[0]/correct[8]
            correct[3] = correct[3]/correct[8]
            correct[8] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in5').value = ""
            document.getElementById("in8").value = ""
        }
    }
    else if(square11 == "sq7" && square12 == "sq10"){
        var val1 = document.getElementById('in7').value
        var val2 = document.getElementById('in10').value
        if(val1 == correct[2]/correct[9] && val2 == correct[5]/correct[9]){
            alert("Nice!")
            document.getElementById('frac8').setAttribute("top", correct[2]/correct[9])
            document.getElementById('frac9').setAttribute("bottom", correct[5]/correct[9])
            document.getElementById('frac11').setAttribute("top", correct[2]/correct[9])
            document.getElementById('frac12').setAttribute("bottom", correct[5]/correct[9])
            correct[2] = correct[2]/correct[9]
            correct[5] = correct[5]/correct[9]
            correct[9] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in7').value = ""
            document.getElementById("in10").value = ""
        }
    }
    else if(square11 == "sq5" && square12 == "sq10"){
        var val1 = document.getElementById('in5').value
        var val2 = document.getElementById('in10').value
        if(val1 == correct[0]/correct[12] && val2 == correct[5]/correct[12]){
            alert("Nice!")
            document.getElementById('frac7').setAttribute("top", correct[0]/correct[12])
            document.getElementById('frac9').setAttribute("bottom", correct[5]/correct[12])
            document.getElementById('frac10').setAttribute("top", correct[0]/correct[12])
            document.getElementById('frac12').setAttribute("bottom", correct[5]/correct[12])
            correct[0] = correct[0]/correct[12]
            correct[5] = correct[5]/correct[12]
            correct[12] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in5').value = ""
            document.getElementById("in10").value = ""
        }
    }
    else if(square11 == "sq7" && square12 == "sq6"){
        var val1 = document.getElementById('in6').value
        var val2 = document.getElementById('in7').value
        if(val1 == correct[1]/correct[10] && val2 == correct[2]/correct[10]){
            alert("Nice!")
            document.getElementById('frac7').setAttribute("bottom", correct[1]/correct[10])
            document.getElementById('frac8').setAttribute("top", correct[2]/correct[10])
            document.getElementById('frac10').setAttribute("bottom", correct[1]/correct[10])
            document.getElementById('frac11').setAttribute("top", correct[2]/correct[10])
            correct[1] = correct[1]/correct[10]
            correct[2] = correct[2]/correct[10]
            correct[10] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in6').value = ""
            document.getElementById("in7").value = ""
        }
    }
    else if(square11 == "sq9" && square12 == "sq8"){
        var val1 = document.getElementById('in8').value
        var val2 = document.getElementById('in9').value
        if(val1 == correct[3]/correct[11] && val2 == correct[4]/correct[11]){
            alert("Nice!")
            document.getElementById('frac8').setAttribute("bottom", correct[3]/correct[11])
            document.getElementById('frac9').setAttribute("top", correct[4]/correct[11])
            document.getElementById('frac11').setAttribute("bottom", correct[3]/correct[11])
            document.getElementById('frac12').setAttribute("top", correct[4]/correct[11])
            correct[3] = correct[3]/correct[11]
            correct[4] = correct[4]/correct[11]
            correct[11] = 1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in8').value = ""
            document.getElementById("in9").value = ""
        }
    }
    else if(square11 == "sq9" && square12 == "sq6"){
        var val1 = document.getElementById('in6').value
        var val2 = document.getElementById('in9').value
        if(val1 == correct[1]/correct[13] && val2 == correct[4]/correct[13]){
            alert("Nice!")
            document.getElementById('frac7').setAttribute("bottom", correct[1]/correct[13])
            document.getElementById('frac9').setAttribute("top", correct[4]/correct[13])
            document.getElementById('frac10').setAttribute("bottom", correct[1]/correct[13])
            document.getElementById('frac12').setAttribute("top", correct[4]/correct[13])
            correct[1] = correct[1]/correct[13]
            correct[4] = correct[4]/correct[13]
            correct[13] =1
            inputs_off()
            sqaures_off()
            number_needed -=1
            if(number_needed ==0){
                alert("Nice, now onto the final step")
                loader22()
            }
            else{
                document.getElementById("fourth_screen").style.display = "inline-block"
                document.getElementById("fifth_screen").style.display = "none"
            }
            square11 = 0
            square12 = 0
        }
        else{
            alert("Sorry, this is not correct, please try again.")
            document.getElementById('in6').value = ""
            document.getElementById("in9").value = ""
        }
    }
}

function loader22(){
    document.getElementById("fourth_screen").style.display = "none"
    document.getElementById("fifth_screen").style.display = "none"
    document.getElementById("sixth_screen").style.display = "inline-block"
    document.getElementById("frac13").setAttribute("top",document.getElementById("frac7").getAttribute("top"))
    document.getElementById("frac13").setAttribute("bottom",document.getElementById("frac7").getAttribute("bottom") )
    document.getElementById("frac14").setAttribute("top",document.getElementById("frac8").getAttribute("top") )
    document.getElementById("frac14").setAttribute("bottom",document.getElementById("frac8").getAttribute("bottom") )
    document.getElementById("frac15").setAttribute("top",document.getElementById("frac9").getAttribute("top") )
    document.getElementById("frac15").setAttribute("bottom",document.getElementById("frac9").getAttribute("bottom") )
}

function sqaures_off(){
    document.getElementById('sq1').style.opacity = 0
    document.getElementById('sq2').style.opacity = 0
    document.getElementById('sq3').style.opacity = 0
    document.getElementById('sq4').style.opacity = 0
    document.getElementById('sq5').style.opacity = 0
    document.getElementById('sq6').style.opacity = 0
    document.getElementById('sq7').style.opacity = 0
    document.getElementById('sq8').style.opacity = 0
    document.getElementById('sq9').style.opacity = 0
    document.getElementById('sq10').style.opacity = 0
}

function inputs_off(){
    document.getElementById('in1').style.display = "none"
    document.getElementById('in2').style.display = "none"
    document.getElementById('in3').style.display = "none"
    document.getElementById('in4').style.display = "none"
    document.getElementById('in5').style.display = "none"
    document.getElementById('in6').style.display = "none"
    document.getElementById('in7').style.display = "none"
    document.getElementById('in8').style.display = "none"
    document.getElementById('in9').style.display = "none"
    document.getElementById('in10').style.display = "none"
    document.getElementById('in1').value = ""
    document.getElementById('in2').value = ""
    document.getElementById('in3').value = ""
    document.getElementById('in4').value = ""
    document.getElementById('in5').value = ""
    document.getElementById('in6').value = ""
    document.getElementById('in7').value = ""
    document.getElementById('in8').value = ""
    document.getElementById('in9').value = ""
    document.getElementById('in10').value = ""
}

function checker212(){
    var num1 = document.getElementById("input51").value
    var den1 = document.getElementById("input52").value
    if(num1 == correct[6] && den1 == correct[7]){
        alert("Nice!")
        turns +=1
        total_points += 20
        inputs_off()
        sqaures_off()
        document.getElementById("input51").value = ""
        document.getElementById("input52").value = ""
        loader2_2()
    }
    else{
        alert("Sorry, this answer is incorrect, please try again.")
    }
}

//[2,3,3,4,1,2,2,3]

var master_correct
var chosen_check

function loader2_3(){
    if(turns < 5){
        chosen_check = 0
        document.getElementById("question3").innerHTML = "Question " + turns + "/10"
        document.getElementById('seventh_screen').style.display = "inline-block"
        shuffle(Set1)
        var answer = Set1.pop()
        master_correct = answer
        document.getElementById('s1').style.opacity = 0
        document.getElementById('s2').style.opacity = 0
        document.getElementById('s3').style.opacity = 0
        document.getElementById('s4').style.opacity = 0
        document.getElementById('i1').style.display = "none"
        document.getElementById('i2').style.display = "none"
        document.getElementById('i3').style.display = "none"
        document.getElementById('i4').style.display = "none"
        document.getElementById('i1').value = ""
        document.getElementById('i2').value = ""
        document.getElementById('i3').value = ""
        document.getElementById('i4').value = ""
        document.getElementById('i5').value = ""
        document.getElementById('i6').value = ""
        document.getElementById('fr1').setAttribute("top", answer[0])
        document.getElementById('fr1').setAttribute("bottom", answer[1])
        document.getElementById('fr2').setAttribute("top", answer[2])
        document.getElementById('fr2').setAttribute("bottom", answer[3])
    }
    else{
        alert("Awesome, you're done with this lesson!")
        Submit()
    }
}

function square115(){
    if(master_correct[6] != 1 && chosen_check ==0){
    document.getElementById('i1').style.display = "inline-block"
    document.getElementById('i4').style.display = "inline-block"
    chosen_check = 2
    }
}


function square125(){
    if(master_correct[7] != 1 && chosen_check == 0){
    document.getElementById('i2').style.display = "inline-block"
    document.getElementById('i3').style.display = "inline-block"
    chosen_check = 1
    }
}

function check25(){
    if(chosen_check == 2){
    var ans1 = document.getElementById('i1').value
    var ans2 = document.getElementById('i4').value
    if(ans1 == master_correct[0]/master_correct[6] && ans2 == master_correct[3]/master_correct[6]){
        document.getElementById('s1').style.opacity = 1
        document.getElementById('s4').style.opacity = 1
        alert("This is correct!")
        chosen_check = 0
    }
    else{
        alert("Sorry, this is not the most reduced form of the answer")
    }
    }
    else if(chosen_check == 1){
    var ans1 = document.getElementById('i2').value
    var ans2 = document.getElementById('i3').value
    if(ans1 == master_correct[1]/master_correct[7] && ans2 == master_correct[2]/master_correct[7]){
        document.getElementById('s2').style.opacity = 1
        document.getElementById('s3').style.opacity = 1
        alert("This is correct!")
        chosen_check = 0
    }
    else{
        alert("Sorry, this is not the most reduced form of the answer")
    }
    }
}

function submit25(){
    var ans1 = document.getElementById('i5').value
    var ans2 = document.getElementById('i6').value
    if(ans1 == master_correct[4] && ans2 == master_correct[5]){
        alert("Nice work!")
        turns +=1
        total_points += 20
        loader2_3()
    }
    else{
        alert("Sorry, this answer is incorrect, make sure that your math is right and that the fraction is in the most reduced form.")
    }
}


function loader(){
    setTimeout(master,200)
}

function opacity_setter(){
    var list1 = ["5094","5095","5096"]
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
NumberCorrect.value=total_points/20;
NumberAttempted.value=total_points/20;
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