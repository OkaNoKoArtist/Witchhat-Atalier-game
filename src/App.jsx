import { useState } from 'react'
import './App.css'
import {Start} from'./components/Start'
import {NewGame} from'./components/NewGame'
import {LoadGame} from'./components/LoadGame'
import {StoryMode} from'./components/StoryMode'
import {LittleAtalier} from'./components/LittleAtalier'
import {CompetetiveChallenges} from'./components/CompetetiveChallenges'

function App() {
  const [page, setPage] = useState('start');

  return(
    <div className='p-10 font-sans'>

      {page === 'start' && (
        <Start setPage={setPage} />
        )}

      {page === 'newGame' && (
        <NewGame setPage={setPage} />
      )}

      {page === 'loadGame' && (
        <LoadGame setPage={setPage} />
      )}

      {page === 'storyMode' && (
        <StoryMode setPage={setPage} />
      )}

      {page === 'littleAtalier' && (
        <LittleAtalier setPage={setPage} />
      )}

      {page === 'competetiveChallenges' && (
        <CompetetiveChallenges setPage={setPage} />
      )}
    </div>
  );
}

export default App
