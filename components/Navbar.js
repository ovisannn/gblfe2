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
        <div className='my-5 relative'>
            <Popover.Button>
                <Image src={BurgerBtn} width = "72" height="48"/>
            </Popover.Button>
        </div>

        <Popover.Panel className="absolute z-10 text-black">
            <div className="grid grid-cols-2">
            <a href="/">Home</a>
            <a href="/">Harfish</a>
            <a href="/">Network</a>
            <a href="/">About us</a>
            </div>

            <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
    </Popover>
    )
}

const Navbar = () => {
  return (
    <div className='shadow-md w-full md:h-14 h-16 fixed top-0 left-0 md:px-24 px-4  bg-black text-white font-light md:opacity-75'>
        <div className="flex justify-between">
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
                <li className='inline-flex mx-4'>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li className='inline-flex mx-4'>
                    <Link href='/'>
                        Harfish
                    </Link>
                </li>
                <li className='inline-flex mx-4'>
                    <Link href='/'>
                        Network
                    </Link>
                </li>
                <li className='inline-flex mx-4'>
                    <Link href='/'>
                        About us
                    </Link>
                </li>
            </ul>

            {/* menu drop down */}
            <div className="visible md:hidden">
                <DropDownMenu className="visible md:invisible" />
            </div>
        </div>
    </div>
  )
}

export default Navbar