import styles from  './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ( {username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate()

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }

        navigate('/chat', { replace: true});
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{'The BASSMENT'}</h1>
                <input 
                    className={styles.input} 
                    placeholder='Username...' 
                    onChange={(e) => setUsername(e.target.value)}
                />

                <select 
                    className={styles.input}
                    onChange={(e) => setRoom(e.target.value)}
                >
                    <option>-- Choose Your Room---</option>
                    <option value='General'>General</option>
                    <option value='Sports'>Sports</option>
                    <option value='Games'>Games</option>
                    <option value='Frying Channel'>Frying Channel</option>
                </select>

                <button 
                    className='btn btn-secondary'
                    style={{ width: '100% '}}
                    onClick={joinRoom}
                >
                    Join Room
                </button>
            </div>
        </div>
    );

};

<button className='btn btn-secondary' style={{ width: '100%'}}>Join Room</button>


export default Home;