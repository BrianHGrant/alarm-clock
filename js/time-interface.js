$(document).ready(function(){
  refreshTime();
  setInterval(function(){
   refreshTime();
},1000);
  $('.time-zone').submit(function(event){
    event.preventDefault();
    setInterval(function(){
      refreshTime();
    },1000);
  });
  $('.alarmTime').submit(function(event){
    event.preventDefault();
    var alarmHour = $('#hour').val();
    var alarmMinute = $('#minute').val();
    var alarmAMpm = $('input[name=am-pm]:checked').val();
    var alarmTime = alarmHour + ":" + alarmMinute + ":00 " +  alarmAMpm;
  });
});


function refreshTime(){
    var currentTime = moment.tz($('#zone-select').val()).format('HH:mm:ss a');
   $('#time').text(currentTime);
};
