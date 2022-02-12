import React from "react";

const Scroll = (props) => {
    return(
    <div style={{overflowY:'scroll', borderTop:'1.5px solid #fce4ec', height:'500px'}}>
        {props.children}
    </div>
    )
};

export default Scroll;


