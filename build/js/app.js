(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(alarmTime) {
  this.time = alarmTime;
}

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
