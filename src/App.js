import React from 'react';
import 'milligram';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import CardsDetails from './pages/CardsDetails'
import CardsList from './pages/CardsList'
import NotFound from './pages/Notfound'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1> Magic The Gathering</h1>
        <Navbar/>
      </header>
      <Switch>
        <Route path= '/' exact component= {Home}/>
        <Route path= '/cards' exact component= {CardsList}/>
        <Route path= '/cards/:id' exact component= {CardsDetails}/>
        <Route component= {NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
