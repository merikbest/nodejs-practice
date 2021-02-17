const EventEmitter = require("events");

// const emitter = new EventEmitter();
//
// // listening event: "anything"
// emitter.on("anything", (data) => {
//     console.log(data);
// });
//
// emitter.emit("anything", {a: 1});
// emitter.emit("anything2", {b: 2});

class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        this.on(eventName, callback);
    }

    dispatch(eventName, data) {
        this.emit(eventName, data);
    }
}

const dispatcher = new Dispatcher();

dispatcher.subscribe("hello", data => {
    console.log(data);
});

dispatcher.dispatch("hello", {hello: "world"})





