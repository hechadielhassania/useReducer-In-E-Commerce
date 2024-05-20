import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StoreProvider } from "./context-reducer/StoreContext.tsx"
import Home from "./pages/Home"
import Basket from "./pages/Basket"

import './App.css'

function App() {

  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </StoreProvider>
  )
}

export default App
