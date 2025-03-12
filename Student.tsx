import React from "react"

interface props{
  username :string
  log?:boolean
}

const Student : React.FC<props>=({username,log=true})=>
{
    const wl :React.ReactNode = <h1>welcome back {username}</h1>
return (<>
<h1>my webapp</h1>
{log?wl:<h2 className="ll">please log in </h2>}</>

)
}
export default Student