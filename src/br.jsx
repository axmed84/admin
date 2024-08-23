// page kii ii shaqeen waayay

import { useState } from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { productInputs, userInputs } from './formSource'

function App() {

  return (
      <div className='app'>
        <BrowserRouter>
        <Routes>
        {/* Nasted Route */}
          <Route path='/'/>
          <Route index  element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<List/>}/>
          <Route index />
          <Route path='/:userId' element={<Single/>}/>
          <Route path='/new' element={<New inputs={userInputs} title="Add New User"/>}/>
          <Route path='/products' element={<List/>}/>
          <Route index />
          <Route path='/:productId' element={<Single/>}/>
          <Route path='/new' element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
