var rainNum = 800;
// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}
for(i=0;i<rainNum;i++){
  $("#sky").append('<div class="rain rain'+i+'"></div>');
  $(".rain"+i).css("left",randRange(0,1600));
  $(".rain"+i).css("top",randRange(-1000,1400));
  $(".rain"+i).css("animation-delay","-"+Math.round(Math.random())+"."+Math.floor((Math.random() * 10) + 1)+"s");
}


