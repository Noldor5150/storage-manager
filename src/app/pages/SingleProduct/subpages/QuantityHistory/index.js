import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function QuantityHistory({ product }) {
  const options = {
    title: {
      text: product.name
    },
    xAxis: {
      categories: product.quantityTimeChange
    },
    series: [
      {
        data: product.quantityHistory
      }
    ]
  };
  return (
    <div className="PriceHistory">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default QuantityHistory;
