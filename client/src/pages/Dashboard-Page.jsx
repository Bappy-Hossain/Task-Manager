import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Dashboard = lazy(()=> import("../components/Dashboard/Dashboard"))

const DashboardPage = () => {
    return (
         <Fragment>
             <MasterLayout>
                 <Suspense fallback={<LazyLoader/>}>
                     <Dashboard/>
                 </Suspense>
             </MasterLayout>
         </Fragment>
    );
};

export default DashboardPage;