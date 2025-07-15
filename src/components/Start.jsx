export function Start({setPage}){
    return(
      <div className="middle">
          <h1 className='text-center text-2xl font-bold text-gray-900 italic dark:text-white'>Witchhat Atalier:
            <span className="ml-2 relative inline-block before:absolute before:-inset-1 before:block before:skew-y-1 before:bg-yellow-500">
              <span className="relative text-white dark:text-gray-950">the game</span>
            </span>
          </h1>
          <br></br>
          <div className='group'>
            <button className="text-black group-hover:text-white" onClick={() => setPage('newGame')}>New game</button> 
          </div>
          <br></br>
          <div className='group'>
            <button className="text-black group-hover:text-white" onClick={() => setPage('loadGame')}>Load game</button>
          </div>
        </div>
        )
    }