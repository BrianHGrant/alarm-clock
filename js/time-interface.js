$(document).ready(function(){
  refreshTime();
  setInterval(function(){refreshTime();},1000);

  $('.time-zone').submit(function(event){
    event.preventDefault();
    setInterval(function(){
      refreshTime();
    },1000);
  });
});

function refreshTime(){
    var currentTime = moment.tz($('#zone-select').val()).format('HH:mm:ss a');
   $('#time').text(currentTime);
};
