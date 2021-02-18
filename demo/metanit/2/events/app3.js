const EventEmitter = require("events");

const eventName = "greet";

// Наследование от EventEmitter
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

const user = new User();

// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});

user.sayHi("Мне нужна твоя одежда...");
