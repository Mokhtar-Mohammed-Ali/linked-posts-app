import  { useEffect, useState } from 'react'
import PostCard from '../components/Posts/PostCardContainer'
import { postsApi } from '../services/postsServices'
import LoadingSkeleto from '../components/LoadingSkeleto';
import CreatePost from '../components/Posts/CreatePost';

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  
  async function getAllPosts() {
    const response = await postsApi();

    setPosts(response.posts);

  }
  
  useEffect(() => {
    getAllPosts();

  }, [])
  return <>
    <div className=" md:w-4/6 mx-auto md:mt-20">
    <CreatePost callback={getAllPosts} />
  
      {posts.length == 0 ? <LoadingSkeleto />
        : posts.map((post) => <PostCard callback={getAllPosts} key={post.id} post={post} commentLimit={1}/>)}
    </div>
  </>
}