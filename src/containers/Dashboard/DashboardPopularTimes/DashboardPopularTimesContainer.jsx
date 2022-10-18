import DashboardPopularTimes from 'components/Dashboard/DashboardPopularTimes';
import React, { Component } from 'react';

const options_bar = {
    chart: {
      type: "column",
      height: 200,
      width: 280
    },
    credits: false,
  
    title: {
      text: "",
      tickInterval: 1,
    },
    yAxis: {
      visible: false,
      min: 0,
      lineColor: "#19AA69",
      title: {
        text: "",
      },
    },
    xAxis: {
      categories: ["06:00 am", "12:00 pm", "06:00 pm", "12:00 am"],
      crosshair: true,
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
          formatter: function () {
            return this.key;
          }
        },
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Popular Times",
        data: [49.9, 71.5, 106.4, 129.2],
        color: "#4C72B7",
  
      },
    ],
    
  };

class DashboardPopularTimesContainer extends Component {
    render() {
        return (
            <>
            <DashboardPopularTimes

            options={options_bar}

            />
                
            </>
        );
    }
}

export default DashboardPopularTimesContainer;
