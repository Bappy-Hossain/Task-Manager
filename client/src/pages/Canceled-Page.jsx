import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Canceled = lazy(()=> import("../components/Canceled/Canceled"))

const CanceledPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CanceledPage;