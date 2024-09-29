import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const paginationModel = { page: 0, pageSize: 5 };

export default function Table({ columns, rows: initialRows }) {
    const [rows, setRows] = useState(initialRows);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = () => {
        setRows((prevRows) => prevRows.filter((row) => !selectedIds.includes(row.id)));
        // setSelectedIds([]);
    };

    const handleEditCellChange = (params) => {
        const updatedRows = rows.map((row) =>
            row.id === params.id ? { ...row, [params.field]: params.value } : row
        );
        setRows(updatedRows);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRows = rows.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <>
            <Form className="d-flex justify-content-between">
                <Button
                    className="my-4"
                    type="button"
                    style={{ width: '200px' }}
                    disabled={selectedIds.length === 0}
                    variant="outline-primary"
                    onClick={handleDelete}>
                    Delete Seleted
                </Button>
                <Form.Control
                    type="search"
                    label="Search"
                    placeholder="Type here to Search with text"
                    className="w-25 m-4"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Form>

            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    editMode="row"
                    setSearchTerm
                    onRowSelectionModelChange={(selectedIds) => setSelectedIds(selectedIds)}
                    processRowUpdate={handleEditCellChange}
                />
            </Paper>
        </>
    );
}
