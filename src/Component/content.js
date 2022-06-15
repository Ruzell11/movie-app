import React from 'react'
import { useEffect , useState } from "react";
import ContentBody from './contentBody'
import Header from './header'



const Content = () =>{
const[data , setData] =  useState([])
const [loading, setLoading] = useState(true);
const[searchValue , setSearchValue] = useState('')

 useEffect(() => {
  setLoading(false)
 fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=a3de684e`)
    .then(response => response.json())
    .then(res => {
     setData(res.Search)
 
      console.log(data)
    })

  },[searchValue])
const handleChange = (event) =>{
  setSearchValue(event.target.value)
}
const handleOnSubmit = (e) => {
  e.preventDefault()
 
}

 return(
  
   <>
   <Header search={searchValue} handleChange={handleChange} handleOnSubmit={handleOnSubmit}/>
<div className='container d-flex  '>
  <div className='row justify-content-center rows-col-6 '>
  { loading ? <h1>loading ....</h1> : (data || []).map((item) =>
<ContentBody {...item} key={item.imdbID}/>
    )}
    </div>
</div>
   </>

   ) 



 }

export default Content;