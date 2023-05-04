import { todoProp } from '@/types/todoProps';
import { rest } from 'msw';

export const handlers = [
    rest.get("http://localhost:3000/todos", (req, res, ctx) => {
        return res(
            ctx.json<todoProp[]>([
                {
                    id: 1,
                    title: '청소',
                    completed: true
                },
                {
                    id: 2,
                    title: '설거지',
                    completed: true
                },
                {
                    id: 3,
                    title: '숙제',
                    completed: true
                }
            ])
        )
    })
]