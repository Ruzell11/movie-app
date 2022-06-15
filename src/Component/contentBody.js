import React from 'react';



const ContentBody = ({Title , Poster}) =>(
<>

  <div className='movie m-1'>

    <img src={Poster} className='w-100  rounded'/>
  <div className='title '>
  <h1 className='w-100 h-50 fs-5'>{Title} </h1>
  </div>
  </div>

 

    </> 
)
    

    

             
export default ContentBody;