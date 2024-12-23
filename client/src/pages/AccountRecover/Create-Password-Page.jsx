import React from 'react';
import {Suspense,lazy} from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";
const CreatePassword = lazy(()=>import("../../components/AccountRecover/Create-Password"))

const CreatePasswordPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <CreatePassword/>
        </Suspense>
    );
};

export default CreatePasswordPage;