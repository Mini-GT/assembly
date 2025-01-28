import { nanoid } from "nanoid";
import BoxItem, { BoxItemType } from "./BoxItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../ReduxStore/store";
import { handleSelected } from "../ReduxStore/wordSlice";

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"
];

export default function Keypad() {
  const secretWord = useSelector((state: RootState) => state.secretWord.value)
  const dispatch: AppDispatch = useDispatch();

  function handleSelectedLetter(letter: BoxItemType['letter']) {
    dispatch(handleSelected(letter))
  }

  const letterButton = alphabet.map(letter => {
    return (
      <BoxItem key={nanoid()} letter={letter} handleSelectedLetter={handleSelectedLetter} />
    )
  }) 

  return (
    <div className="Keypad_Container">
      {letterButton}
    </div>
  )
}
