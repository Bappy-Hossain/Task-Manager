import React, {Fragment} from 'react';
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Registration = lazy(()=> import("../components/Registration/Registration"))

const RegistrationPage = () => {
    return (
        <Fragment>
                <Suspense fallback={<LazyLoader/>}>
                    <Registration/>
                </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;