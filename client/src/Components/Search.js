import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState("");
  const [tweet, setTweet] = useState([])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("You must enter a Twitter user!")
    } else {
      axios
        .get(`/api/tweets/users`)
        .then((res) =>
          console.log(res.data.screen_name))
    }
  };

  return (
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
  )
}

export default Search;