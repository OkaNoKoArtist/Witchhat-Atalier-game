export function NewGame({setPage}) {
    return(
        <div>
          <h2 className="text-xl">New Game Screen</h2>
          <button onClick={() => setPage('start')}>Back</button>
        </div>
    )
}