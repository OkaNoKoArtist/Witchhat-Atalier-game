export function LittleAtalier({setPage}) {
    return(
        <div  className="middle">
          <h2 className="text-xl">Little atalier Screen</h2>
          <button onClick={() => setPage('loadGame')}>Back</button>
        </div>
    )
}