import { useEffect, useState, useContext } from "react";
import PostCard from "./PostCardContainer";
import { getUserPostsApi } from "../../services/userServices";
import { AuthContext } from "../context/AuthContext";
import LoadingSkeleto from "../LoadingSkeleto";

export default function UserPosts({ limit = 5 }) {
  const { userData } = useContext(AuthContext); 
  const userId = userData?._id;

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    if (!userId) return; 
    setLoading(true);

    const response = await getUserPostsApi(userId, limit);

    if (response.posts) {
      setPosts(response.posts);
      
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [page, limit, userId]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-3 md:mt-20">
      {loading && <LoadingSkeleto/>}

      {!loading && posts.length > 0 ? (
        posts.map((post) => (
        
           <PostCard
            key={post._id}
            post={post}
            commentLimit={3}
            callback={fetchPosts}
          />
       
        ))
      ) : (
        !loading && <p className="text-center">No posts found</p>
      )}

     
    </div>
  );
}
