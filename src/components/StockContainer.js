import React from "react";
import Stock from "./Stock";

function StockContainer({list}) {

const stockData = list.map(s => (
  <Stock key={s.id} stock={s} />
))
  return (
    <div>
      <h2>Stocks</h2>
      {stockData}
    </div>
  );
}

export default StockContainer;
