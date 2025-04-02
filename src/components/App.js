import { useState, useEffect } from 'react';
import Header from "./Header";
import MainContainer from "./MainContainer";



function App() {

  const [list, setList] = useState([])

useEffect(() => {
  fetchData()
},[])

async function fetchData() {
  try {
    const r= await fetch(`http://localhost:3001/stocks`)
    if(!r.ok) {
      throw new Error("💥 Error");
    }
    const data = await r.json()
    setList(data)
  }catch (error) {console.error("❌ Caught error:", error);}
}

  return (
    <>
    <div>
      <Header />
      <MainContainer list={list}/>
    </div>
    </>
  );
}

export default App;
