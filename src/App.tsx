import React, { useState } from 'react'
import { control, ranjeetprofile } from './assets/image/images'
import Image from './shared/common/Image'
import AppRoutes from './routes/AppRoutes'
import { routes } from './constants/routes'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menus } from './constants/menuList'

const App = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="flex ">
      <div className={` ${open ? 'w-72' : 'w-20 '} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
        <Image
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          alt="controls"
        />
        <div
          className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center ${
            pathname === routes.root && ' bg-light-white'
          }`}
          onClick={() => navigate(routes.root)}
        >
          <Image src={ranjeetprofile} className={` ${!open ? ' w-10 h-10' : 'w-12 h-12'} rounded-full  duration-500 ${open && 'rotate-[360deg]'}`} />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Ranjeet Kumar</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 ${
                pathname.startsWith(Menu.route) && 'bg-light-white'
              } `}
              onClick={() => navigate(Menu.route)}
            >
              <Image src={Menu.src} altMessage="Hello" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold overflow-y-auto" style={{ maxHeight: '100vh', width: '100%' }}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
