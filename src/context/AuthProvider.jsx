import React, { createContext } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
const [userdata, setUserdata] = useState(null)
const data=getSelection()
console.log(data);

    return (
        <div>
            <AuthContext.Provider value={'mahesh'}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider