import React from 'react'

import {BrowserRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import LoginPage from './Pages/loginPage';
import Signuppage from './Pages/Signuppage';
import Profile from './components/profilepart/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<Homepage /> }/>
    <Route path='/Home' element={<Home /> }/>
    <Route path='/LoginPage' element={<LoginPage /> }/>
    <Route path='/Signuppage' element={<Signuppage /> }/>
    <Route path='/ProfilePage' element={<Profile /> }/>
  </Route>)
);


const App = () => {
  return (<RouterProvider router = {router}/>)
};
//npm tailwind init -p
export default App