import React, { useState } from 'react';
import classes from './Logsign.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <section className={classes.logbod}>
      <div className={classes.container}>
        <div className={classes.formbox} id={classes.formBox}>
          {/* Login Form */}
          <div id={classes.loginForm} className={classes.formcontent}>
            <div className={classes.caption}>
              <img 
                src="../Images/workspace.gif" 
                alt="animation" 
                loading="lazy" 
                height="100px" 
              />
              <p id={classes.slo}>WHERE TO NEXT?</p>
              <a href="../index.html" id={classes.home}>Home</a>
            </div>
            <form onSubmit={handleSubmit}>
              <img 
                src="../Images/user-octagon-svgrepo-com.png" 
                alt="User" 
                height="150px" 
                loading="lazy" 
              />
              <input
                type="email"
                id="minput"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                id="pwrd"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit">log in</button>
              <p id={classes.acct}>
                Don't have an account? <br />
                <Link to="/Signuppage" id={classes.showSignup}>Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;