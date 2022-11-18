import React from 'react'
import styles from "./Table.module.scss"
import { data } from "./data"


const Table = () => {
    return (
        <div className={styles.Container}>
            <ul>
                {data.map((item,index) => (
                    <li key={index}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.subname}>{item.subname}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Table