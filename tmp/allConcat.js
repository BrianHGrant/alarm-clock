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
});



function refreshTime(){
  var currentTime = moment.tz($('#zone-select').val()).format('HH:mm:ss a');
  $('#time').text(currentTime);
}

// if (currentTime === alarmTime.time){
//   alert
// }

function alarmCheck(alarm) {
  console.log(alarm);
  var currentTime = moment.tz($('#zone-select').val()).format('HH:mm a');
  console.log(currentTime);
  if (alarm === currentTime) {
    $('img').show();
  } else {
    $('img').hide();
  }
}
