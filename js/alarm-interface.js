var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {

    $('.alarmTime').submit(function(event){
      event.preventDefault();
      var alarmTime = $('#hour').val() + ":" + $('#minute').val() + ":00 " +  $('input[name=am-pm]:checked').val();
      currentAlarm = new Alarm(alarmTime);
    });
});
