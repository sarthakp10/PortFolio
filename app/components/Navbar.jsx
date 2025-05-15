"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/SP.png'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

export default function Navbar() {
    const [active, setActive] = useState("");
  return (
    <div className=''>
        <div className='relative md:hidden flex justify-center mt-5'>
            <Image src={logo} width={50} height={50} alt='Sarthak Phadnis'></Image>
        </div>
        <nav className='hidden md:flex md:w-[85%] lg:w-[75%] mx-auto mt-5 rounded-xl justify-between px-5 py-3 bg-white/10 backdrop-blur-lg'>
            <div className='flex justify-evenly items-center md:w-[65%] lg:w-[45%]'>
                <div className=''>
                    <Link href={'/'}>
                        <Image src={logo} width={50} height={50} alt='Sarthak Phadnis'></Image>
                    </Link>  
                </div>
                <div className='flex justify-evenly w-[75%] text-gray-300 text-lg'>
                    <Link href={'/about'} className='navlinks'>About</Link>
                    <Link href={'/projects'} className='navlinks'>Work</Link>
                    <Link href={'/techstacks'} className='navlinks'>Tech Stacks</Link>
                </div>
            </div>
            <div className='flex w-[30%] lg:w-[20%] justify-evenly'>
                <Link href={'https://www.linkedin.com/in/sarthak-phadnis-95a347253/'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="lightgray"
                        className='icon'
                    >
                    <path
                        d="M22.23 0H1.77C0.79 0 0 0.79 0 1.77v20.46C0 23.21 0.79 24 1.77 24h20.46c0.98 0 1.77-0.79 1.77-1.77V1.77C24 0.79 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.5c-1.12 0-2.03-0.91-2.03-2.03S4.19 3.44 5.31 3.44s2.03 0.91 2.03 2.03-0.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.55c0-1.33-0.03-3.04-1.85-3.04s-2.14 1.45-2.14 2.95v5.64h-3.5V9h3.36v1.56h0.05c0.47-0.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.38v6.34z"
                    />
                    </svg>
                </Link>
                <Link href={'https://github.com/sarthakp10'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="lightgray"
                        className='icon'
                    >
                        <path
                            d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.29 3.44 9.78 8.21 11.38 0.6 0.11 0.82-0.26 0.82-0.58 0-0.29-0.01-1.05-0.02-2.06-3.34 0.73-4.04-1.61-4.04-1.61-0.54-1.37-1.33-1.73-1.33-1.73-1.09-0.74 0.08-0.73 0.08-0.73 1.21 0.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 0.11-0.77 0.42-1.31 0.76-1.61-2.67-0.3-5.47-1.33-5.47-5.91 0-1.31 0.47-2.38 1.24-3.22-0.12-0.3-0.54-1.51 0.12-3.15 0 0 1.01-0.32 3.3 1.23 0.96-0.27 1.99-0.4 3.01-0.4s2.05 0.14 3.01 0.4c2.29-1.55 3.3-1.23 3.3-1.23 0.66 1.64 0.24 2.85 0.12 3.15 0.77 0.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.6-5.49 5.89 0.43 0.37 0.81 1.1 0.81 2.22 0 1.6-0.02 2.89-0.02 3.28 0 0.32 0.22 0.69 0.82 0.58C20.56 22.08 24 17.58 24 12.3 24 5.67 18.63 0.3 12 0.3z"
                        />
                    </svg>
                </Link>

                <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-300 hover:text-white size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </Link>

            </div>
        </nav>
        <header className='fixed z-50 inset-x-0 w-full bottom-0 pb-6'>
            <nav className='px-3 h-16 md:hidden rounded-xl bg-black/30 backdrop-blur-md left-0 right-0 mx-auto w-[70%] border border-white/10 flex justify-evenly items-center'>
                <Link href={'/'} onClick={() => setActive("home")} className={`navreslinks ${active === "home" ? "bg-white/15":"bg-transparent"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={`${active === "home" ? "white":"none"}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                </Link>
                <Link href={'/about'} onClick={() => setActive("about")} className={`navreslinks ${active === "about" ? "bg-white/15":"bg-transparent"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${active === "about" ? "white":"none"}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>
                <Link href={'/projects'} onClick={() => setActive("projects")} className={`navreslinks ${active === "projects" ? "bg-white/15":"bg-transparent"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${active === "projects" ? "white":"none"}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                </Link>
                <Link href={'/techstacks'} onClick={() => setActive("tech")} className={`navreslinks ${active === "tech" ? "bg-white/15":"bg-transparent"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${active === "tech" ? "white":"none"}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${active === "tech" ? "black":"currentColor"}`} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                </Link>
            </nav>
        </header>
    </div>
  )
}
