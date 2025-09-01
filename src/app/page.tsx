import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaPython,
  FaJava,
  FaHtml5,
  FaDartLang,
  FaJs,
} from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import CircularProgressBar from "./skills"; // Import the Skills component
import Collapse from "./collapse"; // Import the Collapse component
import Projects from "./projects"; // Import the projects component
import Navbar from "./navbar"; // Import the navbar component
import HeroSection from "./heroSection"; // Import the hero component
//import { GlowingEffectDemo } from "./aboutMe"; // Import the GlowingEffectDemo component
import { GlowingEffectDemoSecond } from "./aboutMe"; // Import the GlowingEffectDemo component

export default function Home() {
  return (
    <main
      className=" text-white bg-black min-h-screen py-5
      mobile:max-mobileLg:px-0
      mobile:px-5
      tab:px-15"
    >
      {/*NAVIGATION SECTION*/}
      <section className="  font-poppins pb-5 mobile:max-mobileLg:px-5">
        {/*NAVIGATION BAR*/}
        <Navbar />
      </section>

      {/*HERO SECTION*/}
      <section className="">
        <HeroSection />
      </section>

      {/* SKILLS-SECTION */}
      <section
        id="skills"
        className="relative font-poppins text-left pt-30 mobile:max-mobileLg:pt-20 mobile:max-mobileLg:px-5"
      >
        {/* Content Column (takes up 3/5 of the width on large screens) */}
        <div className="min-[900px]:w-3/5">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold whitespace-nowrap">skills</h1>
            <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          </div>
          <p className="font-normal opacity-75 py-10">
            A showcase of my technical expertise, featuring proficiency in
            modern web and mobile development technologies, including
            frameworks, languages, and databases, honed through hands-on
            projects and continuous learning.
          </p>

          {/* CIRCULAR-PROGRESS-BARS */}
          <div className="font-antonio min-[640px]:flex min-[640px]:flex-row min-[640px]:gap-8 min-[640px]:justify-left">
            <CircularProgressBar
              id="progress-1"
              progressBars={[
                {
                  percentage: 80,
                  gradientColors: ["#4ECDC4", "#45B7D1"],
                  customText: "React",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
            <CircularProgressBar
              id="progress-2"
              progressBars={[
                {
                  percentage: 60,
                  gradientColors: ["#96CEB4", "#D4A5A5"],
                  customText: "Node.js",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
            <CircularProgressBar
              id="progress-3"
              progressBars={[
                {
                  percentage: 75,
                  gradientColors: ["#FF6B6B", "#FFE66D"],
                  customText: "Flutter",
                },
              ]}
              size={175}
              strokeWidth={10}
            />
          </div>

          {/* MORE-SKILLS-BOXES */}
          <div className="flex justify-between">
            {/* We removed opacity-65 from the parent div to control it on the spans */}
            <div className="py-10 text-left flex flex-wrap gap-4">
              {/* Each span is now styled as a glassmorphism tag */}
              <FaPython className=" text-5xl opacity-35 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <FaJava className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <FaJs className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiMysql className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiMongodb className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiExpress className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiNextdotjs className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <FaHtml5 className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiCss3 className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <SiTailwindcss className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
              <FaDartLang className=" text-5xl opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100 border border-white/50 rounded-lg backdrop-blur-sm p-1.5" />
            </div>
          </div>
        </div>

        {/* --- Floating Image --- 
          This is the new element. It's positioned absolutely within the section.
        */}
        <div 
          className="absolute top-1/2 -translate-y-1/3 right-0
                    hidden min-[1040px]:block"
        >
          <Image
            src="/images/code.png"
            alt="Code snippet illustration"
            width={400} // Adjust size as needed
            height={400} // Adjust size as needed
            className="animate-float" // Apply animation and some transparency
          />
        </div>
        <div 
          className="absolute top-1/2 -translate-y-1/3 right-0
                    hidden max-[1040px]:min-[1024px]:block"
        >
          <Image
            src="/images/code.png"
            alt="Code snippet illustration"
            width={300} // Adjust size as needed
            height={300} // Adjust size as needed
            className="animate-float" // Apply animation and some transparency
          />
        </div>
        <div 
          className="absolute top-1/2 -translate-y-1/3 right-0
                    hidden max-[1024px]:min-[900px]:block"
        >
          <Image
            src="/images/code.png"
            alt="Code snippet illustration"
            width={300} // Adjust size as needed
            height={300} // Adjust size as needed
            className="animate-float opacity-30" // Apply animation and some transparency
          />
        </div>
      </section>

      {/*ABOUT-ME SECTION*/}
      <section id="about" className=" flex font-poppins text-left pt-30 mobile:max-mobileLg:px-5">
        <div className="w-full">
          {/* Topic */}
          <div className="flex items-center gap-4 min-[900px]:w-3/5 pb-15">
            <h1 className="text-4xl font-bold whitespace-nowrap">about</h1>
            <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          </div>
          {/* Components */}
          {/* <div className="flex flex-row gap-4 flex-wrap justify-center pt-10">
            <div className="sm:w-80">
              <Collapse title="My Journey">
                <p>
                  I&apos;m a passionate developer with a love for crafting digital
                  experiences. From tinkering with code in my teens to building
                  scalable web apps, my journey has been fueled by curiosity and
                  creativity.
                </p>
              </Collapse>
            </div>
            <div className="sm:w-80">
              <Collapse title="Skills">
                <p>
                  Proficient in modern web technologies with a knack for
                  problem-solving.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>React, TypeScript, Node.js</li>
                  <li>Tailwind CSS, UI/UX Design</li>
                  <li>API Development & Integration</li>
                </ul>
              </Collapse>
            </div>
            <div className="sm:w-80">
              <Collapse title="Passions">
                <p>Beyond coding, I thrive on creativity and innovation.</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Building open-source projects</li>
                  <li>Exploring generative art</li>
                  <li>Mentoring aspiring developers</li>
                </ul>
              </Collapse>
            </div>
          </div> */}
          <GlowingEffectDemoSecond />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="font-poppins pt-30 mobile:max-mobileLg:px-5">
        {/* Topic */}
        <div className="flex items-center gap-4 min-[900px]:w-3/5">
          <h1 className="text-4xl font-bold whitespace-nowrap">services</h1>
          <div className="flex-grow h-px block w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
        </div>

        {/* Services List */}
        <div className="font-dm_sans flex flex-col gap-15 py-20 
                        text-[7vw] font-semibold tracking-tighter justify-center">
          {/* --- Service Item 1 --- */}
          <div className="relative flex items-center justify-center">
            {/* Floating Image (Before Text) */}
            <div className="absolute left-[8%] top-1/2 -translate-y-1/2 block">
              <Image
                src="/images/pointer.png" // Replace with your image
                alt="Web Development Icon"
                width={120}
                height={120}
                className="animate-float-slow w-[8vw] h-[8vw]"
              />
            </div>
            <p className=" hover:text-purple-400 transition-colors hover:cursor-pointer">
              Web development
            </p>
          </div>

          {/* --- Service Item 2 --- */}
          <div className="relative flex items-center justify-center">
            <p className=" hover:text-pink-400 transition-colors hover:cursor-pointer">
              Mobile app development
            </p>
            {/* Floating Image (After Text) */}
            <div className="absolute right-[50%] top-1/4 -translate-y-1/2 block">
              <Image
                src="/images/bulb.png" // Replace with your image
                alt="Mobile App Icon"
                width={120}
                height={120}
                className="animate-float-rotate w-[9vw] h-[9vw]"
              />
            </div>
          </div>
          
          {/* --- Service Item 3 --- */}
          <div className="relative flex items-center justify-center">
            {/* Floating Image (Middle of Text) */}
            <div className="absolute left-[42%] -translate-x-1/2 block">
              <Image
                src="/images/fire.png" // Replace with your image
                alt="Full Stack Icon"
                width={100}
                height={100}
                className="animate-float-rotate w-[8vw] h-[8vw]"
              />
            </div>
            <p className=" hover:text-red-400 transition-colors hover:cursor-pointer">
              Full stack &nbsp;&nbsp;&nbsp; development
            </p>
          </div>

          {/* --- Service Item 4 --- */}
          <div className="relative flex items-center justify-center">
            <p className=" hover:text-teal-400 transition-colors pr-[7vw] hover:cursor-pointer">
              Graphic design
            </p>
            {/* Floating Image (After Text, different position) */}
            <div className="absolute right-[10%] block">
              <Image
                src="/images/graphic.png" // Replace with your image
                alt="Graphic Design Icon"
                width={200}
                height={200}
                className="animate-float-slow w-[15vw] h-[15vw]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className=" font-poppins mobile:max-mobileLg:px-5 py-20">
        <div className="flex items-center gap-4 min-[900px]:w-3/5">
          <h1 className="text-4xl font-bold whitespace-nowrap">Projects</h1>
          <div className="flex-grow h-px block w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
        </div>
        <Projects />
      </section>

      {/* LET'S CONNECT FINAL SECTION */}
      <section
        id="connect"
        className="font-poppins relative w-full overflow-hidden text-center mobile:max-mobileLg:px-5 py-20 md:py-32 "
      >
        {/* Background Image with Border Radius */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl" /* Added rounded-lg */
          style={{ backgroundImage: 'url(/images/glassflow.jpeg)' }}
        >
          {/* ... overlay ... */}
        </div>

        {/* The Glassmorphism Card */}
        <div className="relative max-w-sm sm:max-w-md md:max-w-2xl mx-auto flex flex-col items-start gap-6 md:gap-8 p-8 md:p-12
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                     shadow-2xl text-left"> {/* Removed items-center, added text-left, and responsive max-w */}

          <p className="font-dm_sans text-3xl font-semibold text-white max-w-lg">
            Whether it&apos;s a project, collaboration, or just a chat about design
            and tech -
          </p>
          <p className=" text-xl text-white/70">I&apos;m just a message away</p>

          {/* Social Links and Let's Talk button on one line */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0"> {/* Added w-full and responsive flex */}
            {/* Enhanced Social Icons */}
            <div className="flex gap-4 text-2xl">
              <a href="https://www.linkedin.com/in/pasindu-dissa"
                target="_blank"
                aria-label="LinkedIn" 
                className="p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/pasindu-dissa" 
                target="_blank"
                aria-label="GitHub" 
                className="p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
                <FaGithub />
              </a>
              <a href="#" aria-label="Facebook" className="p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
                <FaFacebook />
              </a>
            </div>

            {/* Updated CTA Button */}
            <a
              href="mailto:pasindudissanayake035@gmail.com?subject=Let's%20Connect&body=Hi,%20I'd%20like%20to%20get%20in%20touch!" // Replace with your contact link or mailto
              target="_blank"
              className="inline-block px-8 py-3 rounded-full
                      font-semibold bg-white text-black border-2 border-white
                         cursor-pointer transition delay-50 duration-200 ease-in-out
                         hover:bg-black/0 hover:text-white hover:border-2 hover:te"
            >
              Let&apos;s Talk
            </a>
          </div>

        </div>
      </section>

      {/* <ScrollToTop /> */}
    </main>
  );
}