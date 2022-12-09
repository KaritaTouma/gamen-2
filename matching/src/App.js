import "./App.css";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  
  return (
    <ImageList sx={{ width: 700, height: 650 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
      <button>戻る</button>
    </ImageList>

  );
}


const itemData = [

  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRgxyK4tWj59RqSTtYJeh8dWp-zYYQR4GEA&usqp=CAU',
    title: 'Hogeさん',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb033femBKeL_WOavV307arDQYpk-3NV5Ejv0miRDuUMLIQ_St5nxyQCn7SGTwrmm9b6M&usqp=CAU',
    title: 'Fooさん',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFphNqUR-Emc4RuG78FSYBerOyndLRfpu3XA&usqp=CAU',
    title: '○○さん',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2o8oSUc3reltJLKYhaMVz1Ot10STf3A125Q&usqp=CAU',
    title: '○○さん',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BHERQLjFzhTlJl_sDNPRBHWyAFa2W6rjYQ&usqp=CAU',
    title: '○○さん',
  },
  {
    img: 'https://www.bing.com/th/id/OIP.8Dl9-ZdAoViiuqwQgHDfEwHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
    title: '○○さん',
  },
  {
    img: 'https://www.bing.com/th/id/OIP.RM1F7YyBVIhrYuHvSiSdhAHaEJ?w=321&h=180&c=7&r=0&o=5&pid=1.7',
    title: '○○さん',
  },
  {
    img: 'https://www.bing.com/th/id/OIP.acXJy0AxSFSrB8aAzbHh2wHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7',
    title: '○○さん',
  },
];