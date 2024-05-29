
'use server'
import { revalidatePath } from 'next/cache';
import db from './db'

interface NewTodoFormData {
    content: string
}

export const newTodo = async (formData: FormData) => {
    const content = formData.get('content');
  
    if (typeof content !== 'string' || !content) {
      throw new Error('Invalid form data')
    }
  
    const todo = await db.todo.create({
      data: {
        content
      },
    });
  
    revalidatePath('/todos')
}