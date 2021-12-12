import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import { useState, useEffect } from 'react';
import { setSelectedVideo } from '../Helpers/setVideo';
import { getVideos1 } from '../Helpers/setVideos';
import { setVideos1 } from '../Helpers/setVideos';
import { useNavigate } from 'react-router-dom';

const App = () => {

    let navigate = useNavigate();

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const getVideos = async () =>{
            const response = await youtube.get('/videos',{
                params:{
                    chart: 'mostPopular'
                }
            });
            setVideos(response.data.items);
            setVideos1(response.data.items);
        }

        if(!getVideos1()){
            getVideos();
        } else{
            setVideos(getVideos1());
        }
        
    },[]);

    const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q:termFromSearchBar
            }
        })

        setVideos(response.data.items);
        setSelectedVideo(null);
        setVideos1(response.data.items);
        console.log("this is resp",response);
    }

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        navigate('/reproductor');
    }

    return (
        <div className='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <div className='ui grid'>
                <div className="ui row">
                    <div className="ui row">
                        <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default App;