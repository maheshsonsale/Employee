import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdmidDashboard = () => {
    return (
        <div className='height-screen w-full p-10'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdmidDashboard