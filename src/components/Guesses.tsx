import { useState } from "react"
import Languages from "./Languages";
import { programmingData } from "../languageData";
import BoxItem from "./BoxItem";
import { nanoid } from "nanoid";
import { useRandomWord } from "../hooks/useGetRandomWord";

export type ProgrammingLanguagesType = {
  id: string;
  name: string
  isStrikethrough: boolean
};

function Guesses() {
  const secretWord = useRandomWord();
  
  const [languages] = useState<ProgrammingLanguagesType[]>(programmingData)
  
  const langItems = languages.map(language => {
    return (
      <Languages key={language.id} language={language} className={language.name} />
    )
  })

  const secretWordEmptyBox = secretWord.map(obj => {
    return (
      <BoxItem key={nanoid()} letter={obj.isHidden ? '' : obj.letter.toLocaleUpperCase()}/>
    )
  })

  return (
    <>
      <div className="Lang_Container">
        {langItems}
      </div>
      <div className="EmptyBox_Container">
        {secretWordEmptyBox}
      </div>
    </>
  )
}

export default Guesses;
