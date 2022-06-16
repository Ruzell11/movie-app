import React from 'react'
import { useEffect , useState } from "react";
import ContentBody from './contentBody'
import Header from './header'
import Homepage from './homepage.js'



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
    })


  },[searchValue])
const handleChange = (event) =>{
  setSearchValue(event.target.value)
}
const handleOnSubmit = (e) => {
  e.preventDefault()
 
}
    const[homepage , setHomePage] = useState([])
    useEffect(() =>{
    
      fetch('http://www.omdbapi.com/?s=avenger&apikey=a3de684e')
      .then(homepage => homepage.json())
      .then(resp => {
        setHomePage(resp.Search);

      },[])
    })
 return(
  
   <>
 

   <Header search={searchValue} handleChange={handleChange} handleOnSubmit={handleOnSubmit}/>

<div className='container d-flex  '>
  <div className='row justify-content-center rows-col-6 '>
  
 
  { loading ? <h1>loading ....</h1> : (data || []).map((item) =>
<ContentBody {...item} key={item.imdbID}/>
    )}
      { homepage.map((item1) => 
    <Homepage {...item1} key={item1.imdbID} />
    
 )}
    </div>
</div>
   </>

   ) 



 }

export default Content;