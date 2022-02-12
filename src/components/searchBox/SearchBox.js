import React from 'react';
import './SearchBox.css'
const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
            <input
             className='pa3 ba b--green bg-washed-green b--solid bw1 br3'
             type='search'
             placeholder='search robots'
             onChange={searchChange}
             />
              
        </div>
    );
}

export default SearchBox;