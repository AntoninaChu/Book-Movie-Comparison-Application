import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Search from './components/search'
import Image from './components/image'
import DescriptionContent from './components/descriptionContent'
import Grades from './components/grades'
import VotesButton from './components/votesButton'

function App() {
  return (
    <div>
      <Header name="This site is created to compare books and movies."/>
      <Image source="https://bookforum.ua/wp-content/uploads/2020/01/How-to-format-a-book.jpg"/>
      <DescriptionContent content='This text is styled with some of the text formatting properties. 
                                  The heading uses the text-align, text-transform, and color properties. 
                                  The paragraph is indented, aligned, and the space between characters is specified. 
                                  The underline is removed from this colored "Try it Yourself" link.' />
      <Grades votes1='5' votes2='10'/>
      <VotesButton name='BOOK' />
      <VotesButton name='MOVIE' />
      <Search />
    </div>
  );
}

export default App;
