import { useEffect, useState } from "react"

export type BoxItemType = {
  letter: string
  handleSelectedLetter?: (letter: BoxItemType['letter']) => void | undefined
  status?: "default" | "correct" | "wrong"
}

export default function BoxItem({
  letter, 
  handleSelectedLetter,
  status
}: BoxItemType) {
  const [className, setClassName] = useState('Box_Item');

  useEffect(() => {
    if (status === "correct") {
      setClassName('Box_Item Correct');
    } else if (status === "wrong") {
      setClassName('Box_Item Wrong');
    } else {
      setClassName('Box_Item');
    }
  }, [status])

  const handleClick = () => {
    if(handleSelectedLetter) {
      handleSelectedLetter(letter)
    }
  }

  return (
    <div className={`${className}`} onClick={handleClick} >
      {letter}
    </div>
  )
}
