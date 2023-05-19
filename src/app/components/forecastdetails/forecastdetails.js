import "./forecastdetails.css";

import icon_data from "@/app/general.json";
import image_data from "@/app/dict.json";


export default function ForecastDetails(props) {
    if(props.weather!=undefined){
    return(
        <div className="forecastdetails-content">
            <div className="details-left">
                <div className="forecast-day-details">{props.day}<sup>{props.date}</sup></div>
                <div className="fc-more-details">
                    <div className="detials"><h1>Max-Temperature:</h1><div className="mr-auto"></div><p className="details-value">{props.Max}<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Min-Temperature:</h1><div className="mr-auto"></div><p className="details-value">{props.Min}<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Rainfall</h1><div className="mr-auto"></div><p className="details-value">{props.rain}<sup>%</sup></p></div>
                    <div className="detials"><h1>Sunrise</h1><div className="mr-auto"></div><p className="details-value">{props.rise}</p></div>
                    <div className="detials"><h1>Sunset</h1><div className="mr-auto"></div><p className="details-value">{props.set}</p></div>
                </div>
            </div>
            <div className="details-right">
                <img src={image_data[icon_data[props.weather][0]]} className="details-img"></img>
                <div className="temp-more-details">
                    <h1 className="details-temp">{props.Temp}<sup><sup>o</sup>C</sup></h1>
                    <p className="feellike-p">Feels like: {props.fell_like}</p>
                    <p>{icon_data[props.weather][1]}</p>
                </div>
            </div>
        </div>
    )
}
}