var master_id = 5125;
//Get master Id function

var displayed = []
var total_points = 0;
var turns = 0;



var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

current_exercise = 5125
next_exercsie = 5126

var Set1 = [["",1,3,"",4,5,"",5,12],["",5,8,"",5,8,"",1,1],["",2,5,"",5,3,"",6,25],["",1,2,"",5,1,"",1,10],["",5,6,"",6,5,"",25,36],["",4,9,"",1,4,"",16,9],["",5,9,"",5,9,"",1,1],["",7,4,"",5,3,"",21,20],["",2,11,"",1,8,"",16,11],["",3,7,"",3,7,"",1,1]]
var Set2 = [["",5,7,"-",1,4,"-",20,7],["-",3,7,"",3,7,"-",1,1],["",5,11,"-",3,8,"-",40,33],["-",2,9,"-",1,4,"",8,9],["-",3,4,"",5,2,"-",3,10],["-",9,5,"-",3,4,"",12,5],["-",8,9,"",4,7,"-",14,3],["",9,10,"-",2,3,"-",27,20],["-",3,2,"-",1,9,"",27,2],["-",5,7,"",2,11,"-",55,14]]
var Set3 = [["",5,14,"",15,28,"",2,3],["",75,8,"",25,2,"",3,4],["",6,5,"",16,15,"",9,8],["",11,18,"",5,12,"",22,15],["",9,10,"",3,8,"",12,5],["",5,6,"",15,8,"",4,9],["",15,2,"",20,3,"",9,8],["",8,21,"",1,14,"",16,3]]
var Set4 = [[2,2,3,1,1,3,2,1],[2,2,3,2,2,7,7,6],[1,4,7,3,2,3,3,7],[1,5,9,"",7,6,4,3],[3,1,5,1,3,5,2,1],[3,3,4,4,2,7,7,8],[1,1,5,1,1,3,9,10],[2,5,8,2,5,8,1,1]]

running_eliminator = 0
counter52 = 0

var master_list = [0,0,0,0,0,0,0,0]
var restart

function loader(){
    alert("Welcome to the division pretest, congratulations on making it through the unit! This will be a practice exercise for the upcoming mastery test. You will have to complete 8 questions, and will be given 40 seconds to correctly answer each question. You are encouraged to have a paper and pencil on hand to write out your work. When you are ready to get started, click the 'OK' button, good luck!")
    countdown( running_eliminator, 0, 40 );
    loader5()
}

function loader5(){
    shuffle(Set1)
    shuffle(Set2)
    shuffle(Set3)
    shuffle(Set4)
    master_list[0] = Set1.pop()
    master_list[1] = Set1.pop()
    master_list[2] = Set2.pop()
    master_list[3] = Set2.pop()
    master_list[4] = Set3.pop()
    master_list[5] = Set3.pop()
    master_list[6] = Set4.pop()
    master_list[7] = Set4.pop()
    for(var j=1; j < 7; j++){
    var id1 = "f1_" + j.toString()
    var id2 = "f2_" + j.toString()
    var x = j-1
    document.getElementById(id1).setAttribute("top",master_list[x][0] + master_list[x][1])
    document.getElementById(id1).setAttribute("bottom",master_list[x][2])
    document.getElementById(id2).setAttribute("top",master_list[x][3] + master_list[x][4])
    document.getElementById(id2).setAttribute("bottom",master_list[x][5])
    }
    for(var j=7; j < 9; j++){
        var id1 = "f1_" + j.toString()
        var id2 = "f2_" + j.toString()
        var id3 = "f3_" + j.toString()
        var id4 = "f4_" + j.toString()
        var x = j-1
        document.getElementById(id1).setAttribute("top",master_list[x][0])
        document.getElementById(id2).setAttribute("top",master_list[x][1])
        document.getElementById(id2).setAttribute("bottom",master_list[x][2])
        document.getElementById(id3).setAttribute("top",master_list[x][3])
        document.getElementById(id4).setAttribute("top",master_list[x][4])
        document.getElementById(id4).setAttribute("bottom",master_list[x][5])
    }
    restart = setTimeout(restarter,40000)
}


function restarter(){
    document.getElementById(running_eliminator.toString()).style.display = "none"
    running_eliminator +=1
    countdown( running_eliminator, 0, 40 );
    restart = setTimeout(restarter,39500)
    shuffle(Set1)
    shuffle(Set2)
    shuffle(Set3)
    shuffle(Set4)
    master_list[0] = Set1[0]
    master_list[1] = Set1[1]
    master_list[2] = Set2[0]
    master_list[3] = Set2[1]
    master_list[4] = Set3[0]
    master_list[5] = Set3[1]
    master_list[6] = Set4[0]
    master_list[7] = Set4[1]
    if (counter52 <2){
        counter52 = 0
        document.getElementById("i1_1").value = ""
        document.getElementById("i2_1").value = ""
        document.getElementById("i1_2").value = ""
        document.getElementById("i2_2").value = ""
        document.getElementById("prob2").style.display = "none"
    for(var j=1; j < 7; j++){
    var id1 = "f1_" + j.toString()
    var id2 = "f2_" + j.toString()
    var x = j-1
    document.getElementById(id1).setAttribute("top",master_list[x][0] + master_list[x][1])
    document.getElementById(id1).setAttribute("bottom",master_list[x][2])
    document.getElementById(id2).setAttribute("top",master_list[x][3] + master_list[x][4])
    document.getElementById(id2).setAttribute("bottom",master_list[x][5])
    }
    for(var j=7; j < 9; j++){
        var id1 = "f1_" + j.toString()
        var id2 = "f2_" + j.toString()
        var id3 = "f3_" + j.toString()
        var id4 = "f4_" + j.toString()
        var x = j-1
        document.getElementById(id1).setAttribute("top",master_list[x][0])
        document.getElementById(id2).setAttribute("top",master_list[x][1])
        document.getElementById(id2).setAttribute("bottom",master_list[x][2])
        document.getElementById(id3).setAttribute("top",master_list[x][3])
        document.getElementById(id4).setAttribute("top",master_list[x][4])
        document.getElementById(id4).setAttribute("bottom",master_list[x][5])
    }
    }
    else if(counter52 < 4){
        counter52 = 2
        document.getElementById("i1_3").value = ""
        document.getElementById("i2_3").value = ""
        document.getElementById("i1_4").value = ""
        document.getElementById("i2_4").value = ""
        document.getElementById("prob4").style.display = "none"
    for(var j=3; j < 7; j++){
    var id1 = "f1_" + j.toString()
    var id2 = "f2_" + j.toString()
    var x = j-1
    document.getElementById(id1).setAttribute("top",master_list[x][0] + master_list[x][1])
    document.getElementById(id1).setAttribute("bottom",master_list[x][2])
    document.getElementById(id2).setAttribute("top",master_list[x][3] + master_list[x][4])
    document.getElementById(id2).setAttribute("bottom",master_list[x][5])
    }
    for(var j=7; j < 9; j++){
        var id1 = "f1_" + j.toString()
        var id2 = "f2_" + j.toString()
        var id3 = "f3_" + j.toString()
        var id4 = "f4_" + j.toString()
        var x = j-1
        document.getElementById(id1).setAttribute("top",master_list[x][0])
        document.getElementById(id2).setAttribute("top",master_list[x][1])
        document.getElementById(id2).setAttribute("bottom",master_list[x][2])
        document.getElementById(id3).setAttribute("top",master_list[x][3])
        document.getElementById(id4).setAttribute("top",master_list[x][4])
        document.getElementById(id4).setAttribute("bottom",master_list[x][5])
    }
    }
    else if(counter52 < 6){
        counter52 = 4
        document.getElementById("i1_5").value = ""
        document.getElementById("i2_5").value = ""
        document.getElementById("i1_6").value = ""
        document.getElementById("i2_6").value = ""
        document.getElementById("prob6").style.display = "none"
    for(var j=5; j < 7; j++){
    var id1 = "f1_" + j.toString()
    var id2 = "f2_" + j.toString()
    var x = j-1
    document.getElementById(id1).setAttribute("top",master_list[x][0] + master_list[x][1])
    document.getElementById(id1).setAttribute("bottom",master_list[x][2])
    document.getElementById(id2).setAttribute("top",master_list[x][3] + master_list[x][4])
    document.getElementById(id2).setAttribute("bottom",master_list[x][5])
    }
    for(var j=7; j < 9; j++){
        var id1 = "f1_" + j.toString()
        var id2 = "f2_" + j.toString()
        var id3 = "f3_" + j.toString()
        var id4 = "f4_" + j.toString()
        var x = j-1
        document.getElementById(id1).setAttribute("top",master_list[x][0])
        document.getElementById(id2).setAttribute("top",master_list[x][1])
        document.getElementById(id2).setAttribute("bottom",master_list[x][2])
        document.getElementById(id3).setAttribute("top",master_list[x][3])
        document.getElementById(id4).setAttribute("top",master_list[x][4])
        document.getElementById(id4).setAttribute("bottom",master_list[x][5])
    }
    }
    else if (counter52 <8){
        counter52 = 6
        document.getElementById("i1_7").value = ""
        document.getElementById("i2_7").value = ""
        document.getElementById("i1_8").value = ""
        document.getElementById("i2_8").value = ""
        document.getElementById("prob8").style.display = "none"
    for(var j=7; j < 7; j++){
    var id1 = "f1_" + j.toString()
    var id2 = "f2_" + j.toString()
    var x = j-1
    document.getElementById(id1).setAttribute("top",master_list[x][0] + master_list[x][1])
    document.getElementById(id1).setAttribute("bottom",master_list[x][2])
    document.getElementById(id2).setAttribute("top",master_list[x][3] + master_list[x][4])
    document.getElementById(id2).setAttribute("bottom",master_list[x][5])
    }
    for(var j=7; j < 9; j++){
        var id1 = "f1_" + j.toString()
        var id2 = "f2_" + j.toString()
        var id3 = "f3_" + j.toString()
        var id4 = "f4_" + j.toString()
        var x = j-1
        document.getElementById(id1).setAttribute("top",master_list[x][0])
        document.getElementById(id2).setAttribute("top",master_list[x][1])
        document.getElementById(id2).setAttribute("bottom",master_list[x][2])
        document.getElementById(id3).setAttribute("top",master_list[x][3])
        document.getElementById(id4).setAttribute("top",master_list[x][4])
        document.getElementById(id4).setAttribute("bottom",master_list[x][5])
    }
    }
}


function check(id){
    if(id <= "6"){
        var in1 = "i1_" + id
        var in2 = "i2_" + id
        var num = document.getElementById(in1).value
        var den = document.getElementById(in2).value
        var counter = (parseInt(id) -1)
        if(num == (master_list[counter][6] + master_list[counter][7]) && den == master_list[counter][8]){
            clearTimeout(restart)
            total_points +=1
            var new1 = parseInt(id) + 1
            var name = "prob" + new1.toString()
            document.getElementById(name).style.display = "inline"
            document.getElementById(running_eliminator.toString()).style.display = "none"
            alert("Nice!")
            running_eliminator +=1
            counter52+=1
            restart = setTimeout(restarter,40000)
            countdown( running_eliminator, 0, 40 );
        }
        else{
            alert("Sorry, this is not the right answer, please try again.")
        }
    }
    else if(id > "6"){
        var in1 = "i1_" + id
        var in2 = "i2_" + id
        var num = document.getElementById(in1).value
        var den = document.getElementById(in2).value
        var counter = (parseInt(id) -1)
        if(num == master_list[counter][6] && den == master_list[counter][7]){
            clearTimeout(restart)
            total_points +=1
            if(id == "8"){
                alert("Good job! You passed the test!")
                Submit()
            }
            var new1 = parseInt(id) + 1
            var name = "prob" + new1.toString()
            document.getElementById(name).style.display = "inline"
            document.getElementById(running_eliminator.toString()).style.display = "none"
            alert("Nice!")
            running_eliminator +=1
            counter52+=1
            restart = setTimeout(restarter,40000)
            countdown( running_eliminator, 0, 40 );
        }
        else{
            alert("Sorry, this is not the right answer, please try again.")
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


function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Sorry, Please Try Again!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
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
NumberCorrect.value=total_points;
NumberAttempted.value=8;
Time.value=0;
Percent.value=(total_points/8)*100;
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