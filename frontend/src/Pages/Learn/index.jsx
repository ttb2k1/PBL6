import React from 'react'
import styles from "./Learn.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Paper, Grid, InputBase } from '@mui/material';


const Learn = () => {
  return (
    <div className={styles.learnContainer}>
      <div className={styles.content}>
        <div className={styles.input}>
          <div className={styles.iconSearch} >
            <SearchIcon />
          </div>
          <InputBase className={styles.inputSearch} placeholder='Tìm kiếm ...' />
          <div className={styles.iconClose} >
            <CloseIcon />
          </div>
        </div>
        <div className={styles.result}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper className={styles.item}>
                <div className={styles.itemContainer}>
                  <span>研</span>
                  <span>NGHIÊN</span>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={styles.item}>
                <div className={styles.itemContainer}>
                  <Grid item xs={6} className={styles.detail}>
                    <Typography sx={{ mb: 1 }}>
                      Bộ: 研 - NGHIÊN
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      訓: と.ぐ
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      音: ケン
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      Số nét: 9
                    </Typography>
                  </Grid>
                  <Grid item xs={6} >
                    <Typography sx={{ mb: 1 }}>
                      well meaning and kindly.
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      well meaning and kindly.
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      well meaning and kindly.
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      well meaning and kindly.
                    </Typography>
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