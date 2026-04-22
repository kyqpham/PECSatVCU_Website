"use client";

import { useEffect, useRef } from "react";

export default function Frame8() {
  const glowRef = useRef(null);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        // Calculate the exact center by subtracting half the width/height (200px)
        const x = e.clientX - 200;
        const y = e.clientY - 200;

        glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
        glowRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#FEFAE0] overflow-x-hidden font-sans relative">

      {/* --- Mouse Grid Effect --- */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-20 transition-opacity duration-500 ease-in-out"
        style={{
          transform: 'translate(-1000px, -1000px)', // Starts off-screen
          opacity: 0, // Hidden until mouse moves
          backgroundImage: `
            linear-gradient(rgba(242, 122, 94, 0.6) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(242, 122, 94, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px', // Square grid size
          // Mask the grid into a circular, fading radial shape
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>

      {/* --- Navigation Bar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FEFAE0]/90 backdrop-blur-md shadow-sm py-4 px-6 lg:px-12 flex justify-between items-center">
        <div
          className="font-robotoCondensed font-bold text-3xl text-[#F27A5E] cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          PECS
        </div>
        <div className="flex gap-4 md:gap-8 text-black font-kadwa text-sm md:text-lg">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#F27A5E] transition-colors">About Us</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#F27A5E] transition-colors">Services</button>
          <button onClick={() => scrollToSection('events')} className="hover:text-[#F27A5E] transition-colors">Events</button>
          <button onClick={() => scrollToSection('team')} className="hover:text-[#F27A5E] transition-colors">Team</button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FEFAE0] to-transparent opacity-50"></div>
        <img
          src="/Pecs_banner.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="pecs_banner"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center mt-20">
          <p className="text-black font-simonetta text-6xl md:text-[150px] leading-none mb-4">
            welcome to
          </p>
          <h1 className="font-robotoCondensed text-8xl md:text-[200px] font-bold leading-tight bg-gradient-to-r from-[#FDBA66] to-[#FD6D71] bg-clip-text text-transparent">
            PECS
          </h1>
          <div className="mt-10 p-4">
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-black font-montserrat text-2xl md:text-[35px] px-8 py-3 bg-transparent hover:bg-white/20 transition-colors"
            >
              about us
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section id="about" className="relative w-full max-w-7xl mx-auto py-32 px-6 lg:px-12">
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FEFAE0_0%,#FDDE84_100%)] w-[400px] h-[400px] md:w-[600px] md:h-[600px] absolute -left-[100px] -top-[100px] opacity-80"></div>
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FEFAE0_0%,#F27A5E_100%)] w-[300px] h-[300px] md:w-[600px] md:h-[600px] absolute -right-[150px] top-[30%] opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-24">
          <div className="self-end text-right max-w-2xl">
            <h2 className="text-[#F27A5E] font-kadwa text-4xl md:text-[50px] font-bold mb-6">
              the problem
            </h2>
            <p className="text-[#141414] font-kadwa text-xl md:text-[32.5px] leading-relaxed">
              The rate for post-secondary enrollment for Richmond is roughly 50%, 22
              percentage points beneath the Virginia state average. This is a
              statistic in our community that troubles us and speaks volumes to the
              educational disparities that our local students face.
            </p>
          </div>

          <div className="self-start text-left max-w-4xl">
            <h2 className="text-[#F27A5E] font-kadwa text-4xl text-[50px] font-bold mb-6">
              our purpose
            </h2>
            <p className="text-black font-kadwa text-xl md:text-[32.5px] leading-relaxed">
              Personalized Exploration for College Success (PECS) is a student-led nonprofit organization
              committed to expanding access to higher education for students in Richmond Public Schools.
              Established in 2017 and sponsored by the Virginia Commonwealth University Honors College,
              PECS provides high-quality guidance, comprehensive resources, and a peer-driven support network
              to help students navigate college admissions and financial aid processes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services and Resources */}
      <section id="services" className="relative w-full bg-[#FEFAE0] py-24 px-6 lg:px-12 mt-10">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,#FDDE84_100%)] w-[300px] h-[300px] absolute -left-[50px] top-[10%] opacity-50"></div>
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FFF_0%,#F27A5E_100%)] w-[400px] h-[400px] absolute right-[10%] bottom-[10%] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-[#504D4C] font-jersey10 text-4xl md:text-5xl mb-16 text-center">
            SERVICES + RESOURCES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F27A5E] font-albertSans text-3xl font-bold">workshops</h3>
              <p className="text-black font-inriaSerif text-xl md:text-2xl leading-relaxed">
                PECS works closely with RPS faculty to develop and deliver in-person
                presentations tailored to the needs of RPS high school students. Past
                workshops have covered topics such as crafting personal statements,
                building a college list, and navigating scholarship opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#F27A5E] font-alanSans text-3xl font-bold">drop-in hours</h3>
              <p className="text-black font-inriaSerif text-xl md:text-2xl leading-relaxed">
                College volunteers complete a structured four-step training program
                before supporting RPS students on-site with all aspects of the college
                application process. Volunteers commit to shifts year-round, assisting
                with college applications in the fall and scholarship applications in
                the spring.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-16 w-full">
            {[
              { 
                color: 'bg-[#FDDE84]', 
                text: 'view scholarship database', 
                link: 'https://docs.google.com/spreadsheets/d/1V8wLDsztL04rJYdZX3Pf3yPMd1zNxEAU29zWnUNn1ZI/edit?usp=sharing' 
              },
              { 
                color: 'bg-[#F27A5E]', 
                text: 'view essay repository', 
                link: 'https://drive.google.com/drive/folders/1f3NNq-U3huwKOje4mLXJhpemNsL60OQD?usp=sharing' 
              },
              { 
                color: 'bg-[#FDDE84]', 
                text: 'view workshop notes', 
                link: 'https://drive.google.com/drive/folders/1Poyivuszni6mTHFNBTWuaUrzalT19ovA?usp=sharing' 
              }
            ].map((btn, i) => (
              <a 
                key={i} 
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn.color} rounded-[35px] w-full max-w-[220px] h-36 flex items-end justify-center p-4 shadow-sm hover:scale-105 transition-transform cursor-pointer relative decoration-transparent`}
              >
                <div className="absolute top-4 w-[80%] h-1/2 bg-[#FEFAE0] rounded-2xl opacity-50 pointer-events-none"></div>
                <p className="text-black font-inriaSerif text-sm text-center z-10 pointer-events-none">{btn.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Events */}
      <section id="events" className="relative w-full bg-[#FEFAE0] py-24 px-6 lg:px-12">
        {/* NEW BACKGROUND BALL 1: Events Yellow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FEFAE0_0%,#FDDE84_100%)] w-[400px] h-[400px] md:w-[600px] md:h-[600px] absolute -left-[200px] top-[20%] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-[#F27A5E] font-kameron text-4xl md:text-5xl mb-2">our recent</h2>
            <h3 className="text-[#FDDE84] font-kameron text-6xl md:text-7xl font-bold">events</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-xl border border-gray-100">
              <img src="/AbooutUs_GroupPicture21(1).png" className="w-[200px] h-auto object-cover rounded" alt="2025 Connect Conference" />
              <p className="text-black font-kalam text-sm mt-4">2025 Connect Conference</p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-xl border border-gray-100 mt-0 md:mt-12">
              <img src="/AbooutUs_GroupPicture21.png" className="w-[200px] h-auto object-cover rounded" alt="2017 PECS Founding" />
              <p className="text-black font-kalam text-sm mt-4">2017 PECS Founding</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-[#F27A5E] font-alegreyaSansSC text-3xl font-extrabold mb-8">our partners</h2>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <img src="/Image1.png" className="w-20 h-20 object-contain" alt="partner 1" />
              <img src="/Image2.png" className="w-20 h-20 object-contain" alt="partner 2" />
              <img src="/Image3.png" className="w-20 h-20 object-contain" alt="partner 3" />
              <img src="/Image4.png" className="w-16 h-16 object-contain" alt="partner 4" />
              <img src="/Image6.png" className="w-16 h-16 object-contain" alt="partner 6" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Team */}
      <section id="team" className="relative w-full bg-[#FEFAE0] pt-24 pb-12 px-6 lg:px-12">
        {/* NEW BACKGROUND BALLS 2 & 3: Team Orange and Yellow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FEFAE0_0%,#F27A5E_100%)] w-[350px] h-[350px] md:w-[500px] md:h-[500px] absolute -right-[150px] top-[10%] opacity-60"></div>
          <div className="rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#FEFAE0_0%,#FDDE84_100%)] w-[300px] h-[300px] md:w-[450px] md:h-[450px] absolute -left-[100px] bottom-[20%] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-[#F27A5E] font-alice text-4xl md:text-5xl mb-16">
            meet the team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 w-full text-center">
            {[
              { img: "/Image1(1).png", name: "Adam Vo", role: "Executive Director" },
              { img: "/Image2(1).png", name: "Subrat Poudel", role: "Associate Director" },
              { img: "/Image3(1).png", name: "Rohit Paradkar", role: "Associate Director" },
              { img: "/Image4(1).png", name: "Carter Jorgenson", role: "Director of Volunteering" },
              { img: "/Image5(1).png", name: "Saihithi Akula", role: "Director of Volunteering" },
              { img: "/Image6(1).png", name: "Sparsha Srinivasan", role: "Director of Special Programming" },
              { img: "/Image7.png", name: "Pranav Chintkuntlawar", role: "Director of Special Programming" },
              { img: "/Image9.png", name: "Diya Menon", role: "Director of Special Programming" },
              { img: "/Image8.png", name: "Maya Shah", role: "Dirctor of Special Programming" },
              { img: "/Image11.png", name: "Tanvi Potukanuma", role: "Director of Communications" },
              { img: "/Image12.png", name: "Mary Boyes", role: "Faculty Advisor" },
              { img: "/Image10.png", name: "Vedansh Vaidya", role: "Director of Resources" },

            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-3 relative z-10">
                <img
                  src={member.img}
                  className="rounded-[30px] w-[150px] h-[150px] object-cover shadow-md bg-white/50"
                  alt={member.name}
                />
                <div>
                  <p className="text-black font-bold font-alice text-sm">{member.name}</p>
                  <p className="text-gray-700 font-alice text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full relative z-10 flex flex-col items-center justify-center py-8 border-t border-[#F27A5E]/20 mt-8 gap-2">
        <p className="text-black font-kadwa text-lg md:text-xl">
          contact: <a href="mailto:pecsatvcu@gmail.com" className="text-[#F27A5E] hover:underline font-bold transition-all">pecsatvcu@gmail.com</a>
        </p>
        <p className="text-black font-kadwa text-lg md:text-xl"> 
          instagram: <a href="https://instagram.com/pecsatvcu" target="_blank" rel="noopener noreferrer" className="text-[#F27A5E] hover:underline font-bold transition-all">@pecsatvcu</a>
        </p>
      </footer>

    </main>
  );
}