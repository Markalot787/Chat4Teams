//crud function for rooms
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { AppContext } from '../context/appContext';

const { socket, currentRoom, setMessages, messages, privateMemberMsg } =
		useContext(AppContext);


const roomId = currentRoom;




render
        <button
					className="btn btn-primary"
					onClick={() => {
						socket.emit('create-room');
					}}
				>
					Create a room
				</button>

//         // client side code
// var socket = io.connect();
// socket.emit('create', 'room1');

// // server side code
// io.sockets.on('connection', function(socket) {
//   socket.on('create', function(room) {
//     socket.join(room);
//   });
// });