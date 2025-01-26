import { useState } from "react"
import Languages from "./Languages";
import { programmingData } from "../languageData";

export type ProgrammingLanguagesType = {
  id: string;
  name: string
  isStrikethrough: boolean
};

export default function Guesses() {
  const [languages, setLanguages] = useState<ProgrammingLanguagesType[]>(programmingData)

  const langItems = languages.map(language => {
    return (
      <Languages key={language.id} language={language} className={language.name} />
    )
  })

  return (
    <div className="Lang_Container">
      {langItems}
    </div>
  )
}
