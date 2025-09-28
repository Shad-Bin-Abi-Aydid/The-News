import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);

    if(user){
        return children;
    }

    if(loader){
        return <span className="loading loading-bars loading-xl"></span>
    }

    return (
        <Navigate to={'/auth/login'}>
            
        </Navigate>
    );
};

export default PrivateRoutes;