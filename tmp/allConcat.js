$(document).ready(function(){
  $('#time').text(moment());
  $('.time-zone').submit(function(event){
    event.preventDefault();
    $('#time').text(moment.tz($('#zone-select').val()));
  });

});
