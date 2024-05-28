export interface TodoType {
  id: string
  createdAt: Date
  content: string
  completed: boolean
}

export type TodoListType = TodoType[]
