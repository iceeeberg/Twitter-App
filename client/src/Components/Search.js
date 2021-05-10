import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

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
      // console.log(res.data.status.text)
    }
  };

console.log('tweets', tweets)

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Username..."
            type="text"
            name="user"
            onChange={(e) => setSearch(e.target.value)}
          >
          </input>
          <br></br>
          <button
            className="btn btn-primary mb-2"
          >Search User
      </button>
        </form>
      </div>
      <div>
        {tweets.map((tweet) =>
        <p key={tweet.id} >@{tweet.user.screen_name} {tweet.text} {tweet.favorite_count} {tweet.retweet_count}</p>
        )}
      </div>
    </div>
  )
}

export default Search;