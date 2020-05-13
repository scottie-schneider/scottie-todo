import React from "react"
import { Routes, RouteItem } from "core/entities"
import styles from "./index.module.scss"

interface Header {
  menuItems: Routes
  router: Function
}

export const Header = ({ menuItems = [], router }: Header) => {
  return (
    <nav className={styles.nav}>
      <h1>
        {"{ "}Todo App{" }"}
      </h1>
      <ul>
        {menuItems.map((item: RouteItem, index) => {
          return (
            <li key={index} onClick={() => router(item)}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
