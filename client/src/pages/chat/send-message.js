import styles from './styles.module.css';
import React, { useState } from 'react';

const SendMessage = ({ socket, username, room}) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message !== '') {
            const __createdtime__ = Date.now();
            // Send message to server. We can't specify who we send the message to from the  fronted. We can only send to the server. Then the serve can send the message to the rest of the users in the room.
            socket.emit('send_message', { username, room, message, __createdtime__});
            setMessage('');
        }
    };

    return (
        <div className={styles.sendMessageContainer}>
            <input
                className={styles.messageInput}
                placeholder='Message...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <button className='btn btn-primary' onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};

export default SendMessage;