import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import billgatesImage from '../images/bill_gates.jpg';
import elonmuskImage from '../images/Elon_Musk.jpg';
import lebronjamesImage from '../images/lebron_james.jpg';
import nbaImage from '../images/nba.jpg';
import nintendoImage from '../images/nintendo.png';

const RandomTweet = () => {

  return (
    <div>
      <div>
        <figure>
        <img className="image" src={billgatesImage}></img>
        <img className="image" src={elonmuskImage}></img>
        <img className="image" src={lebronjamesImage}></img>
        <img className="image" src={nbaImage}></img>
        <img className="image" src={nintendoImage}></img>
        </figure>
      </div>
    <div>
      <button className="btn btn-primary mb-2">Random Tweet</button>
      <button className="btn btn-primary mb-2">Random Tweet</button>
      <button className="btn btn-primary mb-2">Random Tweet</button>
      <button className="btn btn-primary mb-2">Random Tweet</button>
      <button className="btn btn-primary mb-2">Random Tweet</button>
    </div>
    </div>
  )
}


export default RandomTweet;