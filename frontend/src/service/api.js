import axios from 'axios';

const API_URL="http://localhost:8080";

const headers={
    'Content-Type':'multipart/form-data'
}

export const getSignedUrl=async()=>{
    try{
        const res=await axios.get(`${API_URL}/image-url`);
        return res.data
    }catch(error){
        console.log('error occur while calling the API',error.message);
        return error.response.data
    }
}

export const uploadFile=async(url,file)=>{
    try{
        const res=await axios.put(url,file,{headers});
        // this fuction call mainteained by aws s3]
        return res.data
    }catch(error){
        console.log('error occur while calling the API',error.message);
        return error.response.data
    }
}