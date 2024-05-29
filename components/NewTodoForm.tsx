import { newTodo } from "@/utils/actions"



const NewTodoForm = () => {



  return (
    <div>
      <h2>New todo</h2>
      <form action={newTodo}>
        <input type="text" name="content" className='border border-black-25'/>
        <button type="submit">New Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
