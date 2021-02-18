const Emitter = require("events");

const emitter = new Emitter();
const eventName = "greet";

// Передача параметров событию
emitter.on(eventName, function(data){
    console.log(data);
});

emitter.emit(eventName, "Привет пир!");
