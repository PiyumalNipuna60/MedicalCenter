import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import backgroundImage from '../../assets/medium-shot-doctors-wearing-protective-equipment.jpg'
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import inj from '../../assets/icons8-injection-64.png';
import phr from '../../assets/icons8-medical-bag-64.png';
import protect from '../../assets/icons8-protect-64.png';

export default class Home extends Component {
  render() {
    return (
        <>
        <Header/>
        <div className='  h-screen   bg-cover ' style={{ backgroundImage: `url(${backgroundImage})`}}>
          <div className="grid grid-cols-2 gap-4 p-36  h-screen ">
          <div className=" p-4 space-y-5  ">
                <div className='flex justify-start'>
                  <h1 className='text-7xl text-gray-900'>Your Healthy is</h1>
                </div>
                <div className='flex justify-start pb-10'>
                  <h1 className='text-7xl  text-gray-300'>our priority.</h1>
                </div>
                <div className='flex justify-start pb-12'>
                  <p className='text-2xl text-black'>
                  A medical center is a facility that provides a range of medical services to 
                  patients. These services may include primary care, specialty care, diagnostic 
                  testing, emergency care, and surgical procedures. Medical centers may also offer
                  various support services such as physical therapy, occupational therapy, and 
                  mental health counseling.
                  </p>
                </div>
                <div className='flex justify-start mb-6'>
                <div className='border-2 border-white w-80 h-20 p-4 text-2xl text-white bg-pink-600 hover:bg-lime-800 cursor-pointer '>Book An Appoinment  </div><div className='pt-4 pl-2 text-black bg-white w-10'><GridGoldenratioIcon/></div>
                </div>
          </div>
          <div className=" p-4 space-y-5   ">
            {/* column 02 */}
          </div>
            </div>
            <div className='backdrop-blur-2xl drop-shadow-2xl  rounded-full border-2 border-zinc-700 ml-8 h-40 w-1/2 relative bottom-48 left-96 justify-center items-center hover:bottom-52 cursor-pointer flex '>
              <div className='p-6 flex items-center justify-center gap-4'>
              <div className=' w-64 h-40 flex justify-start'>
                  <section className=' w-24 bg-cover p-2 justify-center flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" fill="red" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg>
                  </section>
                  <section className='p-2 justify-center  items-center'>
                      <h1 className='text-black font-bold text-2xl pb-3'>Pharmacy</h1>
                      <p className='text-cyan-900'>One of the primary advantages of receiving care </p>
                  </section>
                </div>
              <div className='w-64 h-40 flex justify-start'>
              <section className=' w-24 bg-cover p-2 justify-center flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" fill="red" className="bi bi-bandaid" viewBox="0 0 16 16">
  <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"/>
  <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"/>
</svg>
                    </section>
                    <section className='p-2 justify-center  items-center'>
                      <h1 className='text-black font-bold text-2xl pb-3'>Your Health</h1>
                      <p className='text-cyan-900'>One of the primary advantages of receiving care </p>
                  </section>
<section></section>
                </div>
              <div className='w-64 h-40 flex justify-start'>
              <section className=' w-24 bg-cover p-2 justify-center flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" fill="red" className="bi bi-heart-pulse" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z"/>
  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
</svg>
                    </section>
                    <section className='p-2 justify-center  items-center'>
                      <h1 className='text-black font-bold text-2xl pb-3'>Protected</h1>
                      <p className='text-cyan-900'>One of the primary advantages of receiving care </p>
                  </section>

                </div>
              </div>
              

            </div>
          </div>
       
        </>
      
    )
  }
}
