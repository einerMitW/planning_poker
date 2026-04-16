import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Join from './components/Join'
import Game from './components/Game'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/:sessionId" element={<Game />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2026 Planning Poker</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
