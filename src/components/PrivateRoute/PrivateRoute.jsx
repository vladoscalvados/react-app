import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

import {SHOW_AUTHORIZE_MODAL} from "../../actions";

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // setTimeout(() => {
        //     if(!isAuth) {
        //         dispatch(SHOW_AUTHORIZE_MODAL());
        //     }
        // }, 5000)
    }, [])

    return (
        <Route
            {...rest}
            render={props =>
                isAuth === true
                    ? <Component {...props} />
                    : <Redirect to="/" />
            }
        />
    )
};