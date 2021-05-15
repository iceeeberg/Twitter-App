import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import TwitterCard from './twitterCard';

const Search = () => {
  const [search, setSearch] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("You must enter a Twitter user!")
    } else {
      axios
        .get(`/api/tweets/users?screen_name=${search}`)
        .then((res) => setTweets(res.data))
    }
  };

  console.log('tweets', tweets)

  return (
    <div>
      <div>
        <br></br>
        <h4 className="font-weight-bold">
          <p className="text-center">
            Search a Twitter user by username and begin the hunt for 7 popular tweets from the searched user.
        </p>
        </h4>
        <br></br>
      </div>
      <form className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <input
            className="form-control"
            placeholder="Search Username..."
            type="text"
            name="user"
            onChange={(e) => setSearch(e.target.value)}>
          </input>
          <div className="input-group-append">
            <button className="btn btn-dark mb-2" id="search">Search User</button>
          </div>
        </div>
      </form>
      <div>
        {tweets.map((tweet) =>
        <TwitterCard tweet={tweet} />
          // <p key={tweet.id}> <img src={tweet.user.profile_image_url}></img> @{tweet.user.screen_name} {tweet.text} {tweet.favorite_count} {tweet.retweet_count}</p>
        )}
      </div>
    </div>
  )
}

export default Search;