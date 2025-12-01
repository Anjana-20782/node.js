const EventEmitter = require("events");
const e = new EventEmitter();//create instance
e.on("temp:high", (temp) => {
    console.log("Warning high temperature detected:", temp);
});
function checkTemp(temp) {
    if (temp > 40) {
        e.emit("temp:high", temp);   
    } else {
        console.log("Temperature Normal:", temp);
    }
}


checkTemp(35);   
checkTemp(50);