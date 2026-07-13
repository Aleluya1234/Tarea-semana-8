import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'

// useEffect exercises
import ClimaActual from './pages/useEffect/ClimaActual'
import ChatTiempoReal from './pages/useEffect/ChatTiempoReal'
import Pomodoro from './pages/useEffect/Pomodoro'
import FeedNoticias from './pages/useEffect/FeedNoticias'
import TipsUseEffect from './pages/useEffect/TipsUseEffect'

// Router exercises
import BlogInicio from './pages/router/Blog/BlogInicio'
import TiendaInicio from './pages/router/Tienda/TiendaInicio'
import DashboardInicio from './pages/router/Dashboard/DashboardInicio'
import ReservasInicio from './pages/router/Reservas/ReservasInicio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        
        {/* useEffect exercises */}
        <Route path="clima" element={<ClimaActual />} />
        <Route path="chat" element={<ChatTiempoReal />} />
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="feed" element={<FeedNoticias />} />
        <Route path="tips" element={<TipsUseEffect />} />
        
        {/* Router exercises */}
        <Route path="blog/*" element={<BlogInicio />} />
        <Route path="tienda/*" element={<TiendaInicio />} />
        <Route path="dashboard/*" element={<DashboardInicio />} />
        <Route path="reservas/*" element={<ReservasInicio />} />
      </Route>
    </Routes>
  )
}

export default App