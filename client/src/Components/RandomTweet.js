import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import billgatesImage from '../images/bill_gates.jpg';
import elonmuskImage from '../images/Elon_Musk.jpg';
import lebronjamesImage from '../images/lebron_james.jpg';
import nbaImage from '../images/nba.jpg';
import nintendoImage from '../images/nintendo.png';


const RandomTweet = () => {
  const [tweets, setTweets] = useState([]);

  const handleClick = (screen_name) => {
      getRandomTweets(`/api/tweets/random?screen_name=${screen_name}`)
    }

  const getRandomTweets = async (tweets) => {
    const tweetData = await axios.get(tweets);
    const response = tweetData.data.statuses
    const random = response(Math.floor(Math.Random() * response.length))
    setTweets(random)
    console.log('setTweets', setTweets)
  }


    return (
      <div className="row">
        <div className="col-sm-3">
          <figure>
            <img className="img-thumbnail" src={billgatesImage}></img>
            <img className="img-thumbnail" src={elonmuskImage}></img>
            <img className="img-thumbnail" src={lebronjamesImage}></img>
            <img className="img-thumbnail" src={nbaImage}></img>
            <img className="img-thumbnail" src={nintendoImage}></img>
          </figure>
        </div>
        <div>
          <button className="btn btn-dark mb-2" onClick={() => handleClick(`billgates`)}>Bill Gates</button>
          <button className="btn btn-dark mb-2">Elon Musk</button>
          <button className="btn btn-dark mb-2">Lebron James</button>
          <button className="btn btn-dark mb-2">NBA</button>
          <button className="btn btn-dark mb-2">Nintendo</button>
        </div>
        <div>
        {tweets.map((tweet) =>
        <p key={tweet.id} >{tweet.status.text}</p>
        )}
      </div>
      </div>
    )
  }

export default RandomTweet;