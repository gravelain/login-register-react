import React from 'react'

export default function HomePage(props) {

  const HandleLogout = ()=>{

    props.history.push('/login');
  }

    return (
       
        <div className="HomePage">
          Welcome User ! 
          <br></br>

          <button onClick={HandleLogout}>Logout</button>
        </div>

    )
}
