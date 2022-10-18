import DashboardTimeConsumed from 'components/Dashboard/DashboardTimeConsumed';
import React, { Component } from 'react';


const options_pie2 = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      width: 440,
      height: 200,
      style: {
        'float': 'left'
      }
    },
    credits: false,
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
    series: [
      {
        innerSize: "90%",
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Charging time <span style='margin-left:70px;'>250 H : 46 Min</span>",
            y: 30.41,
            // sliced: true,
            selected: true,
            color: "#9A1818",
          },
          {
            name: "Idle time <span style='margin-left:160px;'>2 H</span>",
            y: 70.84,
            color: "#F8C301",
          },
        ],
      },
    ],
  };


class DashboardTimeConsumedContainer extends Component {
    render() {
        return (
            <>
                <DashboardTimeConsumed
                options={options_pie2}
                />


               
            </>
        );
    }
}

export default DashboardTimeConsumedContainer;
