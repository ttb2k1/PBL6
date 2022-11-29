import React from 'react'
import styles from './Lesson.module.scss'
import { Paper, Grid, Button } from '@mui/material';
import Table from '../../Components/Table'
import { useState, useEffect } from 'react';
import LessonService from '../../service/LessonService';


const Lesson = () => {
  const [listLesson, setListLesson] = useState([])
  const [dataByLevel, setDataByLevel] = useState([])

  useEffect(() => {
    try {
      LessonService.getAllLevel().then((res) => {
        setListLesson(res.data.lesson)
      })
      LessonService.getLessonByLevel('N5').then((res) => {
        setDataByLevel(res.data.kanjis)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])
  console.log(dataByLevel);

  const handleChangeLevel = (level) => {
    try {
      LessonService.getLessonByLevel(`${level}`).then((res) => {
        setDataByLevel(res.data.kanjis)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.lessonContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          {listLesson.map((item, index) => (
            <div key={index} onClick={() => handleChangeLevel(item.level)} className={styles.titleContent}>
              <Button className={styles.titleButton}>
                {item.level}
              </Button>
            </div>
          ))}
        </div>
        <Grid container className={styles.detail}>
          <Table level={dataByLevel} />
          <Grid item xs={4}>
            <Paper className={styles.canvas}>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Lesson