import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import { useEffect } from 'react'
import Carts from './components/Carts/Carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [technologies, setTechnologies] = useState([])
  const [selectedTechnology, setSelectedTechnology] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(0)

  const handleSelectedTechnologies = (technology, id, credit) => {
    const isExist = selectedTechnology.find(item => item.id == id)
    if (isExist) {
      return alert('Already Exist')
    } else {
      const newTotalCredit = totalCredit + credit;
      if (newTotalCredit > 20) {
        return toast('Sorry! it is been over 20 hours so would not add anymore.')
      } else {
        const newSelectedTechnology = [...selectedTechnology, technology];
        setSelectedTechnology(newSelectedTechnology)
        setTotalCredit(newTotalCredit)
        const newRemaining = 20 - newTotalCredit;
        if (newRemaining < 0) {
          return toast('Sorry! It is less then 0')
        }
        else {
          setRemainingCredit(newRemaining)
        }
      }
    }
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTechnologies(data))
  }, [])

  return (
    <>
      <ToastContainer />
      <h1 className='text-3xl font-bold text-center mt-12 mb-8'>Course Registration</h1>
      <div className='flex flex-col md:flex-row lg:flex-row w-11/12 mx-auto mb-10 gap-5'>
        <Cards handleSelectedTechnologies={handleSelectedTechnologies} technologies={technologies}></Cards>
        <Carts remainingCredit={remainingCredit} totalCredit={totalCredit} selectedTechnology={selectedTechnology} ></Carts>
      </div>
    </>
  )
}

export default App
