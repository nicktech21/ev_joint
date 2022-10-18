// import Card from "components/common/Card";
// import CardContent from "components/common/CardContent";
import React from 'react';
import DashboardRevenue from "components/Dashboard/DashboardRevenue";





let options = {
    chart: {
        type: "spline",
        lineColor: "#000000",
        //  width:1200

    },
    credits: false,
    title: {
        text: "",
        tickInterval: 1,
    },
    yAxis: {
        lineColor: "#19AA69",
        title: {
            text: "",
        },
    },

    //   tooltip: {
    //     crosshairs: true,
    //     shared: true
    // },
    plotOptions: {
        spline: {
            marker: {
                radius: 0,
                // lineColor: '#000000',
                // lineWidth: 1
            },
        },
    },
    xAxis: {
        categories: [
            "Dec 01",
            "Dec 02",
            "Dec 03",
            "Dec 04",
            "Dec 05",
            "Dec 06",
            "Dec 07",
            "Dec 08",
            "Dec 09",
            "Dec 10",
            "Dec 11",
            "Dec 12",
            "Dec 13",
            "Dec 14",
            "Dec 15",
            "Dec 16",
        ],
        lineColor: "#19AA69",
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0
    },

    series: [
        {
            name: "Charging",
            data: [
                200, 210, 190, 400, 650, 420, 450, 750, 800, 650, 450, 390, 500, 390,
                350, 370,
            ],
            lineColor: "#19AA69",
        },
    ],
};

class DashboardRevenueContainer extends React.Component {

    render() {

        
        return (
            <>
               <DashboardRevenue
                            options={options}
                        />
            </>
        );
    }
}



export default DashboardRevenueContainer;

