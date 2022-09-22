import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/homePage/HomePage'
import { GamePage } from './Pages/gamePage/GamePage'
import { OrderPage } from './Pages/orderPage/OrderPage'
import { Header } from './components/header/Header'
import { Layout } from './Pages/Layout'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="app/:title" element={<GamePage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
