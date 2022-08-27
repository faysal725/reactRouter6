import React from 'react'
import useAuth from './useAuth'
import { Navigate, Outlet } from 'react-router-dom'
export default function PrivateOutlet() {
    const auth= useAuth()

  return auth ? <Outlet /> : <Navigate to="/login" /> 
}
