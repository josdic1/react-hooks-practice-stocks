import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer({list}) {



  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          list={list}
    
          />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
