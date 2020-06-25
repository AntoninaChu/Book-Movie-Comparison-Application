import React from 'react';
import './App.css';
import Header from './components/header'
import Search from './components/search'
import Image from './components/image'
import DescriptionContent from './components/descriptionContent'
import Grades from './components/grades'
import VotesButton from './components/votesButton'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Header name="This site is created to compare books and movies."/>
          <Search/>
          <Switch>
            <Route path='/image' component={Image} />
            <Route path='/description' component={DescriptionContent} />
            <Route path='/vote' component={VotesButton} />
            <Route path='/grades' component={Grades} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
