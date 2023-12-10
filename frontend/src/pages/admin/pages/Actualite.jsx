import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';


const Actualite = () => {
    const theme = useSelector(state => state.theme);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'gc', age: 45 },
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return (
        <div className={theme ? 'home':'home dark'}>
           <Sidebar/> 
           <div className="homeContainer">
            <Navbar/>
            <div className="listeUsers">
                <h1>Liste des actualités</h1>
                <div className="btn_search">
                    <Link to='/addNewAdmin'>
                      <button className='add-btn'>
                          <AddCircleOutlineOutlinedIcon className='Icons'/>
                          Ajouter
                      </button>
                      
                    </Link>
                    <div className="search">
                        <input type="text" placeholder='recherche...' />
                        <SearchOutlinedIcon/>
                    </div>
                </div>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      initialState={{
                        pagination:{
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                      }}
                      pageSizeOptions={[5, 10]}
                      
                    />
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default Actualite;