import React from "react";
import blue from "../images/blue1.gif";
import green from "../images/green1.gif";
import went from "../images/went.svg";
import Switch from '@material-ui/core/Switch';

export default function Rekuper(props) {

    const [check, setCheck] = React.useState(false);

    const handleChange = (event) => {
        setCheck(!check)
    }
    return (
        <div>
            <div style={{
                position: "relative",
                backgroundColor: "#bdbdbd",
                borderRadius: 10,
                height: 240,
                width: 280,
                border: "2px solid",
                display: 'flex',
                justifyContent: "center"
            }}>

                <div style={{position: "absolute"}}>
                    <img src={blue}/>

                </div>
                {check&&<div style={{position: "absolute"}}>
                    <img src={green}/>
                </div>}
                <div className="went">
                    <img src={went} width={32} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>
                <div className="went1">
                    <img src={went} width={32} style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>
            </div>
            <Switch
                checked={check}
                onChange={handleChange}
                color={"primary"}
            />


        </div>
    )
}
