import { useState } from "react"

export default function TryCounter() {
    const [count, updateCount] = useState(0);
    const pluse =()=>{
        // 1st way 
        // const newUpdate = count + 1 ;
        // updateCount(newUpdate);

        updateCount(count + 1); // 2nd way
    }    

    const mainus =()=>{
        const newUpdate = count - 1;
        newUpdate < 0 ? alert('Not Alow Negative Number') : updateCount(newUpdate)

    }
    return(
        <div style={{border:'2px solid' , padding: 20}}>
            <h3>Count : <span style={{color:'green'}}>{count}</span> </h3>
            <button onClick={pluse} style={{margin:10, border:'2px solid '}}>+</button>
            <button onClick={mainus} style={{margin:10, border:'2px solid '}}>-</button>
        </div>
    )
}