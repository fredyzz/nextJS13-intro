import {TodoType} from "@/interfaces/Todo"

 interface TodoProps {
    todo: TodoType
}
const Todo : React.FC<TodoProps> = ({todo}) => {
  return <div>{todo.content}</div>
}

export default Todo
