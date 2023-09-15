import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import { useEffect } from 'react'
import Carts from './components/Carts/Carts'



function App() {
  const [technologies, setTechnologies] = useState([])
  const [selectedTechnology, setSelectedTechnology] = useState([])

  const handleSelectedCourse = (technology, id) => {
    const isExist = selectedTechnology.find(item => item.id == id)
    if (isExist) {
      return alert('Already Exist')
    } else {
      const newSelectedTechnology = [...selectedTechnology, technology];
      setSelectedTechnology(newSelectedTechnology)
    }
  }


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTechnologies(data))
  }, [])

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-12 mb-8'>Course Registration</h1>
      <div className='flex flex-col md:flex-row lg:flex-row w-11/12 mx-auto gap-5'>
        <Cards handleSelectedCourse={handleSelectedCourse} technologies={technologies}></Cards>
        <Carts selectedTechnology={selectedTechnology} ></Carts>
      </div>
    </>
  )
}

export default App
