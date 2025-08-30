import axios from "axios";

export async function changePasswordApi(password,newPassword) {
    try {
        let {data} = await axios.patch(`https://linked-posts.routemisr.com/users/change-password`,{
            password,newPassword

            }
        ,{
headers:{
    token:localStorage.getItem('token')
}
        })
        console.log(data);
        return data;
    } catch (error) {
   
        return error
        
    }
    
} 



export async function uploadProfilePhotoApi(formData) {
  try {
    const token = localStorage.getItem("token"); 
    const { data } = await axios.put(
      "https://linked-posts.routemisr.com/users/upload-photo",
      formData,
      {
        headers: {
          token: token,
        },
      }
    );
    return data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
}


export async function getUserPostsApi(userId, limit = 5) {
  try {
    const response = await axios.get(
      `https://linked-posts.routemisr.com/users/${userId}/posts`,
      {
        params: {limit }, 
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return { posts: [], totalPages: 1, message: "failed" };
  }
}