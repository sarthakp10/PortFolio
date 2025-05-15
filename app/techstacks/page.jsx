// "use client"
import Image from 'next/image'
import Link from 'next/link'
// import React, { useState } from 'react'
import Head from 'next/head'
import htmlimg from '../images/html.png'
import cssimg from '../images/css.png'
import jsimg from '../images/javascript.png'
import reactimg from '../images/react.png'
import nextimg from '../images/nextnew.png'
import tailwindimg from '../images/tailwindcss.png'
import mongoimg from '../images/MongoDB.png'
import nodeimg from '../images/nodejs.png'
import cppimg from '../images/cpp.png'
import expressimg from '../images/expressjs.png'
import sqlimg from '../images/sql.png'
import githubimg from '../images/github.png'
import vercelimg from '../images/vercel.png'

export const metadata = {
    title: "Tech Stacks | Sarthak"
}

export default function TechStack() {
    // const [arrow, setArrow] = useState(0);

    const technologies = [
        {
            title: "GitHub",
            subtitle: "Version Control",
            image: githubimg
        },
        {
            title: "Vercel",
            subtitle: "Deployment",
            image: vercelimg
        }
    ]

    const techstacks = [
        {
            title: "HTML",
            subtitle: "Layout",
            image: htmlimg
        },
        {
            title: "CSS",
            subtitle: "Styling",
            image: cssimg
        },
        {
            title: "JavaScript",
            subtitle: "Language",
            image: jsimg
        },
        {
            title: "React.js",
            subtitle: "Frontend Library",
            image: reactimg
        },
        {
            title: "Next.js",
            subtitle: "Web Framework",
            image: nextimg
        },
        {
            title: "TailWind CSS",
            subtitle: "CSS",
            image: tailwindimg
        },
        {
            title: "MongoDB",
            subtitle: "Database",
            image: mongoimg
        },
        {
            title: "Node.js",
            subtitle: "Backend Framework",
            image: nodeimg
        },
        {
            title: "Express.js",
            subtitle: "Node Library",
            image: expressimg
        },
        {
            title: "C++",
            subtitle: "Programming Language",
            image: cppimg
        },
        {
            title: "SQL",
            subtitle: "Database",
            image: sqlimg
        }
    ]
  return (
    <main>
        <div className='border-b-2 border-white/20'>
            <div className='pagetitlepos'>
                <h1 className='text-6xl lg:text-8xl font-semibold mb-2'>Tech Stacks</h1>
                <p className='text-lg lg:text-2xl text-white/35 font-semibold'>The dev tools, languages, and softwares that I use.</p>
            </div>
        </div>
        <div>
            <h1 className='w-3/4 mx-auto text-3xl md:text-4xl lg:text-5xl font-bold my-16'>Development</h1>
            <div className='md:grid md:grid-cols-3 gap-5 w-[85%] lg:w-3/4 mx-auto mb-16'>
                {techstacks.map((card, index) => (
                    <div key={index} className='flex md:block relative border border-white/10 rounded-3xl p-5 md:py-8 bg-white/10 hover:bg-white/15 duration-500 ease-in-out mt-5 md:mt-0'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 absolute right-7 top-7`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg> */}

                        <div className='w-1/4 rounded-full md:w-fit md:mx-auto overflow-hidden'>
                            <Image src={card.image} width={96} height={96} className='rounded m-auto md:py-12' alt={card.title} />
                        </div>
                        <div className='flex flex-row md:flex-col xl:pl-8 w-full justify-between items-center lg:items-start pl-5 md:px-0'>
                            <h1 className='text-base md:text-xl lg:text-2xl font-semibold'>{card.title}</h1>
                            <p className='text-xs md:text-base mt-1 w-fit text-white/40'>{card.subtitle}</p>
                        </div>
                    </div>
                ))}
                <div className='mt-5 md:mt-0 relative border border-white/10 rounded-3xl py-5 md:py-8 bg-white/10 hover:bg-white/15 duration-500 ease-in-out flex items-center'>
                    <h1 className='px-8 text-center text-xl md:text-3xl font-semibold'>and much more to come...</h1>
                </div>
            </div>
        </div>
        <div>
            <h1 className='w-3/4 mx-auto text-3xl md:text-4xl lg:text-5xl font-bold my-12 md:my-16'>Technology</h1>
            <div className='md:grid md:grid-cols-3 gap-5 w-[85%] md:w-3/4 mx-auto mb-16'>
                {technologies.map((card, index) => (
                    <div key={index} className='flex md:block relative border border-white/10 rounded-3xl p-5 md:py-8 bg-white/10 hover:bg-white/15 duration-500 ease-in-out mt-5 md:mt-0'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 absolute right-7 top-7`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg> */}
                        <div className='w-1/4 rounded-full md:w-fit md:mx-auto overflow-hidden'>
                            <Image src={card.image} width={96} height={96} className='rounded m-auto md:py-12' alt={card.title} />
                        </div>
                        <div className='flex flex-row justify-between items-center md:items-start w-full md:flex-col px-3 xl:pl-8'>
                            <h1 className='text-lg md:text-2xl font-semibold'>{card.title}</h1>
                            <p className='text-xs md:text-base mt-1 w-fit text-white/40'>{card.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </main>
  )
}
