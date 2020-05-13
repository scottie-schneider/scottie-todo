import React from "react"
import { TodoEmpty } from "components/TodoEmpty"
import { TodoList } from "components/TodoList"
import styles from "./index.module.scss"

export const Overview = ({ interactor }: any) => {
  const empty = interactor.todos.length === 0
  const remove = (id: string): void => {
    interactor.removeTodoRequest(id)
  }
  const router = (param: string): void => {
    interactor.reroute({
      component: "detail",
      name: "Detail",
      param: param,
      home: false,
    })
  }
  return (
    <div className={styles.overview}>
      {empty ? (
        <TodoEmpty message={interactor.cms.empty} />
      ) : (
        <TodoList remove={remove} router={router} todos={interactor.todos} />
      )}
      <button onClick={() => router(`${interactor.todos.length}`)}>
        Add New
      </button>
    </div>
  )
}
