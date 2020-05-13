import React from "react"
import styles from "./index.module.scss"

export const About = ({ interactor }: any) => {
  return (
    <section className={styles.section}>
      <h2>[Insert cool acronym Joe came up with]</h2>
      <p>
        This repo exemplifies how one might implement Clean Swift architecture
        on a Create React Application
      </p>
    </section>
  )
}
