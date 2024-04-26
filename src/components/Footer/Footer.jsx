import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
const socialLinks =[

  {
    path:"https://youtu.be/WVDpD0pYcZc?si=opauQyWc9v3FJADP",
    icon:<AiFillYoutube className='group-hover:text-white w-5 h-5'/>,

  },
  {
    path:"https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A97399343&keywords=training%20%26%20placement%20office%20%40%20rgukt%20basar&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=1&searchId=a4bc2198-970b-4bde-9531-bf0d7710ea9c&sid=06p&spellCorrectionEnabled=true",
    icon:<RiLinkedinFill className='group-hover:text-white w-5 h-5' />,
  },
  {
    path:"https://www.instagram.com/meetapollo.io/",
    icon:<AiOutlineInstagram  className='group-hover:text-white w-5 h-5'/>,
  },
  {
    path:"https://github.com/",
    icon:<AiFillGithub className='group-hover:text-white w-5 h-5'/>,
  }

];

const quickLinks01=[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:'/',
    display:"About us",
  },
  {
    path:"/services",
    display:"Servies",
  },
  {
    path:"/",
    display:"blog",
  }

];
const quickLinks02=[
  {
    path:"/find-a-doctor",
    display:"Find a Doctor",
  },
  {
    path:'/',
    display:"Request an appointment",
  },
  {
    path:"/",
    display:"Find a Location",
  },
  {
    path:"/",
    display:"Get a opininon",
  }

];

const quickLinks03=[
  {
    path:"/",
    display:"Donate",
  },
  {
    path:'/contact',
    display:"Contact us",
  },
  

];

const Footer = () => {

  const year=new Date().getFullYear();
  return <footer className='pb-16 pt-10 bg-blue-200'>
    <div className="container">
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
         <div>
           <img src={logo} alt=""/>
           <p className='text-[16px] leading-7 font-[500] font-style:italic text-textColor  mt-4'> Copyright© {year} developed by Meenakumari Madham all rights reserved. 
           </p>

           <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link,index)=> <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
            justify-center group hover:bg-orange-500 hover:border-none'>{link.icon}</Link>)}
           </div>
         </div>
         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-orange-500'> Quick Links</h2>
          <ul>
            {quickLinks01.map((item,index) =>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-buttonBgColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
         </div> 

         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-orange-500'> 
         I Want to:
          </h2>
          <ul>
            {quickLinks02.map((item,index) =>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-buttonBgColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
         </div> 

         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-orange-500'>
             Support
          </h2>
          <ul>
            {quickLinks03.map((item,index) =>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-buttonBgColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
         </div>


      </div>
    </div>
  </footer>
}

export default Footer;
 