import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

function  AuthProvider({children}){

    const [user,setUser] = React.useState({
      email: "",
    })

    React.useEffect(()=>{
      if(localStorage.getItem('user') !== null){
        setUser(JSON.parse(localStorage.getItem('user')))
      }
    },[])

    const value = {
      user,
      setUser
    }
    
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
export {AuthProvider}