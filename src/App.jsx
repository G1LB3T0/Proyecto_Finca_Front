import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<div>Dashboard - Página en construcción</div>} />
      <Route path="/forgot-password" element={<div>Recuperar contraseña - Página en construcción</div>} />
    </Routes>
  )
}

export default App
