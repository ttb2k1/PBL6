import React from 'react'
import styles from './Lesson.module.scss'
import { Paper, Grid, Button, Typography } from '@mui/material';
import Table from '../../Components/Table'
import { useState, useEffect } from 'react';
import LessonService from '../../service/LessonService';


const Lesson = () => {
  const [listLesson, setListLesson] = useState([])
  const [dataByLevel, setDataByLevel] = useState([])
  const [selectedKanjiId, setSelectedKanjiId] = useState(null)
  const [detailItem, setDetailItem] = useState([])
  console.log(selectedKanjiId);

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
          {listLesson.map((item, index) => (
            <div key={index} onClick={() => handleChangeLevel(item.level)} className={styles.titleContent}>
              <Button className={styles.titleButton}>
                {item.level}
              </Button>
            </div>
          ))}
        </div>
        <Grid container className={styles.detail}>
          <Table level={dataByLevel} setSelectedKanjiId={setSelectedKanjiId} />
          <Grid item xs={4}>
            {
              (selectedKanjiId !== null) ?
                (
                  <Paper className={styles.canvas} selectedKanjiId={selectedKanjiId} >
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
                ) : <></>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Lesson