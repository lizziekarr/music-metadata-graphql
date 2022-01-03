import { gql, useQuery } from "@apollo/client";

import ArrowBack from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import React from "react";
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

function TrackDetails() {
  let params = useParams();

  const QUERY_TRACK_DETAILS = gql`
    query GetTrackDetails {
        track(id: ${params.trackID}) {
        id
        title
        artist
        genre
        duration
        }
    }
    `;

  const { data, loading } = useQuery(QUERY_TRACK_DETAILS);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return (
    <div className="container track-table">
        <div className='flex-center align-center'>
            <Link className='back-arrow' to='/'><ArrowBack /></Link>
            <h2>Track Details</h2>
        </div>
        
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.track.artist}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.track.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.track.genre}
                </Typography>
                <Typography variant="body2">
                    {data.track.duration}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}

export default TrackDetails;

