import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Create = lazy(()=> import("../components/Create/Create"))

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;