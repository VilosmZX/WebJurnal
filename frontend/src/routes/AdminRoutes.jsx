import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const AdminRoutes = () => {
  const { user } = useContext(UserContext); 
  return (
    user?.isAdmin ? <Outlet /> : <Navigate to={'/'} />
  )
}

export default AdminRoutes