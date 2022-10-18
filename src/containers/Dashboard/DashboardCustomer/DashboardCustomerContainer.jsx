
import DashboardCustomer from "components/Dashboard/DashboardCustomer";
import React, { Component } from 'react';



const options_pie1 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        width: 408,
        height: 200,
        style: {
            'float': 'left'
        }
    },
    title: {
        text: "",
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
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
    accessibility: {
        point: {
            valueSuffix: "%",
        },
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
                    name: "Returning Customers <span style='margin-left:70px;'>400</span>",
                    y: 30.41,
                    // sliced: true,
                    selected: true,
                    color: "#28D0DC",
                },
                {
                    name: "Unique Customers <span style='margin-left:85px;'>100</span>",
                    y: 70.84,
                    color: "#4C72B7",
                },
            ],
        },
    ],
};

const Img404 = "https://miro.medium.com/max/720/1*DeBkx8vjbumpCO-ZkPE9Cw.png";

class DashboardCustomerContainer extends Component {
    render() {
        return (
            <>
                <DashboardCustomer
                    options={options_pie1}
                    Img404={Img404}

                />


            </>
        );
    }
}

export default DashboardCustomerContainer;
