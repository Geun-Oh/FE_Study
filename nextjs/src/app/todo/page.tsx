import { todoProp } from "@/types/todoProps";
import { Suspense, use } from "react"

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    import('../../mocks');
  }
  

const TodoPage = () => {
    const todoList: todoProp[] = use(getData());

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <h1>Todo</h1>
            <ul>
                {
                    todoList.map(({ id, title, completed }) => {
                        return (
                            <li
                            key={id}
                            style={{
                                textDecoration: completed ? 'line-through' : undefined,
                            }}
                        >
                            {title}
                        </li>
                        )
                    })
                }
            </ul>
        </Suspense>
    )
}

export const getData = async () => {
    const res = await fetch('http://localhost:3000/todos').then(res => res.json());
    return res;
}

export default TodoPage;