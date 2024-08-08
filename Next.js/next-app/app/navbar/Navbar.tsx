'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { LeftNavigation } from './LeftNavigation';
import { navbars } from './navItem';
import { NavItems } from './NavItems';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className="mx-auto flex max-w-full bg-blue-500 items-center justify-between p-6 lg:px-8 shadow-sm " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5  w-100 text-white">
                        <span className="sr-only text-white ">Your Company</span>
                        <img className="h-8 w-auto " src='https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png' />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={() => setToggle(!toggle)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <NavItems />
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/login" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
            <LeftNavigation toggle={toggle} />
        </>
    )
}

export default Navbar