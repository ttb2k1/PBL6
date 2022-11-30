import React from 'react'
import styles from './Lesson.module.scss'
import { Paper, Grid, Button, Typography, Skeleton } from '@mui/material';
import Table from '../../Components/Table'
import { useState, useEffect } from 'react';
import LessonService from '../../service/LessonService';


const Lesson = () => {
  const [listLesson, setListLesson] = useState([])
  const [dataByLevel, setDataByLevel] = useState([])
  const [selectedKanjiId, setSelectedKanjiId] = useState(null)
  const [detailItem, setDetailItem] = useState(null)

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
    console.log('123asd123');
  }, [])

  const handleChangeLevel = (level) => {
    try {
      LessonService.getLessonByLevel(`${level}`).then((res) => {
        setDataByLevel(res.data.kanjis)
      })
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if (selectedKanjiId != null) {
      try {
        LessonService.getDetail(selectedKanjiId).then((res) => {
          setDetailItem(res.data);
        })
      } catch (error) {
        console.log(error);
      }
    }
  }, [selectedKanjiId])

  return (
    <div className={styles.lessonContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <Paper className={styles.titleContainer}>
            {listLesson.map((item, index) => (
              <div key={index} onClick={() => handleChangeLevel(item.level)} className={styles.titleContent}>
                <Button className={styles.titleButton}>
                  {item.level}
                </Button>
              </div>
            ))}
          </Paper>
        </div>
        <Grid container className={styles.detail}>
          <Table level={dataByLevel} selectedKanjiId={setSelectedKanjiId} />
          <Grid item xs={3}>
            {
              detailItem ?
                (
                  <Paper className={styles.canvas} >
                    <div className={styles.vocab}>
                      {detailItem?.kanji}
                    </div>
                    <div className={styles.mean}>
                      <Typography sx={{ mb: 1 }}>
                        Bộ: {detailItem?.kanji} - {detailItem?.vocabulary}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        訓: {detailItem?.kunyomi}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        音: {detailItem?.KEN}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        Nghĩa: {detailItem?.mean}
                      </Typography>
                      <Typography sx={{ mb: 1 }}>
                        Cấp độ: {detailItem?.level}
                      </Typography>
                    </div>
                  </Paper>
                ) : (
                  <Paper className={styles.canvas} >
                    <div className={styles.vocab}>
                      {detailItem?.kanji}
                    </div>
                    <div className={styles.mean}>
                      <Skeleton
                        animation="wave"
                        width="100%"
                        height="300px"
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton
                        animation="wave"
                        width="40%"
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton
                        animation="wave"
                        width="30%"
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton
                        animation="wave"
                        width="30%"
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton
                        animation="wave"
                        width="100%"
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton
                        animation="wave"
                        width="20%"
                        style={{ marginBottom: 6 }}
                      />
                    </div>
                  </Paper>

                )
            }
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Lesson