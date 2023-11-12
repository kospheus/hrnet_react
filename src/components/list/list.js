import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import './list.css';

function List() {

    const employee = useSelector(state => state.employees.employees);
    console.log(employee);

    //useState pour gérer la valeur du filtre global de recherche.
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    //useState pour gérer les filtres appliqués sur les données du tableau.
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });

    /**
     * Gère les changements de la valeur du filtre global et met à jour l'état des filtres et la valeur du filtre global.
     * Cette fonction est appelée lorsqu'un utilisateur tape dans un champ de recherche global pour filtrer les données du tableau.
     *
     * @param {Object} e - L'événement généré par l'interaction avec le champ de recherche global.
     */
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    //Rendu de l'en-tête qui inclut un champ de recherche utilisant la fonction 'onGlobalFilterChange' pour mettre à jour les filtres.
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