import React, { useEffect } from 'react'
import styles from './Assessment.module.scss'
import { Paper, Button, Typography, Grid, Skeleton } from '@mui/material';
import { useState } from 'react';
import AssessmentService from '../../service/AssessmentService';
import Resizer from "react-image-file-resizer";


const Asssessment = () => {
  const [data, setData] = useState([])
  const [nameFile, setNameFile] = useState('');
  const [file, setFile] = useState('')
  const [kanji, setKanji] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {

  }, [])

  

  const handleFileChange = async (e) => {
    try {
      let file = e.target.files[0]
      setImage(image)
      setNameFile(file.name);
      setFile(file)
      console.log(file.name);
    } catch (error) {
      console.log(error);
    }
  }



  const handleChange = (e) => {
    setKanji(e.target.value)
  }

  const handleSubmit = async (e) => {
    try {
      const formData = new FormData()
      formData.append('eval', file)
      formData.set('kanji', kanji)
      await AssessmentService.postFile(formData).then((res) => {
        setData(res.data)
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div div className={styles.assessmentContainer} >
      <Paper className={styles.contentContainer}>
        <div className={styles.evaluate}>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadImage}>
              <Button
                variant="contained"
                component="label"
                sx={{ width: '25%', mr: 1, padding: '7px 0px', fontSize: "10px" }}
              >
                Upload File
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                />

              </Button>
              {
                nameFile &&
                <div className={styles.namefile}>{nameFile}</div>
              }
            </div>
            <div className={styles.uploadKanji}>
              <div>Từ cần đánh giá: </div>
              <input type="text" className={styles.inputKanji} value={kanji} onChange={handleChange} />
              <Button
                variant="contained"
                component="label"
                sx={{ mr: 1, padding: '7px 0px', fontSize: "10px" }}
                onClick={handleSubmit}
              >
                Gửi
              </Button>
            </div>
            <div className={styles.percent}>Độ chính xác: {(data.correct_ratio * 100 + "").substring(0, (data.correct_ratio * 100 + "").indexOf('.') + 3)}% </div>
          </div>
          {/* <div className={styles.showKanji}>{data.kanji}</div> */}
          {(file != "") ? <img src={`${image}`} /> : <></>}
        </div>
        <div className={styles.detect}>
          <div className={styles.titleDetect}>5 Từ có tỉ lệ % chính xác nhất:</div>
          <Grid item xs={12} >
            {data.top_k?.map((item, index) => (
              <Typography key={index} sx={{ mb: 1, display: 'flex', width: '100%' }}>
                <Grid className={styles.kanji}>
                  {item.kanji}:
                </Grid>
                <Grid item xs={7}>
                  {(item.probability * 100 + "").substring(0, (item.probability * 100 + "").indexOf('.') + 3)}%
                </Grid>
              </Typography>
            ))}
          </Grid>
        </div>
      </Paper >
    </div >
  )
}

export default Asssessment