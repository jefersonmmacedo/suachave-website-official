﻿  import Carousel, { slidesToShowPlugin, arrowsPlugin  } from '@brainhubeu/react-carousel';
  import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline  } from 'react-icons/io5';
  import '@brainhubeu/react-carousel/lib/style.css';
  import ImageHouse1 from "../../assets/images/house.jpg";
  import ImageHouse2 from "../../assets/images/house1.jpg";
  import ImageHouse3 from "../../assets/images/house2.jpg";
  import ImageHouse4 from "../../assets/images/house4.jpg";
  import ImageHouse5 from "../../assets/images/house5.jpg";
  import ImageHouse6 from "../../assets/images/house6.jpg";
  
  
  
  export function SliderImages() {
    const fadeImages = [
        {
        url: ImageHouse1,
        caption: 'First Slide'
        },
        {
        url: ImageHouse2,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse3,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse4,
        caption: 'First Slide'
        },
        {
        url: ImageHouse5,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse6,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse1,
        caption: 'First Slide'
        },
        {
        url: ImageHouse2,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse3,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse4,
        caption: 'First Slide'
        },
        {
        url: ImageHouse5,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse6,
        caption: 'Third Slide'
        },
      ];
      return (
          <Carousel
          plugins={[
              'infinite',
              'centered',
              {
              resolve: slidesToShowPlugin,
              options: {
                addArrowClickHandler: true,
              numberOfSlides: 6
              }
              },
          ]}
          breakpoints={{
            950: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 4
                 }
               }]},
            800: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 3
                 }
               }]},
            650: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               }]}
              }}
          >

            {fadeImages.map((image) => {
                return (
                    <img src={image.url} width="100%" height="100%"/>
                )
            })}
          </Carousel>
        )
  }