import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutimg from '../images/Sarthak.jpeg'

export const metadata = {
    title: "About | Sarthak Phadnis"
}

export default function About() {
  return (
    <main>
        <div className='border-b-2 border-white/20'>
            <div className='pagetitlepos'>
                <h1 className='header'>Some deets about me!</h1>
                <p className='subheader'>Who I am and what I do.</p>
            </div>
        </div>
        <div className='flex pt-16'>
            <div className='w-[60%] pl-44'>
                <div className=''>
                    <span className='aboutheader'>Who I am?</span>
                    <p className='aboutdesc'>I'm <span className='keyword'>Sarthak,</span> a final-year engineering student at <Link href={'https://pict.edu/'} className='keyword'>Pune Institute of Computer Technology</Link>. Passionate about technology and problem-solving, I thrive on building innovative and user-friendly digital experiences. As a self-driven learner, I am always eager to explore and adapt to new technologies that enhance my skill set.</p>
                </div>
                <div className='mt-8'>
                    <span className='aboutheader'>What I do?</span>
                    <p className='aboutdesc'>I am a MERN Stack developer with a strong foundation in full-stack web development. I build scalable, high-performance applications with React, Node.js, Express, and MongoDB. My expertise extends to UI/UX design, where I create intuitive and visually appealing interfaces. Additionally, I am exploring AI and machine learning to integrate intelligent solutions into my projects.</p>
                </div>
                <div className='mt-8'>
                    <span className='aboutheader'>What I did?</span>
                    <div className='aboutdesc'>I have worked on several projects, including:
                        <ul className='list-disc'>
                            <li><span className='keyword'>Expense Tracker (MERN Stack):</span> A budget management tool that tracks expenses and resets monthly.</li>
                            <li><span className='keyword'>Product Management Website (MERN Stack):</span> A platform for managing products efficiently with real-time data updates.</li>
                            <li>Various <span className='keyword'>UI/UX design projects</span> that blend creativity with functionality.</li>
                            <li><span className='keyword'>And many more to come...</span></li>
                        </ul>
                        Want to explore them in detail? Have a look at my <Link href={'/projects'} className='keyword'>projects</Link>
                    </div>
                </div>
                <div className='mt-8 mb-16'>
                    <p className='aboutdesc'>Feel free to reach out via <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'} className='keyword underline'>e-mail</Link>, check out my <Link href={''} className='keyword underline'>Resume</Link>, or connect with me on <Link href={'https://www.linkedin.com/in/sarthak-phadnis-95a347253/'} className='keyword underline'>LinkedIn</Link>.</p><br /><br />
                    <p className='aboutdesc'>Let's build something amazing together!</p>
                </div>
            </div>
            <div className='w-[40%]'>
                <Image src={aboutimg} alt='' className='border border-white/20 rounded-2xl mx-auto w-[70%] h-[60vh] shadow-xl shadow-white/25'></Image>
                <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'} className="flex mx-auto my-20 justify-evenly bg-white/10 w-[35%] p-5 text-lg rounded-xl shadow-inner shadow-gray-500 hover:shadow-inner hover:shadow-gray-400 duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                    Get in touch
                </Link>
            </div>
        </div>
    </main>
  )
}
