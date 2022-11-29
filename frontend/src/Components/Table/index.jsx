import React from 'react'
import styles from "./Table.module.scss"
import { useState, useEffect } from 'react'
import LessonService from '../../service/LessonService';



const Table = ({ level, page }) => {

    const [data, setData] = useState([])
    // const [level, setLevel] = useState('')
    const [levelId, setLevelId] = useState('');
    const [pageId, setPageId] = useState('')

    console.log(level,page);
    useEffect(() => {
        try {
            LessonService.getLessonByLevel(`${level}/${page}`).then((res) => {
                setData(res.data.kanjis)
            })
        } catch (error) {
            console.log(error);
        }
    }, [level, page])

    const handleShow = (id) =>{
        console.log(id);
    }

    return (
        <div className={styles.Container}>
            <ul>
                {data.map((item, index) => (
                    <li key={index} onClick={() => handleShow(item.id)}>
                        <div className={styles.name}>{item.kanji}</div>
                        <div className={styles.subname}>{item.vocabulary}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Table