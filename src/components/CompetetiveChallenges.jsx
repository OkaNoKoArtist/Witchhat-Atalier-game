export function CompetetiveChallenges({setPage}) {
    return(
        <div  className="middle">
          <h2 className="text-xl">Competetive challenges Screen</h2>
          <button onClick={() => setPage('loadGame')}>Back</button>
        </div>
    )
}