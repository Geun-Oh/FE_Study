import { FormEvent, useState } from 'react';
import { socket } from '../socket';

const MyForm = () => {
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        socket.timeout(5000).emit('create-something', value, () => {
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={(e) => setValue(e.target.value)} />
            <button type='submit' disabled={isLoading}>Submit</button>
        </form>
    );
}

export default MyForm;