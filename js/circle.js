function load_sketch_animation(){
  var path = document.querySelector('.path-1');
  if(path) {
      var length = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = 'none';
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
      path.style.strokeDashoffset = '0';
  }
}

$(document).ready(function(){
  load_sketch_animation();
});