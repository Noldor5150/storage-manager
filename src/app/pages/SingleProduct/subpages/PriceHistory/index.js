import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PriceHistory({ product }) {
  const options = {
    title: {
      text: product.name
    },
    xAxis: {
      categories: product.priceTimeChange
    },
    series: [
      {
        data: product.priceHistory
      }
    ]
  };
  return (
    <div className="PriceHistory">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default PriceHistory;
