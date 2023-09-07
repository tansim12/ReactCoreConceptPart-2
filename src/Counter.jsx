import { useState } from "react"

export default function Counter() {
    const [count , setCounter] = useState(0)
    const pluse = ()=>{
        const newCount = count + 1;
        setCounter(newCount);
    }

    const mainus = ()=>{
        const newCount = count - 1;
        // use ternary operator 
        newCount < 0 ? alert('Negative number Not Alow') : setCounter(newCount)

        // normal system 
        // if (newCount < 0) {
        //     return alert('Negative number Not Alow');
            
        // }
        // setCounter(newCount);
    }
    return(
        <div style={{border:'2px solid red ' , padding:20}}>
            <h3>Counter : {count} </h3>
            <button onClick={pluse}>+</button>
            <button onClick={mainus}>-</button>
        </div>
    )
}