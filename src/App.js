import React , {useState} from "react";
import "./styles.css"


function App(){
  const [minval ,setMinVal] =useState(0);
  const [maxval ,setMaxVal] =useState(10);
  const [randomNum ,setRandomNum] =useState(5);
  const giveRandomNumber=()=>{
    setRandomNum(Math.floor(Math.random()*(maxval-minval +1)+minval))
  }


  return (
    <div className="app">
      <h2>Random Sayı Oluşturma</h2>
      <div className="container">
        <div className="randomNum">
          <p>Random Numara : <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
          <p>Min:</p>
          <input
          type="number"
          value={minval}
          onChange={e => setMinVal(+e.target.value)}
          />
          </div>
          <div>
          <p>Max:</p>
          <input
          type="number"
          value={maxval}
          onChange={e => setMaxVal(+e.target.value)}
          />
          </div>
        </div>
        <div className="button">
        <button  onClick={giveRandomNumber}>Random Numara Al</button>
        </div>
      </div>
    </div>
  );
  }

export default App;
