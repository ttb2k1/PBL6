import styles from './Slide.module.scss'
import React, { useState } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handlerClick = (direction) => {
    if (direction === 'up') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className={styles.slideContainer}>
      <Arrow className={styles.Arrow} direction="up" onClick={() => handlerClick('up')}>
        <KeyboardArrowUpOutlinedIcon />
      </Arrow>
      <Arrow direction="down" onClick={() => handlerClick('down')}>
        <KeyboardArrowUpOutlinedIcon />
      </Arrow>
    </div>
  )
}

export default Slide