import { useState } from 'react'
import Layout from './component/Layout';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
           <Routes>
           <Route path="/" element={<Layout />}>
           <Route index element={<Dashboard />}/>

           </Route>
           </Routes>

    </Router>
    </>
  )
}

export default App
