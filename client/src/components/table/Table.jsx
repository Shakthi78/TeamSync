import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
          id: 1143155,
          assignee: "Jack",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          startDate: "1 March",
          endDate: "10 March",
          status: "Completed",
        },
        {
          id: 2235235,
          assignee: "Brock",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          startDate: "1 March",
          endDate: "10 March",
          status: "Pending",
        },
        {
          id: 2342353,
          assignee: "Joy",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          startDate: "1 March",
          endDate: "10 March",
          status: "Pending",
        },
        {
          id: 2357741,
          assignee: "Kill bill",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          startDate: "1 March",
          endDate: "10 March",
          status: "Completed",
        },
        {
          id: 2342355,
          assignee: "Black",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          startDate: "1 March",
          endDate: "10 March",
          status: "Pending",
        },
      ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Assigned to</TableCell>           
            <TableCell className='tableCell'>Start Date</TableCell>
            <TableCell className='tableCell'>End Date</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image'/>
                {row.assignee}
                </div>
                </TableCell>
              <TableCell className='tableCell'>{row.startDate}</TableCell>
              <TableCell className='tableCell'>{row.endDate}</TableCell>        
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List