import React from "react";
import Card from "../card/Card";

const CardList = ({robots}) => {
//Mapping over robots
const cardcomponent = robots.map((user, i) => {
    return <Card 
    key={i} 
    id={robots[i].id} 
    name={robots[i].name} 
    username={robots[i].username}
    email={robots[i].email }
  />
} )

//CardList component return statement
    return(
        <div>
           {cardcomponent}
        </div>
    );
}


export default CardList;