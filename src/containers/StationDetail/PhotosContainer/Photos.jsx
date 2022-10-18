

import React, { Component } from 'react'
import PhotosUploaded from 'components/CustomerTable/PhotosUploaded/PhotosUploaded'

export default class Photos extends Component {
  
  render() {
    const photos = [
      {
        image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
        chargingStation:"Ace charging station",
        date: "31 march 2021"
      },
      {
          image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/06/24/981540-global-petrol-prices.jpg",
          chargingStation:"Ace charging station",
          date: "31 feb 2020"
        },    
      {
          image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
          chargingStation:"Ace charging station",
          date: "31 march 2021"
        },
        {
          image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
          chargingStation:"Ace charging station",
          date: "31 march 2021"
        }
    ]
    return (
      <>
         <PhotosUploaded props={photos}/>
      </>
    )
  }
}
