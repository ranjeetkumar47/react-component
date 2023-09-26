import React from 'react'
import { Menus } from '../../constants/menuList'

const Dashboard = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">React Component</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Menus.map((item) => (
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:border border-gray-200 transition duration-300">
              <h3>{item.title}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
