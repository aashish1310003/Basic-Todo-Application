import React from 'react'
import { useAuth } from './security/AuthContext'
import LoginComponents from './LoginComponents'

const LogoutComponents = () => {
  const Auth = useAuth()
  Auth.logout();
  return <LoginComponents />

}

export default LogoutComponents