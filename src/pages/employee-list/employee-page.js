import React from "react";
import HeaderCurrentEmployee from '../../components/header/headerCurrentEmployee';
import List from "../../components/list/list";

function EmployeeList() {

    return (
        <div className="App">
            <HeaderCurrentEmployee />
            <h1>Current Employees</h1>
            <List />
        </div>
    )
};

export default EmployeeList;