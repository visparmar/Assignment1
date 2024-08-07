import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='flex flex-col-reverse md:flex-row h-screen'>
          {/* <div className='sticky h-screen  bottom-0 bg-light_black z-50 px-6 md:bg-transparent md:static md:z-auto md:px-0'> */}
            <Sidebar/>  
          {/* </div> */}
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout