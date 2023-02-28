import React from 'react';
import { SlGlobe } from "react-icons/sl";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t , i18n } = useTranslation();
  return (
      <div className='bg-black text-white border-t-8 border-slate-800 w-full lg:h-[450px] h-[600px]'>
          <div className='m-auto w-[900px]'>
              <p className='md:ml-16 m-2 mt-[50px] mb-[40px] text-gray-400 text-lg font-medium'>{t('QuestionsCall')} <span className='hover:text-gray-100 cursor-pointer'>0800-000-7969</span> </p>
              <div>
              <ul className='grid lg:grid-cols-4  lg:gap-y-3 lg:gap-x-5 lg:row-span-full lg:w-full md:grid-cols-3 md:gap-3 md:m-auto md:text-center gap-2 m-4  grid-cols-2   w-[500px]  font-light text-gray-400 '>
                  <Link to='https://help.netflix.com/support/412'> <li className='hover:text-gray-100 cursor-pointer'>FAQ</li></Link>
            <Link to='https://www.netflix.com/cancelplan'> <li className='hover:text-gray-100 cursor-pointer'>{t('CancelMembership')}</li></Link>
            <Link to='https://help.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>{t('HelpCenter')}</li></Link>
            <Link to='account'> <li className='hover:text-gray-100 cursor-pointer'>{t('Account')}</li></Link>
            <Link to='https://media.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>{t('MediaCenter')}</li></Link>
            <Link to='http://ir.netflix.com/'> <li className='hover:text-gray-100 cursor-pointer'>{t('InvestorRelations')}</li></Link>
            <Link to='https://jobs.netflix.com/jobs'> <li className='hover:text-gray-100 cursor-pointer'>{t('Jobs')}</li></Link>
            <Link to='https://netflix.shop/'> <li className='hover:text-gray-100 cursor-pointer'>{t('NetflixShop')}</li></Link>
            <Link to='https://www.netflix.com/redeem'> <li className='hover:text-gray-100 cursor-pointer'>{t('RedeemGiftCards')}</li></Link>
            <Link to='https://www.netflix.com/gift-cards'> <li className='hover:text-gray-100 cursor-pointer'>{t('BuyGiftCards')}</li></Link>
            <Link to='https://www.netflix.com/watch'> <li className='hover:text-gray-100 cursor-pointer'>{t('WaystoWatch')}</li></Link>
            <Link to='https://help.netflix.com/legal/termsofuse'> <li className='hover:text-gray-100 cursor-pointer'>{t('TermsofUse')}</li></Link>
            <Link to='https://help.netflix.com/legal/privacy'> <li className='hover:text-gray-100 cursor-pointer'>{t('Privacy') }</li></Link>
            <Link to='https://www.netflix.com/de-en/#'> <li className='hover:text-gray-100 cursor-pointer'>{t('CookiePreferences')}</li></Link>
            <Link to='https://help.netflix.com/en/node/68708'> <li className='hover:text-gray-100 cursor-pointer'>{t('Impressum')}</li></Link>
            <Link to='https://help.netflix.com/contactus'> <li className='hover:text-gray-100 cursor-pointer'>{t('ContactUs')}</li></Link>
            <Link to='https://fast.com/'> <li className='hover:text-gray-100 cursor-pointer'>{t('SpeedTest')}</li></Link>
            <Link to='https://netflix.com/legal/guarantee'> <li className='hover:text-gray-100 cursor-pointer'>{t('LegalGuarantee')}</li></Link>
            <Link to='https://help.netflix.com/legal/notices'> <li className='hover:text-gray-100 cursor-pointer'>{t('LegalNotices')}</li></Link>
            <Link to='https://www.netflix.com/de-en/browse/genre/839338'> <li className='hover:text-gray-100 cursor-pointer'>{t('OnlyonNetflix')}</li></Link>
                  </ul>
          <select onChange={(e)=>{i18n.changeLanguage(e.target.value)}} value={i18n.language} className='md:ml-10 flex justify-center justify-items-center items-center p-[10px] border border-gray-600 text-white rounded bg-black/30 mr-10 mt-8 mb-11'>
                          <option value="en">English</option>
                          <option  value="de">Deutsch</option>
                      </select>
          <span className='md:ml-10 text-gray-300 font-light text-sm '>{t('NetflixGermany')}</span>                        
              </div>
          </div>
    </div>
  )
}

export default Footer;