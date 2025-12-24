import{useState} from "react";
function Counter(){
  let [count,setCount]=useState(0);
  let incCount=()=>{
setCount(count+1);
  };
  
  
  return(
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>increase count</button>
    </div>

  );
}
export default Counter;