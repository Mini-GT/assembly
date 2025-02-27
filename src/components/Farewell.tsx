type FarewellType = {
  farewellText: string
}

export default function Farewell({
  farewellText
}: FarewellType) {
  return (
    <>
      <div className="Result_Container Farewell">
        <h1>{farewellText}</h1>
      </div>
    </>
  )
}