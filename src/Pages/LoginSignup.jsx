import './LoginSignup.css'

const LoginSignup = () => {

    return (
        <div className="login">
            <h1>Sign Up</h1>
            <div className="signup-fields" >
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button> <br />
            <p>Already have an account? <span>Login Here</span></p>
            <div className="login-terms" >
                <input type="checkbox" id="" />
                <p>I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>

            </div>
            
        </div>
    )
}

export default LoginSignup;