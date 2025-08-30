import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singlePostApi } from '../services/postsServices'
import PostCard from '../components/Posts/PostCardContainer'
import LoadingSkeleto from '../components/LoadingSkeleto';

export default function PostDetailsPage() {
  let {id}=useParams();
const [post, setPost] = useState(null);
console.log(post)
  async function postDetails() {
    const response= await singlePostApi(id)
    console.log(response)
    if(response.message){
  setPost(response.post)
    };
  
  };
  useEffect(()=>{
    postDetails()
  },[]);
  

  return <>
  <div className="w-4/6 mx-auto">
    {post ? <PostCard post={post} commentLimit={post.comments.length} /> : <LoadingSkeleto/>}
  </div>

  </>
}
