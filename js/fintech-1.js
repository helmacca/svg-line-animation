function load_sketch_animation(){
  for (i = 1; i <12; i++) {
    var path = document.querySelector('.fintech-path-'+i);
    if(path) {
      var length = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = 'none';
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
      path.style.strokeDashoffset = '0';
    }
  }
}

$(document).ready(function(){
  load_sketch_animation();
});