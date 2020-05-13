import React from "react"
import { Routes, RouteItem } from "core/entities"
import styles from "./index.module.scss"

interface Footer {
  menuItems: Routes
  router: Function
}

export const Footer = ({ menuItems = [], router }: Footer) => {
  return (
    <footer className={styles.footer}>
      <ul>
        {menuItems.map((item: RouteItem, index: number) => {
          return (
            <li key={index} onClick={() => router(item)}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
