import React from 'react'
import classes from './Journals.module.css'
import Logo from '../Images/New Logo svg.svg'
import { Link } from 'react-router-dom'

const Journals = () => {
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
          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Title</h2>
            <p className={classes.cardDescription}>
              I found my stay at blah blah, truly enticing and so and so, extension of words. This is a summary. (It could also be [No summary])
            </p>
            <img src="image1.jpg" alt="Preview" className={classes.cardImage} />
            <div className={classes.cardLocation}>North Virginia, americana, earth.</div>
            <div className={classes.cardActions}>
              <button className={classes.actionButton}>Read</button>
              <button className={classes.actionButton}>View</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={classes.card}>
            <h2 className={classes.cardTitle}>Title</h2>
            <p className={classes.cardDescription}>
              I found my stay at blah blah, truly enticing and so and so, extension of words. This is a summary. (It could also be [No summary])
            </p>
            <img src="image2.jpg" alt="Preview" className={classes.cardImage} />
            <div className={classes.cardLocation}>North Virginia, americana, earth.</div>
            <div className={classes.cardActions}>
              <button className={classes.actionButton}>Read</button>
              <button className={classes.actionButton}>View</button>
            </div>
          </div>
        </div>
    </main>
    </section>
    </>
  )
}

export default Journals