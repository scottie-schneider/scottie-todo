import * as Worker from "./worker"
import { RouteItem, SiteSettings, Todos, TodoItem } from "./entities"
import { SiteSettingsResponse } from "./models"

export class Interactor {
  cms: SiteSettings = {
    empty: "",
    header: [],
    footer: [],
  }
  home: RouteItem = {
    component: "",
    name: "",
    param: "",
    home: false,
  }
  route: RouteItem = {
    component: "",
    name: "",
    param: "",
    home: false,
  }
  todos: Array<TodoItem> = []

  constructor() {
    this.addTodoRequest = this.addTodoRequest.bind(this)
    this.addTodoResponse = this.addTodoResponse.bind(this)
    this.init = this.init.bind(this)
    this.removeTodoRequest = this.removeTodoRequest.bind(this)
    this.removeTodoResponse = this.removeTodoResponse.bind(this)
    this.reroute = this.reroute.bind(this)

    Worker.fetchFromCMS(this.init)
  }

  init(request: SiteSettingsResponse) {
    this.cms = {
      empty: request.empty,
      header: request.header,
      footer: request.footer,
    }
    this.home = request.initial
    this.route = request.initial
  }

  addTodoRequest(request: TodoItem): void {
    Worker.addTodo(this.todos, request, this.addTodoResponse)
  }
  addTodoResponse(response: Todos): void {
    this.todos = response
    this.route = this.home
  }
  removeTodoRequest(request: number): void {
    Worker.removeTodo(this.todos, request, this.removeTodoResponse)
  }
  removeTodoResponse(response: Todos): void {
    this.todos = response
  }
  reroute(route: RouteItem): void {
    this.route = route
  }
}
