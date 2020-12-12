var total_stars = 0;
var bar_list = ["bar1","bar2","bar3","bar4","bar5","bar6","bar7","bar8"]
var progress_list = ["progress1","progress2","progress3","progress4","progress5","progress6","progress7","progress8"]
var points_attainable = [200,600,200,300,300,200,500,400]
var multiplier = [20,20,20,20,20,20,20,20]
//var completed_list = [10,30,10,15,15,10,25,20]

function opacity_setter(){
  var list_main = [5030,5062, 5065, 5066, 5069, 5072, 5075, 5078]
  var list1 = ["5062","5065","5066","5069","5072","5075","5078","5082"]
  var list2 = ["MC1","FILL1","FILL2","CORRAL1","CORRAL2","MC2","FILL3","MC3"]
  for(var x = 0; x < list1.length;x++){
      if(list_main[x] > master_id){
          document.getElementById(list2[x]).style.opacity = .25
          document.getElementById(list1[x]).style.opacity = .25
      }
  }
if(master_id < 5082){
    document.getElementById('pretest').style.opacity = .25
  }
}

//go to 5085
function pretest(){
  if(master_id>=5082){
    document.location.href = "Pretest/index.php"
  }
}

function go_index_one(){
  if(master_id>=5030){
  document.location.href = "One/index.php"
}
}

function go_index_two(){
  if(master_id>=5062){
  document.location.href = "Two/index.php"
}
}

function go_index_three(){
  if(master_id>=5065){
  document.location.href = "Three/index.php"
}
}

function go_index_four(){
  if(master_id>=5066){
  document.location.href = "Four/index.php"
}
}

function go_index_five(){
  if(master_id>=5069){
  document.location.href = "Five/index.php"
}
}

function go_index_six(){
  if(master_id>=5072){
  document.location.href = "Seven/index.php"
}
}

function go_index_seven(){
  if(master_id>=5075){
  document.location.href = "Eight/index.php"
}
}

function go_index_eight(){
  if(master_id>=5078){
  document.location.href = "Nine/index.php"
}
}



function instructions(){
  document.location.href = "instructions.php"
}

function return_index(){
  document.location.href = "index.php"
}

function frac(){
  document.getElementById("fractions1").style.color = "white"
  document.getElementById("fractions2").style.color = "transparent"
};

function fraction_runner(){
  setTimeout(frac,2000)
}

function adjuster(){
  var width = window.innerWidth
  var adjust = (9*width)/100
  document.getElementById("fractions2").style.marginLeft = +adjust
}

//[5060,5062, 5065, 5066, 5069, 5072, 5075, 5078]



function on_one(){
  if("5060" <= master_id){
  document.getElementById("MC1").style.color = "black" 
  document.getElementById("5062").style.backgroundColor = "black"
  }
}

function off_one(){
  document.getElementById("MC1").style.color = "white" 
  document.getElementById("5062").style.backgroundColor = "white"

}

function on_two(){
  if("5062" <= master_id){
  document.getElementById("FILL1").style.color = "black"
  document.getElementById("5065").style.backgroundColor = "black"
 
}
}

function off_two(){
  document.getElementById("FILL1").style.color = "white" 
  document.getElementById("5065").style.backgroundColor = "white"

}

function on_three(){
  if("5065" <= master_id){
  document.getElementById("FILL2").style.color = "black" 
  document.getElementById("5066").style.backgroundColor = "black"

}
}

function off_three(){
  document.getElementById("FILL2").style.color = "white" 
  document.getElementById("5066").style.backgroundColor = "white"

}

function on_four(){
  if("5066" <= master_id){
  document.getElementById("CORRAL1").style.color = "black" 
  document.getElementById("5069").style.backgroundColor = "black"

}
}

function off_four(){
  document.getElementById("CORRAL1").style.color = "white" 
  document.getElementById("5069").style.backgroundColor = "white"

}


function on_five(){
  if("5069" <= master_id){
  document.getElementById("CORRAL2").style.color = "black"
  document.getElementById("5072").style.backgroundColor = "black"
 
}
}

function off_five(){
  document.getElementById("CORRAL2").style.color = "white" 
  document.getElementById("5072").style.backgroundColor = "white"

}


function on_six(){
  if("5072" <= master_id){
  document.getElementById("MC2").style.color = "black" 
  document.getElementById("5075").style.backgroundColor = "black"

}
}

function off_six(){
  document.getElementById("MC2").style.color = "white" 
  document.getElementById("5075").style.backgroundColor = "white"

}

function on_seven(){
  if("5075" <= master_id){
  document.getElementById("FILL3").style.color = "black" 
  document.getElementById("5078").style.backgroundColor = "black"

}
}

function off_seven(){
  document.getElementById("FILL3").style.color = "white" 
  document.getElementById("5078").style.backgroundColor = "white"

}

function on_eight(){
  if("5078" <= master_id){
  document.getElementById("MC3").style.color = "black" 
  document.getElementById("5082").style.backgroundColor = "black"

}
}

function off_eight(){
  document.getElementById("MC3").style.color = "white" 
  document.getElementById("5082").style.backgroundColor = "white"

}



function starter(){
  setTimeout(width_setter,0)
  setTimeout(star_finder,3000)
}

function opacity_redo(){
  document.getElementById("confetti").style.opacity = 1
}




function width_setter(){
  document.getElementById("confetti").style.opacity = 0
  setTimeout(opacity_redo,4000)
  if( master_id >= "5062"){
    var variable = document.getElementById(bar_list[0])
    variable.style.width = "100%"

  }
  else{
    var newer = master_id - "5060"
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[0])
    variable.style.width = percent
  }
  if( master_id >= "5065"){
    var variable = document.getElementById(bar_list[1])
    variable.style.width = "100%"
  }
  else if (master_id >= "5062"){
    var newer = master_id - "5062"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[1])
    variable.style.width = percent
  }
  if( master_id >= "5066"){
    var variable = document.getElementById(bar_list[2])
    variable.style.width = "100%"
  }
  else if (master_id >= "5065"){
    var newer = master_id - "5065"
    var percent = (newer/1)*100
    percent += "%"
    var variable = document.getElementById(bar_list[2])
    variable.style.width = percent
  }

  //["5062","5065","5066","5069","5072","5075","5078","5082"]

  if( master_id >= "5069"){
    var variable = document.getElementById(bar_list[3])
    variable.style.width = "100%"
  }
  else if (master_id >= "5066"){
    var newer = master_id - "5066"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[3])
    variable.style.width = percent
  }
  if( master_id >= "5072"){
    var variable = document.getElementById(bar_list[4])
    variable.style.width = "100%"
  }
  else if (master_id >= "5069"){
    var newer = master_id - "5069"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[4])
    variable.style.width = percent
  }
  if( master_id >= "5075"){
    var variable = document.getElementById(bar_list[5])
    variable.style.width = "100%"
  }
  else if (master_id >= "5072"){
    var newer = master_id - "5072"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[5])
    variable.style.width = percent
  }
  if( master_id >= "5078"){
    var variable = document.getElementById(bar_list[6])
    variable.style.width = "100%"
  }
  else if (master_id >= "5075"){
    var newer = master_id - "5075"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[6])
    variable.style.width = percent
  }
  if( master_id >= "5082"){
    var variable = document.getElementById(bar_list[7])
    variable.style.width = "100%"
  }
  else if (master_id >= "5078"){
    var newer = master_id - "5078"
    var percent = (newer/4)*100
    percent += "%"
    var variable = document.getElementById(bar_list[7])
    variable.style.width = percent
  }
}

function loader(){
  setTimeout(width_setter,0)
  setTimeout(star_finder,100)
}

/// 1/6 = two exercises, 2,4,5,7 = three exercises, 3 = one exercise, 8 = 4 exercises

function star_finder(){
var points_gotten1 = 0
var points_attainable1 = 0
for(var x = 0; x < bar_list.length; x++){
points_gotten1 += completed_list[x]*multiplier[x]
points_attainable1 += points_attainable[x]
}
var back_button = document.getElementById("back_button")
for(var x = 0; x < bar_list.length; x++){
  var progress_list = ["progress1","progress2","progress3","progress4","progress5","progress6","progress7","progress8"]
  var points_completed = ["points_completed1","points_completed2","points_completed3","points_completed4","points_completed5","points_completed6","points_completed7","points_completed8"]
  var variable = document.getElementById(bar_list[x])
  var stars = document.getElementById("stars")
  var show_star = document.getElementById("show_star")
  var width = variable.style.width
  var variable1 = document.getElementById(progress_list[x])
  var newnew1 = document.getElementById(points_completed[x])
  if(width.slice(0,1) == "0"){
    variable1.innerHTML = '' 
    total_stars +=0
    stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width =="100%"){
    if(x == 0 || x ==5){
      variable1.innerHTML = '    &#9733 &#9733' 
      total_stars +=2
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(x == 7){
      variable1.innerHTML = '     &#9733 &#9733 &#9733 &#9733' 
      total_stars +=4
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(x == 2){
      variable1.innerHTML = '     &#9733' 
      total_stars +=1
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else{
    variable1.innerHTML = '      &#9733 &#9733 &#9733' 
    total_stars +=3
    stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
  }
  else if(width.slice(0,2) < "35"){
    if(x == 0 || x ==5 || x == 7){
      variable1.innerHTML = '    &#9733' 
      total_stars +=1
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else{
    variable1.innerHTML = '      ' 
    total_stars +=0
    stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
  }
  else if(width.slice(0,2) < "55"){
    if(x == 0 || x ==5){
      variable1.innerHTML = '    &#9733' 
      total_stars +=1
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else{
    variable1.innerHTML = '      ' 
    total_stars +=0
    stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
  }
  else if(width.slice(0,2) < "77"){
    if(x == 0 || x ==5){
      variable1.innerHTML = '    &#9733 &#9733' 
      total_stars +=2
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(x == 7){
      variable1.innerHTML = '     &#9733 &#9733 &#9733' 
      total_stars +=3
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(x == 2){
      variable1.innerHTML = '     &#9733' 
      total_stars +=1
      stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733"
      newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else{
    variable1.innerHTML = '      &#9733 &#9733' 
    total_stars +=2
    stars.innerHTML = total_stars +"/21"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
    }
  }
  }
back_button.style.opacity=1;
}

function go_tutorial(){
  document.location.href = "tutorial.php"
}




function instructions2(){
  document.location.href = "instructions2.php"
}

function return_tutorial(){
  document.location.href = "tutorial.php"
}

