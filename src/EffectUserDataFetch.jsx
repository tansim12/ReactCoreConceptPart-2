import { useEffect, useState } from "react"

export default function Users() {
    const [user , setUser] = useState([])
    
    useEffect(()=>{  // create user effect
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))  // data কে update করে দিলাম , তাহলে initial value টা এই হয়ে data যাচ্ছে.
        
    },[])

    return(
        <div>
            <h3>User Length : {user.length} </h3>
        </div>
    )
}