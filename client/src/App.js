import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import './App.css';
import Home from './Components/Home';
import Search from './Components/Search';
import RandomTweet from './Components/RandomTweet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/search" exact component={Search}/>
            <Route exact path="/randomtweet" exact component={RandomTweet}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;