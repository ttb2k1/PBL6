import styles from './Slide.module.scss'
import styled from 'styled-components';
import React, { useState } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { data } from './data'
import { Paper, Typography } from '@mui/material';

const Arrow = styled.div`
  padding: 8px 10px;
  background-color: white;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
    background-color: #adcef3;
  }
  border: 1px solid #555;
  transition: 1s;
`;

const Wrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slide = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handlerClick = (direction) => {
    if (direction === 'up') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      console.log("123")
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      console.log("321")
    }
  };

  return (
    <div className={styles.slideContainer} >
      <div className={styles.btnUp}>
        <Arrow direction="up" onClick={() => handlerClick('up')}>
          <KeyboardArrowUpOutlinedIcon />
        </Arrow>
      </div>
      <Wrapper className={styles.slide}>
        {data.map((item) => (
          <Paper slideIndex={slideIndex} className={styles.content}>
            <div className={styles.vocab}>
              {item?.name}
            </div>
            <div className={styles.mean}>
              <Typography sx={{ mb: 1 }}>
                Bộ: {item?.kanji} - {item?.vocabulary}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                訓: {item?.kunyomi}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                音: {item?.KEN}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Nghĩa: {item?.mean}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Cấp độ: {item?.level}
              </Typography>
            </div>
          </Paper>
        ))}
      </Wrapper>
      <div className={styles.btnDown}>
        <Arrow direction="down" onClick={() => handlerClick('down')}>
          <KeyboardArrowDownOutlinedIcon />
        </Arrow>
      </div>
    </div>
  )
}

export default Slide