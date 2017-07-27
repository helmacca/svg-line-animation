function myCallback(){
  //alert('Callback!');
}

$(document).ready(function(){
  new Vivus('neapolitan-pathanim', {
    duration: 150,
    type: 'oneByOne'
  }, myCallback);

});