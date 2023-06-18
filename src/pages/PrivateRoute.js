import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { useUserContext } from '../context/user_context'

// rest operator is gathering all the Private Route parameters : exact path
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0()
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}
export default PrivateRoute
