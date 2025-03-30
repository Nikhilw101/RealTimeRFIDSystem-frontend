import { io } from "socket.io-client";

// If hosting backend with ngrok: "http://abcd-1234.ngrok.io"
const socket = io("https://realtimerfidsystem-backend.onrender.com", {
  transports: ["websocket", "polling"]
});

export default socket;
