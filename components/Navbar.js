import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
// import logoItdri from '../asset/itdri-dark-main-400.png'
import logoHarfish from '../asset/logoo.png'
import BurgerBtn from '../asset/burger-btn.png'


const DropDownMenu = () => {
    return(
    <Popover className="relative">
        <div className='my-5 relatives'>
            <Popover.Button>
                <Image alt='burger-btn' src={BurgerBtn} width = "72" height="48"/>
            </Popover.Button>
        </div>

        <Popover.Panel className="absolute w-96">
            <div className="grid grid-rows-4 w-full bg-black text-center">
                <div className="w-full h-10 text-white">
                    <Link href="/">Home</Link>
                </div>
                <div className="w-full h-10 text-white">
                    <Link href="/">Harfish</Link>
                </div>
                <div className="w-full h-10 text-white">
                    <Link href="/">Network</Link>
                </div>
                <div className="w-full h-10 text-white">
                    <Link href="/">About us</Link>
                </div>
            </div>

        </Popover.Panel>
    </Popover>
    )
}


const Navbar = () => {
  return (
    <div className='shadow-md w-full md:h-14 h-16 fixed top-0 left-0 md:px-24 px-0 bg-black text-white font-light md:opacity-75 hover:opacity-100 transition-all ease-linear z-20'>
        <div className="flex justify-between">
                        {/* menu drop down */}
            <div className="visible md:hidden">
                <DropDownMenu className="visible md:invisible" />
            </div>
            <div className='md:py-3 py-5 md:pl-0 pl-32'>
                <div className="w-24 h-8 relative">
                    <Image
                        src={logoHarfish}
                        alt="harfish logo"
                        layout="responsive" // required
                        objectFit="cover" // change to suit your needs
                    />
                </div>
            </div>
            <ul className='py-3 invisible md:visible'>
                <li className='inline-flex mx-4 hover:text-orange2'>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li className='inline-flex mx-4 hover:text-orange2'>
                    <Link href='/'>
                        Harfish
                    </Link>
                </li>
                <li className='inline-flex mx-4 hover:text-orange2'>
                    <Link href='/'>
                        Network
                    </Link>
                </li>
                <li className='inline-flex mx-4 hover:text-orange2'>
                    <Link href='/'>
                        About us
                    </Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar