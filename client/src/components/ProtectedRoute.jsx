import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const ProtectedRoute = ({component, ...args}) => {
    return <Route  
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <div>loading</div>,
            returnTo: window.location.href
        })}
        {...args}
    />
}