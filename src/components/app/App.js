import React, {Component} from 'react';
import CardList from '../cardList/CardList';
import SearchBox from '../searchBox/SearchBox';
// import {robots} from '../../robots';
import './App.css';
import Scroll from '../scroll/Scroll';
import ErrorBoundry from '../errorBoundary/ErrorBoundary';

class App extends Component {
// Created state for the App component   
    constructor(){
        super()
        this.state = {
            robots: [ ],
            searchfield:''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


// Search change event made up function name could be anything 
// what to pass an event on search change
onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}


//App class render function
    render(){
        const { searchfield, robots} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
 if(robots.length === 0){
     return <h1 className='heading-1 tc'>Loading...</h1>
 }else{
        return( 
            <div className='tc'>
              <h1 className='ma2 heading-1'>Rockin Robots</h1>
              <SearchBox searchChange ={this.onsearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
    }
}

export default App;