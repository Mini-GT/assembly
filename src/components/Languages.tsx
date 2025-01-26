import { ProgrammingLanguagesType } from "./Guesses"

type LanguagesType = {
  language: ProgrammingLanguagesType
  className: string
}

export default function Languages({language} : LanguagesType) {
  return (
    <div className={`${language.name.toLowerCase()} ${language.isStrikethrough && 'line-through'} lang_item`}>
      {language.name}
    </div>
  )
}
