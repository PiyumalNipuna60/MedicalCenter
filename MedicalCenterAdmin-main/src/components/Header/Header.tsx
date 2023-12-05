import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
  render() {
    const navStyle="font-bold border-b-2"
    const clr="bg-black"
    return (
<div className='bg-slate-900 h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full justify-center items-center'>
              
                <div className='w-1/2'>
                    <div className='flex w-full text-xl justify-center gap-12 '>
                      
                        <NavLink to={"/home"} className= 'cursor-pointer text-slate-300 pr-0'>Home</NavLink>
                        <NavLink to={"/about"} className='text-slate-300 '>Doctor</NavLink>
                        <NavLink to={"/contact"} className='text-slate-300 '>Patient</NavLink>
                        <NavLink to={"/profile"} className='text-slate-300 '>Channeling</NavLink>
                        <button type="button" className="btn btn-outline-light text-slate-300 ">Loging</button>


                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
