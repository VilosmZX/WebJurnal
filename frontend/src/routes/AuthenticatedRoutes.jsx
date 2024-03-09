import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const AuthenticatedRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    user?.username ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default AuthenticatedRoutes