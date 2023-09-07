export default function Friend({details}) {
    const {name, email} = details
    return(
        <div style={{border:"2px solid red" , padding:20, margin:20}}>
            <h2>Friend Name : {name} </h2>
            <p>Email : {email}</p>
        </div>
    )
}