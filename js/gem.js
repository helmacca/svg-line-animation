function load_sketch_animation(){

  for (i = 1; i <9; i++) {
    var path = document.querySelector('.path-'+i);
    if(path) {
      var length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = 'none';
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles re claculated and the browser picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';
    }
  }

}

$(document).ready(function(){
  load_sketch_animation();
});