import Image from "next/image";
import cover from './images/Cover.png'
import about1 from './images/About1.png'
import aboutp1 from './images/Sarthak_1.png'
import aboutp2 from './images/Sarthak_1nonbg.png'
import jsimg from './images/javascript.png'
import reactimg from './images/react.png'
import nextimg from './images/nextnew.png'
import mongoimg from './images/MongoDB.png'
import Link from "next/link";

export const metadata = {
  title: "Sarthak Phadnis"
}

export default function Home() {
  return (
    <main>
      <div className="w-[85%] md:w-[75%] mx-auto mt-24 md:pt-16">
        <h1 className="lg:w-[72%] text-center md:text-left text-5xl xl:text-[75px] font-bold"><span className="text-gray-500">I'm</span> Sarthak Phadnis</h1>
        <div className="flex relative md:items-end rounded-xl">
          <div className="mt-5 pb-5 lg:w-[75%] rounded-xl">
            <p className="w-[85%] mx-auto md:mx-0 text-center md:text-left text-gray-400 text-opacity-80 text-lg md:text-2xl">A multidisciplinary full-stack developer helping startups turn their ideas into a digital reality. I specialize in designing and building web applications using MERN Stack.</p>
            <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:justify-around w-3/4 mx-auto md:mx-0 md:w-[65%] xl:w-[50%]">
              <Link href={'https://drive.google.com/file/d/1ZS3GN-BEgz5aatEgx3_sO7_rGWlL1CjU/view?usp=sharing'} className="text-center shadow-inner shadow-gray-500 font-semibold text-gray-300 text-md bg-white bg-opacity-10 py-4 px-8 rounded-xl hover:shadow-inner hover:shadow-gray-400 duration-300">See my Resume</Link>
              <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'} className="mt-5 md:mt-0 text-center font-semibold text-gray-400 text-md bg-white bg-opacity-10 py-4 px-7 rounded-xl hover:bg-opacity-15 hover:text-white duration-300 ease-in-out">Get in Touch</Link>
            </div>
          </div>
          <Image src={cover} quality={100} alt='Sarthak' className="hidden lg:flex absolute z-0 right-0 lg:w-[35%]"></Image>
        </div>
      </div>

      <section className="my-16 md:my-24">
        <h1 className="border-b border-white/15 lg:w-[45%] py-3 font-bold text-3xl md:text-5xl mx-auto text-center">Get to know more</h1>
        <div className="flex flex-col lg:flex-row mt-5 lg:mt-12 w-[90%] mx-auto justify-evenly">
          <Link href={'/about'} className="card">
            <h1 className="card-header">About me</h1>
            <p className="card-subheader">Who I am and what I do</p>
            <Image src={about1} alt="About me" className="h-80 mx-auto hover:scale-105 duration-300 ease-in-out"></Image>
          </Link>
          <Link href={'/techstacks'} className="card">
            <h1 className="card-header">Tech Stacks</h1>
            <p className="card-subheader">Tech Stacks that I have learnt and use.</p>
            <div className="grid grid-cols-2 gap-3 p-3 mt-10 w-[65%] mx-auto hover:scale-105 duration-300 ease-in-out">
              <Image src={jsimg} alt="js" className="cardgridimg"></Image>
              <Image src={reactimg} alt="js" className="cardgridimg"></Image>
              <Image src={nextimg} alt="js" className="cardgridimg"></Image>
              <Image src={mongoimg} alt="js" className="cardgridimg"></Image>
            </div>
          </Link>
          <Link href={'/projects'} className="card">
            <h1 className="card-header">Projects</h1>
            <p className="card-subheader">Projects that I have worked on</p>
            <div className="flex justify-center overflow-hidden hover:scale-105 duration-300 ease-in-out">
              {/* <Image src={aboutp1} className="h-80" alt="About me"></Image> */}
              <Image src={aboutp2} className="w-[85%] h-80 mx-auto" alt="About me"></Image>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <div className="lg:flex border-t-2 border-white/15 justify-around items-center py-10 lg:py-24">
          <div>
            <h1 className="text-3xl text-center lg:text-left lg:text-6xl font-bold">Let's work together!</h1>
            <p className="text-lg text-center lg:text-left md:text-2xl text-white/50 mt-5">Want to discuss an opportunity to create something great? <br />I'm ready when you are.</p>
          </div>
          <Link href={'https://mail.google.com/mail/u/0/?fs=1&to=sarthakphadnis10@gmail.com&tf=cm'} className="flex justify-evenly bg-white/10 mt-8 lg:mt-0 p-4 md:p-5 mx-auto lg:mx-0 w-[60%] md:w-1/4 lg:w-1/5 xl:w-[13%] md:text-lg rounded-xl shadow-inner shadow-gray-500 hover:shadow-inner hover:shadow-gray-400 duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
            Get in touch
          </Link>
        </div>
      </section>

    </main>
  );
}
