'use client'

import { useTransition } from "react"

import {completeTodo} from '@/utils/actions'
import {TodoType} from "@/interfaces/Todo"


 interface TodoProps {
    todo: TodoType
}
const Todo : React.FC<TodoProps> = ({todo}) => {
  const [isPending, startTransition] = useTransition()

  const handleTodoClick = () => startTransition(() => completeTodo(todo.id))

  return <div
  className={`border border-black/20 cursor-pointer ${todo.completed && 'line-through'}`}
  onClick={handleTodoClick}>{todo.content}</div>
}

export default Todo
