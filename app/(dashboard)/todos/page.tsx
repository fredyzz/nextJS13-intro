import TodoList from '@/components/TodoList'
import { TodoListType } from '@/interfaces/Todo'
import db from '@/utils/db'

const getTodos = async () : Promise<TodoListType> => {
  const todos = db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getTodos()
  console.log({todos})

  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage