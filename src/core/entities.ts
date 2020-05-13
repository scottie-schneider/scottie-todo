export interface AppStore {
  [prop: string]: any
}

export type Routes = Array<RouteItem>

export interface RouteItem {
  component: string
  home: boolean
  name: string
  param: string
}

export interface SiteSettings {
  empty: string
  header: Routes
  footer: Routes
}

export type Todos = Array<TodoItem>

export interface TodoItem {
  id: number
  description: string
  dueDate: string
  title: string
}

export interface Test {
  test2: string
}

export type TodoItemTwo = TodoItem | Test

const test: TodoItemTwo = {
  id: 1,
  description: "string",
  dueDate: "string",
  title: "string",
  test: ""
}

console.log(test)
