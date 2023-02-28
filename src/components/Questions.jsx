/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import data from '../data/data';
import {useTranslation } from 'react-i18next';



function Questions() {
 
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    
}



  const { t } = useTranslation();

  return (
   
    
      <div className='bg-black border-t-8 border-slate-800 pt-5'>
      <h1 className='lg:text-5xl text-2xl font-bold mb-[50px] text-white text-center'>{t('FrequentlyAskedQuestions') }</h1>
      {data.map((item, i) => (
          
        <div key={i} className='flex flex-col items-center m-auto w-full mt-[20px] text-white'>
          <div className='lg:w-[800px] md:w-[500px] w-[400px] text-lg flex flex-col  bg-slate-900  p-2 active:transition-all active:translate-y-3  duration-500 ease-in-out'>
            <div onClick={()=> toggle(i)} className='lg:text-xl flex justify-between cursor-pointer  ml-[40px] m-5 text-left font-medium text-lg border-b-2 '>{item.question} {selected === i ? <AiOutlineClose className='font-bold text-2xl ' /> : <AiOutlinePlus className='font-bold text-2xl' /> } </div>
                  
                      
            <div className={selected === i ? 'lg:w-[600px] flex flex-col m-auto w-[300px] text-lg': 'hidden' }>
              <p className='text-left font-medium text-xl mb-4 leading-relaxed '>{item.answer}</p>
              {item.more && (
                <span className='lg:max-w-max lg:text-2xl w-max cursor-pointer  text-xl font-bold border-b-2 border-slate-50 mb-5'>{item.more}</span>
              )}
            </div>
                  
          </div>
    
        </div>
      ))}
      <div className='flex flex-col justify-center justify-items-center items-center'>
        <p className='lg:text-xl p-5 text-base font-normal text-white'>{t('ReadytowatchEnteryouremailtocreateorrestartyourmembership') }</p>
        <div className=' flex  justify-center mb-20'>
          <input className='lg:w-[500px] lg:p-[20px] w-[250px] p-[10px]' type="text" placeholder='Email Address' />
          <Link className='' to='/signup'><button className='lg:text-2xl flex justify-center justify-items-center items-center bg-red-600 text-white font-bold text-xl p-4 '>Get Started <AiOutlineRight /> </button></Link>
        </div>
      </div>
            
   </div>
  
  )
}

      export default Questions;
     