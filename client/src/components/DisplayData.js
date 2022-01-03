import { gql, useQuery } from "@apollo/client";

import Info from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const QUERY_ALL_TRACKS = gql`
  query GetAllTracks {
    tracks {
      id
      title
      artist
    }
  }
`;

function DisplayData() {

  const { data, loading } = useQuery(QUERY_ALL_TRACKS);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return (
    <div className="container">
        <h2>Tracks</h2>
        <div className='flex-center track-table'>
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Artist</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data &&
                    data.tracks.map((track) => {
                        return(
                            <TableRow
                                key={track.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{track.title}</TableCell>
                                    <TableCell align="left">{track.artist}</TableCell>
                                    <TableCell>
                                        <Link to={track.id}>
                                            <Info />
                                        </Link>
                                    </TableCell>
                            </TableRow>     
                        )
                    })}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
    </div>
  );
}

export default DisplayData;

