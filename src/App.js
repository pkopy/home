import React from 'react';
import logo from './logo.svg';
import './App.css';
import blue from './images/blue1.gif'
import green from './images/green1.gif'
import went from './images/went.svg'

function App() {
    return (
        <div style={{position: "relative"}}>

            <div style={{position: "absolute"}}>
                <img src={blue}/>
            </div>
            <div style={{position: "absolute"}}>
                <img src={green}/>
            </div>
            <div className="went" >
                <img src={went} width={32} style={{marginLeft:'auto', marginRight:'auto'}}/>
            </div>
        </div>

    );
}


export default App;
