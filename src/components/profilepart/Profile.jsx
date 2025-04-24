import React, { useState, useEffect } from 'react';
import classes from './profile.module.css';
import axios from 'axios';

const Profile = () => {

    const [userData, setUserData] = useState({});
    const fetchApi = async () => {
        const response = await axios.get("http://127.0.0.1:5000/api/data");
        setUserData(response.data);
        console.log(response.data.name);
    }
    useEffect(() => {
        fetchApi();
    }, []);

    


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <>
            
                <div className={classes.logo}>
                    <a href="#"><img src="../IMG/logo final svg.svg" alt="logo" width="70px" />
                    </a>
                </div>

                <section className={classes.profile}>
                    <div className={classes.container}>
                        <div className={classes.profileuserimage}>
                            <img src="../IMG/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="acc" width="200px" /> <br />
                            <button className={classes.uploadButton}>upload image</button>
                        </div>

                        <div className={classes.userdetails}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <br />
                                    <label className={classes.label}>Username</label>
                                    <input
                                        className={classes.input}
                                        name="username"
                                        type="text"
                                        placeholder={userData.name}
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <br />
                                <div>
                                    <br />
                                    <label className={classes.label}>Email</label>
                                    <input
                                        className={classes.input}
                                        name="email"
                                        type="email"
                                        placeholder="user-email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <a href="#" className={classes.change}>update</a>
                                </div>
                                <div>
                                    <br />
                                    <label className={classes.label}>Password</label>
                                    <input
                                        className={classes.input}
                                        name="password"
                                        type="password"
                                        placeholder="user-password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <a href="#" className={classes.change}>update</a>
                                </div>

                                <div className={classes.accountdeletion}>
                                    <a href="#" id={classes.delete}>Delete ACCOUNT</a>
                                    <p className={classes.deleteWarning}>Confirmation email will be sent to finalize the deletion of your account</p>
                                </div>

                                <div className={classes.buttons}>
                                    <button type="button" id={classes.Xe}>cancel</button>
                                    <button type="submit" id={classes.sve}>save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            
        </>
    );
};

export default Profile;