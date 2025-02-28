export default function NewGame() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="NewGame_Container">
        <button onClick={handleRefresh}>New Game</button>
      </div>
    </>
  )
}