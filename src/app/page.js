import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import { CheckCheck, LucidePhoneCall } from "lucide-react";

async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <Fragment className="bg-blue-50">
      <section className="relative max-w-screen h-full min-h-screen lg:pb-10">
        <div className="w-full h-full min-h-1/2 relative ">
          <Marquee pauseOnHover gradientColor="true" className="flex font-bold uppercase text-sm lg:text-xl lg:mt-10 mb-0 dark:bg-red-500 bg-[#501bff] text-white p-2 lg:p-3">For enquiry call   <LucidePhoneCall className="mx-3  "></LucidePhoneCall> 99XXXXXXXX and latest updates shown here !!</Marquee>
          <div className="flex flex-col sm:flex-row gap-5 lg:my-12">
            <section className="relative w-full md:w-[60%] flex flex-col md:px-1 lg:px-0 p-3 lg:p-10">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <span className="flex space-x-2 ">
                  <span className="block w-14 mb-2 dark:border-white border-b-2 border-gray-700 dark:hover:text-red-500"></span>
                  <span className="text-sm dark:text-white text-gray-600 hover:text-red-500 dark:hover:text-red-500">
                    One Stop Solution to Find Jobs
                  </span>
                </span>
                <h1 className="text-3xl dark:text-white mt-5 lg:text-7xl text-black font-extrabold">
                  Build your best job career starting from here.
                </h1>
                <div className=" w-full mt-6 flex items-center text-white justify-start gap-2">
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>
            <section className="relative w-screen md:w-[40%] flex items-center justify-end">
              {/* <img
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              {/* <img
                src="/success.svg"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              <iframe src="https://lottie.host/embed/225d3af9-000e-486f-b11e-31b4d2d7f4e3/DzT0u2P1dS.lottie" className="w-auto m-auto h-full dark:backdrop-invert-0 dark:invert dark:hue-rotate-180 dark:mix-blend-multiply" allowtransparency='true' loading="lazy"></iframe>

            </section>
          </div>
        </div>

        {/* div section */}
        <div className="w-full h-full min-h-1/2 relative">
          <span className="flex space-x-2">
            <span className="block w-14 mb-2 dark:border-white border-b-2 border-gray-700 dark:hover:text-red-500"></span>
            <span className="font-medium dark:text-white text-gray-600 hover:text-red-500 dark:hover:text-red-500">
              Something that we want to tell
            </span>
          </span>
          <div className="flex flex-col-reverse sm:flex-row gap-5 lg:my-12">
            <section className="relative w-screen md:w-[40%] flex items-center justify-end">
              {/* <img
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              {/* <img
                src="/in-office.svg"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              <iframe src="https://lottie.host/embed/eb1b034b-6c11-4083-8288-129d2254f91a/KqCowNyKpD.lottie" className="w-full h-full dark:invert dark:backdrop-invert-0 dark:mix-blend-multiply" allowtransparency='true' loading="lazy"></iframe>


            </section>
            <section className="w-full md:w-[60%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10 lg:pt-0 pt-0">
              <div className="w-full h-full relative">

                <h1 className="text-xl dark:text-white mt-5 lg:text-5xl text-black font-extrabold">
                  About US
                </h1>
                <p className="text-sm mt-3 space-x-2 p-2 dark:text-white lg:text-lg">
                  White Lotus Consultancy is a professional job consultancy dedicated to bridging the gap between job seekers and employers. With a mission to empower individuals with the right job opportunities, we specialize in offering career guidance, job placement services, and professional development assistance. Our platform ensures that every job seeker finds the right job based on their skills, preferences, and experience.</p>
              </div>
            </section>

          </div>
        </div>

        {/* services section */}
        <div className="w-full h-full min-h-1/2 relative">

          <div className="flex flex-col md:flex-row gap-5 my-12">
            <section className="w-full md:w-[60%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10 lg:pt-0 pt-0">
              <div className="w-full h-full relative">
                <div>
                  <h1 className="text-xl dark:text-white mt-5 lg:text-5xl text-black font-extrabold">
                    Our Services
                  </h1>
                  <h3 className="text-md mt-3 dark:text-white lg:text-2xl text-black font-extrabold">
                    1. Job Search & Placement
                  </h3>
                  <p className="text-sm mt-3 ml-3 space-x-2 p-2 dark:text-white lg:text-xl">
                    We help job seekers find the best-suited job opportunities based on their experience and preferences. We offer job listings across various industries, including IT and Non-IT sectors.
                  </p>
                </div>
                <div>
                  <h3 className="text-md mt-3 dark:text-white lg:text-2xl text-black font-extrabold">
                    2. Job Categorization for Easy Navigation
                  </h3>

                  <h3 className="text-md ml-3 mt-3 dark:text-white lg:text-xl text-black font-extrabold">
                    We have classified job opportunities into:</h3>

                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">Local Jobs: Jobs available within the candidate’s current city or region.</p>
                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl"> Non-Local Jobs: Jobs that require relocation or remote work opportunities.</p>
                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">IT Sector: Jobs in software development, cybersecurity, data analytics, and more.</p>
                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">Non-IT Sector: Jobs in sales, marketing, HR, finance, healthcare, etc.</p>
                </div>
                <div>
                  <h3 className="text-md mt-3 dark:text-white lg:text-2xl text-black font-extrabold">
                    3. Seamless Application Process
                  </h3>
                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">Candidates can sign up and create their profiles.</p>

                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl"> Upload their resumes and select job preferences.</p>

                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">Apply for job opportunities based on their category and industry of choice.</p>

                </div>
                <div>
                  <h3 className="text-md mt-3 dark:text-white lg:text-2xl text-black font-extrabold">
                    4. Direct Employer Connect
                  </h3>
                  <p className="text-sm ml-3 space-x-2 p-1 dark:text-white lg:text-xl">We connect job seekers directly with hiring managers and HR representatives of reputed companies, making the hiring process quick and efficient.</p>
                </div>

              </div>
            </section>
            <section className="relative w-full md:w-[40%] flex items-center justify-end">
              {/* <img
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              {/* <img
                src="/services.svg"
                alt="Hero"
                className="h-full w-full object-contain z-10"
              /> */}
              <iframe src="https://lottie.host/embed/4895e69a-a702-43b6-84a4-ccaa483d179b/iVOXgRwF64.lottie" className="w-full h-full dark:invert dark:backdrop-invert-0 dark:mix-blend-multiply" allowtransparency='true' loading="lazy"></iframe>

            </section>
          </div>


        </div>

        {/* Why choose section */}
        <div className="w-full h-full min-h-1/2 relative">

          <div className="flex flex-col md:flex-row gap-5 my-12">
            <section className="w-full md:w-[100%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10 lg:pt-0 pt-0">
              <div className="w-full h-full relative">
                <div>
                  <h1 className="text-xl dark:text-white mt-5 lg:text-5xl text-black font-extrabold">
                    Why Choose White Lotus Consultancy?
                  </h1>
                  <h3 className="text-sm ml-3 mt-3 dark:text-white lg:text-xl text-black">
                    <CheckCheck className="inline text-[#501bff] shadow-sm" /> <b>Wide Job Network:</b> We collaborate with top employers and organizations.
                  </h3>
                  <h3 className="text-sm ml-3 mt-3 dark:text-white lg:text-xl text-black">
                    <CheckCheck className="inline text-[#501bff] shadow-sm" /> <b>Quick & Easy Registration:</b> A user-friendly platform for job seekers.
                  </h3>
                  <h3 className="text-sm ml-3 mt-3 dark:text-white lg:text-xl text-black">
                    <CheckCheck className="inline text-[#501bff] shadow-sm" /> <b>Secure & Reliable:</b>  Encrypted user data for privacy and security.
                  </h3>

                  <h3 className="text-sm ml-3 mt-3 dark:text-white lg:text-xl text-black">
                    <CheckCheck className="inline text-[#501bff] shadow-sm" /> <b>Professional Assistance:</b>   Expert resume writing and interview preparation.
                  </h3>

                  <h3 className="text-sm ml-3 mt-3 dark:text-white lg:text-xl text-black">
                    <CheckCheck className="inline text-[#501bff] shadow-sm" /> <b>Affordable & Efficient:</b>  Minimal charges for premium job referrals and career services.
                  </h3>


                </div>


              </div>
            </section>

          </div>


        </div>
      </section>
    </Fragment>
  );
}

export default Home;
