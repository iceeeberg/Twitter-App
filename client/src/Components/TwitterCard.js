import React from 'react';
import { Card } from "react-bootstrap";
import twitterHeart from '../images/twitter_heart.jpg'
import twitterRetweet from '../images/retweet.png';

const TwitterCard = ({tweet}) => {

  return (
    <Card id='tweet-card' key={tweet.id} className="bg-dark text-white">
      <Card.Header>
        <Card.Img className='rounded-circle' variant='top' src={tweet.user.profile_image_url}
          style={{ height: 70, width: 70 }} />
      </Card.Header>
      <Card.Body>
        <Card.Title>@{tweet.user.screen_name}</Card.Title>
        <Card.Text>{tweet.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="icon">
          <img src={twitterRetweet} style={{height: 20, width: 25}} ></img>
            {tweet.retweet_count}
        </small>
        <small className="icon">
          <img src={twitterHeart}  style={{height: 20, width: 25}} ></img>
          {tweet.favorite_count}
        </small>
      </Card.Footer>
    </Card>
  )
}

export default TwitterCard;