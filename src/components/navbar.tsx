import React from 'react'
import Menu from './menu'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './cartIcon'
import UserLinks from './UserLinks'

const Navbar = () => {

    const user = false;

  return (
    <div className='h-12 text-gray-600 p-4 flex items-center justify-between border-b-2 border-b-gray-600 uppercase md:h-24
    lg:px-20 xl:px-40'>
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>

        <div className='text-gray-600 font-bold text-xl md:font-bold flex-1 md:text-center'>
            <Link href="/">
            Electra
            </Link>
        </div>
        {/* Mobile Menu */}
        <div className='md:hidden'>
            <Menu/>
        </div>

    {/* Right Links */}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-gray-600 px-1 rounded-md text-white'>
                <Image src="/phone.png" alt='' width={20} height={20}></Image>
                <span>9998887774</span>    
            </div>

            <UserLinks/>
            <CartIcon/>
        </div>
    </div>
  );
};

export default Navbar;