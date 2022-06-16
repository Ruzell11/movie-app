import React from 'react';

const HomePage = (props) => {
    return (
        <>
         <div className='movie m-1'>

<img src={props.Poster} className='w-100  rounded'/>
<div className='title '>
<h1 className='w-100 h-50 fs-5'>{props.Title} </h1>
</div>
</div>

        </>
    )
}


export default HomePage;