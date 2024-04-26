import {useEffect, useState} from 'react'

const Counter = () => {
  
const [counter, setCounter] = useState(0);

const handleCounter = () =>{
    setCounter((prev)=> prev+1);
};

useEffect(() => {
    console.log("LOAD");
}, [])


useEffect(() => {
    console.log("COUNTER CAMBIÓ");
}, [counter])
 
  return (
    <>
        <div>Contador</div>
        <div>{counter}</div>
        <button onClick={handleCounter}>+</button>
    </>    
  )
}

export default Counter