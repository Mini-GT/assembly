export type BoxItemType = {
  letter: string
  handleSelectedLetter?: (e: BoxItemType['letter']) => void | undefined
}

export default function BoxItem({
  letter, 
  handleSelectedLetter
}: BoxItemType) {

  const handleClick = () => {
    if(handleSelectedLetter) {
      handleSelectedLetter(letter)
    }
  }
 
  return (
    <div className="Box_Item" onClick={handleClick}>
      {letter}
    </div>
  )
}
