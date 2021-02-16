import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Real-time connection to the database
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
}

export default Feed;

/*<Post
profilePic={LocalImage.aiUeharaIcon}
                message='Hello from Ai Uehara.'
                timestamp='Ai Uehara Timestamp...'
                userName='Ai Uehara'
                image={LocalImage.aiUeharaBg}
            />
            <Post
                profilePic={LocalImage.meguriIcon}
                message='Have some fun !'
                timestamp='Meguri Timestamp...'
                userName='Meguri'
                image={LocalImage.meguriBg}
            />
            <Post
                profilePic={LocalImage.juliaIcon}
                message='That was awesome !'
                timestamp='Julia Timestamp...'
                userName='Julia'
                image={LocalImage.juliaBg} />*/
