import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <header class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    {/* <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        
                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a> */}
                    <section className='title-font font-medium items-center text-white mb-4 md:mb-0'>
                        <h4>TalesofTornado</h4>
                    </section>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={'/'} className='mr-8 hover:text-white'>Home</Link>
                        <Link to={'About-Us'} className='mr-8 hover:text-white'>About Us</Link>
                        <Link to={'Contact'} className='mr-8 hover:text-white'>Contact</Link>
                    </nav>
                </div>
            </header><hr />
    </>
  )
}
