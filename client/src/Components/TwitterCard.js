import React from 'react';
import { Card } from "react-bootstrap";
import twitterHeart from '../images/twitter_heart.png';
import twitterRetweet from '../images/retweet.png';

const TwitterCard = ({tweet}) => {

  return (
    <Card key={tweet.id} className="bg-dark text-white">
      <Card.Body>
        <Card.img variant="top" src={tweet.user.profile_image_url}></Card.img>
        <Card.Title>@{tweet.user.screen_name}</Card.Title>
        <Card.Text>{tweet.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="icon">
          <img src={twitterRetweet}></img>
            {tweet.retweet_count}
        </small>
        <small className="icon">
          <img src={twitterHeart}></img>
          {tweet.favorite_count}
        </small>
      </Card.Footer>
    </Card>
  )
}

export default TwitterCard;