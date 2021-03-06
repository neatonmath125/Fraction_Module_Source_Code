// [5085],[5086,5087],5088,5089,[5090,5091]
var total_stars = 0;
var bar_list = ["bar1","bar2","bar3","bar4","bar5","bar6"]
var progress_list = ["progress1","progress2","progress3","progress4","progress5", "progress6"]
var points_attainable = [200,400,400,400,500,400]
var multiplier = [20,20,20,20,20,20]


function opacity_setter(){
  var list1 = ["5085","5086","5088","5089","5090","5093"]
  var list2 = ["MC1","FILL1","FILL2","A11","A1","A2"]
  for(var x = 0; x < list1.length;x++){
      if(list1[x] > master_id){
          document.getElementById(list2[x]).style.opacity = .25
          document.getElementById(list1[x]).style.opacity = .25
      }
  }
if(master_id < 5095){
    document.getElementById('pretest').style.opacity = .25
  }
}

//go to 5100
function pretest(){
  if(master_id>=5095){
    document.location.href = "Pretest/index.php"
  }
}


function go_index_one(){
  if(master_id>=5085){
  document.location.href = "One/index.php"
}
}

function go_index_two(){
  if(master_id>=5086){
  document.location.href = "Two/index.php"
}
}

function go_index_three(){
  if(master_id>=5088){
  document.location.href = "Three/index.php"
}
}

function go_index_four(){
  if(master_id>=5089){
  document.location.href = "Five/index.php"
}
}

function go_index_five(){
  if(master_id>=5090){
  document.location.href = "Six/index.php"
}
}

function go_index_six(){
  if(master_id>=5059){
  document.location.href = "Six/index.php"
}
}

function go_index_seven(){
  if(master_id>=5093){
  document.location.href = "Four/index.php"
}
}

function go_index_eight(){
  if(master_id>=5065){
  document.location.href = "Eight/index.php"
}
}

function go_index_nine(){
  if(master_id>=5068){
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


function on_one(){
  if("5085" <= master_id){
  document.getElementById("MC1").style.color = "black" 
  document.getElementById("5085").style.backgroundColor = "black"
  }
}

function off_one(){
  document.getElementById("MC1").style.color = "white" 
  document.getElementById("5085").style.backgroundColor = "white"

}

function on_two(){
  if("5086" <= master_id){
  document.getElementById("FILL1").style.color = "black"
  document.getElementById("5086").style.backgroundColor = "black"
 
}
}

function off_two(){
  document.getElementById("FILL1").style.color = "white" 
  document.getElementById("5086").style.backgroundColor = "white"

}

function on_three(){
  if("5088" <= master_id){
  document.getElementById("FILL2").style.color = "black" 
  document.getElementById("5088").style.backgroundColor = "black"

}
}

function off_three(){
  document.getElementById("FILL2").style.color = "white" 
  document.getElementById("5088").style.backgroundColor = "white"

}

function on_four(){
  if("5089" <= master_id){
  document.getElementById("A11").style.color = "black" 
  document.getElementById("5089").style.backgroundColor = "black"

}
}

function off_four(){
  document.getElementById("A11").style.color = "white" 
  document.getElementById("5089").style.backgroundColor = "white"

}

function on_five(){
  if("5090" <= master_id){
  document.getElementById("A1").style.color = "black"
  document.getElementById("5090").style.backgroundColor = "black"
 
}
}

function on_seven(){
  if("5093" <= master_id){
  document.getElementById("A2").style.color = "black" 
  document.getElementById("5093").style.backgroundColor = "black"

}
}

function off_seven(){
  document.getElementById("A2").style.color = "white" 
  document.getElementById("5093").style.backgroundColor = "white"

}

function off_five(){
  document.getElementById("A1").style.color = "white" 
  document.getElementById("5090").style.backgroundColor = "white"

}



function starter(){
  setTimeout(width_setter,0)
  setTimeout(star_finder,3000)
}

function opacity_redo(){
  document.getElementById("confetti").style.opacity = 1
}

// [5085],[5086,5087],5088,5089,[5090,5091]

function width_setter(){
  document.getElementById("confetti").style.opacity = 0
  setTimeout(opacity_redo,4000)
  if( master_id >= "5086"){
    var variable = document.getElementById(bar_list[0])
    variable.style.width = "100%"

  }
  else{
    var newer = master_id - "5085"
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[0])
    variable.style.width = percent
  }
  if( master_id >= "5088"){
    var variable = document.getElementById(bar_list[1])
    variable.style.width = "100%"
  }
  else if (master_id >= "5086"){
    var newer = master_id - "5086"
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[1])
    variable.style.width = percent
  }
  if( master_id >= "5089"){
    var variable = document.getElementById(bar_list[2])
    variable.style.width = "100%"
  }
  else if (master_id >= "5088"){
    var newer = master_id - "5088" *2
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[2])
    variable.style.width = percent
  }
  if( master_id >= "5090"){
    var variable = document.getElementById(bar_list[3])
    variable.style.width = "100%"
  }
  else if (master_id >= "5089"){
    var newer = master_id - "5089" *2
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[3])
    variable.style.width = percent
  }
  if( master_id >= "5093"){
    var variable = document.getElementById(bar_list[4])
    variable.style.width = "100%"
  }
  else if (master_id >= "5090"){
    var newer = master_id - "5090"
    var percent = (newer/3)*100
    percent += "%"
    var variable = document.getElementById(bar_list[4])
    variable.style.width = percent
  }
  if( master_id >= "5094"){
    var variable = document.getElementById(bar_list[4])
    variable.style.width = "100%"
  }
  else if (master_id >= "5093"){
    var newer = master_id - "5093"
    var percent = (newer/2)*100
    percent += "%"
    var variable = document.getElementById(bar_list[4])
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
for(var x = 0; x < bar_list.length; x++){
points_gotten1 += completed_list[x]*multiplier[x]
points_attainable1 += points_attainable[x]
}
var back_button = document.getElementById("back_button")
for(var x = 0; x < bar_list.length; x++){
  var progress_list = ["progress1","progress2","progress3","progress4","progress5", "progress6"]
  var points_completed = ["points_completed1","points_completed2","points_completed3","points_completed4","points_completed5","points_completed6"]
  var variable = document.getElementById(bar_list[x])
  var stars = document.getElementById("stars")
  var show_star = document.getElementById("show_star")
  var width = variable.style.width
  var variable1 = document.getElementById(progress_list[x])
  var newnew1 = document.getElementById(points_completed[x])
  if(width.slice(0,1) == "0"){
    variable1.innerHTML = '' 
    total_stars +=0
    stars.innerHTML = total_stars +"/7" + "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width =="100%" && x ==1 || width =="100%" && x ==5 || width =="100%" && x ==2 || width =="100%" && x ==3){
    variable1.innerHTML = '     &#9733 &#9733' 
    total_stars +=2
    stars.innerHTML = total_stars +"/7"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width =="100%" && x ==4){
    variable1.innerHTML = '     &#9733 &#9733 &#9733' 
    total_stars +=2
    stars.innerHTML = total_stars +"/7"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width =="100%"){
    variable1.innerHTML = '     &#9733' 
    total_stars +=1
    stars.innerHTML = total_stars +"/7"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "60"){
    variable1.innerHTML = '     &#9733'
    total_stars +=1
    stars.innerHTML = total_stars +"/7"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
  }
  else if(width.slice(0,2) < "80"){
    variable1.innerHTML = '     &#9733 &#9733'
    total_stars +=1
    stars.innerHTML = total_stars +"/7"+ "    Points:" + points_gotten1 + "/" + points_attainable1
    show_star.innerHTML = "&#9733"
    newnew1.innerHTML = "     Points:"+ completed_list[x]*multiplier[x] + "/" + points_attainable[x]
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
  shuffle(fraction_list)
  var chosen = fraction_list[0]
  show1 = chosen[0]
  show2 = chosen[1]
  scalar10 = Math.floor(Math.random()*4)+2
  var show3 = chosen[0]*scalar10
  var show4 = chosen[1] * scalar10
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
  var12.innerHTML = "The Greatest Common Factor is: "
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

document.getElementById('myInput1').onkeydown = function(event) {
  if (event.keyCode == 13 && on==1) {
    change1();
  }
  else if(event.keyCode == 13){
    change2();
  }
}

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
}

function change2(){
  var var2 = document.getElementById("GCF2")
  var var3 = document.getElementById("myInput2")
  var3.style.opacity = 1
  var2.style.opacity = 1
}

document.getElementById('myInput2').onkeydown = function(event) {
  if (event.keyCode == 13) {
    change3();
  }
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
  setTimeout(generator,5000)
}

function instructions2(){
  document.location.href = "instructions2.php"
}

function return_tutorial(){
  document.location.href = "tutorial.php"
}

