import { useLanguage } from "../context/LanguageContext";
import { useRandomWord } from "../hooks/useGetRandomWord";
import Guesses from "./Guesses";
import Header from "./Header";
import Keypad from "./Keypad";
import Win from "./Win";
import Lose from "./Lose";
import NewGame from "./NewGame";
import Farewell from "./Farewell";
import { useFarewellText } from "../context/FarewellContext";

export default function Main() {
  const secretWord = useRandomWord();
  const { languages } = useLanguage()
  const isWon = secretWord.every(word => word.isGuessed)
  const isLost = languages.every(language => language.isWrong)
  const {farewellText} = useFarewellText()

  function RenderResult() {
    if(!farewellText && !isLost && !isWon) {
      return <Farewell />
    } else if(farewellText && !isLost && !isWon) {
      return <Farewell farewellText={farewellText}/>
    } else if (isWon) {
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
      <Keypad isWon={isWon} isLost={isLost} />
      <NewGame />
    </div>
  )
}
