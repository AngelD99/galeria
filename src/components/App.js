import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Comments from './Comments';
import { useState, useEffect } from 'react';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        const getVideos = async () =>{
            const response = await youtube.get('/videos',{
                params:{
                    chart: 'mostPopular'
                }
            });
            setVideos(response.data.items);
        }

        getVideos();
    },[]);

    const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q:termFromSearchBar
            }
        })

        setVideos(response.data.items);
        setSelectedVideo(null);
        console.log("this is resp",response);
    }

    const fetchComments = async (video) => {
        const res = await youtube.get("/commentThreads?",{
            params:{
                videoId: video.id.videoId
            }
        });
        setComments(res.data.items);
    }

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        fetchComments(video);
    }

    return (
        <div className='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <div className='ui grid'>
                <div className="ui row">
                    {selectedVideo===null? "" :
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    
                    }
                    {console.log(comments)}
                    {/*selectedVideo===null? "" : 
                    <div className="ui row">
                        <Comments comments={comments} />         
                    </div>*/
                    }
                    <div className={selectedVideo===null? "ui row" : "five wide column"}>
                        <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default App;