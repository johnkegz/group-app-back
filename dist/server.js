"use strict";
// const express = require('express')
// const socketIo   = require('socket.io');
// const path = require('path');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.get('/', (req: any, res: any) => {
//     // res.send("hello world")
//     res.sendFile(path.resolve("./client/index.html"));
// })
// const server = app.listen(3000, () => {
//     console.log("App run at 3000")
// })
// const webSocket = socketIo(server); //initiate socket
// webSocket.on("channel1", (data: any)=>{
//     console.log("channel 1", data)
// })
// webSocket.emit("channel 2", "new channel");
// webSocket.on("channel2", (obj: any)=>{
//     console.log("channel 2", obj)
// })
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./src/ormconfig"));
const chatMessage_1 = __importDefault(require("./src/Controllers/chatMessage"));
const app = express_1.default();
app.set("port", process.env.PORT || 3001);
let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);
//connect to data
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.createConnection(ormconfig_1.default);
        console.log('connected to the database');
    }
    catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
}))();
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/index.html"));
});
const chatMessage = new chatMessage_1.default();
const groupMessages = [];
const sockets = [];
io.on("connection", function (socket) {
    sockets.push(socket);
    console.log("a user connected --->", socket);
    socket.emit("message", groupMessages);
    socket.on("message", function (message) {
        groupMessages.push({ message: message });
        chatMessage.createChat({ userId: "1234", message: "23ewretfhgjkk u" });
        sockets.forEach(s => s.emit('message', groupMessages));
    });
});
const server = http.listen(3001, function () {
    console.log("listening on *:3001");
});
//# sourceMappingURL=server.js.map