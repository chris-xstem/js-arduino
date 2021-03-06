#!/usr/bin/env node

// XSTEM codeFun, js-arduino

// ██████╗ ██╗     ██╗███╗   ██╗██╗  ██╗    ██╗     ███████╗██████╗ 
// ██╔══██╗██║     ██║████╗  ██║██║ ██╔╝    ██║     ██╔════╝██╔══██╗
// ██████╔╝██║     ██║██╔██╗ ██║█████╔╝     ██║     █████╗  ██║  ██║
// ██╔══██╗██║     ██║██║╚██╗██║██╔═██╗     ██║     ██╔══╝  ██║  ██║
// ██████╔╝███████╗██║██║ ╚████║██║  ██╗    ███████╗███████╗██████╔╝
// ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝    ╚══════╝╚══════╝╚═════╝ 

// *****************************************************************
// Variables
// *****************************************************************
var j5 = require("johnny-five");
var bot, myLed;

// Connects to your robot brain
bot = new j5.Board();

// *****************************************************************
// Do clean up here:
//  - e.g., turn off all leds, stop all animation
// *****************************************************************
bot.on("exit", function() {

  myLed.off();
  console.log("Bye~~~ See u again...");

});

// *****************************************************************
// Your fun starts here:
//  - When board is "ready", function() { ... } will be executed
// *****************************************************************
bot.on("ready", function() {

  // 9 is the pin #
  myLed = new j5.Led(9);

  // Enables console led.* commands
  bot.repl.inject({
    led: myLed
  });
  
  // Be executed repeatedly every 500ms
  bot.loop(500, function(){
    
    myLed.toggle();

  });
  
  console.log("You can interact with the LED via the variable 'led';\n");
  console.log(" led.on(); // turn on the led\n led.off(); // turn off the led\n led.toggle(); // toggle the led \n");
  console.log("Hit control-C to exit.\n >> ");
  
});


/*
Questions:
  - Code your led to blink.
  - Make sure myLed is off, after you exit your program?
*/