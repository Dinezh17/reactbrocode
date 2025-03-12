import React from "react";
const Button:React.FC=()=>{
    const styles ={
        backgroundColor:"rgb(66, 139, 52)",
         color: "rgb(26, 20, 20)" ,
         padding: "10px 20px",
        borderRadius: "5px",
         cursor:"pointer"
    }
    return (<button style={styles}>Click me</button>);
}
export default Button