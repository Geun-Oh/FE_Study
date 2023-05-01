import { socket } from '../socket';

const ConnectionManager = () => {
    const connect = () => {
        socket.connect();
    }
    const disconnect = () => {
        socket.disconnect();
    }

    return (
        <>
            <button type='button' onClick={connect}>Connect</button>
            <button type='button' onClick={disconnect}>Disconnect</button>
        </>
    )
}

export default ConnectionManager;