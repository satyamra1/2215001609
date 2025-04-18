import React, { useEffect, useState } from 'react';
import { fetchLatestPosts } from '../src/api';
import styles from './Feed.module.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const loadFeed = async () => {
    const data = await fetchLatestPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadFeed(); 
    const interval = setInterval(loadFeed, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Feed</h2>
      {posts.map(post => (
        <div key={post.id} className={styles.postCard}>
          <img src={`https://source.unsplash.com/random/600x300?sig=${post.id}`} alt="Post" />
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
