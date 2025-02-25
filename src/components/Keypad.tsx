import { nanoid } from "nanoid";
import BoxItem, { BoxItemType } from "./BoxItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { handleSelected } from "../Redux/wordSlice";
import { useRandomWord } from "../hooks/useGetRandomWord";
import { useState } from "react";
import { AlphabetObjType } from "../types/alphabet.types";

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"
];

export default function Keypad() {
  const secretWord = useRandomWord();
  const dispatch: AppDispatch = useDispatch();

  // turn alphabet to Obj
  const alphabetObj: AlphabetObjType[] = alphabet.map(letter => ({
    letter: letter, 
    isCorrect: false,
    status: "default"
  }))

  // set alphabetObj into state
  const [alphabetState, setAlphabetState] = useState(alphabetObj)
  
  function handleLetterClick(letter: BoxItemType['letter']) {
    dispatch(handleSelected(letter))

    // update alphabet state
    setAlphabetState(prevState => 
      prevState.map(state => {
        
        if (state.letter === letter) {
          // Check if the letter exists in secretWord
          const isMatch = secretWord.some(wordObj => 
            wordObj.letter.toLowerCase() === letter.toLowerCase()
          );
          
          if(!isMatch) {
            console.log('wrong answer')
          }

          return { 
            ...state,
            isCorrect: isMatch,
            status: isMatch ? "correct" : "wrong"
          };
        }

        return state
      })
    );
  }

  const letterButton = alphabetState.map(alphabet => {
    
    return (
      <BoxItem 
        key={nanoid()} 
        letter={alphabet.letter.toUpperCase()} 
        handleSelectedLetter={handleLetterClick}
        // setAlphabetState={setAlphabetState}
        status={alphabet.status}
      />
    )
  }) 

  return (
    <div className="Keypad_Container">
      {letterButton}
    </div>
  )
}
