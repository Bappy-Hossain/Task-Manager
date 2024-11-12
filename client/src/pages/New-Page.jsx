import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const New = lazy(()=> import("../components/New/New"));

const NewPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <New/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default NewPage;