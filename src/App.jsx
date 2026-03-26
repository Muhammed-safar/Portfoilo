import React, { useEffect } from 'react'
import Logo from './Components/Logo'
import Layout from './Pages/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    })
  }, [])

  return (
    <>
      <Layout/>
    </>
  )
}

export default App
