import React, { useEffect } from 'react';
import { checkWin } from '../Helpers/Helpers.js'

function Popup({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }){


    let finalMessage = '';
    let finalMessageReveal = '';
    let playable = true;

    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ){
        finalMessage = 'Congrats! You Guessed it Right. :)';
        playable = false;
    } else if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ){
        finalMessage = "Oops! You Guessed it Wrong. :(";
        finalMessageReveal = `...the word was ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));


    return (
        <div className="popup-container" style = {finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageReveal}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
}

export default Popup;