import openSocket from "socket.io-client";
import {server} from "./keys.js";

const location = window.location.pathname;
const admintoken = localStorage.getItem('admintoken') ? JSON.parse(localStorage.getItem('admintoken')).token: null;
const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).token
  : null;
const sendToken = location.search('admin') !== -1 ? admintoken : token;

const data = server.split('/api')[0];
const socket = openSocket(data, {
    transports: ["websocket"],
    rejectUnauthorized: false,
    query: `token=${sendToken}`,
});

socket.on("connect", () => {
    console.log("connected");
});

socket.on("reconnect", () => {
    if (token) {
        console.log("Reconnecting called");
        socket.emit("join", sendToken);
    }
});

export {socket};