import { useContext } from 'react'
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Tabs = ({ tab, setTab }) => {


  const { dispatch } = useContext(authContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/');
  };
  const [menuOpen, setMenuOpen] = useState(false);
  

  return <div>
    <span className='lg:hidden'  onClick={()=>setMenuOpen(!menuOpen)}>
      <BiMenu className='w-6 h-6 cursor-pointer' />
    </span>
    <div className={`lg:flex flex-col p-[30px] bg-white
     shadow-panelShadow items-center h-max rounded-md ${menuOpen ? 'block' :'hidden'}`}>
      <button
        onClick={() => {
          setTab('overview'); 
          setMenuOpen(false);
        }
        }
        className={`${tab === 'overview'
          ? 'bg-indigo-100 text-primaryColor'
          : 'bg-transparent text-headingColor'} 
     w-full btn mt-0 rounded-md`}>
        Overview</button>

      <button
        onClick={() => {
          setTab('appointments');
          setMenuOpen(false);
        }}
        className={`${tab === 'appointments'
          ? 'bg-indigo-100 text-primaryColor'
          : 'bg-transparent text-headingColor'} 
     w-full btn mt-0 rounded-md`}>
        Appointments</button>

      <button
        onClick={() => {
          setTab('settings');
          setMenuOpen(false);
        }
        }
        className={`${tab === 'settings'
          ? 'bg-indigo-100 text-primaryColor'
          : 'bg-transparent text-headingColor'} 
     w-full btn mt-0 rounded-md`}>
        profile</button>


      <div className='mt-[100px] w-full'>
        <button
          onClick={handleLogout}
          className='w-full bg-[#181A1E] p-3 text-[16px]  text-white leading-7 rounded-md'>
          Logout
        </button>
        <button
          className='w-full bg-red-600 mt-4 p-3 text-[16px] text-white leading-7 rounded-md'>
          Delete Account
        </button>
      </div>


    </div>
  </div>
}

export default Tabs;



{/* <div>
<span className='lg:hidden'>
<BiMenu className='w-6 h-6 cursor-pointer'/>
</span>
<div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
<button className={` ${
 tab === 'overview'
 ? 'bg-indigo-100 text-primaryColor'
 : 'bg-transparent text-headingColor'}
w-full btn mt-0 rounded-md `}> 
 Overview
 </button>
</div>
</div> */}