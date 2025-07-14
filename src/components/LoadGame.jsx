export function loadGame({setPage}) {
    return(
        <div>
          <h2 className="text-xl">Load Game Screen</h2>
          <button onClick={() => setPage('start')}>Back</button>
        </div>
    )
}