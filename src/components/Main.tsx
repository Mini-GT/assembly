import { LanguageProvider } from "../context/LanguageContext";
import Guesses from "./Guesses";
import Header from "./Header";
import Keypad from "./Keypad";

export default function Main() {

  return (
    <div className="Component_Container">
      <LanguageProvider>
        <Header />
        <Guesses />
        <Keypad />
      </LanguageProvider>
    </div>
  )
}
