import "./dailyforecast.css";
import icon_data from "@/app/daily_icon.json";

export default function DailyForecast(props) {
    const d = new Date(props.time);
    const day=d.toString().slice(0,3);
    const dat=d.toString().slice(4,10);

    const selectDailyFC = () => {
        props.catchClickDate(props.i);
    }

    const inta=parseInt(props.temp);
    // console.log(inta);

    const icon=[];
    if(inta <=18){
        icon.push("cold");
    }else if (inta <=26){
        icon.push("normal");
    }
    else if (inta <=34){
        icon.push(["moderate"]);
    }
    else {
        icon.push(["high"]);
    }
    // console.log(icon);

    return(
        <div className="daily-forecast-content" onClick={selectDailyFC}>
            <div className="text">
                <h4>{day}</h4>
            </div>
            <div className="side">
                <h3>{props.temp}<sup><sup>o</sup>C</sup></h3>
                <img src={icon_data[icon[0]]} alt="React Logo" className="img" />
            </div>
            <div className="text">
                <p>{dat}</p>
            </div>
        </div>
    )
}