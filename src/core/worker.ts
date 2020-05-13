import axios from "axios"
import { Routes, RouteItem, Todos, TodoItem } from "core/entities"
import { Error, SiteSettingsResponse } from "core/models"

export const addTodo = (
  todos: Todos,
  incoming: TodoItem,
  callback: (response: Todos) => void
): void => {
  todos[incoming.id] = incoming
  callback(todos)
}

export const fetchFromCMS = (
  callback: (response: SiteSettingsResponse) => void
): void => {
  const cms: SiteSettingsResponse = {
    empty: "",
    header: [],
    footer: [],
    initial: {
      component: "",
      name: "",
      param: "",
      home: true,
    },
  }
  const buildRoutes = (items: any): Routes => {
    const routes = items.map((item: any) => {
      return {
        component: item.component,
        name: item.name,
        param: item.param,
      }
    })
    return routes
  }
  const setInitialRoute = (header: any): RouteItem => {
    const initial = {
      component: "",
      name: "",
      param: "",
      home: true,
    }
    header.forEach((item: any) => {
      if (item.home === true) {
        initial.component = item.component
        initial.name = item.name
        initial.param = item.param
      }
    })
    return initial
  }
  axios
    .get("mock.json")
    .then((response) => {
      cms.empty = response.data.empty
      cms.header = buildRoutes(response.data.header)
      cms.footer = buildRoutes(response.data.footer)
      cms.initial = setInitialRoute(response.data.header)
      callback(cms)
    })
    .catch((error: Error) => {
      return {
        code: 500,
        message: error.message,
      }
    })
}

export const removeTodo = (
  todos: Todos,
  id: number,
  callback: (response: Todos) => void
): void => {
  const response = todos.filter((todo: TodoItem) => {
    return todo.id !== id
  })
  callback(response)
}
