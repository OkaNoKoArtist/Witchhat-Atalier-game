export function StoryMode({setPage}) {
    return(
        <div>
          <h2 className="text-xl">Story mode Screen</h2>
          <button onClick={() => setPage('loadGame')}>Back</button>
        </div>
    )
}