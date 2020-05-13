import React from "react"
import { RouteItem } from "core/entities"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import styles from "./index.module.scss"

export const Layout = ({ children, header, footer, reroute }: any) => {
  const router = (route: RouteItem) => {
    reroute(route)
  }
  return (
    <article className={styles.layout}>
      <Header menuItems={header} router={router} />
      <div className="container">{children}</div>
      <Footer menuItems={footer} router={router} />
    </article>
  )
}
