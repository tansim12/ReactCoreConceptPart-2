import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import TryCounter from './TryCounter'
import Users from './EffectUserDataFetch'
import Friends from './FetchOfFriend'

function App() {

  const handlar1 = ()=>alert('first Button Clicked')

  // যদি parameter theke 
  const handlar2 = (number)=> alert(number +10);

  const lastName = 'Tashdid'
  const clicked = (firstName)=>alert(`${firstName}  ${lastName}`)
  return (
    <>
      <h1>React core concept 2</h1>

    {/* userEffect data fetch */}
    {/* <Users></Users> */}
    <Friends></Friends>


    {/* counter part  */}
    {/* <Counter></Counter> */}
    {/* <TryCounter></TryCounter> */}


      {/* <button onClick={handlar1}>1st Click</button>

      <button onClick={()=> handlar2(60)} >2nd Click with parameter</button>

      <button onClick={()=> clicked("Tansim Ahmed")}>3rd Click</button> */}
    </>
  )
}

export default App
