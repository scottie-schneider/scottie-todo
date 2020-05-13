import React, { ChangeEvent, FormEvent, useState } from "react"
import { TodoItem } from "core/entities"
import { TextArea, Input } from "components/FormFields"
import styles from "./index.module.scss"

export const Detail = ({ interactor }: any) => {
  const index = parseInt(interactor.route.param)
  const [todo, setTodo] = useState<TodoItem>(
    typeof interactor.todos[index] === "undefined"
      ? {
          id: index,
          dueDate: new Date().toISOString(),
          title: "",
          description: "",
        }
      : {
          id: index,
          dueDate: interactor.todos[index].dueDate,
          title: interactor.todos[index].title,
          description: interactor.todos[index].description,
        }
  )

  const handleChange = (param: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setTodo((t) => {
      return {
        ...t,
        [param]: value,
      }
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    interactor.addTodoRequest(todo)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Title"
        param="title"
        placeholder="Pick up groceries"
        handler={handleChange}
        value={todo.title}
        type="text"
      />
      <Input
        label="Due by"
        param="dueDate"
        placeholder={new Date().toISOString()}
        handler={handleChange}
        value={todo.dueDate}
        type="date"
      />
      <TextArea
        label="Description"
        param="description"
        placeholder="A list of groceries..."
        handler={handleChange}
        value={todo.description}
      />
      <button type="submit">Save todos</button>
    </form>
  )
}
