import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConnectionNavbar from './components/ConnectionNavbar'

const App = () => {
  return (
    <BrowserRouter>
      <ConnectionNavbar></ConnectionNavbar>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App