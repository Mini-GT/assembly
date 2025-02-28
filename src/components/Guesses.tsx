import { useContext, useState } from "react"
import Languages from "./Languages";
import { languageNames } from "../languageData";
import BoxItem from "./BoxItem";
import { nanoid } from "nanoid";
import { useRandomWord } from "../hooks/useGetRandomWord";
import { useLanguage } from "../context/LanguageContext";

export type ProgrammingLanguagesType = {
  id: string;
  name: string
  isWrong: boolean
};

export default function Guesses() {
  const secretWord = useRandomWord();
  const { languages } = useLanguage()
  
  const langItems = languages.map(language => {
    return (
      <Languages 
        key={language.id} 
        languageName={language.name}
        isWrong={language.isWrong}
      />
    )
  })

  const secretWordEmptyBox = secretWord.map(obj => {

    return (
      <BoxItem 
        key={nanoid()} 
        letter={obj.isGuessed ? obj.letter.toLocaleUpperCase() : ''}
      />
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