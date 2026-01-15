import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ResidencyPage from './pages/ResidencyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/residency" element={<ResidencyPage />} />
        <Route path="/" element={<Navigate to="/residency" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
