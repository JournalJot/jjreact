import React from 'react'
import classes from './Logsign.module.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <body className={classes.logbod}>
      <div className={classes.container}>
              <div className={classes.formbox} id={classes.formBox}>
    {/* <!-- Signup Form --> */}
    <div id={classes.signupForm} className={classes.formcontent}>
                <div className={classes.caption}>
                    <div id={classes.slo}>
                        <p>WRITE YOUR TRAVELS WITH JOURNAL  <br /> JOT!</p>
                    </div>
                    <p id={classes.log}>Already have an account?</p><Link to="/Loginpage" id={classes.showLogin}>Log in</Link>
                </div>
                <form action="" method="" id={classes.sign}>
                    <img src="../IMG/user-octagon-svgrepo-com.png" alt="User" height="150px" loading="lazy" />
                    <input type="text" id={classes.Fname} placeholder="Full Name" />
                    <br />
                    <input type="email" placeholder="E-mail address" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button type="submit" id={classes.sgnbtn}>start journey</button>
                
                </form>
            </div>
            </div>
            </div>
            </body>
    </>
  )
}

export default Signup