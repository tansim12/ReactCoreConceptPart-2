import { useEffect, useState } from "react"
import Friend from "./ShowFriend";

export default function Friends(params) {
    const [friend , setFriend] =useState([]);

    useEffect(()=>{
        // const fetchFriendData =async ()=>{
            async function fetchFriendData(){
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json()
                // console.log(data);
                setFriend(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchFriendData()
        
    },[])

    return(
        <div>
            <h3>Total Friend : {friend.length} </h3>
            {
                friend.map(friendObj =>  <Friend details={friendObj}></Friend>)
            }
            
        </div>
    )
}