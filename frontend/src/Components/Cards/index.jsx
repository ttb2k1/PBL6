import React from 'react'
import './card.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Cards = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {/* {item.lesson} */} Bài 1
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {/* {item.vocabulary} */}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className='detail'>
        <Button size="small">Chi tiết</Button>
      </CardActions>
    </Card>
  )
}

export default Cards;