import React  from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { Link , useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import { SlGlobe } from "react-icons/sl";
// import { AiFillCaretDown } from "react-icons/ai";
import {useTranslation} from 'react-i18next';


function Navbar() {
    
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const { t ,i18n} = useTranslation();

  

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    }


    const handleLogin = async () => {
   
        try {    
          navigate('/signin');
        } catch(error) {
            console.log(error);
      }
    }
    console.log(user);

    
  return (
      <div>
          <div className='sm:w-[500px] md:w-[550px] lg:w-[550px] xl:w-[550px] 2xl:w-[550px] flex justify-evenly items-center  m-auto mt-4 mb-4'>
              <p className='bg-red-600  text-white font-bold rounded-full px-2'>NEW!</p>
              <p className='text-black/80 font-medium'>Plans now start at <span className='text-black font-bold text-2xl'>€4,99</span> .</p>
              <span className=' text-blue-600 text-xl font-bold flex items-center cursor-pointer'>Learn More <AiOutlineRight className='text-2xl' /></span>
          </div>
          <div className='relative bg-netflix-bg bg-center bg-cover h-[600px] flex flex-col justify-center place-content-center text-white'>
              <div className='absolute  w-full h-full bg-black/50 '></div>
              
              <div className=' sm:text-center  absolute top-0 left-0 flex justify-between align-middle  w-full'>
                  <p className='sm:text-2xl sm:mt-10 sm:mr-12 sm:text-center md:text-3xl md:mt-12 lg:text-4xl lg:mt-14 xl:text-5xl xl:mt-16  text-red-600 font-bold text-2xl  ml-10 mt-8'>NETFLIX</p>
                  <div className='p-2 flex'>    
                      <select onChange={(e)=>{i18n.changeLanguage(e.target.value)}} value={i18n.language} className='sm:px-[8px] sm:h-[30px] sm:text-sm sm:mr-5  md:px-[10px] md:h-[40px] md:text-md md:mr-8 lg:px-[12px] lg:h-[50px] lg:text-lg lg:mr-11 xl:px-[12px] xl:h-[50px] xl:text-xl xl:mr-14 rounded px-[10px] h-[30px] text-xs mr-10 mt-8 bg-black/75'>
                          <option value="en">English</option>
                          <option  value="de">Deutsch</option>
                      </select>
                      {user?.email ? (
                          <div>
                              <Link to='account'><button className='sm:p-[7px] sm:h-[30px] sm:text-sm sm:mr-5 md:p-[10px] md:h-[40px] md:text-md md:mr-8 lg:px-[12px] lg:h-[50px] lg:text-lg lg:mr-11 xl:px-[12px] xl:h-[50px] xl:text-xl xl:mr-14 bg-red-600 rounded px-[10px] h-[30px] text-xs mr-10 mt-8'>{t('account')}</button></Link> 
                              <Link to='/'><button onClick={handleLogout} className='sm:p-[7px] sm:h-[30px] sm:text-sm sm:mr-5 md:p-[10px] md:h-[40px] md:text-md md:mr-8 lg:px-[12px] lg:h-[50px] lg:text-lg lg:mr-11 xl:px-[12px] xl:h-[50px] xl:text-xl xl:mr-14 bg-red-600 rounded px-[10px] h-[30px] text-xs mr-10 mt-8'>{t('logout') }</button></Link> 
                          </div>
                      ) : (
                              <Link className='' to='signIn'><button className='sm:p-[7px] sm:h-[30px] sm:text-sm sm:mr-5 md:p-[10px] md:h-[40px] md:text-md md:mr-8 lg:px-[12px] lg:h-[50px] lg:text-lg lg:mr-11 xl:px-[12px] xl:h-[50px] xl:text-xl xl:mr-14 bg-red-600 rounded px-[10px] h-[30px] text-xs mr-10 mt-8'>{t('signin') }</button></Link> 
                              
                      )}
                  </div>
              </div>
              <div  className='absolute flex flex-col justify-center items-center w-full'>
                  <p className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-2xl text-center'>{t(`UnlimitedmoviesTV`)} </p>
                  <p className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-2xl text-center'>{t(`showsandmore`)} </p>
                  <p className='sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-lg mt-6 mb-8'>{t('WatchanywhereCancelanytime')}</p>
                  <span className='sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-sm mb-4'>{t("ReadytowatchEnteryouremailtocreateorrestartyourmembership")}</span>
                  <div  className=' flex  justify-center'>
                  <input  className='sm:w-[300px] sm:p-[10px] md:w-[350px] md:p-[20px] lg:w-[400px] lg:p-[20px] xl:w-[500px] w-[250px] p-[10px] text-black' type="text" placeholder='Email Address' />
                  <button onClick={handleLogin}  className='sm:text-sm md:text-base lg:text-lg xl:text-2xl flex justify-center justify-items-center items-center bg-red-600 font-bold p-3 '>{t('getstart')} <AiOutlineRight className='' /> </button>
                     
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar;