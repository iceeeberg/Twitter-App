import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import TwitterCard from './TwitterCard';

const Search = () => {
  const [search, setSearch] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (search === "") {
      alert("You must enter a Twitter user!")
      return;
    }

      axios
        .get(`/api/tweets/users?screen_name=${search}`)
        .then((res) => setTweets(res.data));
  };

  function handleSearchChange(e) {
    const searchTerm = e.target.value
    setSearch(searchTerm)
  }

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
            onChange={handleSearchChange}>
          </input>
          <div className="input-group-append">
            <button className="btn btn-dark mb-2" id="search">Search User</button>
          </div>
        </div>
      </form>
      <div>
        {tweets.map((tweets, idx) =>
          <TwitterCard 
          tweets={tweets}
          key={idx} />
        )}
      </div>
    </div>
  )
}

export default Search;