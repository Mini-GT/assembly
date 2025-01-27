type BoxItemType = {
  letter: string
}

export default function BoxItem({letter}: BoxItemType) {
  return (
    <div className="Box_Item">
      {letter}
    </div>
  )
}
