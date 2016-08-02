(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
