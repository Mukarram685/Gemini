import React from 'react'
import Sideone from './components/Sideone'
import Rightside from './components/Rightside'

export default function App() {
  return (
    <>
      <div className='flex'>
        <Sideone />
        <Rightside />
      </div>
    </>
  )
}

