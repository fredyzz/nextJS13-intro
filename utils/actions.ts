
'use server'
import { revalidatePath } from 'next/cache';
import db from './db'

export const completeTodo = async (id : string) => {
  await db.todo.update({
    where: {id},
    data: {
      completed: true
    }
  })

  revalidatePath('/todos')
}

export const newTodo = async (formData: FormData) => {
    const content = formData.get('content');
  
    if (typeof content !== 'string' || !content) {
      throw new Error('Invalid form data')
    }
  
    await db.todo.create({
      data: {
        content
      },
    });
  
    revalidatePath('/todos')
}