import React from 'react';
import {Suspense,lazy} from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";
const SendOTP = lazy(()=>import("../../components/AccountRecover/Send-OTP"))

const SendOTPPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <SendOTP/>
        </Suspense>
    );
};

export default SendOTPPage;