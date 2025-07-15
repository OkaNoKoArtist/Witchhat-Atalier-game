export function LoadGame({setPage}) {
    return(
        <div className="middle">
          <br></br>
          <div className='group'>
            <button className="text-black group-hover:text-white" onClick={() => setPage('storyMode')}>Story mode</button> 
          </div>
          <br></br>
          <div className='group'>
            <button className="text-black group-hover:text-white" onClick={() => setPage('littleAtalier')}>Little atalier</button>
          </div>
          <br></br>
          <div className='group'>
            <button className="text-black group-hover:text-white" onClick={() => setPage('competetiveChallenges')}>Competetive challenges</button>
          </div>
        </div>
    )
}