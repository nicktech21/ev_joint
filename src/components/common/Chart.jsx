import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ type, options }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={type}
      options={options}
    />
  );
};

export default Chart;
