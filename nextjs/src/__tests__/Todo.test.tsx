import { render, screen } from "@testing-library/react";
import TodoPage from "@/app/todo/page";

describe('Todo List', () => {
    test('Has title named Todo', () => {
        render(<TodoPage />);
        // 여기서 Todo 라는 텍스트는 h1에서 처음부터 있던 데이터이므로 비동기로 렌더링하지 않는다. 따라서 getBy를 사용해도 무방하다.
        const titleEl = screen.getByText('Todo');
        expect(titleEl).toBeIntheDocument();
    });

    test('List appears accurately (three)', async () => {
        render(<TodoPage />);
        // 여기서 TodoList의 경우 백엔드 서버에 비동기 요청을 한 뒤 해당 값을 이용해 렌더링이 이루어지기 때문에 findBy를 사용한다.
        const list = await screen.findAllByRole('listitem');
        expect(list).toHaveLength(3);
    })
})