
import axios from "axios";


export async function Register(userData) {
    try {
        let { data } = await axios.post('https://linked-posts.routemisr.com/users/signup', userData)
        // console.log(data)
        return data
    } catch (err) {
        // console.log(err.response.data)
        return err.response.data
    }
}
export async function Login(userData) {
    try {
        let { data } = await axios.post('https://linked-posts.routemisr.com/users/signin', userData)
        // console.log(data)
        return data
    } catch (err) {
        // console.log(err.response.data)
        return err.response.data
    }
}

export async function GetUserLoggedData() {
    try {
        let { data } = await axios.get('https://linked-posts.routemisr.com/users/profile-data',{
headers:{
    token:localStorage.getItem('token')
}
        } )
        // console.log(data)
        return data
    } catch (err) {
        // console.log(err.response.data)
        return err.response.data
    }
}
