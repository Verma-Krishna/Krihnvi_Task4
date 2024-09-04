import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cards from './Components/Cards'
import Header from './Components/Header'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
