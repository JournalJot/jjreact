import React from 'react'
import classes from './Home.module.css'
import Logo from '../Images/logo final svg.svg'
import Img1 from '../Images/WRITE YOUR TRAVELS.png'
import Img2 from '../Images/that-s-her-business-R4sP8_Bq0Bw-unsplash.jpg'
import Img3 from '../Images/redd-francisco-wtZ5QoTEI88-unsplash.jpg'
import Img4 from '../Images/logo bigger.png'
import Img5 from '../Images/Logo transpa.png'
import Img6 from '../Images/logo final.png'
import Img7 from '../Images/logo bigger.png'
import Img8 from '../Images/logo final svg.svg'


const Homecode = () => {
  return (
    <>
    <section>
    <div className={classes.wrapper}>
        <header>
            <div className={classes.logo}>
                <img src={Logo} className="protected" alt="Journal Jot Logo" loading="lazy" width="70px" />
            </div>

                <div className={classes.links}>
                    <ul className={classes.sidebar}>
                        <li><a href="#">home</a></li>
                        <li><a href="Travel-Gallery/gallery.html" target="_blank" rel="noopener noreferrer">journal</a></li>
                        <li><a href="Login Page/account.html#loginForm">account</a></li>
                        <li><a href="#connect">contact</a></li>
                        </ul>
                </div>  
                
                <div className={classes.acctUser}>
                    <a href="ProfilePage/profile.html" className={classes.loginlink}><img src="../Images/user-rounded.svg" alt="" width="40px" loading="lazy" title="Profile"/></a>
                </div>

                <div className={classes.slogan}>
                    <img src={Img1} className="protected" alt="slogan" loading="lazy" width="250px" height="100px"/>
                </div>          
        </header>

        <section className={classes.next}>
            <div className={classes.name}>
                <p>JournalJot</p>
            </div>

            <section className={classes.getStarted}>
                <div className={classes.about}>
                    <h3>Start your travel journal adventure!</h3>
                    <p>Journal Jot is a digital travel diary that lets you capture your adventures with stories, photos, and maps—all in one place. Its online editor is designed to feel like you’re writing in a real book. Personalize your journal with various layouts and style options to match your unique travel vibe!
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div className={classes.aboutimg}>
                    <img src={Img2} alt="about-img" loading="lazy" width="400px" />
                </div>
            </section>

            <p id="mem">Your memories forever safe</p>
            <section className={classes.create}>
                <div className={classes.createbox}>
                    <h3>Transform your adventure into a travel book</h3>
                    <p>
                        Just returned from your travels? Turn your favorite memories into a stunning printed keepsake with Journal Jot. From scenic landscapes to exciting adventures, relive every special moment in a beautifully crafted book—exactly how you lived it.
                    </p>
                    <a href="#">NEW +</a>
                </div>
                <div className={classes.createimg}>
                    <img src={Img3} alt="create-img" loading="lazy" />
                </div>
            </section>


            <p id="mem">Join the community</p>
            <section className={classes.join}>
                <div className={classes.jointxt}>
                    <h3>Join us today</h3>
                    <ul className={classes.globelist}>
                        <li>Craft your memories seamlessly using our intuitive online editor or mobile app, designed to mimic the elegant appearance of a physical book.</li>
                        <li>Bring your adventures to life by uploading photos and selecting from versatile page layouts.</li>
                        <li>Tailor every detail with customizable fonts, colors, and styling options to reflect your personal flair.</li>
                        <li>Enrich your narrative by adding dynamic maps, interactive elements, and specially designed spaces to showcase tickets, photos, and other cherished souvenirs.
                        </li>
                    </ul>
                    <a href="#">sign up</a>
                    {/* <!-- <button type="button">sign up</button> --> */}
                </div>
                <div className={classes.img}>
                    <img src={Img4} alt="Journal Jot logo" width="300px" loading="lazy"/>
                </div>
            </section>


            <p id={classes.final}>Our users love Journal Jot</p>
            <section className={classes.reviews}>
    
                <div className={classes.Cmtblk}>
                    <div className={classes.user}>
                        <img src={Img5} alt="user1" loading="lazy"/>Lilian
                    </div>
                    <div className={classes.comment}>
                        Journal Jot is fantastic! Simple, intuitive interface. Loved mapping my trips and adding photos. Easy to share with friends, too. Highly recommend for any traveler wanting to document their adventures.
                    </div>
                    <div className={classes.rating}>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </div>


                <div className={classes.Cmtblk}>
                    <div className={classes.user}>
                        <img src={Img6} alt="user2" loading="lazy"/>Jessica
                    </div>
                    <div className={classes.comment}>
                        Absolutely loved Journal Jot! Effortlessly captured my journey with its intuitive design. The map integration is brilliant, and sharing was a breeze. A fantastic way to relive my travels. Five stars!
                    </div>
                    <div className={classes.rating}>
                        <p> ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>


                <div className={classes.Cmtblk}>
                    <div className={classes.user}>
                        <img src={Img7} alt="user3" loading="lazy"/>Bob
                    </div>
                    <div className={classes.comment}>
                        As a frequent traveler, Journal Jot streamlined my record-keeping. Easy photo uploads, and the map feature is top-notch. Finally, a journal that keeps up! Simple, practical, and a great way to revisit adventures.
                    </div>
                    <div className={classes.rating}>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </section>

        </section>

        
        
        <footer className={classes.sitefooter}>
            <div className={classes.footercontainer}>
            <div className={classes.footerlogo}>
                <img src={Img8} className="protected" alt="Journal Jot Logo" width="100px" loading="lazy"/>
                <p>Write Your Travels, Relive the Moments</p>
            </div>
            
            <div className={classes.footerlinks}>
                <div className={classes.linkgroup}>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="Travel-Gallery/gallery.html">Journals</a></li>
                    <li><a href="Login Page/account.html">Account</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Places</a></li>
                </ul>
                </div>
                
                <div className={classes.linkgroup}>
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Travel Tips</a></li>
                    <li><a href="#">Packing Lists</a></li>
                    <li><a href="#">Destination Guides</a></li>
                </ul>
                </div>
                
                <div className={classes.linkgroup}>
                <h3>Connect</h3>
                <ul className={classes.sociallinks} id="connect">
                    <li><a href="#"><i className='bx bxl-instagram'></i> Instagram</a></li>
                    <li><a href="#"><i className='bx bxl-facebook'></i> Facebook</a></li>
                    <li><a href="#"><i className='bx bxl-twitter'></i> Twitter</a></li>
                    <li><a href="#"><i className='bx bxl-pinterest'></i> Pinterest</a></li>
                </ul>
                </div>
            </div>
            </div>
            
            <div className={classes.footerbottom}>
            <p>&copy; 2025 JournalJot. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
            </footer>
    </div>
</section>
    </>
  )
}

export default Homecode