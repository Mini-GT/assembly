import { nanoid } from "nanoid";
import Alphabet from "./Alphabet";

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"
];

export default function Keypad() {
  const letterButton = alphabet.map(letter => {
    return (
      <Alphabet key={nanoid()} letter={letter} />
    )
  }) 

  return (
    <div className="Keypad_Container">
      {letterButton}
    </div>
  )
}
