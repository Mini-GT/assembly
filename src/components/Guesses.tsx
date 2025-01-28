import {useState } from "react"
import Languages from "./Languages";
import { programmingData } from "../languageData";
import BoxItem from "./BoxItem";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

export type ProgrammingLanguagesType = {
  id: string;
  name: string
  isStrikethrough: boolean
};

function Guesses() {
  const secretWord = useSelector((state: RootState) => state.secretWord.value)

  const [languages, setLanguages] = useState<ProgrammingLanguagesType[]>(programmingData)

  function getRandomWord() {
    const randomWord = Math.ceil(Math.random())
    console.log(randomWord)
  }
  
  const langItems = languages.map(language => {
    return (
      <Languages key={language.id} language={language} className={language.name} />
    )
  })

  const emptyBox = secretWord.split("").map(letter => {
    return (
      <BoxItem key={nanoid()} letter={letter.toUpperCase()} />
    )
  })

  return (
    <>
      <div className="Lang_Container">
        {langItems}
      </div>
      <div className="EmptyBox_Container">
        {emptyBox}
      </div>
    </>
  )
}

export default Guesses;
