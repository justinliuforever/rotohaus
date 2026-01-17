import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ResidencyPage from './pages/ResidencyPage'
import ResidencyPageEN from './pages/ResidencyPageEN'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/residency" element={<ResidencyPage />} />
        <Route path="/residency/en" element={<ResidencyPageEN />} />
        <Route path="/" element={<Navigate to="/residency" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
