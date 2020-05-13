import React from "react"
import styles from "./index.module.scss"

interface TodoEmpty {
  message: string
}
export const TodoEmpty = ({ message }: TodoEmpty) => {
  return <div className={styles.empty}>{message}</div>
}
