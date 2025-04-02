import {useState } from 'react';
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer({list, onStockClick}) {

const [ port, setPort ] = useState([])


function onStockAdd(val) {
  setPort([...port, val])
}

function onStockRemove(val) {
  setPort(port.filter(p => (
    p.id !== val.id
  )))
}


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          list={list}
          onStockClick={onStockAdd}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer onStockClick={onStockRemove} port={port}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
