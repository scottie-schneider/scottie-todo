import React from "react"
import styles from "./index.module.scss"
/**
 * @prop handler The callback function to update the param value
 * @prop param The name of the property of the field being updated onChange
 * @prop type The type of input field to render
 * @prop value The value of the property to be updated
 */

interface Input {
  handler: Function
  label?: string
  param: string
  placeholder?: string
  type: "text" | "number" | "date"
  value: string | number
}

export const Input = ({
  handler,
  label = "",
  param = "",
  placeholder = "",
  type = "text",
  value = "",
}: Input) => {
  return (
    <div className={styles.field}>
      <label htmlFor={param}>{label}</label>
      <input
        name={param}
        onChange={handler(param)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  )
}