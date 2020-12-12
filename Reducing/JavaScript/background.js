var total_stars = 0;
var bar_list = ["bar1","bar2","bar3","bar4","bar5","bar6"]
var progress_list = ["progress1","progress2","progress3","progress4","progress5","progress6"]
var points_attainable = [600,300,600,1800,1200,1200]
var multiplier = [20,20,10,20,20,20]

function opacity_setter(){
  var list1 = ["5000","5007","5010","5016","5022","5028"]
  var list2 = ["viz1","viz2","fireworks","corral","fill1","fill2"]
  for(var x = 0; x < list1.length;x++){
      if(list1[x] > master_id){
          document.getElementById(list2[x]).style.opacity = .25
          document.getElementById(list1[x]).style.opacity = .25
      }
  }
}


function viz_one(){
  if(master_id>=5000){
  document.location.href = "Viz_Fractions_One/index.php"
}
}

function viz_two(){
  if(master_id>=5007){
  document.location.href = "Viz_Fractions_Two/index.php"
}
}

function fireworks(){
  if(master_id>=5010){
  document.location.href = "Fireworks/index.php"
}
}

function corral(){
  if(master_id>=5016){
  document.location.href = "Corral/index.php"
}
}

function fill_one(){
  if(master_id>=5022){
  document.location.href = "Fill_Blanks_One/index.php"
}
}

function fill_two(){
  if(master_id>=5028){
  document.location.href = "Fill_Blanks_Two/index.php"
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


function on_one(){
  if("5000" < master_id){
  document.getElementById("viz1").style.color = "black" 
  document.getElementById("5000").style.backgroundColor = "black"
  }
}

function off_one(){
  document.getElementById("viz1").style.color = "white" 
  document.getElementById("5000").style.backgroundColor = "white"

}

function on_two(){
  if("5007" <= master_id){
  document.getElementById("viz2").style.color = "black"
  document.getElementById("5007").style.backgroundColor = "black"
 
}
}

function off_two(){
  document.getElementById("viz2").style.color = "white" 
  document.getElementById("5007").style.backgroundColor = "white"

}

function on_three(){
  if("5010" <= master_id){
  document.getElementById("fireworks").style.color = "black" 
  document.getElementById("5010").style.backgroundColor = "black"

}
}

function off_three(){
  document.getElementById("fireworks").style.color = "white" 
  document.getElementById("5010").style.backgroundColor = "white"

}

function on_four(){
  if("5016" <= master_id){
  document.getElementById("corral").style.color = "black" 
  document.getElementById("5016").style.backgroundColor = "black"

}
}

function off_four(){
  document.getElementById("corral").style.color = "white" 
  document.getElementById("5016").style.backgroundColor = "white"

}

function on_five(){
  if("5022" <= master_id){
  document.getElementById("fill1").style.color = "black"
  document.getElementById("5022").style.backgroundColor = "black"
 
}
}

function off_five(){
  document.getElementById("fill1").style.color = "white" 
  document.getElementById("5022").style.backgroundColor = "white"

}

function on_six(){
  if("5028" <= master_id){
  document.getElementById("fill2").style.color = "black" 
  document.getElementById("5028").style.backgroundColor = "black"

}
}

function off_six(){
  document.getElementById("fill2").style.color = "white" 
  document.getElementById("5028").style.backgroundColor = "white"

}

function starter(){
  setTimeout(width_setter,0)
  setTimeout(star_finder,2500)
}

function width_setter(){
  if( master_id >= "5007"){
    var variable = document.getElementById(bar_list[0])
    variable.style.width = "100%"

  }
  else{
    var newer = master_id - "5001"
    var percent = (newer/6)*100
    percent += "%"
    var variable = document.getElementById(bar_list[0])
    variable.style.width = percent
  }
  if( master_id >= "5010"){
    var variable = document.getElementById(bar_list[1])
    variable.style.width = "100%"
  }
  else if (master_id >= "5007"){
    var newer = master_id - "5007"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[1])
    variable.style.width = percent
  }
  if( master_id >= "5016"){
    var variable = document.getElementById(bar_list[2])
    variable.style.width = "100%"
  }
  else if (master_id >= "5010"){
    var newer = master_id - "5010"
    var percent = (newer/6)*100
    percent += "%"
    var variable = document.getElementById(bar_list[2])
    variable.style.width = percent
  }
  if( master_id >= "5022"){
    var variable = document.getElementById(bar_list[3])
    variable.style.width = "100%"
  }
  else if (master_id >= "5016"){
    var newer = master_id - "5016"
    var percent = (newer/6)*100
    percent += "%"
    var variable = document.getElementById(bar_list[3])
    variable.style.width = percent
  }
  if( master_id >= "5028"){
    var variable = document.getElementById(bar_list[4])
    variable.style.width = "100%"
  }
  else if (master_id >= "5022"){
    var newer = master_id - "5022"
    var percent = (newer/6)*100
    percent += "%"
    var variable = document.getElementById(bar_list[4])
    variable.style.width = percent
  }
  if( master_id >= "5034"){
    var variable = document.getElementById(bar_list[5])
    variable.style.width = "100%"
  }
  else if (master_id >= "5028"){
    var newer = master_id - "5028"
    var percent = (newer/6)*100
    percent += "%"
    var variable = document.getElementById(bar_list[5])
    variable.style.width = percent
  }
}

function loader(){
  setTimeout(width_setter,0)
  setTimeout(star_finder,100)
}

function star_finder(){
var points_gotten1 = 0
var points_attainable1 = 0
for(var x = 0; x < 6; x++){
points_gotten1 += points_gotten[x]*multiplier[x]
points_attainable1 += points_attainable[x]
}
var back_button = document.getElementById("back_button")
for(var x = 0; x < bar_list.length; x++){
  var progress_list = ["progress1","progress2","progress3","progress4","progress5","progress6"]
  var points_completed = ["points_completed1","points_completed2","points_completed3","points_completed4","points_completed5","points_completed6"]
  var variable = document.getElementById(bar_list[x])
  var stars = document.getElementById("stars")
  var show_star = document.getElementById("show_star")
  var width = variable.style.width
  var variable1 = document.getElementById(progress_list[x])
  var newnew1 = document.getElementById(points_completed[x])
  if(x == 1){
    if(width.slice(0,1) == "0"){
      variable1.innerHTML = ''
      total_stars +=0
      stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733     " 
      newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(width =="100%"){
      variable1.innerHTML = '     &#9733 &#9733 &#9733'
      total_stars +=3
      stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733     "
      newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(width.slice(0,2) < "50"){
      variable1.innerHTML = '     &#9733'
      total_stars +=1
      stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733     "
      newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
    }
    else if(width.slice(0,2) < "80"){
      variable1.innerHTML = '     &#9733 &#9733'
      total_stars +=2
      stars.innerHTML =  total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
      show_star.innerHTML = "&#9733     "
      newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
}
  else{
  if(width.slice(0,1) == "0"){
    variable1.innerHTML = '' 
    total_stars +=0
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733     "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width =="100%"){
    variable1.innerHTML = '     &#9733 &#9733 &#9733 &#9733 &#9733 &#9733' 
    total_stars +=6
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733     "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "20"){
    variable1.innerHTML = '     &#9733'
    total_stars +=1
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733     "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "40"){
    variable1.innerHTML = '     &#9733 &#9733'
    total_stars +=2
    stars.innerHTML =  total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733     "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "60"){
    variable1.innerHTML = '     &#9733 &#9733 &#9733'
    total_stars +=3
    stars.innerHTML =  total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733     "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "80"){
    variable1.innerHTML = '     &#9733 &#9733 &#9733 &#9733'
    total_stars +=4
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733      "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "90"){
    variable1.innerHTML = '     &#9733 &#9733 &#9733 &#9733 &#9733'
    total_stars +=5
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733      "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else {
    variable1.innerHTML = '     &#9733 &#9733 &#9733 &#9733 &#9733 &#9733'
    total_stars +=6
    stars.innerHTML = total_stars +"/33"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733      "
    newnew1.innerHTML = "     Points:"+ points_gotten[x]*multiplier[x] + "/" + points_attainable[x]
    }
  }
}
back_button.style.opacity=1;
}


function go_tutorial(){
  document.location.href = "tutorial.php"
}

var fraction_list = [[1,2],[2,3],[3,4],[1,5],[2,5],[4,7],[5,7],[3,8],[1,4],[1,5],[2,7],[1,9],[3,10],[3,5],[4,5],[2,5]]

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

var scalar10
var show1
var show2


function generator(){
  on = 1
  shuffle(fraction_list)
  var chosen = fraction_list[0]
  show1 = chosen[0]
  show2 = chosen[1]
  scalar10 = Math.floor(Math.random()*3)+2
  var show3 = chosen[0]*scalar10
  var show4 = chosen[1] * scalar10
  document.getElementById("GCF1").innerHTML = "The Greatest Common Factor of " + show3 + " and " + show4 + " is:"
  var first = document.getElementById("first")
  var second = document.getElementById("second")
  var third = document.getElementById("third")
  var equal1 = document.getElementById("equal1")
  var equal2 = document.getElementById("equal2")
  var var3 = document.getElementById("myInput2")
  var var10 = document.getElementById("myInput1")
  var10.value = ""
  var3.value = ""
  var var11 = document.getElementById("GCF2")
  var11.style.opacity=0
  var var12 = document.getElementById("GCF1")
  var3.style.opacity = 0;
  second.style.opacity = 0;
  second.style.width = 120;
  third.style.opacity = 0;
  equal1.style.opacity = 0;
  equal2.style.opacity = 0;
  var newnew1 = show3.toString() + " / " + scalar10.toString()
  var newnew2 = show4.toString() + " / " + scalar10.toString()
  first.setAttribute("top",show3)
  first.setAttribute("bottom", show4)
  second.setAttribute("top",newnew1)
  second.setAttribute("bottom", newnew2)
  third.setAttribute("top",show1)
  third.setAttribute("bottom", show2)
}

var on = 1


function change1(){
  var var1 = document.getElementById("myInput1")
  var temp = var1.value
  if (temp != scalar10){
    window.alert("Sorry! The greatest common factor for the numerator and the denominator is " + temp)
  }
  var second = document.getElementById("second")
  var equal1 = document.getElementById("equal1")
  second.style.opacity = 1
  equal1.style.opacity = 1
  var1.value = ""
  var var3 = document.getElementById("GCF1")
  var3.innerHTML = "The Reduced Numerator is: "
  on = 2
  setTimeout(adjust1,200)
}

function adjust1(){
  document.getElementById("enter_button").onclick = function() {change2()}
  document.getElementById("enter_button").innerHTML = "Next"
}

function adjust2(){
  document.getElementById("enter_button").onclick = function() {change3()}
  document.getElementById("enter_button").innerHTML = "Enter"
}

function adjust3(){
  document.getElementById("enter_button").onclick = function() {change1()}
  document.getElementById("enter_button").innerHTML = "Enter"
}

function change2(){
  var var2 = document.getElementById("GCF2")
  var var3 = document.getElementById("myInput2")
  var3.style.opacity = 1
  var2.style.opacity = 1
  setTimeout(adjust2,200)

}


function change3(){
  on = 1
  var var1 = document.getElementById("myInput1")
  var var2 = document.getElementById("myInput2")
  if ( var2.value != show2 || var1.value != show1){
      window.alert("Sorry! The correct reduced numerator is " + show1 + " and the correct reduced denominator is " + show2)
  }
  var equal2 = document.getElementById("equal2")
  var third = document.getElementById("third")
  third.style.opacity = 1;
  equal2.style.opacity = 1;
  setTimeout(adjust3,4900)
  setTimeout(generator,5000)
}

function instructions2(){
  document.location.href = "instructions2.php"
}

function return_tutorial(){
  document.location.href = "tutorial.php"
}