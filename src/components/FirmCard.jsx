import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { btnHoverStyle } from '../styles/globalStyle';

export default function FirmCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"center"}}>
        <EditIcon sx ={btnHoverStyle}/>
        <DeleteOutlineIcon sx={btnHoverStyle} />
       
      </CardActions>
    </Card>
  );
}