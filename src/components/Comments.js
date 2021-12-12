import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const Comments = ({comments, video}) => {

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

      const [comentario, setComentario] = useState("");

      const comentar = (e) => {
        e.preventDefault();
        console.log(video.id)
        try {
            const docRef = addDoc(collection(db, "comentarios"), {
                id: video.id,
                comentario: comentario
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    

    return (
        <>
        <h3>Comentarios</h3>
        <div className="container-comments">
            
            <input className="post-comments" value={comentario} 
            onChange={(e)=>setComentario(e.target.value)} />
            <button onClick={comentar}>Publicar</button>
            
            
        </div>
        <div>
            {comments.map(comment => {
                if(comment.id===video.id)
                    return <Comment comment={comment.comentario}/> 
            })}
            </div>
        </>
    )
}

export default Comments;