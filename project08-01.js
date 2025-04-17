"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Eulyssia casias
      Date: 4/16/25 

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//STEP3: timer constructor function w/ parameters min & sec
function timer(min,sec) {
//set timer.minutes, seconds & timeID equal to min, sec & null
      timer.minutes = min; 
      timer.seconds = sec;
      timer.timeID = null;
}
//STEP4: Add runPause method to the timer prototype, set timer, minBox, secBox as parameters
timer.prototype.runPause = function(timer, minBox, secBox) {
//STEP5:create if else statement
      if(timer.timeID) { //if timer.timeId has a truthy value
            window.clearInterval(timer.timeID); //pause timer using clearInterval method
            this.timeID= null; //set timer.timeId equal to null
      } else {
            this.timeID= window.setInterval(countdown, 1000); //start timer countdown using setInterval method
      }
//STEP6: create countdown function with else if statement
      function countdown() {
//Step6a: if the timer seconds is greater than 0, decrease seconds by 1
            if(timer.seconds > 0){
                  timer.seconds -= 1;
//Step6b: if time minutes is greater than 0, decrease minutes by 1
            } else if(timer.minutes > 0) {
                  timer.minutes -= 1;
                  timer.seconds= 59;
//Step6c: stop timer when time is 0:0
            } else {
                  window.clearInterval(timer.timeID);
                  timer.timeID= null;
            }
//step6d: set value of minBox & secBox to timer minutes & seconds
            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
      }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
//STEP7: declare myTimer to equal an instance of the timer object w/ parameters
let myTimer= new timer(minBox.value, secBox.value);
//STEP8: create onchange event handler for minBox object
minBox.onchange = function() {
      myTimer.minutes = minBox.value; //set equal to each other 
}
//STEP8: create onchange event handler for secBox object
secBox.onchange= function() {
      myTimer.seconds = secBox.value; //set equal to each other
}
//STEP9: create onclick event handler for runpausetimer
runPauseTimer.onclick= function() { //run anonymous function
      myTimer.runPause(myTimer, minBox, secBox); //apply runpause method to myTimer w/ parameters
}
