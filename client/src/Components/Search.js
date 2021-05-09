import React, {useState} from "react";
import axios from 'axios';

const Search = ({ user }) => {
  const [search, setSearch] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("You must enter a Twitter user!")
    } else {
      axios
        .get('/api/tweets/users')
        .then((res) =>
          console.log(res.data.data[0].username))
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