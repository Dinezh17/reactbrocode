import React from "react";
interface fruits{
    name:string
    Calories:number
}
const MyComponent: React.FC = () => {
  const items:fruits[] = [{name:"Apple",Calories:200},
    {name:"orange",Calories:220},
    {name:"grape",Calories:300},
    {name:"pineapple",Calories:500}]


  return (
    <div>
      <h2>Shopping List</h2>
      <ol>
        {items.map((items,index) => (
          <li key={index}>{items.name} : {items.Calories} </li>))}
        
      </ol>
    </div>);


}
export default MyComponent;
