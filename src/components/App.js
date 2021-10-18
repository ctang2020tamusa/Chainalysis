import React from 'react';
import coinbase from '../api/coinbase';
import binance from '../api/binance';
import CryptoList from './CryptoList';

class App extends React.Component {
    
    state = {bbb: 'loading', bbs: 'loading', beb: 'loading', bes: 'loading', cbb:'loading', ceb:'loading', cbs:'loading', ces:'loading'};
    componentDidMount() {
        this.interval = setInterval(
            async () => {
                const response1 = await coinbase.get('/BTC-USD/buy');
                const response2 = await coinbase.get('/ETH-USD/buy');
                const response3 = await coinbase.get('/BTC-USD/sell');
                const response4 = await coinbase.get('/ETH-USD/sell');
                
                const response5 = await binance.get('/bookTicker?symbol=BTCBUSD');
                const response6 = await binance.get('/bookTicker?symbol=ETHBUSD');
                
                let cbb = Number(response1.data.data.amount);
                let ceb = Number(response2.data.data.amount);
                let cbs = Number(response3.data.data.amount);
                let ces = Number(response4.data.data.amount);
                
                let bbb = Number(response5.data.askPrice).toFixed(2);
                let bbs = Number(response5.data.bidPrice).toFixed(2);
                let beb = Number(response6.data.askPrice).toFixed(2);                
                let bes = Number(response6.data.bidPrice).toFixed(2);
                
                let flag = ' \u2705'
                
                if (cbb > bbb){
                    bbb = bbb.toString()+flag;
                }else{
                    cbb = cbb.toString()+flag;
                }
                
                if (cbs > bbs){
                    cbs = cbs.toString()+flag;
                }else{
                   bbs = bbs.toString()+flag;
                }
                
                if (ceb > beb){
                    beb = beb.toString()+flag;
                }else{
                    ceb = ceb.toString()+flag;
                }
                
                if (ces > bes){
                    ces = ces.toString()+flag;
                }else{
                   bes = bes.toString()+flag;
                }
                
                
                
                this.setState({bbb: bbb, bbs: bbs, beb: beb, bes: bes, cbb: cbb, ceb: ceb, cbs: cbs, ces: ces});
            }
            , 10000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
       return( 
        <div className='ui container' style={{marginTop: '100px'}}>
            
            <CryptoList cbb={this.state.cbb} cbs={this.state.cbs} ceb={this.state.ceb} ces={this.state.ces} bbb={this.state.bbb} bbs={this.state.bbs} beb={this.state.beb} bes={this.state.bes} />
        </div>); 
    }
    
}

export default App;