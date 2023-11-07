import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import './list.css';

function List() {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('employeeList');
        const employeeData = storedData ? JSON.parse(storedData) : [];
        const nonEmptyEmployeeData = employeeData.filter(employee => employee && Object.keys(employee).length !== 0);
        setEmployee(nonEmptyEmployeeData);
    }, []);

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    /**
     * 
     * @returns 
     */
    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <section className='list-container'>
            <div className="card">
                <DataTable value={employee} paginator stripedRows rows={10} dataKey="id" filters={filters} filterDisplay="row"  
                globalFilterFields={[
                    'firstName', 
                    'lastName', 
                    'startDate', 
                    'department', 
                    'dateOfBirth', 
                    'street', 
                    'city', 
                    'state', 
                    'zipCode']} 
                header={renderHeader()} 
                emptyMessage="No customers found."
                rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="firstName" header="First Name" sortable style={{ width: '15%' }}></Column>
                    <Column field="lastName" header="Name" sortable style={{ width: '15%' }}></Column>
                    <Column field="startDate" header="Start Date" sortable style={{ width: '10%' }}></Column>
                    <Column field="department" header="Department" sortable style={{ width: '10%' }}></Column>
                    <Column field="dateOfBirth" header="Date of Birth" sortable style={{ width: '10%' }}></Column>
                    <Column field="street" header="Street" sortable style={{ width: '15%' }}></Column>
                    <Column field="city" header="City" sortable style={{ width: '10%' }}></Column>
                    <Column field="state" header="State" sortable style={{ width: '10%' }}></Column>
                    <Column field="zipCode" header="Zip Code" sortable style={{ width: '5%' }}></Column>
                </DataTable>
            </div>
        </section>
    )
};

export default List;