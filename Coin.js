import React from 'react';

function Coin({name, price, icon, symbol}) {
  return (<div className='coin'>
        <h1>Name : {name}</h1>
        <h2>Price : {price}</h2>
        <h1>Icon : <img src={icon} alt={name}/></h1>
        <h1>Sympol : {symbol}</h1>
    </div>);
}

export default Coin;