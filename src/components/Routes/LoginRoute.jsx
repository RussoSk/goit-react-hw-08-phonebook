import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';


const LoginRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
     const isRefreshing = useSelector(selectIsRefreshing);
     const isRedirect = !isLoggedIn && !isRefreshing;
    return isRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
};

export default LoginRoute