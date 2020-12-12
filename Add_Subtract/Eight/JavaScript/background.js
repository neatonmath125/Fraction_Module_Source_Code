var tl = new TimelineMax({ 
  paused: true
});

var hoverArea = $('#background');

hoverArea.on("mouseenter", function(){
  tl.play();
});

hoverArea.on("mouseleave", function(){
  tl.reverse();
});

// colours crossfade animation
tl
  .staggerTo("#sky-1 stop", 1, {
    cycle:{
      stopColor: ['#67C1E1', '#FAE6B7']    
    }
  }, 0.5, 0)
  .staggerTo("#base-1 stop", 1, {
    cycle:{
      stopColor: ['#CD6924', '#FAE6B7']    
    }
  }, 0.5, 0)
  .staggerTo("#pyramid-left stop", 1, {
    cycle:{
      stopColor: ['#BD6861', '#E98F50']    
    }
  }, 0.5, 0)
  .staggerTo("#pyramid-right stop", 1, {
    cycle:{
      stopColor: ['#FFF5D9', '#F5D689']    
    }
  }, 0.5, 0)
   .staggerTo("#ground-1 stop", 1, {
    cycle:{
      stopColor: ['#CA754A', '#9F3A18']    
    }
  }, 0.5, 0)
  .staggerTo("#ground-2 stop", 1, {
    cycle:{
      stopColor: ['#E18C5B', '#BA4C28']    
    }
  }, 0.5, 0)
  .staggerTo("#ground-3 stop", 1, {
    cycle:{
      stopColor: ['#F29F6A', '#C75C38']    
    }
  }, 0.5, 0)
  .to("#city-left-1", 1, {fill: '#B3C4B3'}, 0)
  .to("#city-right-1", 1, {fill: '#B3C4B3'}, 0)
  .to("#city-right-2", 1, {fill: '#D5DDC2'}, 0)
  .to("#city-left-2", 1, {fill: '#D5DDC2'}, 0)
  .to("#city-left-3", 1, {fill: '#D5DDC2'}, 0)
  .to("#star-16", 1, {opacity: 0}, 0)
  .to("#star-15", 1, {opacity: 0}, 0)
  .to("#star-14", 1, {opacity: 0}, 0)
  .to("#star-13", 1, {opacity: 0}, 0)
  .to("#star-12", 1, {opacity: 0}, 0)
  .to("#star-11", 1, {opacity: 0}, 0)
  .to("#star-10", 1, {opacity: 0}, 0)
  .to("#star-9", 1, {opacity: 0}, 0)
  .to("#star-8", 1, {opacity: 0}, 0)
  .to("#star-7", 1, {opacity: 0}, 0)
  .to("#star-6", 1, {opacity: 0}, 0)
  .to("#star-5", 1, {opacity: 0}, 0)
  .to("#star-4", 1, {opacity: 0}, 0)
  .to("#star-3", 1, {opacity: 0}, 0)
  .to("#star-2", 1, {opacity: 0}, 0)
  .to("#star-1", 1, {opacity: 0}, 0)
  .to("#skylight-1", 1, {opacity: 0.12}, 0)
  .to("#skylight-2", 1, {opacity: 0.12}, 0)
  .to('#sun', 1, {y:-250}, 0)
  .to('#lensflare-1', 1, {x:250, y:150}, 0)
  .to('#lensflare-2', 1, {x:150, y:50}, 0)
  .to('#lensflare-3', 1, {x:-5, y:-150}, 0)
  .progress(1).progress(0);