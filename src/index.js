import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './redux/index'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
