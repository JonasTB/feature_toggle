import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useFlag } from './hooks/useFlag';

function App() {
  const [count, setCount] = useState(0)
  const flags = useFlag();
  console.log(flags);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {flags.share_button?.enabled && (
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)} style={{ fontSize: flags.font_size?.value || 15 }}>
            count is {count}
          </button>
        </div>
      )}
    </div>
  )
}
// {flags.share_button?.enabled && (<button style={{fontSize: flags.font_size?.value || 15}}>Teste botão flagsmith</button>)}

export default App

