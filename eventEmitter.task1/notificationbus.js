const EventEmitter = require("events");

const notificationBus = new EventEmitter();//instance cheya

notificationBus.on("newNotification", (data) => {
  console.log("New notification received:", data.message);

  console.log("Sender:", data.sender);
  console.log("Time:", data.time);
});

notificationBus.emit("newNotification", {
  message: "Your order has been successfully placed!",
  sender: "Order Service",
  time: new Date().toLocaleString()
});