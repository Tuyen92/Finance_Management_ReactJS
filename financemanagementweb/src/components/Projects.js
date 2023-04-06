import * as React from 'react'
import { useEffect } from "react"
import API, { endpoints } from "../configs/API"
import { useState } from "react"
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Projects = () => {
    const[project, setProject] = useState([])
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'name_project', headerName: 'Project name', width: 400 },
    //     { field: 'target', headerName: 'Target', type: 'number', width: 100 },
    //     { field: 'income_amount', headerName: 'Income', type: 'number', width: 100 },
    //     { field: 'spending_amount', headerName: 'Spending', type: 'number', width: 100 },
    //     { headerName: 'Action', width: 100, 
    //       renderCell: (params) => (
    //         <Link to="/">Chi tiết</Link>
    //       ), }
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    // ];

    useEffect(() => {
        const loadProjects = async () => {
            let res = await API.get(endpoints['projects'])
            console.log(res.data.results)
            setProject(res.data.results)
        }

        loadProjects()
    }, [])

    return (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">ID</TableCell>
                  <TableCell component="th" scope="row">Project&nbsp;name</TableCell>
                  <TableCell align="right">Target</TableCell>
                  <TableCell align="right">Income</TableCell>
                  <TableCell align="right">Spending</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.map(p => (
                  <TableRow key={p.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                    <TableCell component="th" scope="row">{p.id}</TableCell>
                    <TableCell component="th" scope="row">{p.name_project}</TableCell>
                    <TableCell align="right">{p.target}</TableCell>
                    <TableCell align="right">{p.income_amount}</TableCell>
                    <TableCell align="right">{p.spending_amount}</TableCell>
                    <TableCell align="right"><Link>Chi tiết</Link></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <hr/>
          <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={project} columns={columns} checkboxSelection />
          </div> */}
        </>
    )
}

export default Projects
