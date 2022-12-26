import React, { useState } from 'react'
import styles from "./Learn.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Paper, Grid, InputBase, Card, Button, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import LearnService from '../../service/LearnService';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CanvasDraw from 'react-canvas-draw';
import { useRef } from 'react';


const Learn = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState('')
  const [open, setOpen] = useState(false)
  const [saveData, setSaveData] = useState("")
  const [listKanji, setListKanji] = useState([])
  const canvasRef = useRef(null)
  const [determine, setDetermine] = useState({
    x_min: 1000,
    y_min: 1000,
    x_max: 0,
    y_max: 0
  })

  useEffect(() => {
    try {
      LearnService.getVocabByName(`${result}`).then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [result])

  const handleDelete = () => {
    setSearchTerm('')
  }

  const handleSearch = (e) => {
    if (e.type === 'mousedown' || (e.type === 'keydown' && e.key === "Enter")) {
      setResult(searchTerm);
    }
  }

  const handleCanvas = () => {
    setOpen(!open)
  }

  const handleClear = () => {
    canvasRef.current.clear()
    setSaveData("");
  }

  const handleChoose = (kanji) => {
    setSearchTerm(kanji)
    setOpen(false)
    setSaveData("")
  }

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }



  const cropCanvas = (sourceCanvas, left, top, width, height, s1, s2) => {
    let destCanvas = document.createElement('canvas');
    destCanvas.width = s1;
    destCanvas.height = s2;
    destCanvas.getContext("2d").drawImage(
      sourceCanvas,
      left, top, width, height,
      0, 0, s1, s2);
    return destCanvas.toDataURL();
  }

  const handleColectXY = () => {
    const canvas = canvasRef.current.canvasContainer.children[1]
    const canvasR = canvasRef.current.getSaveData();
    const data = JSON.parse(canvasR)
    data.lines.map((item) => {
      item.points.filter((point) => {
        determine.x_min = parseInt(Math.min(point.x, determine.x_min))
        determine.x_max = parseInt(Math.max(point.x, determine.x_max))
        determine.y_min = Math.min(point.y, determine.y_min)
        determine.y_max = Math.max(point.y, determine.y_max)
      })
    });
    let x = determine.x_max - determine.x_min
    let y = determine.y_max - determine.y_min
    if (x > 250) {
      var avg = parseInt((determine.x_max - determine.x_min) / 2) + determine.x_min
      determine.x_min = avg - 125;
      determine.x_max = avg + 125;
    } else {
      if (x > y) {
        determine.y_min -= parseInt((x - y) / 2)
        determine.y_max += parseInt((x - y) / 2)
      } else {
        determine.x_min -= parseInt((y - x) / 2)
        determine.x_max += parseInt((y - x) / 2)
      }
    }
    return cropCanvas(canvas, determine.x_min, determine.y_min, determine.x_max, determine.y_max, determine.x_max - determine.x_min, determine.y_max - determine.y_min)
  }

  const handleCanvasChange = async (e) => {
    let saveData = handleColectXY();
    let a = dataURLtoFile(saveData, 'image.png')
    const formData = new FormData()
    formData.append('file', a)
    try {
      await LearnService.postCanvas(formData).then((res) => {
        setListKanji(res.data.top_k)
      })
    } catch (error) {
      console.log(error);
    }
    setSaveData(saveData);
  }




  return (
    <div className={styles.learnContainer}>
      <div className={styles.content}>
        <div className={styles.input}>
          <div className={styles.iconSearch} onClick={handleSearch}  >
            <SearchIcon />
          </div>
          <InputBase
            className={styles.inputSearch}
            onKeyDown={handleSearch}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm} placeholder='Tìm kiếm ...'
          />
          <div className={styles.iconEdit}>
            <ModeEditOutlineIcon onClick={handleCanvas} />
          </div>
          <div className={styles.iconClose} onClick={handleDelete} >
            <CloseIcon />
          </div>
        </div>
        {(open === true) &&
          <Card className={styles.canvasContainer}>
            <CanvasDraw
              className={styles.canvasDraw}
              backgroundColor="black"
              brushColor="white"
              brushRadius={5}
              lazyRadius={0}
              catenaryColor="white"
              onChange={handleCanvasChange}
              hideGrid={true}
              ref={canvasRef}

            />
            <div className={styles.drawKanjiResult}>
              {listKanji?.map((item, index) => (
                <span key={index} className={styles.drawKanjiSuggest} onClick={() => handleChoose(item.kanji)} value={item.kanji}>{item.kanji}</span>
              ))}

            </div>
            <div className={styles.drawKanjiButton}>
              <Button className={styles.btn} onClick={handleClear}>Clear</Button>
              <Button className={styles.btn} onClick={() => { canvasRef.current.undo() }}>Undo</Button>
            </div>
          </Card>
        }
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
                        <Grid item xs={1.5}>
                          {item.compound}:
                        </Grid>
                        <Grid item xs={10.5}>
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