// login page !
// 'use client'

// import React, { useState } from 'react'
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/navigation'

// export default function Loginpage() {

// const [user , setuser] = useState({email:"" , password:"" , })
// const [servermsg , setservermsg] = useState('')
// const router = useRouter() ; 


// function handlechange(e)
// {

// const {name , value} = e.target ; 

// setuser((prev)=>({

// ...prev , [name]:value , 


// }))

// }

//  async function handlesubmit()
// {

// try {

// const response = await fetch('/api/users/login' , 
// {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   }); 

// const {status , message , success , token} = await response.json() ; 

// if(status === 200)
// {
//   Cookies.set('token' , token , {expires: 1}) ;
//   setservermsg(message) ; 
//   router.push('/profiledashboard');
// }
// else
// {
//   console.log("No Cookie Generated !");
// }
    
// } catch (error) {
//     console.log(error);
// }



// }


//   return (
//     <div>
    
//     <input  type='text' placeholder='Enter Email !' value={user.email} onChange={handlechange} name='email' ></input>
//     <input  type='text' placeholder='Enter Password !' value={user.password} onChange={handlechange} name='password' ></input>
//     <p>{servermsg}</p>
//     <button onClick={handlesubmit}> Submit </button>
    
    
    
//     </div>
//   )
// }


// Loginpage.js

// Loginpage.js

'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Loginpage() {
  const [user, setuser] = useState({ email: '', password: '' });
  const [servermsg, setservermsg] = useState('');
  const router = useRouter();

  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #dbdbdb',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #dbdbdb',
    borderRadius: '5px',
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #fd5c63, #fe9458)',
    color: '#ffffff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: '#ed4956',
    marginTop: '10px',
  };

  const bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '0',
    background: 'linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
  };

  function handlechange(e) {
    const { name, value } = e.target;

    setuser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handlesubmit() {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const { status, message, token } = await response.json();
      setservermsg(message);
      if (status === 200) {
        Cookies.set('token', token, { expires: 1 });
        
        router.push('/profiledashboard');
      } else {
        console.log('No Cookie Generated!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          value={user.email}
          onChange={handlechange}
          name="email"
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handlechange}
          name="password"
          style={inputStyle}
        />
        <p style={errorStyle}>{servermsg}</p>
        <button onClick={handlesubmit} style={buttonStyle}>
          Log In
        </button>
      </div>
    </div>
  );
}
