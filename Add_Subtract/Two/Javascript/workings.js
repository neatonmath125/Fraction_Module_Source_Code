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
var answer_final_one
var answer_final_two
var var1 = 0

var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")


////
var Correct_Choice;
var Chosen_List;
var Chosen_Option;

//Answer Options
Option1 = ["less than 1/2", "equal to 1/2", "between 1/2 and 1", "equal to 1", "greater than 1"]
Option2 = ["less than 1/2", "equal to 1/2", "between 1/2 and 1", "equal to 1", "greater than 1"]
Option3 = ["less than 0", "equal to 0", "between 0 and 1", "equal to 1", "greater than 1"]
Options = [Option1, Option2, Option3]
//Answer Options

// Question Sets --- Make sure to do the format as "[negatice, numerator, denominator, and then correct choice]"
Set1 = [[1,"","",1,8,"","",""],[1,"","",5,11,"","",""],[1,"","",4,9,"","",""],[1,"","",2,5,"","",""],[1,"","",3,7,"","",""],[2,"","",4,8,"","",""],[2,"","",7,14,"","",""],[2,"","",6,12,"","",""],[2,"","",3,6,"","",""],[2,"","",10,20,"","",""],[3,"","",3,4,"","",""],[3,"","",7,9,"","",""],[3,"","",6,11,"","",""],[3,"","",9,16,"","",""],[3,"","",14,23,"","",""],[4,"","",7,7,"","",""],[4,"","",6,6,"","",""],[4,"","",50,50,"","",""],[4,"","",11,11,"","",""],[4,"","",8,8,"","",""],[5,"","",5,4,"","",""],[5,"","",5,2,"","",""],[5,"","",9,8,"","",""],[5,"","",9,2,"","",""],[5,"","",7,6,"","",""]]
Set2 = [[1,1,"",2,9,"",1,9],[1,1,"",1,4,"",1,9],[1,1,"",1,4,"",1,10],[1,2,"",3,5,"",1,2],[2,2,"",5,8,"",1,8],[2,2,"",2,3,"",1,6],[2,2,"",4,6,"",1,6],[2,2,"",7,12,"",1,12],[3,1,"",2,5,"",1,5],[3,1,"",3,7,"",3,7],[3,1,"",2,4,"",1,8],[3,2,"",4,5,"",1,5],[4,1,"",2,9,"",7,9],[4,2,"",7,4,"",3,4],[4,2,"",7,5,"",2,5],[2,2,"",13,14,"",6,14],[5,1,"",3,4,"",5,9],[5,1,"",5,9,"",1,2],[5,1,"",5,9,"",2,3],[5,1,"",2,3,"",7,8]]
Set3 = [[1,1,"-",2,9,"",1,9],[1,1,"-",1,4,"",1,9],[1,2,"",5,8,"",7,9],[1,2,"",3,5,"",4,5],[1,1,"-",4,7,"",1,2],[2,1,"-",5,8,"",5,8],[2,2,"",1,3,"",2,6],[2,1,"-",2,3,"",2,3],[2,2,"",1,12,"",1,12],[2,1,"-",5,14,"",5,14],[3,2,"",1,5,"-",1,12],[3,1,"",3,7,"",2,7],[3,2,"",4,5,"",1,3],[3,1,"-",1,4,"",1,3],[4,2,"",2,9,"-",7,9],[5,2,"",7,4,"-",3,4],[4,2,"",7,5,"",2,5],[4,2,"",20,14,"",6,14],[4,2,"",19,11,"",8,11],[5,1,"-",3,4,"",8,4],[5,1,"",5,9,"",1,2],[5,1,"",5,6,"",1,2],[5,1,"",2,3,"",7,8],[5,1,"",5,6,"",1,2]]
master_sets = [Set1, Set2, Set3]


// Chosing the Settings
function very_easy(){
    if(5062 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5062" );
    localStorage.setItem("next_exercise","5063" );
    localStorage.setItem("practice_title","How Big? Workout 1");
    localStorage.setItem("set_number",0);
    document.location.href = "game.php"}
}

function easy(){
    if(5063 <= master_id){
        localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5063" );
    localStorage.setItem("next_exercise","5064" );
    localStorage.setItem("practice_title","How Big? Workout 2");
    localStorage.setItem("set_number",1);
    document.location.href = "game.php"}
}

function medium(){
    if(5064 <= master_id){
        localStorage.setItem("chosen_set", 2);
    localStorage.setItem("current_exercise","5064" );
    localStorage.setItem("next_exercise","5065" );
    localStorage.setItem("practice_title","How Big? Workout 2");
    localStorage.setItem("set_number",1);
    document.location.href = "game.php"}
}

var ok_value =1

function ok_value(){
	ok_value = 1
}

function good(){
	alert("Good Job!")
}

function checker11(chosen_value){
	if(ok_value == 1){
	ok_value = 0
    clearTimeout(timer_explain)
    clearTimeout(time_out_time)
    clearTimeout(timer_master)
	document.getElementById("clock").className = "nothing"
    if(chosen_value == correct_answer){
        turns +=1
        total_points+=20
        changer()
        setTimeout(good, 3700)
        setTimeout(master, 3900)
    }
    else{
        turns +=1
        setTimeout(show_explain,900)
        setTimeout(master, 4000)
    }
	}
}

var corect_answer
var explanation

function master(){
	ok_value=1
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br><br><br> Turns: "+  turns +"/5"
	var chosen_set55 = localStorage.getItem("chosen_set")
    Chosen_List = master_sets[chosen_set55]
    Chosen_Option = Options[chosen_set55]
if(turns < 5){
	if(chosen_set55 == 0){
		document.getElementById("fraction2").style.opacity = 0
		document.getElementById("+/-").style.opacity = 0
		document.getElementById("fraction1").style.marginLeft = "250px"
	}
	else{
		document.getElementById("fraction1").style.opacity = 1
		document.getElementById("fraction2").style.opacity = 1
		document.getElementById("+/-").style.opacity = 1
	}
    document.getElementById("checker1").style.opacity=1
    document.getElementById("checker2").style.opacity=1
    document.getElementById("checker3").style.opacity=1
    document.getElementById("checker4").style.opacity=1
    document.getElementById("checker5").style.opacity=1
    document.getElementById("clock").className = "clock"
	var chosen_set125 = master_sets[chosen_set55]
	var chosen_options = Options[chosen_set55]
	document.getElementById("checker1").innerHTML = chosen_options[0]
    document.getElementById("checker2").innerHTML = chosen_options[1]
    document.getElementById("checker3").innerHTML = chosen_options[2]
    document.getElementById("checker4").innerHTML = chosen_options[3]
    document.getElementById("checker5").innerHTML = chosen_options[4]
    shuffle(chosen_set125)
	var Set1 = chosen_set125.pop()
	var fraction1 = document.getElementById("fraction1")
	var fraction2 = document.getElementById("fraction2")
    var sign = document.getElementById("+/-")
    fraction1.setAttribute("top", Set1[2]+ Set1[3])
	fraction1.setAttribute("bottom", Set1[4])
	fraction2.setAttribute("top", Set1[5]+ Set1[6])
	fraction2.setAttribute("bottom", Set1[7])
	if(chosen_set55 == 0){
		explanation = " Sorry, the correct answer for " + Set1[2]+ Set1[3] +"/" + Set1[4] + " is " +"'" + chosen_options[Set1[0]-1] + "'"
	}
	else{
	if(Set1[1]== 1){
		sign.innerHTML = "+"
		explanation = " Sorry, the correct answer for " + Set1[2]+ Set1[3] +"/" + Set1[4] + " + " + Set1[5]+ Set1[6] + "/" + Set1[7] + " is " + "'" + chosen_options[Set1[0]-1] + "'"
	}
	else{
		sign.innerHTML = "-"
		explanation = " Sorry, the correct answer for " + Set1[2]+ Set1[3] +"/" + Set1[4] + " - " + Set1[5]+ Set1[6] + "/" + Set1[7] + " is " + "'" + chosen_options[Set1[0]-1] + "'"
	}
	}
	correct_answer = Set1[0]
    timer_explain = setTimeout(show_explain,19900)
    time_out_time = setTimeout(restarter, 19800)
    timer_master = setTimeout(master, 20000)
    }
    else{
	document.getElementById("fraction1").style.opacity=0
	document.getElementById("fraction2").style.opacity=0
    document.getElementById("+/-").style.opacity=0
    document.getElementById("checker1").style.opacity=0
    document.getElementById("checker2").style.opacity=0
    document.getElementById("checker3").style.opacity=0
    document.getElementById("checker4").style.opacity=0
    document.getElementById("checker5").style.opacity=0
    document.getElementById("clock").className = "nothing"
    if(total_points >= 80){
    practice_title = current_exercise
		document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br><br><br> Congrats, you <br><br><br> passed! "
		if(master_id > current_exercise){
			next_exercsie = master_id
		}
        setTimeout(Submit,9900)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/100"+ "<br><br><br> Almost, try again!"
		next_exercsie = current_exercise
		if(master_id > next_exercsie){
			next_exercsie = master_id
		}
        setTimeout(Submit,9900)
    }}
}


function opacity_setter(){
    var list1 = ["5062","5063","5064"]
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


function restarter(){
    document.getElementById("clock").className = "nothing"
    turns +=1
    counter +=1
}


function show_explain(){
    window.alert(explanation)
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
NumberAttempted.value=5;
Time.value=0;
Percent.value=(total_points/100)*100;
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

////////////
var RENDERER = {
    MANTA_COUNT : 7,
	DELTA_THETA : Math.PI / 1000,
	
	init : function(){
		this.setParameters();
		this.reconstructMethod();
		this.render();
	},
	setParameters : function(){
		this.$container = $('#jsi-manta-container');
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.context = $('<canvas />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0).getContext('2d');
		this.interval = this.ADD_INTERVAL;
		this.distance = Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2));
		this.theta = 0;
		this.mantas = [];
	},
	reconstructMethod : function(){
		this.render = this.render.bind(this);
	},
	createMantas : function(){
		for(var i = 0, length = this.MANTA_COUNT; i < length; i++){
			this.mantas.push(new MANTA(this.width, this.height, this.context));
		}
	},
	render : function(){
		requestAnimationFrame(this.render);
		
		var gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, this.distance),
			rate = (1 + 0.2 * Math.sin(this.theta));
			
		gradient.addColorStop(0, 'hsl(195, 80%, ' + (80 * rate) + '%)');
		gradient.addColorStop(0.2, 'hsl(195, 100%, ' + (60 * rate) + '%)');
		gradient.addColorStop(1, 'hsl(220, 100%, ' + (10 * rate) + '%)');
		
		this.context.fillStyle = gradient;
		this.context.fillRect(0, 0, this.width, this.height);
		
		this.mantas.sort(function(manta1, manta2){
			return manta1.z - manta2.z;
		});
		for(var i = this.mantas.length - 1; i >= 0; i--){
			if(!this.mantas[i].render(this.context)){
				this.mantas.splice(i, 1);
			}
		}
		if(this.interval-- == 0){
			this.interval = this.ADD_INTERVAL;
			this.mantas.push(new MANTA(this.width, this.height, this.context));
		}
		this.theta += this.DELTA_THETA;
		this.theta %= Math.PI * 2;
	}
};
var MANTA = function(width, height, context){
	this.width = width;
	this.height = height;
	this.init(context);
};
MANTA.prototype = {
	COLOR : 'hsl(200, %s%, %l%)',
	ANGLE_RANGE : {min : -Math.PI / 8, max : Math.PI / 8},
	INIT_SCALE : 0.3,
	RANGE_Z : {min : 0, max : 30},
	DELTA_ANGLE : Math.PI / 160,
	VELOCITY : 2,
	VERTICAL_THRESHOLD : 400,
	
	init : function(context){
		this.angle = this.getRandomValue(this.ANGLE_RANGE);
		this.x = this.width / 2 + this.width / 3 * this.angle / Math.PI * 8;
		this.y = this.height + this.VERTICAL_THRESHOLD * this.INIT_SCALE;
		this.z = this.getRandomValue(this.RANGE_Z);
		this.vx = -this.VELOCITY * Math.cos(this.angle + Math.PI / 2);
		this.vy = -this.VELOCITY * Math.sin(this.angle + Math.PI / 2);
		this.phi = Math.PI * 2 * Math.random();
		this.theta = Math.PI * 2 * Math.random();
		this.psi = Math.PI * 2 * Math.random();
		
		var color = this.COLOR.replace('%s', 60),
			luminance = 20 * this.z / this.RANGE_Z.max | 0;
		
		this.gradient = context.createLinearGradient(-140, 0, 140, 0);
		this.gradient.addColorStop(0, color.replace('%l', 10 + luminance));
		this.gradient.addColorStop(0.1, color.replace('%l', 10 + luminance));
		this.gradient.addColorStop(0.5, color.replace('%l', 20 + luminance));
		this.gradient.addColorStop(0.9, color.replace('%l', 10 + luminance));
		this.gradient.addColorStop(1, color.replace('%l', 10 + luminance));
		this.color = this.COLOR.replace('%s', 100).replace('%l', 5 + luminance);
	},
	getRandomValue : function(range){
		return range.min + (range.max - range.min) * Math.random();
	},
	render : function(context){
		var height = this.height + this.VERTICAL_THRESHOLD,
			scale = this.INIT_SCALE + (1 - this.INIT_SCALE) * (height - this.y) / height * (this.RANGE_Z.max - this.z) / this.RANGE_Z.max * 2,
			top = (Math.sin(this.phi) < 0 ? 50 : 60) * Math.sin(this.phi);
			
		context.save();
		context.translate(this.x, this.y);
		context.scale(scale, scale);
		context.rotate(this.angle);
		
		context.fillStyle = this.color;
		context.beginPath();
		context.moveTo((225 + top) / 4, -20);
		context.lineTo((210 + top) / 4, 70 / 4);
		context.lineTo(-(210 + top) / 4, 70 / 4);
		context.lineTo(-(225 + top) / 4, -20);
		context.closePath();
		context.fill();
		
		context.lineWidth = 5;
		context.strokeStyle = this.gradient;
		context.beginPath();
		context.moveTo(0, 70);
		context.quadraticCurveTo(0, 130, 20 * Math.sin(this.theta), 190);
		context.stroke();
		
		context.fillStyle = this.gradient;
		context.beginPath();
		context.moveTo(-15, -40);
		context.bezierCurveTo(-10, -35, 10, -35, 15, -40);
		context.lineTo(30, -40);
		context.quadraticCurveTo(35, -40, 45, -30);
		context.quadraticCurveTo(50, -25, 80 + top, 0);
		context.quadraticCurveTo(60, 0, 10, 70);
		context.lineTo(-10, 70);
		context.quadraticCurveTo(-60, 0, -80 - top, 0);
		context.quadraticCurveTo(-50, -25, -45, -30);
		context.quadraticCurveTo(-35, -40, -30, -40);
		context.lineTo(-15, -40);
		context.closePath();
		context.fill();
		
		context.lineWidth = 12;
		context.strokeStyle = this.gradient;
		context.beginPath();
		context.moveTo(23, -38);
		context.quadraticCurveTo(33, -55, 23 - 10 * Math.sin(this.psi), -70);
		context.stroke();
		
		context.beginPath();
		context.moveTo(-23, -38);
		context.quadraticCurveTo(-33, -55, -23 + 10 * Math.sin(this.psi), -70);
		context.stroke();
		
		context.lineWidth = 1;
		context.strokeStyle = this.color;
		context.beginPath();
		
		for(var i = 0; i < 5; i++){
			var y = -10 + i * 8 + (1 - Math.sin(this.phi)) * 3;
			context.moveTo(10, -20 + i * 8);
			context.quadraticCurveTo(20, -15 + i * 8, 30, y);
			context.moveTo(-10, -20 + i * 8);
			context.quadraticCurveTo(-20, -15 + i * 8, -30, y);
		}
		context.stroke();
		context.restore();
		
		this.x += this.vx * scale;
		this.y += this.vy * scale;
		this.phi += this.DELTA_ANGLE;
		this.phi %= Math.PI * 2;
		this.theta += this.DELTA_ANGLE;
		this.theta %= Math.PI * 2;
		this.psi += this.DELTA_ANGLE;
		this.psi %= Math.PI * 2;
		
		return this.y >= -this.VERTICAL_THRESHOLD;
	}
};


function maker(){
    $(function(){
        RENDERER.init();
    });
}

function changer(){
    RENDERER.createMantas();
}

maker()
