var total_points = 0;
var turns = 0;
var correct_top = 0
var correct_bottom = 0
var startTime, endTime;
var stop = false;
var target = 10;
var first_wrong;
var timeout_alert;
var time_checker = true;
var correct_blank_one;
var correct_blank_two;
var master_found;
var explanation
var explanation2
var explanation3
var explanation4
var third_one;
var third_two;
var scalar5
var second_answer = false
var timout1,timout2, timeout3, timeout4, timout_master, timeout_restarter;
var two_on, four_on, six_on, eight_on, ten_on, two_off, four_off, six_off, eight_off, ten_off;
var title = ["_one","_two","_three","_four","_five","_six",]
var current_exercise = localStorage.getItem("current_exercise")
var next_exercsie = localStorage.getItem("next_exercise")
var practice_title = localStorage.getItem("practice_title")

var Set1 = [[1,"",1,4,"",3,5],[3,"",3,4,"",3,4],[5,"",7,10,"",7,4],[2,"",1,4,"",2,1],[4,"",3,4,"",4,3],[1,"",3,7,"",1,2],[1,"",2,3,"",2,3],[3,"",9,4,"",3,7],[2,"",6,4,"",1,3],[4,"",8,7,"",7,8],[1,"",1,4,"",1,4],[1,"",1,4,"",1,8],[2,"",5,6,"",3,5],[4,"",9,2,"",2,9],[1,"",1,3,"",1,3],[1,"",2,3,"",1,3]]
var Set2 = [[1,"",1,2,"",7,8],[1,"",7,4,"",1,4],[5,"",5,4,"",3,2],[2,"",5,8,"",4,5],[4,"",3,11,"",11,3],[1,"",1,3,"",7,9],[3,"",4,5,"",7,8],[5,"",7,8,"",9,4],[2,"",7,6,"",3,7],[4,"",3,2,"",2,3],[1,"",1,2,"",1,2],[1,"",2,5,"",1,5],[1,"",3,7,"",2,3],[3,"",3,4,"",4,5],[5,"",8,9,"",3,2],[2,"",7,10,"",5,7],[4,"",5,16,"",16,5],[1,"",6,5,"",1,5],[3,"",5,9,"",6,5]]
var Set3 = []

var master_sets = [Set1,Set2]

Option1 = ["Less than 1/2", "Equal to 1/2", "Between 1/2 and 1", "Equal to 1", "Greater than 1"]
Option2 = ["less than 1/2", "equal to 1/2", "between 1/2 and 1", "equal to 1", "greater than 1"]
Option3 = ["less than 1/2", "equal to 1/2", "between 1/2 and 1", "equal to 1", "greater than 1"]
Options = [Option1, Option1, Option1]

function good(){
	alert("Good Job!")
}

// Chosing the Settings
function very_easy(){
    if(5086 <= master_id){
    localStorage.setItem("chosen_set", 0);
    localStorage.setItem("current_exercise","5086" );
    localStorage.setItem("next_exercise","5087" );
    localStorage.setItem("practice_title","How Big? Workout 1");
    localStorage.setItem("set_number",0);
    document.location.href = "game.php"}
}

function easy(){
    if(5087 <= master_id){
    localStorage.setItem("chosen_set", 1);
    localStorage.setItem("current_exercise","5087" );
    localStorage.setItem("next_exercise","5088" );
    localStorage.setItem("practice_title","How Big? Workout 2");
    localStorage.setItem("set_number",1);
    document.location.href = "game.php"}
}



var ok_value =1

function ok_value(){
	ok_value = 1
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
        show()
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
    document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ " Turns: "+  turns +"/10"
	var chosen_set55 = localStorage.getItem("chosen_set")
    Chosen_List = master_sets[chosen_set55]
    Chosen_Option = Options[chosen_set55]
if(turns < 10){
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
    explanation = " Sorry, the correct answer for " + Set1[1]+ Set1[2] +"/" + Set1[3] + " x " + Set1[4]+ Set1[5] + "/" + Set1[6] + " is " + "'" + chosen_options[Set1[0]-1] + "'"
	var fraction1 = document.getElementById("fraction1")
	var fraction2 = document.getElementById("fraction2")
    fraction1.setAttribute("top", Set1[1]+ Set1[2])
	fraction1.setAttribute("bottom", Set1[3])
	fraction2.setAttribute("top", Set1[4]+ Set1[5])
    fraction2.setAttribute("bottom", Set1[6])
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
    if(total_points >= 160){
    practice_title = current_exercise
		document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ "<br><br><br> Congrats, you passed! "
		if(master_id > current_exercise){
			next_exercsie = master_id
		}
        setTimeout(Submit,9900)
    }
    else{
    practice_title = 0
        document.getElementById("bb835").innerHTML = "Points: " + total_points + "/200"+ "<br><br><br> Almost, try again!"
		next_exercsie = current_exercise
		if(master_id > next_exercsie){
			next_exercsie = master_id
		}
        setTimeout(Submit,9900)
    }}
}


function opacity_setter(){
    var list1 = ["5086","5087"]
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



function directions(){
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


var HAMMERHEAD_RENDERER = {
	HAMMERHEAD_COUNT : 25,
	ADD_INTERVAL : 10000000,
	DELTA_THETA : Math.PI / 1000,
	ADJUST_DISTANCE : 50,
	ADJUST_OFFSET : 10,
	
	init : function(){
		this.setParameters();
		this.reconstructMethod();
		this.bindEvent();
		this.render();
	},

	show22 : function(){
		this.createHammerHeads(this.INIT_HAMMERHEAD_COUNT);
	},

	setParameters : function(){
		this.$window = $(window);
		this.$container = $('#jsi-sea-container');
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.context = $('<canvas />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0).getContext('2d');
		this.interval = this.ADD_INTERVAL;
		this.distance = Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2));
		this.x =  this.width;
		this.destinationX = this.x;
		this.theta = 0;
		this.hammerheads = [];
	},
	reconstructMethod : function(){
		this.render = this.render.bind(this);
	},
	createHammerHeads : function(){
		for(var i = 0, length = this.HAMMERHEAD_COUNT; i < length; i++){
			this.hammerheads.push(new HAMMERHEAD(this.width, this.height));
		}
	},
	bindEvent : function(){
	},
	changeView : function(toAdjust, event){
		this.destinationX = event.clientX - this.$container.offset().left + this.$window.scrollLeft();
		
		if(!toAdjust){
			return;
		}
		if(this.destinationX < this.ADJUST_OFFSET){
			this.destinationX = 0;
		}else if(this.distanceX > this.width - this.ADJUST_OFFSET){
			this.destinationX = this.width;
		}
	},
	render : function(){
		requestAnimationFrame(this.render);
		
		var gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, this.distance),
			rate = (1 + 0.2 * Math.sin(this.theta));
			
		gradient.addColorStop(0, 'hsl(195, 80%, ' + (90 * rate) + '%)');
		gradient.addColorStop(0.2, 'hsl(195, 100%, ' + (50 * rate) + '%)');
		gradient.addColorStop(1, 'hsl(220, 100%, ' + (10 * rate) + '%)');
		
		this.context.fillStyle = gradient;
		this.context.fillRect(0, 0, this.width, this.height);
		
		this.hammerheads.sort(function(hammerhead1, hammerhead2){
			return hammerhead1.z - hammerhead2.z;
		});
		for(var i = this.hammerheads.length - 1; i >= 0; i--){
			if(!this.hammerheads[i].render(this.context)){
				this.hammerheads.splice(i, 1);
			}
		}
		this.context.clearRect(this.x, 0, this.width - this.x, this.height);
		
		if(this.interval-- == 0){
			this.interval = this.ADD_INTERVAL;
			this.hammerheads.push(new HAMMERHEAD(this.width, this.height));
		}
		this.theta += this.DELTA_THETA;
		this.theta %= Math.PI * 2;
		
		if(this.destinationX > this.x){
			this.x = Math.min(this.x + this.ADJUST_DISTANCE, this.destinationX);
		}else{
			this.x = Math.max(this.x - this.ADJUST_DISTANCE, this.destinationX);
		}
	}
};
var HAMMERHEAD = function(width, height){
	this.width = width;
	this.height = height;
	this.init();
};
HAMMERHEAD.prototype = {
	COLOR : 'hsl(220, %s%, 30%)',
	ANGLE_RANGE : {min : -Math.PI / 8, max : Math.PI / 8},
	INIT_SCALE : 0.1,
	MAX_Z : 10,
	DELTA_PHI : Math.PI / 80,
	VELOCITY : 3,
	VERTICAL_THRESHOLD : 80,
	
	init : function(){
		this.theta = this.ANGLE_RANGE.min + (this.ANGLE_RANGE.max - this.ANGLE_RANGE.min) * Math.random();
		this.x = this.width / 2 + this.width / 4 * this.theta / Math.PI * 8;
		this.y = this.height + this.VERTICAL_THRESHOLD * this.INIT_SCALE;
		this.z = Math.random() * this.MAX_Z;
		this.vx = -this.VELOCITY * Math.cos(this.theta + Math.PI / 2);
		this.vy = -this.VELOCITY * Math.sin(this.theta + Math.PI / 2);
		
		this.phi = Math.PI * 2 * Math.random();
		this.color = this.COLOR.replace('%s', 90 - 60 * this.z / this.MAX_Z | 0);
	},
	render : function(context){
		var tailX = 20 * Math.sin(this.phi),
			angle = Math.sin(this.phi),
			height = this.height + this.VERTICAL_THRESHOLD,
			scale = this.INIT_SCALE + (1 - this.INIT_SCALE) * (height - this.y) / height * (this.MAX_Z - this.z) / this.MAX_Z;
			
		context.save();
		context.fillStyle = this.color;
		context.translate(this.x, this.y);
		context.scale(scale, scale);
		context.rotate(this.theta);
		context.beginPath();
		context.moveTo(-20, -40);
		context.bezierCurveTo(-8, -48, 8, -48, 20, -40);
		context.lineTo(20, -28);
		context.lineTo(8, -36);
		context.lineTo(8, -8);
		context.lineTo(20, 4 + 6 * angle);
		context.lineTo(8, 0);
		context.lineTo(6, 16);
		context.quadraticCurveTo(4, 32, tailX, 64);
		context.quadraticCurveTo(-4, 32, -6, 16);
		context.lineTo(-8, 0);
		context.lineTo(-20, 4 - 6 * angle);
		context.lineTo(-8, -8);
		context.lineTo(-8, -36);
		context.lineTo(-20, -28);
		context.closePath();
		context.fill();
		
		context.save();
		context.beginPath();
		context.translate(tailX, 64);
		context.rotate(-Math.sin(this.phi) * Math.PI / 6);
		context.moveTo(0, -5);
		context.lineTo(10, 15);
		context.lineTo(0, 5);
		context.lineTo(-10, 15);
		context.closePath();
		context.fill();
		context.restore();
		context.restore();
		
		this.x += this.vx * scale;
		this.y += this.vy * scale;
		this.phi += this.DELTA_PHI;
		this.phi %= Math.PI * 2;
		
		return this.y >= -this.VERTICAL_THRESHOLD;
	}
};

function show(){
	HAMMERHEAD_RENDERER.show22()
}

function runner(){
	HAMMERHEAD_RENDERER.init();
};
runner()
