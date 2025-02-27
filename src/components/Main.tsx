import { useLanguage } from "../context/LanguageContext";
import { useRandomWord } from "../hooks/useGetRandomWord";
import Guesses from "./Guesses";
import Header from "./Header";
import Keypad from "./Keypad";
import Win from "./Win";
import Lose from "./Lose";
import NewGame from "./NewGame";

export default function Main() {
  const secretWord = useRandomWord();
  const { languages } = useLanguage()
  const isWon = secretWord.every(word => word.isGuessed)
  const isLost = languages.every(language => language.isWrong)
  
  function RenderResult() {
    if (isWon) {
      return <Win />;
    } else if (isLost) {
      return <Lose />;
    }
  }

  return (
    <div className="Component_Container">
      <Header />
      <RenderResult /> 
      <Guesses />
      <Keypad />
      <NewGame />
    </div>
  )
}
