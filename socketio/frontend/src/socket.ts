import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://3000-geunoh-festudy-44xmdvx7b5h.ws-us96b.gitpod.io';

export const socket = io(URL!);