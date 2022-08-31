import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {
  const [listofcoins, setlistofcoins] = useState([]);
  const [Searchword, setSearchword] = useState("");
  useEffect(()=>{
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response)=>{
      console.log(response.data);
      setlistofcoins(response.data.coins);
    });
  },[]);

  const filteredcoins = listofcoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(Searchword.toLowerCase());
  });

  return (
    <div className="App">
      <div className='header'>
        <h1>Welcome To Coin Price Lister :</h1>
        <h1>Coded By Ghost5egy</h1>
        <input name="search" id="search" type="text" placeholder='Coin name...' onChange={(e)=>{setSearchword(e.target.value)}}/>
      </div>
      <div className='body'>
        {filteredcoins.map((coin) => {
            return <Coin name={coin.name} price={coin.price} icon={coin.icon} symbol={coin.symbol}/>;
        })}
      </div>
    </div>
  );
}

export default App;
