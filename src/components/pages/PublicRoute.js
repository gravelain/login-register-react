import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children, ...rest }) => {
    const isLogged = useSelector(state => state.user.isLogged);

    return (
        <Route
            {...rest}
            render={() => {
                if (isLogged) {
                    return <Redirect to="/home" />;
                }

                return children;
            }}
        />
    );
};

export default PublicRoute;