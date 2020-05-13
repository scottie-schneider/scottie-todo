import React from "react"
import { Todos, TodoItem } from "core/entities"
import styles from "./index.module.scss"

interface TodoList {
  remove: Function
  router: Function
  todos: Todos
}

export const TodoList = ({ remove, router, todos }: TodoList) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo: TodoItem) => {
        return (
          <li key={todo.id}>
            <div onClick={() => router(todo.id)}>{todo.title}</div>
            <span onClick={() => remove(todo.id)}>x</span>
          </li>
        )
      })}
    </ul>
  )
}
