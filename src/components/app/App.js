import React, { useState, useEffect } from 'react';
import CardList from '../cardList/CardList';
import SearchBox from '../searchBox/SearchBox';
// import {robots} from '../../robots';
import './App.css';
import Scroll from '../scroll/Scroll';
import ErrorBoundry from '../errorBoundary/ErrorBoundary';

function App() {
// Created state for the App component   
const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState('')
// const [count, setCount] = useState(0)
useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json() )
         .then(users => {setRobots(users)} );
        //  console.log(count)
},[ ])

// Search change event made up function name could be anything 
// what to pass an event on search change
// eslint-disable-next-line no-unused-vars

const onsearchChange = (event) => {
   setSearchfield( event.target.value )
}


//App class render function
    

const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
})
 if(robots.length === 0){
     return <h1 className='heading-1 tc'>Loading...</h1>
 }else{
        return( 
            <div className='tc'>
              <h1 className='ma2 heading-1'>Rockin Robots</h1>
              {/* <button onClick={()=> setCount(count +1)}>ClickMe</button> */}
              <SearchBox searchChange ={onsearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
    
}

export default App;