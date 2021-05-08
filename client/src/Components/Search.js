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
        .then(res => {
          setSearch(user = () => {
            return res.data.username
          });
          console.log(res.data.username)
        });
    };
  };

  return (
    <div>
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
        onSubmit={handleSubmit}
      >Search Tweet
      </button>
    </div>
  )
}

export default Search;