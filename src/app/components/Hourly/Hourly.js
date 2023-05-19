import React,{Component} from "react";
import "./Hourly.css";
// import night from '/Hourly/night.png'


import icon_data from "@/app/general.json";
import image_data from "@/app/dict.json";


export default function Hourly(props){
    const description="";
    const d=String(props.tt);
    const T=d.slice(11,16);

    // console.log(props.time);
    // console.log(props.temperature_2m);
    if(props.weather!=undefined){
    return(
        <div className="Container" >
            <div className="Time">{T}</div>
            <div className="C1"><div className="Temp">{props.temperature_2m}<p className="deg">o</p></div>
            <div className="iconN"><img className="iconN" src={image_data[icon_data[props.weather][0]]}/></div></div>
            <div className="Description">{description}</div>
            <div className="iconS" ><img className="iconH" src="/Hourly/humid.png"/><p style={{fontSize:"15px",position:"relative",left:"3%",top:"3px"}}>{props.rainfall}%</p></div>
            <div className="iconS"><img className="iconH" src="Hourly/wind.png"/><p style={{fontSize:"15px",position:"relative",left:"3%",top:"3px"}}>{props.wind}<font style={{fontSize:"10px"}}>km/h</font></p></div>
        </div>
    )
}
}