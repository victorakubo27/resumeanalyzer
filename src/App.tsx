import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import { usePuterStore } from './lib/puter';
import { useEffect } from 'react';
import Upload from './pages/Upload';
import Resume from './pages/Resume';
import WipeApp from './pages/Wipe';
import { SidebarDemo } from './components/SideBarDemo';
import ResumeLists from './pages/ResumeLists';
function App() {
  const { init } = usePuterStore();
  useEffect(() => {
    init();
  }, [init])

  return (
    <div className='relative top-0 right-0 left-0'>
      <SidebarDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/resumes' element={<ResumeLists/>}/>
        <Route path='/resume/:id' element={<Resume />} />
        <Route path="/wipe" element={<WipeApp />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App;
