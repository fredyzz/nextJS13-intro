'use client'

import { useState } from 'react'

const NewTodoForm = () => {
  const [state, updateState] = useState()

  return (
    <div>
      <h2>New todo</h2>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

export default NewTodoForm
