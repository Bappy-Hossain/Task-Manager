import React, {Fragment} from 'react';
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Login = lazy(()=> import("../components/Login/Login"))

const LoginPage = () => {
    return (
        <Fragment>
                <Suspense fallback={<LazyLoader/>}>
                    <Login/>
                </Suspense>
        </Fragment>
    );
};

export default LoginPage;