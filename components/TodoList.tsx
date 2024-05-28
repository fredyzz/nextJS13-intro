import Todo from "./Todo"

import { TodoListType } from "@/interfaces/Todo"

interface TodoListProps {
    todos: TodoListType
}


const TodoList : React.FC<TodoListProps> = ({todos}) => {

    return (
        <div>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    )
}

export default TodoList