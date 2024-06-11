import  { React, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
 

  const navigate = useNavigate()

  useEffect(() => {
    logOut()
  })

  const logOut = () => {
    fetch('http://localhost:3005/admin/logout', {
      method: 'POST',
      credentials:"include",
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then((r) => r.json())
      .then((r) => {
        if (r.message === 'success') {
          localStorage.removeItem('access_token', JSON.stringify({token: r.token }))
          // props.setLoggedIn(true)
          // props.setEmail(email)
          navigate('/')
        } 
      })
  }
  
  return
}

export default Logout