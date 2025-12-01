const EventEmitter = require('events');
const emitter =new EventEmitter()

emitter.on("user:login",(data)=>{
    console.log(`welcome${data.username} login successful`)

});
emitter.emit("user:login", { username: "alex" });