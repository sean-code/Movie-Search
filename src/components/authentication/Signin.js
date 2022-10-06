import './Signin.css'
import {useState} from 'react';
function Signin(){
    const [userName, setUserName] = useState('');
    const [thePassword, setThePassword] = useState('');
    const [error, setError] = useState(false);

function handleSubmit(event){
    event.preventDefault();
    if(userName.length == 0 || thePassword == 0){
        setError(true)
    }
    if (userName&&thePassword)
    {

    console.log("Username: ",userName, "\nThe Password: ", thePassword)
    }
}

    return(
        <div className='login-box'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input onChange ={event=> setUserName(event.target.value)} placeholder='Enter Username' type="text" name="" required="" />
                    {error&&userName.length<=0?
                    <label>Username</label>:""}
                </div>
                <div className="user-box">
                    <input onChange ={event=> setThePassword(event.target.value)} placeholder='Enter Username' type="password" name="" required="" />
                    {error&&thePassword.length<=0?
                    <label>Password</label>: ""}
                </div>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    Sign In
                </a>
            </form> 
        </div>
    )
}

export default Signin;