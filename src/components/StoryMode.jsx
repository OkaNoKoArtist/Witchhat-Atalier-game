export function StoryMode({setPage}) {
    return(
        <div  className="middle">
          <h2 className="text-xl">Story mode Screen</h2>
          <button onClick={() => setPage('loadGame')}>Back</button>
        </div>
    )
}