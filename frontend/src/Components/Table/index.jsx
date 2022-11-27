import React from 'react'
import styles from "./Table.module.scss"
import { data } from "./data"
import { useState, useEffect } from 'react'
import LessonService from '../../service/LessonService';



const Table = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        LessonService.geByLevel("N5").then((res) => {
            setData(res.data.kanjitext)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const handleShow = (e) => {
        
    }
    return (
        <div className={styles.Container}>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <div onClick={handleShow()} className={styles.name}>{item.kanji}</div>
                        <div className={styles.subname}>{item.vocabulary}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Table