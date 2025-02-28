type LanguagesType = {
  languageName: string
  isWrong: boolean
}

export default function Languages({
  languageName,
  isWrong
} : LanguagesType) {
  return (
    <div className={`${languageName.toLowerCase()} ${isWrong ? 'faded' : null} lang_item`}>
      <span>{languageName}</span>
    </div>
  )
}
