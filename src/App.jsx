import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ResidencyPage from './pages/ResidencyPage'
import ResidencyPageEN from './pages/ResidencyPageEN'
import ArtistsPage from './pages/ArtistsPage'
import ArtistsPageEN from './pages/ArtistsPageEN'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/residency" element={<ResidencyPage />} />
        <Route path="/residency/en" element={<ResidencyPageEN />} />
        <Route path="/residency/artists" element={<ArtistsPage />} />
        <Route path="/residency/en/artists" element={<ArtistsPageEN />} />
        <Route path="/" element={<Navigate to="/residency" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
