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

},{"./../js/alarm.js":1}]},{},[2]);
