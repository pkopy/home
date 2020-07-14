
import React from "react";
import blue from "../images/blue1.gif";
import green from "../images/green1.gif";
import went from "../images/went.svg";

export default function Rekuper(props) {
    return (
        <div style={{position: "relative", backgroundColor:"#bdbdbd", borderRadius:10, height:240, width: 280, border: "2px solid", display: 'flex', justifyContent:"center"}}>

                <div style={{position: "absolute"}}>
                    <img src={blue}/>

                </div>
                <div style={{position: "absolute"}}>
                    <img src={green}/>
                </div>
                <div className="went">
                    <img src={went} width={32} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>
                <div className="went1">
                    <img src={went} width={32} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>


        </div>
    )
}
