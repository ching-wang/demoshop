import React from "react";
import Navbar from "../navBar/Navbar";
import styles from './layout.module.css'

export default function Layout(props: {children: React.ReactNode}) {

  return (
      <div className={styles.layoutWrapper}>
        <Navbar />
        <main className={styles.container}>{props.children}</main>
      </div>
  )
}
