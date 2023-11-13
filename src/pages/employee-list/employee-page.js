import { lazy, Suspense } from 'react';
import React from "react";
import HeaderCurrentEmployee from '../../components/header/headerCurrentEmployee';

const LazyList = lazy(() => import('../../components/list/list'));

function EmployeeList() {

    return (
        <div className="App">
            <HeaderCurrentEmployee />
            <h1>Current Employees</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyList />
            </Suspense>
        </div>
    )
};

export default EmployeeList;