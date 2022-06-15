import React from 'react';



 const Header = (props) =>{
    return(
        <>
        <navbar className='myNavStyle d-flex justify-content-between align-items-center'> 
        <div className='brand fs-2 p-3 pt-4'>Movie<span className='fs-1' style={{color:'red'}}>T</span></div>
            <ul className='d-flex   search-button-container rounded-3 p-2 mt-3' >
                <li className='list-unstyled '>
                    <form onSubmit={props.handleOnSubmit}>
                    <input type='text'
                     placeholder='search-movie' 
                     className='rounded-3 searchtxt '
                     value={props.value}
                     onChange={props.handleChange}
                     >
                    
                     </input>
                     </form>
                </li>


                <li className='list-unstyled d-flex justify-content-center align-items-center px-3'>
                <i className="fa-solid fa-magnifying-glass searchbtn "></i>
                </li>
            </ul>
        </navbar>
        </>
    )
}






export default Header;