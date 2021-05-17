import React, { useState } from "react";
import TwitterCard from './twitterCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import billgatesImage from '../images/bill_gates.jpg';
import elonmuskImage from '../images/Elon_Musk.jpg';
import lebronjamesImage from '../images/lebron_james.jpg';
import nbaImage from '../images/nba.jpg';
import nintendoImage from '../images/nintendo.png';

const RandomTweet = () => {
  const [tweets, setTweets] = useState(null);

  const handleClick = (screen_name) => {
    getRandomTweets(`/api/tweets/users?screen_name=${screen_name}`)
  }

  const getRandomTweets = async (tweets) => {
    const tweetData = await axios.get(tweets);
    const response = tweetData.data
    const random = response[Math.floor(Math.random() * response.length)]
    setTweets(random)
  }

  return (
    <div className="container">
      <div>
        <br></br>
        <h4 className="font-weight-bold">
          <p className="text-center">
            Click a button to display a random popular tweet from the Twitter users listed below.
        </p>
        </h4>
      </div>
      <div className="row">
        <div className="col text-center">
          <figure>
            <img className="img-thumbnail" style={{ height: 200, width: 200 }} src={billgatesImage}></img>
            <img className="img-thumbnail" style={{ height: 200, width: 200 }} src={elonmuskImage}></img>
            <img className="img-thumbnail" style={{ height: 200, width: 200 }} src={lebronjamesImage}></img>
            <img className="img-thumbnail" style={{ height: 200, width: 200 }} src={nbaImage}></img>
            <img className="img-thumbnail" style={{ height: 200, width: 200 }} src={nintendoImage}></img>
          </figure>
        </div>
      </div>
      <div className="vol-ctr">
        <button
          className="btn btn-dark mb-2" id='billgates' onClick={() => handleClick(`billgates`)}>Bill Gates
        </button>
        <button
          className="btn btn-dark mb-2" id='elonmusk' onClick={() => handleClick(`elonmusk`)}>Elon Musk
        </button>
        <button
          className="btn btn-dark mb-2" id='kingjames' onClick={() => handleClick(`kingjames`)}>Lebron James
        </button>
        <button
          className="btn btn-dark mb-2" id='NBA' onClick={() => handleClick(`NBA`)}>NBA
        </button>
        <button
          className="btn btn-dark mb-2" id='Nintendo' onClick={() => handleClick(`nintendoamerica`)}>
          Nintendo of America
        </button>
      </div>
      <div>
        {tweets !== null ?
          <TwitterCard tweets={tweets} /> :
          null}
      </div>
    </div>
  )
}

export default RandomTweet;