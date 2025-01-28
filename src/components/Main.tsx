import Guesses from "./Guesses";
import Header from "./Header";
import Keypad from "./Keypad";

export default function Main() {
  return (
    <div className="Component_Container">
      <Header />
      <Guesses />
      <Keypad />
    </div>
  )
}
