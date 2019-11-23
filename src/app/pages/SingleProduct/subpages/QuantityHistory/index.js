import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";

function QuantityHistory({ product }) {
  const options = {
    title: {
      text: product.name
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
