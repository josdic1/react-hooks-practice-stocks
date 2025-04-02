import React from "react";
import Stock from "./Stock";

function PortfolioContainer({port,onStockClick}) {

  const portData = port.map(s => (
    <Stock key={s.id} stock={s} onStockClick={onStockClick}/>
  ))


  return (
    <div>
      <h2>My Portfolio</h2>
      {
portData
      }
    </div>
  );
}

export default PortfolioContainer;
