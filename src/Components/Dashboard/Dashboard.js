import  Home  from './Home/Home'
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import DasboardNav from './DashboardNav/DashboardNav'

const Dashboard = () => {
  return (
    <div>
        <DasboardNav/>
        <Sidebar/>
        <Home />
    </div>
  )
}

export default Dashboard