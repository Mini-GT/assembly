import { nanoid } from "nanoid";
import BoxItem from "./BoxItem";

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"
];

export default function Keypad() {
  const letterButton = alphabet.map(letter => {
    return (
      <BoxItem key={nanoid()} letter={letter} />
    )
  }) 

  return (
    <div className="Keypad_Container">
      {letterButton}
    </div>
  )
}
