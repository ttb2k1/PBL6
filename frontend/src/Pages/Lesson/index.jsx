import React from 'react'
import styles from './Lesson.module.scss'
import { Paper, Grid, Button } from '@mui/material';
import Table from '../../Components/Table'


const Lesson = () => {
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.contentContainer}>

        <div className={styles.title}>
          <div className={styles.titleContent}>
            <Button className={styles.titleButton}>
              N5
            </Button>
          </div>
          <div className={styles.titleContent}>
            <Button className={styles.titleButton}>
              N4
            </Button>
          </div>
          <div className={styles.titleContent}>
            <Button className={styles.titleButton}>
              N3
            </Button>
          </div>
          <div className={styles.titleContent}>
            <Button className={styles.titleButton}>
              N2
            </Button>
          </div>
          <div className={styles.titleContent}>
            <Button className={styles.titleButton}>
              N1
            </Button>
          </div>
        </div>
        <Grid container className={styles.detail}>
          <Grid item xs={8} className={styles.vocabContainer} >
            <Paper className={styles.vocabContent} >
              <Table />
            </Paper>
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