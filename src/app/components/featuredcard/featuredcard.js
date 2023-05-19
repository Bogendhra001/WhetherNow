import "./featuredcard.css";

import icon_data from "@/app/general.json";
import image_data from "@/app/dict.json";

export default function FeaturedCard(props) {
    const d=new Date(props.time);
    const s=new Date();


    // console.log('Hello form featurecard');
    // console.log(props.temp);

    const cityName = props.featureData[0];
    const countryIndia = props.featureData[2];
    // console.log(props.wecode);
    // console.log(icon_data[props.wecode][0]);
    if(props.wecode!=undefined){

    return(
        <div className="featurecard">
            <div className="card-details">
                <div className="card-details-place">
                    <h1 className="place-heading text-center">{cityName}, {countryIndia}</h1>
                </div>
                <div className="card-more-details">
                    <p className="text-center">{s.toDateString().slice(0,3)}, {s.toDateString().slice(4,10)} 2023</p>
                </div>
            </div>
            <div className="temperature-details">
                <div className="icon-temp-details">
                    <img src={image_data[icon_data[props.wecode][0]]} alt="icon" className="temp-icon"></img>
                    <div className="temp-details">
                        <h1 className="temp-num">{props.temp}<sup><sup>o</sup>C</sup></h1>
                        <p className="temp-feel">Feels Like: {props.fell_like}</p>
                        <h1 className="text-center mt-2">{icon_data[props.wecode][1]}</h1>
                    </div>
                </div>
                <div className="pre-hum-wi">
                    <div className="pre-hum-wi-text" style={{margin:"1.7rem"}}><img src="/icons/water-48-white.png" alt="icon" className="pre-hum-wi-icon"></img> Humidity {props.humidity}%</div>
                    <div className="pre-hum-wi-text" style={{margin:"1.7rem"}}><img src="/icons/wind-48-white.png" alt="icon" className="pre-hum-wi-icon"></img>Wind {props.wind}Km/h</div>
                    <div className="pre-hum-wi-text" style={{margin:"1.7rem"}}><img src="/icons/pressure-48-white.png" alt="icon" className="pre-hum-wi-icon"></img> Pressure {props.pressure} hPa</div>
                </div>
            </div>
        </div>
    )
}
}