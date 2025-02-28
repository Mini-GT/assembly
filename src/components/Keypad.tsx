import { nanoid } from "nanoid";
import BoxItem, { BoxItemType } from "./BoxItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { handleSelected } from "../Redux/wordSlice";
import { useRandomWord } from "../hooks/useGetRandomWord";
import { useState } from "react";
import { AlphabetObjType } from "../types/alphabet.types";
import { useLanguage } from "../context/LanguageContext";
import { getFarewellText } from "../utils/farewellText";
import { useFarewellText } from "../context/FarewellContext";

type KeypadProps = {
  isWon: boolean
  isLost: boolean
}

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"
];

const clickedLetters: string[] = []

export default function Keypad({
  isWon,
  isLost
}: KeypadProps) {
  const secretWord = useRandomWord();
  const dispatch: AppDispatch = useDispatch();
  const { languages, setLanguages } = useLanguage()
  const [wrongGuessIndex, setWrongGuessIndex] = useState(0);
  const { setFarewellText } = useFarewellText()

  // turn alphabet to Obj
  const alphabetObj: AlphabetObjType[] = alphabet.map(letter => ({
    letter: letter, 
    isCorrect: false,
    status: "default"
  }))

  // set alphabetObj into state
  const [alphabetState, setAlphabetState] = useState(alphabetObj)
  function handleLetterClick(letter: BoxItemType['letter']) {

    // make the button unclickable if letter is already clicked or the game is done
    const result = clickedLetters.some(clickedLetter => clickedLetter === letter)
    if(result || isWon || isLost) return;

    // send to redux
    dispatch(handleSelected(letter))

    // check if the letter exists in secretWord
    const isMatch = secretWord.some(wordObj => 
      wordObj.letter.toLowerCase() === letter.toLowerCase()
    );
    
    // update alphabet state
    setAlphabetState(prevState => 
      prevState.map(state => {
        if(state.letter === letter) {
          // store the click letters
          clickedLetters.push(letter)

          return { 
            ...state,
            isCorrect: isMatch,
            status: isMatch ? "correct" : "wrong"
          };
        }
        return state
      })
    );

    // only update languages if it's not a match
    if(!isMatch && wrongGuessIndex < languages.length) {
      setLanguages(prevLanguages => {
        // create a new array with the object at wrongGuessIndex updated
        return prevLanguages.map((language, index) => {
          if (index === wrongGuessIndex) {
            const farewellText = getFarewellText(language.name)
            setFarewellText(farewellText)
            return { ...language, isWrong: true };
          }
          return language;
        });
      });

       // increment the index for the next wrong guess
       setWrongGuessIndex(prev => prev + 1);
    };

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
