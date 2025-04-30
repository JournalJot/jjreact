import React, { useState, useEffect } from 'react';
import classes from './profile.module.css';
import axios from 'axios';

const Profile = () => {

    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    console.log(message);
    const fetchApi = async () => {
        const response = await axios.get("https://arby.pythonanywhere.com//api/data");
        setUserData(response.data);
        console.log(response.data.name);
        
    }
    useEffect(() => {
        fetchApi();
        //for image
        const fetchUserData = async () => {
            try {
                const response = await axios.get("https://arby.pythonanywhere.com/api/data");
                setUserData(response.data);
                if (response.data.profile_pic) {
                    setPreviewUrl(`http://localhost:5000/profile_pic/${response.data.id}`);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        //send to backend here
        try{
            const response = await axios.post('https://arby.pythonanywhere.com/api/user', {
              name: formData.username,
              email: formData.email,
              password: formData.password
            });setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response?.data?.message || "Login failed");
        }
        // Form submission logic here
        console.log("Form submitted:", formData);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setMessage("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(
                `http://localhost:5000/upload_profile_pic/${userData.id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "Upload failed");
        } };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setSelectedFile(file);

        // Create preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    }
    

    return (
        <>
        <section className={classes.wcontainer}>
            
                <div className={classes.logo}>
                    <a href="#"><img src="../IMG/logo final svg.svg" alt="logo" width="70px" />
                    </a>
                </div>

                <section className={classes.profile}>
                    <div className={classes.container}>
                        <div className={classes.profileuserimage}>
                        {previewUrl ? (
                        <img src={previewUrl} alt="acc" width="200px" />
                    ) : (
                        <div className={classes.placeholder}>No image selected</div>
                    )} <br/>
                            
                            <input
                            className='width:20px; height:20px'
                        type="file"
                        id="profileUpload"
                        accept="image/*"
                        onChange={handleFileChange}
                        
                />
                           <br/> <button className={classes.uploadButton} onClick={handleUpload}>upload image</button>
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
                                        placeholder={userData.email}
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
            </section>
        </>
    );
};

export default Profile;