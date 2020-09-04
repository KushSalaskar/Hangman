import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Popup from './Components/Popup';
import Notification from './Components/Notification';
import { showNotification as show } from './Helpers/Helpers.js';


const words = ['application', 'programming', 'interface', 'gadgets', 'cellphone', 'iphone', 'apple', 'samsung'];
let selectedWord = words[Math.floor(Math.random()*words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90){
        const letter = key.toLowerCase();

        if( selectedWord.includes(letter)){
          if (!correctLetters.includes(letter)){
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
            if (!wrongLetters.includes(letter)){
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);
  
  
  function playAgain(){
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random()*words.length);
    selectedWord = words[random];
  }
  
  return (
    <div>
      <Header />
        <div className='game-container'>
          <Figure wrongLetters={wrongLetters}/>
          <WrongLetters wrongLetters={wrongLetters}/>
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain = {playAgain}/>
        <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
