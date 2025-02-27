import { getRandomWord } from "../utils/getRandomWords";
import { words } from "../words";

export default function NewGame() {
  return (
    <>
      <div className="NewGame_Container">
        <button onClick={()=> getRandomWord(words)}>New Game</button>
      </div>
    </>
  )
}