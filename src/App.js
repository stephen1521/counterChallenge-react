import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [stars, setStars] = useState([]);
  const createStar = () => {
    return (
      <div className='stars'>
        *
      </div>
    )
  }
  const handleAdd = () => {
    setCount(count + 1);
    setStars([...stars, createStar()])
  }
  
  const handleMinus = () => {
    if(count !== 0){
      const end = stars.length - 1;
      setCount(count - 1);
      setStars(oldArr => {
        return oldArr.filter((star, i) => {
          if(i !== end){
            return star;
          }
        });
      })
    }
  }
  return (
    <div id="outer-div">
        <div id="inner-div">
            <div id="banner">
                <h3 id="logo">LOGO</h3>
                <h3 id="menu">menu</h3>
            </div>
            <div id="display">
                <button id="minus" onClick={() => handleMinus()}>remove 1</button>
                <div id="number-display">{count}</div>
                <button id="add" onClick={() => handleAdd()}>add 1</button>
            </div>
            <div id="stars-display">
              {stars}
            </div>
        </div>
    </div>
  );
}

export default App;
