import React, { useState, useEffect } from 'react' //destructing
import axios from 'axios'
import { useParams } from "react-router-dom";

const MainArtist = () => {
    const { id } = useParams();
    const [artist, setArtists] =useState([])

    useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await axios.get('https://artists-api.vercel.app/artists');
            console.log(response.data);
            const data = response.data
            const artistiFiltered = data.find(artist => artist._id === id)
            setArtists(artistiFiltered)
        }catch(error){
            console.error(error);
        }}
        fetchData()
    },[])

    return (
        <div className="main">
           <h1>Listado de artistas</h1>
           {artist.name}
           <img src={artist.avatar} alt={artist.name}/>
           <p>{artist.genre}</p>
        </div>
    )
}


export default MainArtist