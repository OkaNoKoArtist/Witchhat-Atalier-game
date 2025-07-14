import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('start');

  return(
    <div className='p-10 font-sans'>
      {page === 'start' && (
        <div>
          <h1 className='text-center text-2xl font-bold text-gray-900 italic dark:text-white'>Witchhat Atalier:
            <span class="ml-2 relative inline-block before:absolute before:-inset-1 before:block before:skew-y-1 before:bg-yellow-500">
              <span class="relative text-white dark:text-gray-950">the game</span>
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
        )}

        {page === 'newGame' && (
        <div>
          <h2 className="text-xl">New Game Screen</h2>
          <button onClick={() => setPage('start')}>Back</button>
        </div>
        )}

      {page === 'loadGame' && (
        <div>
          <h2 className="text-xl">Load Game Screen</h2>
          <button onClick={() => setPage('start')}>Back</button>
        </div>
        )}
    </div>
  );
}

export default App
