import React from 'react'
import Header from '../others/header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] height-screen p-10'>
        <Header />
        <TaskListNumbers/>
        <TaskList/>
    </div>

  )
}

export default EmployeeDashboard