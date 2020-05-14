import { TodoItem } from "../../core/entities"
import { AnyAction } from "redux"

interface TodoAction<T> extends AnyAction {
  payload: T
}

interface RemoveTodoRequest {
  id: number
}

export const AddTodo = (todo: TodoItem): TodoAction<TodoItem> => ({
  type: "ADD_TODO",
  payload: {
    id: todo.id,
    description: todo.description,
    title: todo.title,
    dueDate: todo.dueDate,
  },
})
