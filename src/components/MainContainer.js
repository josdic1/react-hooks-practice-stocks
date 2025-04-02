import {useState } from 'react';
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer({list}) {

const [ port, setPort ] = useState([])
const [ filt, setFilt ] = useState(list)

function onStockAdd(val) {
  setPort([...port, val])
}

function onStockRemove(val) {
  setPort(port.filter(p => (
    p.id !== val.id
  )))
}

function handleSort(val) {
let sortedList = []
if( val === "Alphabetically" ) {
  sortedList= [...filt.length === 0 ? list : filt].sort((a, b) => a.name.localeCompare(b.name)) 
} else {
  if( val === "Price" ) {
    sortedList= [...filt.length === 0 ? list : filt].sort((a, b) => b.price - a.price) 
  } else {
    sortedList = [...list]
  }
}
setFilt(sortedList)

}

function handleFilter(val) {
const updatedList = list.filter(l => (
  l.type === val
))
setFilt(updatedList)
}


  return (
    <div>
      <SearchBar handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          list={filt.length === 0 ? list : filt}
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
