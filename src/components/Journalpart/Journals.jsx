import React, { useEffect } from 'react'
import classes from './Journals.module.css'
import Logo from '../Images/New Logo svg.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Journalcard from './Journalcard'

const Journals = () => {

  const [formData, setFormData] = useState({
          email: "",
          Journal_Body: "",
          Journal_Title: "",
          Travel_Pic: "",
          Country: "",
          City: "",
          District: "",
          Latitude:"",
      });

      const fetchApi = async () => {
        const response = await axios.get("http://127.0.0.1:5000/api/journals");
        setFormData(response.data);
        console.log(response.data.name);
    }
    useEffect(() => {
      fetchApi();
    },[])
  return (
    <>
    <section className={classes.cont}>
    <header className={classes.navhead}>
        <div class={classes.navbar}>
            <div class={classes.logo}>
                <img src={Logo} alt="" width="45px" loading="lazy"/>
            </div>
    
            <div class={classes.links}>
                <ul className={classes.listcont}>
                    <li className={classes.list}><Link className={classes.navlink} to="../index.html">home</Link></li>
                    <li className={classes.list}><Link className={classes.navlink} to="#">journal</Link></li>
                    <li className={classes.list}><Link className={classes.navlink} to="../Login Page/account.html">account</Link></li>
                    <li className={classes.list}><Link className={classes.navlink} to="#">Contact</Link></li>
                    <li id={classes.profile} title="Profile"><Link to="ProfilePage/profile.html"><i class='bx bx-user'></i></Link></li>
                </ul>
            </div>
        </div>
    </header>

    {/*Make component for mapping */}
     {/* Main Section */}
     <main className={classes.main}>
        <h1 className={classes.title}>Create</h1>
        <div className={classes.filter}>
          <button className={classes.filterButton}>Filter ▼</button>
        </div>

        <div className={classes.cardsContainer}>
          {/* Card 1 */}
          <Journalcard />
        </div>
    </main>
    </section>
    </>
  )
}

export default Journals