import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const NotFound = lazy(()=> import("../components/NotFound/NotFound"))

const Page404 = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <NotFound/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default Page404;