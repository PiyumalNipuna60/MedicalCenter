import React, { Component } from 'react'
import { Routes } from 'react-router-dom'
import { Route} from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Channeling from '../../Pages/Channeling/Channeling'
import Contact from '../../Pages/Contact/Contact'
import Doctors from '../../Pages/Doctors/Doctors'
import Login from '../../Pages/Login/Login'
import Profile from '../../Pages/Profile/Profile'

export default class Content extends Component {
  render() {
    return (
        <div className=' h-screen'>
        <Routes>
           <Route path='/home' element={<Home/>}></Route>
            <Route path='/chanelling' element={<Channeling/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/doctors' element={<Doctors/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/' element={<Login/>}></Route>
        </Routes>
      </div>
    )
  }
}
