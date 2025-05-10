import React from 'react'

import {BrowserRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import LoginPage from './Pages/loginPage';
import Signuppage from './Pages/Signuppage';
import Editdiarypage from './Pages/Editdiarypage';
import ProfilePage from './Pages/ProfilePage';
import Homecode from './components/Homepart/Homecode';
import Journalspages from './Pages/Journalspages';
import NotFound from './Pages/NotFound';

//routers
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<Homepage /> }/>
    <Route path='/' element={<Home /> }/>
    <Route path='/LoginPage' element={<LoginPage /> }/>
    <Route path='/Signuppage' element={<Signuppage /> }/>
    <Route path='/ProfilePage' element={<ProfilePage /> }/>
    <Route path='/Editdiarypage' element={<Editdiarypage />} />
    <Route path='/Journalspage' element={<Journalspages /> }/>
    <Route path='/Home' element={<Home /> }/>
    <Route path="*" element={ <NotFound /> } />

  </Route>)
);


const App = () => {
  return (<RouterProvider router = {router}/>)
};
//npm tailwind init -p
export default App



/*
Home page:
  1. fonts adjustments 
  2. flexible ui (for mobile tablet etc) - cards become malformed when size is changed 
  3. about us section - add a link to the about us page
  4. learn more in card should take user to about us page 
  5. if possible adjust image to have transparent background and also clickable link to home page throughout all nav bar in site 
  6. Adjust footer links to link to actual page 
Journal page:
  1. add filter functionality code
  2. add delete button to each card ...///
  3. add edit button to each card 
  4. enlarge card when view button is clicked 
  5. add more styling to card and background image if need be 
Edit diary page:
  1. Adjust page styling and background too 
  2. Add dropdown or input fields for country city and district in case ip api not working or ip api got user location wrong 
  3. Add an arrow to go back to journal page
Profile page:
  1. Add better styling to the page 
  2. Make Delete Account button functional
  3. Make Update Account button functional
  4. Load user Data into input fields 
  5. Add a "Current Password" and "New password" field to the form
  6. make confirmation email functional
General Note: 
  swap account link with a contact page or something else cuz its repetitive with the profile icon link 







*/