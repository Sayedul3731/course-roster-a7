import { useState } from 'react'
import './App.css'
import Cards from './Cards/Cards'
import { useEffect } from 'react'
import { data } from 'autoprefixer'

function App() {
  const [technologies, setTechnologies] = useState([])

  useEffect(() => { 
    fetch('data.json')
    .then(res => res.json())
    .then(data => setTechnologies(data))
  }, [])

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-12 mb-8'>Course Registration</h1>
      <div>
        <Cards technologies={technologies}></Cards>
      </div>
    </>
  )
}

export default App
