import { Routes, Route } from 'react-router'
import { HomaPage } from './Pages/HomaPage'
import { Header } from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomaPage />} />
      </Routes>
    </div>
  )
}

export default App
