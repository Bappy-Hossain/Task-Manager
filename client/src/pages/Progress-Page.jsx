import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Progress = lazy(()=> import("../components/Progress/Progress"))

const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProgressPage;