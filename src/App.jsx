import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import { useEffect } from 'react'
import Carts from './components/Carts/Carts'



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
      <div className='flex flex-col md:flex-row lg:flex-row w-full mx-10'>
          <Cards technologies={technologies}></Cards>
          <Carts></Carts>
      </div>
    </>
  )
}

export default App
