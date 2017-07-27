function myCallback(){
  //alert('Callback!');
}

$(document).ready(function(){
  new Vivus('fintech-illustration', {
    duration: 300,
    type: 'oneByOne',
    //reverseStack: true,
    animTimingFunction: Vivus.EASE,
    pathTimingFunction: Vivus.EASE_IN,
    file: 'img/fintech-paths.svg'
  }, myCallback);

});