import React from 'react'
import styles from './Lesson.module.scss'
import { Paper, Grid, Button } from '@mui/material';
import Table from '../../Components/Table'
import { useState, useEffect } from 'react';
import LessonService from '../../service/LessonService';


const Lesson = () => {
  const [listLesson, setListLesson] = useState([])
  const [nameLevel, setNameLevel] = useState('N5')

  useEffect(() => {
    try {
      LessonService.getAllLevel().then((res) => {
        setListLesson(res.data.lesson)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleChangeLevel = (level) => {
    setNameLevel(level)
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
          <Grid item xs={8} className={styles.vocabContainer} >
            <Paper className={styles.vocabContent} >
              <Table level={nameLevel} page='1' />
            </Paper>
            <Grid xs={6}>
              <Paper className={styles.pagination}>
                123
              </Paper>
            </Grid>
          </Grid>
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