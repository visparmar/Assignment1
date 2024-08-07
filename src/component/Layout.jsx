import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='flex '>
        <Sidebar/>  
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout