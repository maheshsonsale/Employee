import React, { useContext } from 'react'
import { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdmidDashboard from './components/Dashboard/AdmidDashboard'
import CreateTask from './components/others/CreateTask'
import { AuthContext } from './context/AuthProvider'
// import { useEffect } from 'react'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
export default function App() {


const [user, setUser] = useState(null)

const handleLogin=(email,password)=>{
  if (email=='admin@gmail.com' || password==123) {
    setUser('admin')
    console.log("admin login");
  }else if (email=='employee@gmail.com' || password==123) {
    setUser('employee')
    console.log("employee login");
  }else{
    console.log("invalid credential");
    
  }

}
const data=useContext(AuthContext)
console.log(data);

  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
    {user=='admin'?<AdmidDashboard/> :<EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdmidDashboard/> */}
    </>
  )
}
