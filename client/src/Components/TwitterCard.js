import React from 'react';
import { Card } from 'react-bootstrap';
import twitterHeart from '../images/twitter_heart.jpg';
import twitterRetweet from '../images/retweet.png';

const TwitterCard = ({ tweets }) => {
  return (
    <Card className="bg-dark text-white mb-2" style={{ width: '72rem' }}>
      <Card.Header>
        <Card.Img
          className="rounded-circle"
          variant="top"
          src={tweets.user.profile_image_url}
          style={{ height: 70, width: 70 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>@{tweets.user.screen_name}</Card.Title>
        <Card.Text>{tweets.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {tweets.retweet_count}
        <img src={twitterRetweet} style={{ height: 40, width: 45 }} />
        {tweets.favorite_count}
        <img src={twitterHeart} id="favorite-icon" style={{ height: 30, width: 35 }} />
      </Card.Footer>
    </Card>
	);
};

export default TwitterCard;
