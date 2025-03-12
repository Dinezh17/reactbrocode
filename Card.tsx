import React from "react";


const Card : React.FC =()=>{
    return (<div className="Card">
        <img className="CardImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQmu8YCwWhtNqIqjJ4fCRLREdO9ct-WZIxA&s" alt="Profile pic"></img>
        <h2 className="CardTitle">Dumb cat</h2>
        <p className="CardDesc">Bro has a single brain cell </p>

    </div>)
}
export default Card;