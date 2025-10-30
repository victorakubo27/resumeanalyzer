import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import { usePuterStore } from './lib/puter';
import { useEffect } from 'react';
import Upload from './components/Upload';
function App() {
  const {init} = usePuterStore();
  useEffect(()=>{
    init();
  },[init])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path='/upload' element={<Upload />} />
    </Routes>
  )
}

export default App;
