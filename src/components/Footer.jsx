import React from 'react';
import { SlGlobe } from "react-icons/sl";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Footer() {
  return (
      <div className='bg-black text-white border-t-8 border-slate-800 w-full lg:h-[450px] h-[600px]'>
          <div className='m-auto w-[900px]'>
              <p className='md:ml-16 m-2 mt-[50px] mb-[40px] text-gray-400 text-lg font-medium'>Questions? Call <span className='hover:text-gray-100 cursor-pointer'>0800-000-7969</span> </p>
              <div>
              <ul className='grid lg:grid-cols-4  lg:gap-y-3 lg:gap-x-5 lg:row-span-full lg:w-full md:grid-cols-3 md:gap-3 md:m-auto md:text-center gap-2 m-4  grid-cols-2   w-[500px]  font-light text-gray-400 '>
                  <Link to='https://help.netflix.com/support/412'> <li className='hover:text-gray-100 cursor-pointer'>FAQ</li></Link>
                  <Link to='https://www.netflix.com/cancelplan'> <li className='hover:text-gray-100 cursor-pointer'>Cancel Membership</li></Link>
                  <Link to='https://help.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>Help Center</li></Link>
                  <Link to='account'> <li className='hover:text-gray-100 cursor-pointer'>Account</li></Link>
                  <Link to='https://media.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>Media Center</li></Link>
                  <Link to='http://ir.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>Investor Relations</li></Link>
                  <Link to='https://jobs.netflix.com/jobs'> <li className='hover:text-gray-100 cursor-pointer'>Jobs</li></Link>
                  <Link to='https://netflix.shop/'> <li className='hover:text-gray-100 cursor-pointer'>Netflix Shop</li></Link>
                  <Link to='https://www.netflix.com/redeem'> <li className='hover:text-gray-100 cursor-pointer'>Redeem Gift Cards</li></Link>
                  <Link to='https://www.netflix.com/gift-cards'> <li className='hover:text-gray-100 cursor-pointer'>Buy Gift Cards</li></Link>
                  <Link to='https://www.netflix.com/watch'> <li className='hover:text-gray-100 cursor-pointer'>Ways to Watch</li></Link>
                  <Link to='https://help.netflix.com/legal/termsofuse'> <li className='hover:text-gray-100 cursor-pointer'>Terms of Use</li></Link>
                  <Link to='https://help.netflix.com/legal/privacy'> <li className='hover:text-gray-100 cursor-pointer'>Privacy</li></Link>
                  <Link to ='https://www.netflix.com/de-en/#'> <li className='hover:text-gray-100 cursor-pointer'>Cookie Preferences</li></Link>
                  <Link to ='https://help.netflix.com/en/node/68708'> <li className='hover:text-gray-100 cursor-pointer'>Impressum</li></Link>
                  <Link to ='https://help.netflix.com/contactus'> <li className='hover:text-gray-100 cursor-pointer'>Contact Us</li></Link>
                  <Link to ='https://fast.com/'> <li className='hover:text-gray-100 cursor-pointer'>Speed Test</li></Link>
                  <Link to ='https://netflix.com/legal/guarantee'> <li className='hover:text-gray-100 cursor-pointer'>Legal Guarantee</li></Link>
                  <Link to ='https://help.netflix.com/legal/notices'> <li className='hover:text-gray-100 cursor-pointer'>Legal Notices</li></Link>
                  <Link to ='https://www.netflix.com/de-en/browse/genre/839338'> <li className='hover:text-gray-100 cursor-pointer'>Only on Netflix</li></Link>
                  </ul>
                  <button className='md:ml-10 flex justify-center justify-items-center items-center p-[10px] border border-gray-600 mr-10 mt-8 mb-8  '><SlGlobe className='pr-1 text-xl' />English <AiFillCaretDown className='pl-1 text-xl' /></button> 
              <span className='md:ml-10 text-gray-300 font-light text-sm '>Netflix Germany</span>                        
              </div>
          </div>
    </div>
  )
}

export default Footer;