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

//routers
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<Homepage /> }/>
    <Route path='/Home' element={<Home /> }/>
    <Route path='/LoginPage' element={<LoginPage /> }/>
    <Route path='/Signuppage' element={<Signuppage /> }/>
    <Route path='/ProfilePage' element={<ProfilePage /> }/>
    <Route path='/Editdiarypage' element={<Editdiarypage /> }/>
    <Route path='/Journalspage' element={<Journalspages /> }/>
    <Route path='/Home' element={<Home /> }/>

  </Route>)
);


const App = () => {
  return (<RouterProvider router = {router}/>)
};
//npm tailwind init -p
export default App