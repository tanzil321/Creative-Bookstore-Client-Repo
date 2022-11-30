import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';





const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
  const [isAdmin,isAdminLoading]  = useAdmin(user?.email)
    const location = useLocation()

    if (loading || isAdminLoading) {

        return <h1>loading......</h1>

    }


    if (user && user.uid && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;