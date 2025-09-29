import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    console.log(location)

    if(user){
        return children;
    }

    if(loader){
        return <span className="loading loading-bars loading-xl"></span>
    }

    return (
        <Navigate state={location.pathname} to={'/auth/login'}>
            
        </Navigate>
    );
};

export default PrivateRoutes;