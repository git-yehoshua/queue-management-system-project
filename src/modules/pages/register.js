import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Register = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleFirstName = (event) => {
        setfirstName(event.target.value);
    };
    
    const handleLastName = (event) => {
        setlastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleConfirmPassword = (event) => {
        setconfirmPassword(event.target.value);
    }

    // const togglePassword = () => {
    //     if(password == 'password') {
    //         setPassword('text')
    //     }
    //     setPassword(password)
    // };
   

    const handleSubmit = (event) => {
        event.preventDefault();
        //You can perform the logic here
    }
    return(
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First name</label>
                <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Enter your first name.'
                value={firstName}
                onChange={handleFirstName}
                required
                />

                <label htmlFor='lastName'>Last name</label>
                <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Enter your last name'
                value={lastName}
                onChange={handleLastName}
                required
                />

                <label htmlFor='handleEmail'>Email address</label>
                <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email address'
                value={email}
                onChange={handleEmail}
                required
                />
                
                <label htmlFor='username'>Set Username</label>
                <input
                type='text'
                id='username'
                name='username'
                placeholder='Enter desired username'
                value={username}
                onChange={handleUsernameChange}
                required
                />

                <label htmlFor="password">Set password</label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
                />

                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                required
                />

                <button type='submit'>Sign up</button>
                <Link to='/login' className='login-link'>Already have an account?</Link>

                {/* <div className='toggle-button-container'>
                <button className='toggle-password' onClick={togglePassword}>
                {password === 'password' ? <i className='bi bi-eye-slash'></i> : <i className='bi bi-eye'></i>}
                </button>
                </div> */}
            </form>
        </div>
    );
}

export default Register;