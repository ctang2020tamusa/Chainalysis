import React from 'react';

const CryptoList = (props) => {
    let flag = '\u2705'
    return (<div>
                CoinBase
                <div float='right'>
                <div>Bitcoin Buy: {props.cbb}</div>
                <div>Bitcoin Sell: {props.cbs}</div>
                </div>
                
                <div>
                <div>Ethereum Buy: {props.ceb}</div>
                <div>Ethereum Sell: {props.ces}</div>
                </div>
                
                <div><b>--------------------</b></div>
                
                Binance
                <div>
                <div>Bitcoin Buy: {props.bbb}</div>
                <div>Bitcoin Sell: {props.bbs}</div>
                </div>
                
                <div>
                <div>Ethereum Buy: {props.beb}</div>
                <div>Ethereum Sell: {props.bes}</div>
                </div>
                <div><b>--------------------</b></div>
                <div>page refresh every 10 seconds, recommendations are {flag}</div>
                
           </div>
           )
};

export default CryptoList;