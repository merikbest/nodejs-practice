const Emitter = require("events");

const emitter = new Emitter();
const eventName = "greet";

emitter.on(eventName, function(){
    console.log("Hello all!");
});

emitter.on(eventName, function(){
    console.log("Привет!");
});

emitter.emit(eventName);
