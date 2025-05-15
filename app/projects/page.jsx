import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutp1 from '../images/Sarthak_1nonbg.png'
import aboutp2 from '../images/Sarthak_2nonbg.png'
import proj1_1 from '../images/History.PNG'
import proj1_2 from '../images/Login.PNG'
import proj1_3 from '../images/Home.PNG'
import proj2_1 from '../images/Product_Login.PNG'
import proj2_2 from '../images/ProductInfo.PNG'
import proj2_3 from '../images/Product.PNG'

export const metadata = {
  title: "Work | Sarthak Phadnis"
}

export default function Projects() {
  return (
    <main>
        <div className='border-b-2 border-white/20'>
            <div className='pagetitlepos'>
                <h1 className='text-6xl lg:text-8xl font-semibold mb-2'>Work</h1>
                <p className='text-xl md:text-2xl text-white/35 font-semibold'>Projects and ideas I have worked on so far.</p>
            </div>
        </div>
        <div className='projectcard'>
            <div className='projtxt'>
              <h1 className='projecttitle'>ProductMan.net</h1>
              <p className='projectdesc'>The Product Management Website is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to streamline the process of managing products. It allows users to add, update, view, and delete product details. The backend provides a RESTful API to handle product data storage and retrieval, while the frontend offers a responsive and user-friendly interface for seamless interaction.</p>
              <Link href={'https://github.com/sarthakp10/Product-Management'} className='githubbtn flex items-center text-sm md:text-base lg:text-lg font-semibold w-fit py-1 mt-8'>
                View in GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 arrowicon ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className='proj1img'>
              <Image src={proj2_1} alt='' className='img1 w-[55%] mx-auto rounded-xl'></Image>
              <Image src={proj2_2} alt='' className='img2 w-[70%] -translate-y-6 mx-auto rounded-xl'></Image>
              <Image src={proj2_3} alt='' className='img3 w-[85%] mx-auto -translate-y-10 rounded-xl'></Image>
            </div>
        </div>
        <div className='projectcard'>
            <div className='projtxt'>
              <h1 className='projecttitle'>ExpenseTracker</h1>
              <p className='projectdesc'>The Expense Tracker is a MERN Stack-based web application designed to help users manage their monthly expenses efficiently. It allows users to log and track their expenses, with the total spending resetting at the start of each new month. The application includes a budget functionality where users can set a monthly budget and monitor their expenses against it. </p>
              <Link href={'https://github.com/sarthakp10/ExpenseTracker'} className='githubbtn flex items-center text-lg font-semibold w-fit py-1 mt-8'>
                View in GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 arrowicon ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className='proj2img'>
              <Image src={proj1_1} alt='' className='rounded-xl'></Image>
              <Image src={proj1_2} alt='' className='rounded-xl'></Image>
              <Image src={proj1_3} alt='' className='col-span-2 rounded-2xl'></Image>
            </div>
        </div>
        <div className='w-[85%] xl:w-3/4 mb-16 py-12 md:py-28 rounded-2xl border-8 border-dashed border-white/15 mx-auto bg-white/10 text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-20 md:size-32 bg-black/30 p-5 rounded-full mx-auto text-white/40 hover:text-white duration-300 ease-in-out">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <h1 className='text-xl md:text-4xl font-bold my-5 px-5 md:px-0'><strike className='text-white/35 stroke-indigo'>Your</strike> Our Project could be here!</h1>
            <p className='text-lg text-white/25 mb-8'>Got an idea? Let's turn your imagination into reality.</p>
            <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'} className="flex justify-evenly mx-auto p-3 md:p-5 w-3/4 md:w-[30%] lg:w-1/4 xl:w-[18%] text-sm md:text-lg rounded-xl shadow-inner shadow-gray-500 hover:shadow-inner hover:shadow-gray-400 duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
            Get in touch
            </Link>
        </div>
    </main>
  )
}
