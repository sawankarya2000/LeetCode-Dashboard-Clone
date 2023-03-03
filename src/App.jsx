import { useState } from 'react'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Tag from './Utils/Tag'

function App() {

  return (
    <div className="App bg-slate-50">
      <Navbar />
      <Main />
      <Tag>C++</Tag>
    </div>
  )
}

export default App
