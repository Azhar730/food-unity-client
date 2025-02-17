import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../hooks/Spinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Spinner></Spinner>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
