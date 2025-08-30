import axios from "axios"



export async function postsApi() {
    try {
        let{data}= await axios.get('https://linked-posts.routemisr.com/posts',{
            headers:{
                token:localStorage.getItem('token')
            },
            params:{
                limit:15,
                sort:'-createdAt'
            }
        }

    )
    return data
       
    } catch (error) {
        
        return error
    }
    
}

export async function singlePostApi(id) {
    try {
        let{data}= await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
            headers:{
                token:localStorage.getItem('token')
            }
        }

    )
    return data
       
    } catch (error) {
 
        return error
    }
    
};

export async function creatPostApi(formData) {
    try {
        let {data} = await axios.post("https://linked-posts.routemisr.com/posts",formData,{
headers:{
    token:localStorage.getItem('token')
}
        })
       
        return data;
    } catch (error) {
 ;
        
    }
    
} 

export async function updatePostApi(formData,posId) {
    try {
        let {data} = await axios.put(`https://linked-posts.routemisr.com/posts/${posId}`,formData,{
headers:{
    token:localStorage.getItem('token')
}
        })
       
        return data;
    } catch (error) {
 ;
        
    }
    
} 


export async function deletePostApi(postId) {
  try {
   
    const { data } = await axios.delete(
      `https://linked-posts.routemisr.com/posts/${postId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error deleting comment:", error);
    return error;
  }
}