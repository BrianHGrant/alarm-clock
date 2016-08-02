var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {

    $('.alarmTime').submit(function(event){
      event.preventDefault();
      var alarmTime = $('#hour').val() + ":" + $('#minute').val() + ":00 " +  $('input[name=am-pm]:checked').val();
      currentAlarm = new Alarm(alarmTime);
    });
});

var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function(){
  refreshTime();
  setInterval(function(){refreshTime();},1000);
  $('.time-zone').submit(function(event){
    event.preventDefault();
    setInterval(function(){
      refreshTime();
    },1000);
  });

  $('.alarmTime').submit(function(event){
    event.preventDefault();
    var alarmTime = $('#hour').val() + ":" + $('#minute').val() + " " + $('input[name=am-pm]:checked').val();
    currentAlarm = new Alarm(alarmTime);
    setInterval(alarmCheck, 1000, currentAlarm.time);
  });

  $('#snooze').click(function(){
    currentAlarm.time = moment.tz($('#zone-select').val()).add(5, 'm').format('HH:mm a');
    $('#alarm-buzz').hide();
  });
});



function refreshTime(){
  var currentTime = moment.tz($('#zone-select').val()).format('HH:mm:ss a');
  $('#time').text(currentTime);
}

function alarmCheck(alarm) {
  var currentTime = moment.tz($('#zone-select').val()).format('HH:mm a');
  if (alarm === currentTime) {
    $('#alarm-buzz').show();
  } else {
    $('#alarm-buzz').hide();
  }
}
