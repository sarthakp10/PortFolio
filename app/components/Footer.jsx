import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/SP.png'

export default function Footer() {
  return (
    <main className='flex flex-col-reverse md:flex-row border-t-2 border-white/15 pt-8 pb-24 md:py-8'>
      <div className='md:w-1/2 mt-16 md:mt-0'>
        <Image src={logo} alt='logo' className='w-[30%] md:w-[15%] ml-8 md:mx-10'></Image>
        <p className='md:m-10 m-8'>&copy; 2025. All Rights Reserved.</p>
      </div>
      <div className='md:w-1/2 md:flex justify-evenly'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl font-semibold mb-4'>Links</h1>
          <ul className='text-xl font-light'>
            <li className='footerlink'><Link href={'/about'}>About</Link></li>
            <li className='footerlink'><Link href={'/techstacks'}>Tech Stacks</Link></li>
            <li className='footerlink'><Link href={'/projects'}>Projects</Link></li>
            {/* <li className='footerlink'><Link href={''}>Contact</Link></li> */}
          </ul>
        </div>

        <div className='w-[75%] mx-auto md:mx-0 md:w-1/2 lg:w-[35%] mt-8 md:mt-0'>
          <h1 className='text-2xl mb-5 font-semibold text-center'>Social Media</h1>
          <div className='flex w-full justify-evenly'>
            <Link href={'https://www.linkedin.com/in/sarthak-phadnis-95a347253/'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
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
                    width="35"
                    height="35"
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-300 hover:text-white size-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </Link>

          </div>
        </div>
      </div>
    </main>
  )
}
