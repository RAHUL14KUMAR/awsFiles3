import React,{useEffect,useState} from 'react'
import {useRef} from 'react'
import { getSignedUrl,uploadFile } from '../service/api';

function Home() {

    const fileInput=useRef();
    const [url,setUrl]=useState('');
    const [file,setFile]=useState('');

    useEffect(async()=>{
        const res=await getSignedUrl();
        setUrl(res.url);
    },[])

    useEffect(async()=>{
        const res=await uploadFile(url,file);
        setUrl(url.split('?')[0]);
    },[file])

  return (
    <div class="container">
      <h1>FILE BIN</h1>
      <p>Convient file sharing in three steps without registration</p>

      <p>
        <span>1</span> 
        <input type="file" 
        ref={fileInput} 
        style={{display:"none"}}
        onChange={(e)=>setFile(e.target.files [0])}
        />

        <button onClick={()=>fileInput.current.click()}>select files to upload</button>
        or drag-and-drop file into thos browser window
        </p>

      <p><span>2</span> waiting until file upload complete</p>

      <p><span>3</span> file will be available at <a href={url.split('?')[0]}>{url.split('?')[0]}</a> which is link you can share</p>

      <p><span>4</span> file will deleted automatically at any time</p>

      {file && <img src={url} alt="image"/>}
    </div>
  )
}

export default Home
// if we dont use 'useref' then we saw that we have to two button one is file selection an d other is button component that we use 

// useref is replacement of document.getElementById,class,querySelector