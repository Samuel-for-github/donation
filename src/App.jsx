import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
 
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
      const loading = ()=>{
          setTimeout(() => {
              setLoading(false)
          }, 6000);
      }

      loading()
  }, [])

  return (
    <>
    {isLoading ? <Loader/> : <Home/>}
    </>
  )
}

export default App
