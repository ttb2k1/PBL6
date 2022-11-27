import React, { useState } from 'react'
import styles from "./Learn.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Paper, Grid, InputBase } from '@mui/material';
import { useEffect } from 'react';
import LearnService from '../../service/LearnService';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';


const Learn = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState('')


  useEffect(() => {
    try {
      LearnService.getVocabByName(`${result}`).then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [result])

  const handleClear = () => {
    setSearchTerm('')
  }

  const handleSearch = (e) => {
    if(e.type === 'mousedown' || (e.type === 'keydown' && e.key === "Enter")){
      setResult(searchTerm);
    }
  }

  return (
    <div className={styles.learnContainer}>
      <div className={styles.content}>
        <div className={styles.input}>
          <div className={styles.iconSearch} onClick={handleSearch}  >
            <SearchIcon />
          </div>
          <InputBase className={styles.inputSearch} onKeyDown={handleSearch} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder='Tìm kiếm ...' />
          <div className={styles.iconEdit}>
            <ModeEditOutlineIcon />
          </div>
          <div className={styles.iconClose} onClick={handleClear} >
            <CloseIcon />
          </div>
        </div>
        <div className={styles.result}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper className={styles.item}>
                <div className={styles.itemContainer}>
                  <span>{data.kanji}</span>
                  <span>{data.vocabulary}</span>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={styles.item}>
                <div className={styles.itemContainer}>
                  <Grid item xs={6} className={styles.detail}>
                    <Typography sx={{ mb: 1 }}>
                      Bộ: {data.kanji} - {data.vocabulary}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      訓: {data.kunyomi}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      音: {data.KEN}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      Nghĩa: {data.mean}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      Cấp độ: {data.level}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={styles.canvas} >
                    <span className={styles.vocab}>
                      {data.kanji}
                    </span>
                  </Grid>
                </div>
                <div className={styles.classify}>
                  <div className={styles.classifyTitle}>Ví dụ</div>
                  <Grid item xs={12} >
                    {data.compounds?.map((item, index) => (
                      <Typography key={index} sx={{ mb: 1, display: 'flex', width: '100%' }}>
                        <Grid item xs={2}>
                          {item.compound}:
                        </Grid>
                        <Grid item xs={3}>
                          {item.hiragana}
                        </Grid>
                        <Grid item xs={7}>
                          {item.mean}
                        </Grid>
                      </Typography>
                    ))}
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Learn