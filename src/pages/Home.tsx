import Marquee from "react-fast-marquee"
import Container from "../components/Container"
import Complogo from "../components/Complogo"
import { benefitOne, benefitTwo, dataa } from "../stattdata/stst"
import { SectionTitle } from "../components/SectionTitle"
import { Video } from "../components/Video"
import { Testimonials } from "../components/Testimonials"
import { Benefits } from "../components/Benefits"

function Home() {
  return <>
  
<Container classname=" bg-black">

  <div className=" flex flex-wrap">


       <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
               startups me invest be krte hai ye com fer 10 or 20x ke profite m se return krti hai
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/auth/singup"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Earning
              </a>
              {/* <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
    <img src="/homepic.jpg"  alt="nvidia"/>
          </div>
        </div>
          </div>

</Container>

<Container>
<Marquee className=" bg-black">


  {dataa.map((item)=>(
      <Complogo imgsrc={item.imageurl}/>
  ))}
</Marquee>


<div className=" my-10">


      <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-300 dark:text-white">
            Trusted by <span className="text-green-600">200+ Million</span>{" "}
            customers worldwide
          </div>
  </div>
</div>


</Container>

<Container classname=" mx-auto w-full">
  <div className=" w-full flex justify-center  items-center mx-auto text-center">

   <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
We are aimed at accelerating the implementation of digital solutions in human life and providing opportunities to earn money on new innovative trading projects. We continuously examine the cryptocurrency market and participate in the development of perspective blockchain solutions so that you can be the first to use successfully the new market trends. We put the focus on uniting people, sharing our knowledge and experience with them, educating them to manage digital assets and preparing to keep up with the trends of digital market.

You don’t have to worry about the devaluation of the local currency or low income from bank deposits, Start mining with us, you will get the passive income 24/7/365. We are professionals of the market consulting about cryptocurrencies and giving recommendations about further reinvestments for getting higher returns
      </SectionTitle>
  </div>

<Benefits data={benefitOne} />
    <Benefits imgPos="right" data={benefitTwo} />


  <div className=" w-full flex justify-center  items-center mx-auto text-center">

   <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you daaaaa"
      >
We man life and providi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis beatae distinctio nesciunt voluptate numquam pariatur, ducimus quos non culpa ipsam.of digital market.

      </SectionTitle>
  </div>


<Video videoId="ULkRZQiBrN5vQgGs" />



<Testimonials/>
</Container>


  </>
}

export default Home