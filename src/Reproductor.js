import React, {useEffect, useState} from 'react';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import Searchbar from './components/Searchbar';
import youtube from './apis/youtube';
import { setVideos1 } from './Helpers/setVideos';
import { setSelectedVideo } from './Helpers/setVideo';
import { getVideo } from './Helpers/setVideo';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getVideos1 } from './Helpers/setVideos';
import { useNavigate } from 'react-router-dom';

const Reproductor = () => {

    let navigate = useNavigate();

    const firebaseConfig = {
        apiKey: "AIzaSyBdE9h0EK0YdwxFuULZL6m8gyfAFFqSB6A",
        authDomain: "fb-crud-53165.firebaseapp.com",
        projectId: "fb-crud-53165",
        storageBucket: "fb-crud-53165.appspot.com",
        messagingSenderId: "1057892431198",
        appId: "1:1057892431198:web:b58fa1477e4d01cd270bcf",
        measurementId: "G-M0BV0WGKSL"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore();

    const [video, setVideo] = useState(null);

    const [videos, setVideos] = useState([]);

    const [comments, setComments] = useState([]);

    useEffect(()=>{

        let com=[];
        const q = query(collection(db, "comentarios"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                com.push(doc.data());
            });
            setComments(com);
        });

        setVideos(getVideos1());
            
        setVideo(getVideo());

    },[comments]);

    const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q:termFromSearchBar
            }
        })

        setVideos(response.data.items);
        navigate('/principal');
        console.log("this is resp",response);
    }

    const handleVideoSelect = (video) => {
        setVideo(video);
        setSelectedVideo(video)
        let com=[];
        const q = query(collection(db, "comentarios"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                com.push(doc.data());
            });
            setComments(com);
        });

    }

    return (
        <div className='ui container' style={{marginTop:"1em"}}>
            <Searchbar handleFormSubmit={handleSubmit} />
            <div className='ui grid'>
                <div className="eleven wide column">
                    <VideoDetail video={video} comments={comments}/>
                </div>
                
                <div className="five wide column">
                    <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                </div>
            </div>
        </div>
    )
}

export default Reproductor;
