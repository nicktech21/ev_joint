import Reviews from 'components/CustomerTable/Reviews/Reviews'

import React, { Component } from 'react'

export default class ReviewsContainer extends Component {
  render() {
    const arr =[
        {
            location:"Reliance Energy Electric Vehicle Charging Station, Andheri",
            feedback: `Best Charging Experience, DC fast charger for public Charging
            services, Near to Mumbai international, Easy accessible and Double
            charging gun, Two EV of GB/T can be charged simultaneously, Use
            this charger for lowest and best charging prices, directly from
            volttic Mobile app.`,
            dp:"/images/dp.png",
            name:"Rachel Green"
          },
          {
            location:"Reliance Energy Electric Vehicle Charging Station, Andheri",
            feedback: `Best Charging Experience, DC fast charger for public Charging
            services, Near to Mumbai international, Easy accessible and Double
            charging gun, Two EV of GB/T can be charged simultaneously, Use
            this charger for lowest and best charging prices, directly from
            volttic Mobile app.`,
            dp:"/images/dp.png",
            name:"Rachel Green"
          }
    ]
    return (
      <>
        
        <Reviews props={arr} />
      </>
    )
  }
}
