import React from 'react'
import Table from './Table';
import { employees } from './sampleOutput';


export default function Emplyees() {
    const columns = [
        {
            label: 'Id',
            field: 'id',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'id',
            },
        }, 
        {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
        {
            label: 'Position',
            field: 'position',
            width: 270,
        },
        {
            label: 'Office',
            field: 'office',
            width: 200,
        },
        {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100,
        },
        {
            label: 'Start date',
            field: 'date',
            sort: 'disabled',
            width: 150,
        },
        {
            label: 'Salary',
            field: 'salary',
            sort: 'disabled',
        },
    ]


    return (
        <div className='container my-4'>
            <h1>Our Employees</h1>
            <Table columns={columns} rows={employees} />
        </div>
    )
}
