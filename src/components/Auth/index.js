import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { keepLogin } from '../../redux/reducer/AuthReducer';

const Auth = ({ children }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.AuthReducer);
    console.log(user);
    useEffect(() => {
        dispatch(keepLogin());
    }, [dispatch]);

    // const backToHome = useCallback(() => {
    //     if (!user) {
    //         Navigate('/');
    //     }
    // }, [user]);

    // useEffect(() => {
    //     backToHome();
    // }, [backToHome]);
    console.log(children)
    return <>{children}</>
}

export default Auth;