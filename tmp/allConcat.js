var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {

    $('.alarmTime').submit(function(event){
      event.preventDefault();
      var alarmTime = $('#hour').val() + ":" + $('#minute').val() + ":00 " +  $('input[name=am-pm]:checked').val();
      console.log(alarmTime);
      currentAlarm = new Alarm(alarmTime);
    });
});

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
