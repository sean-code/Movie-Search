import './Signin.css'

function Signin(){
    return(
        <div className='login-box'>
            <h2>Sign In</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
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