type FarewellType = {
  farewellText?: string
}

export default function Farewell({
  farewellText
}: FarewellType) {
  return (
    <>
      <div className={`Result_Container Farewell ${farewellText ? '' : 'visible'}`}>
        <p className="text-xl">{farewellText}</p>
      </div>
    </>
  )
}