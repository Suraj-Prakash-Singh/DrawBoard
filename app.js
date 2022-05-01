const express = require("express"); // Access
const socket = require("socket.io");


const app = express();  //Initialize and server ready

app.use(express.static("public"));

let port = process.env.PORT || 5000;

let server = app.listen(port,() => {
    console.log("Listeninig to port " + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");

    // Recieved Data
    socket.on("beginPath",(data)=>{
        // New transfer data to all connected computers
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data) => {
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoundo",(data) => {
        io.sockets.emit("redoundo",data);
    })
})

