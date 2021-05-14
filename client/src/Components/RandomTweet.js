import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import billgatesImage from '../images/bill_gates.jpg';
import elonmuskImage from '../images/Elon_Musk.jpg';
import lebronjamesImage from '../images/lebron_james.jpg';
import nbaImage from '../images/nba.jpg';
import nintendoImage from '../images/nintendo.png';


const RandomTweet = () => {
  const [users, setUsers] = useState(null);

  const handleClick = (screen_name) => {
    getRandomTweets(`/api/tweets/users?screen_name=${screen_name}`)
  }

  const getRandomTweets = async (users) => {
    const tweetData = await axios.get(users);
    const response = tweetData.data
    const random = response[Math.floor(Math.random() * response.length)]
    setUsers(random)
  }

  console.log('users', users);

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
        <button className="btn btn-dark mb-2" onClick={() => handleClick(`elonmusk`)}>Elon Musk</button>
        <button className="btn btn-dark mb-2" onClick={() => handleClick(`kingjames`)}>Lebron James</button>
        <button className="btn btn-dark mb-2" onClick={() => handleClick(`NBA`)}>NBA</button>
        <button className="btn btn-dark mb-2" onClick={() => handleClick(`nintendoamerica`)}>Nintendo of America</button>
      </div>
      <div>
        <p key={users?.id}>
        <img src={users?.user?.profile_image_url}></img> @{users?.user?.screen_name} {users?.text} {users?.retweet_count} {users?.favorite_count}
        </p>
      </div>
    </div>
  )
}

export default RandomTweet;