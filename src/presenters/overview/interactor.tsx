import { store } from "store"
import { TodoItem } from "../../core/entities"
import { AddTodo } from "../../store/actions/todo"
import * as Models from "./models"
import * as Worker from "../../core/worker"

export class Interactor {
  todos: Array<TodoItem> = []
  constructor() {
    this.addTodo = this.addTodo.bind(this)
    this.updateState = this.updateState.bind(this)
  }
  addTodo(request: Models.AddTodoRequest) {
    const todo: TodoItem = {
      id: request.id,
      description: request.description,
      dueDate: request.dueDate,
      title: request.title,
    }
    store.dispatch(AddTodo(todo))
  }
  updateState() {
    const state = store.getState()
    this.todos = state.todo.todos
  }
}
