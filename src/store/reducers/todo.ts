import { AnyAction } from "redux"
import { Todos, TodoItem } from "../../core/entities"

const initialState: any = {
  todos: [],
}

export const Todo = (state: any = initialState, action: AnyAction) => {
  let newTodos: Array<TodoItem> = []
  switch (action.type) {
    case "ADD_TODO":
      const { description, dueDate, id, title } = action.payload
      const newTodo: TodoItem = {
        description,
        dueDate,
        id,
        title,
      }
      newTodos = [...state.todos, newTodo]
      return {
        ...initialState,
        todos: newTodos,
      }
    default:
      return state
  }
}
