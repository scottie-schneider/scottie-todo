import React from "react"
import styles from "./index.module.scss"
/**
 * @prop handler The callback function to update the param value
 * @prop param The name of the property of the field being updated onChange
 * @prop value The value of the property to be updated
 */

interface TextArea {
  handler: Function
  label?: string
  param: string
  placeholder?: string
  rows?: number
  value: string | number
}

export const TextArea = ({
  handler,
  label = "",
  param = "",
  placeholder = "",
  rows = 3,
  value = "",
}: TextArea) => {
  return (
    <div className={styles.field}>
      <label htmlFor={param}>{label}</label>
      <textarea
        name={param}
        onChange={handler(param)}
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
    </div>
  )
}
