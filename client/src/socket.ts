import io, { Socket } from "socket.io-client";

let socket: Socket;

const connectSocket = (_id: any) => {
    socket = io(
        "http://localhost:5000", 
        { query: {_id} }
    );
}

export { socket, connectSocket };