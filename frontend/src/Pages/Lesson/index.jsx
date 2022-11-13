import React from 'react'
import styles from './Lesson.module.scss'
import { Typography, Paper, Grid, Button } from '@mui/material';

const Lesson = () => {
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.content}>
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
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper sx={{ padding: '15px' }}>
            456
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            123
          </Paper>
        </Grid>

      </Grid>
    </div>
    </div >
  )
}

export default Lesson