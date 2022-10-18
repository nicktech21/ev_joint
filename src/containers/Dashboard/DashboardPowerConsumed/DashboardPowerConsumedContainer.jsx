import DashboardPowerConsumed from 'components/Dashboard/DashboardPowerConsumed';
import React, { Component } from 'react';



const options_pie3 = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      width: 480,
      height: 200,
      style: {
        'float': 'center'
      }
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      x: 0,
      y: -20,
      // margin:20,
      itemMarginTop: 20,
      useHTML: true,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    credits: false,
    series: [
      {
        innerSize: "90%",
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Mahindra E Verito <span style='margin-left:70px;'>3000KW</span>",
            y: 35,
            // sliced: true,
            selected: true,
            color: "#19AA69",
          },
          {
            name: "Tata Nexon Ev <span style='margin-left:95px;'>210KW</span>",
            y: 50,
            color: "#4C72B7",
          },
          {
            name: "Tata Tigor Ev <span style='margin-left:95px;'>8000KW</span>",
            y: 5,
            color: "#F8C301",
          },
          {
            name: "Hyundai Kona Electric <span style='margin-left:45px;'>5600KW</span>",
            y: 10,
            color: "#F99600",
          },
        ],
      },
    ],
  };


class DashboardPowerConsumedContainer extends Component {
    render() {
        return (
            <>
                <DashboardPowerConsumed
                
                    options={options_pie3}

                />


            </>
        );
    }
}

export default DashboardPowerConsumedContainer;
