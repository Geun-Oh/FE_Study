import { useEffect, useState } from "react";
import { socket } from './socket';
import ConnectionState from "./components/ConnectionState";
import ConnectionManager from "./components/ConnectionManager";
import MyForm from "./components/MyForm";
import Events from "./components/Event";

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [fooEvents, setFooEvents] = useState<string[]>([])

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    }

    const onDisconnect = () => {
      setIsConnected(false);
    }

    const onFooEvent = (value: string) => {
      setFooEvents(prev => [...prev, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    }
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  )
}

export default App
