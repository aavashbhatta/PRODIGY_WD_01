import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai";
import Image from "next/legacy/image";
// import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png"
import web1 from "../public/ilamiagro.png"
import web2 from "../public/pttats.png"
import web3 from "../public/aron-engineering.png"
import web4 from "../public/margintech.png"
import { useState } from "react";
export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode? "dark" : ""}>
      <Head>
        <title>Aavash Bhatta</title>
      </Head>

      <main className="bg-white px-10 first-letter md:px-20 lg:px-40 dark:bg-gray-950">
        <section className="min h-100">
        <nav className="py-10 mb-10 flex justify-between">
          <h1 className="text-2xl font-burtons dark:text-gray-300">developedbyaavash</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill 
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-gray-100"/></li>
            <li>
              <a className=" bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-md ml-8" href ="www.bhattaaavash.com.np">Resume</a>
              </li>
          </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-gray-300 font-medium md:text-6xl">Aavash Bhatta</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 md:text-xl mx-auto dark:text-gray-300">Front End Developer and Project Manager</p>
          </div>
          <div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-300">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-gray-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 dark:bg-gray-200">
              <Image src={deved} layout="fill" objectFit="cover"
                    />
            </div>
          </div>
        </section>
         <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">Services I Offer</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 mx-auto dark:text-gray-400">  
              I provide a set of services as a front end developer and freelancer mostly 
             related to   <span className="text-teal-500"> web development. </span>


            </p> */}
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={design} width={100} height={100} mx-auto />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant design suited for your needs</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Canva</p>

            </div>
            <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={code} width={100} height={100} mx-auto />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
              <p className="py-2">Creating elegant design suited for your needs</p>
              <h4 className="py-4 text-teal-600">Programming Languages I use</h4>
              <p className="text-gray-800 py-1">HTML&CSS</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
            </div>
          </div>
         </section>
         <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">  
              I provide a set of services as a front end developer and freelancer mostly 
             related to   <span className="text-teal-500"> web development. </span> Here are a few of the projects I have worked on:-
            </p>
            
          </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className=" rounded-lg basis-1/3 flex-1 border-4 border-black dark:border-gray-300">
                <Image 
                src ={web1} 
                className="rounded-lg object-cover   " 
                width={'100%'} 
                height={'100%'}   
                layout="responsive"
                />
            </div>
            <div className=" rounded-lg basis-1/3 flex-1 border-4 border-black dark:border-gray-300">
              <Image 
              src ={web2}
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>
            <div className=" rounded-lg basis-1/3 flex-1 border-4 border-black dark:border-gray-300">
              <Image 
              src ={web3} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/>
            </div>
            <div className=" rounded-lg basis-1/3 flex-1 border-4 border-black dark:border-gray-300">
              <Image 
              src ={web4} 
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
          </div>
         </section>
      </main>
    </div>
  );
}
