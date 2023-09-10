import io from "socket.io-client";

let socket;

const connectSocket = (_id) => {
    socket = io(
        "http://localhost:5000",
        { query: {_id} }
    );
}

export { socket, connectSocket };