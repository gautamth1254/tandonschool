import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles(() =>({
    slider:{
      width: '90%',
      margin: 'auto',      
    },
    div_box:{
      height: '20vh',
      width: '3vw',
      background: '#eee6f3',
      margin: '40px',
    },
}))

const Faculty=()=> {

  const classes = useStyle();



  const settings = {
      
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  };

  return (
    <div>
        <h2> Faculty list</h2>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.div_box}>
            <h3>1</h3>
          </div>
          <div className={classes.div_box}>
            <h3>2</h3>
          </div>
          <div className={classes.div_box}>
            <h3>3</h3>
          </div>
          <div className={classes.div_box}>
            <h3>4</h3>
          </div>
          <div className={classes.div_box}>
            <h3>5</h3>
          </div>
          <div className={classes.div_box}>
            <h3>6</h3>
          </div>
          <div className={classes.div_box}>
            <h3>7</h3>
          </div>
          <div className={classes.div_box}>
            <h3>8</h3>
          </div>
          <div className={classes.div_box}>
            <h3>9</h3>
          </div>
          <div className={classes.div_box}>
            <h3>10</h3>
          </div>
          <div className={classes.div_box}>
            <h3>11</h3>
          </div>
          <div className={classes.div_box}>
            <h3>12</h3>
          </div>
          <div className={classes.div_box}>
            <h3>13</h3>
          </div>
          <div className={classes.div_box}>
            <h3>14</h3>
          </div>
          
        </Slider>
      </div>
  )
}

export default Faculty;