import React, { useState } from "react";
import TwitterCard from './TwitterCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import billgatesImage from '../images/bill_gates.jpg';
import elonmuskImage from '../images/Elon_Musk.jpg';
import lebronjamesImage from '../images/lebron_james.jpg';
import nbaImage from '../images/nba.jpg';
import nintendoImage from '../images/nintendo.png';

const RANDOM_USERS = [
  'Bill Gates', 
  'Elon Musk', 
  'Lebron James', 
  'NBA', 
  'Nintendo of America'];

const RANDOM_IMAGES = [
  billgatesImage, 
  elonmuskImage, 
  lebronjamesImage, 
  nbaImage, 
  nintendoImage];

const RandomTweet = () => {
  const [tweets, setTweets] = useState(null);

  const handleClick = (screen_name) => {
    getRandomTweets(`/api/tweets/users?screen_name=${screen_name}`)
  };

  const getRandomTweets = async (tweets) => {
    const tweetData = await axios.get(tweets);
    const response = tweetData.data
    const random = response[Math.floor(Math.random() * response.length)]
    setTweets(random);
  };

  const createRandomButton = () => {
     return RANDOM_USERS.map(userName =>{
      let id = userName.split(' ').join('').toLocaleLowerCase();
      if (userName === 'Lebron James'){
        id = 'kingjames'
      }
      if (userName === 'Nintendo of America'){
        id = 'nintendoamerica'
      }

      return (
        <button
        className="btn btn-dark mb-2" 
        key={userName}
        onClick={() => handleClick(id)}>{userName}
        </button>
      );
    });
  }

  const createRandomImages = () => {
    return RANDOM_IMAGES.map((img, idx) => {
      return (
        <img 
        key={idx}
        className="img-thumbnail" 
        style={{ height: 200, width: 200 }} 
        src={img}>
        </img>
      );
    });
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
            {createRandomImages()}
          </figure>
        </div>
      </div>
      <div className="vol-ctr">
        {createRandomButton()}
      </div>
      <div>
        {tweets && <TwitterCard tweets={tweets} />}
      </div>
    </div>
  )
}

export default RandomTweet;