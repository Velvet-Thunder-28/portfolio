import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "./components/ui/tubelight-navbar";
import { ThemeProvider } from "next-themes";
import { Squares } from "./components/ui/squares-background";
import { Hero } from "./components/ui/animated-hero";
import { GlowingEffectDemo } from "./components/ui/GlowingEffectDemo";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
} from "lucide-react";
import { useRef } from "react";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { name: "Home", url: "#home", icon: Home, ref: homeRef },
    { name: "About", url: "#about", icon: User, ref: aboutRef },
    { name: "Certifications", url: "#projects", icon: Briefcase, ref: projectsRef },
    { name: "Contact", url: "#contact", icon: FileText, ref: contactRef },
  ];

  // Function to handle smooth scrolling when navbar items are clicked
  const handleScroll = (ref:any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Get form and result elements
    const form = e.target;
    const resultDiv = document.getElementById("result");
    const resultText = resultDiv?.querySelector("p");
    
    // Show loading state
    form.querySelector("button").disabled = true;
    form.querySelector("button span").innerText = "Sending...";
    
    // Get form data
    const formData = new FormData(form);
  formData.append("access_key", '3974bc76-4e06-4ef7-8be1-5a44c0a00e3d');
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      // Show success or error message
      if (res.success) {
        // Success
        console.log("Success", res);
        resultDiv?.classList.remove("hidden", "bg-red-100");
        resultDiv?.classList.add("bg-green-100");
        resultText?.classList.add("text-green-700");
        if (resultText) {
          resultText.innerText = "Message sent successfully! I'll get back to you soon.";
        }
        
        // Reset form
        form.reset();
      } else {
        // Error
        console.log("Error", res);
        resultDiv?.classList.remove("hidden", "bg-green-100");
        resultDiv?.classList.add("bg-red-100");
        resultText?.classList.add("text-red-700");
        if (resultText) {
            resultText.innerText = "Something went wrong. Please try again later.";
        }
        
      }
    } catch (error) {
      // Network or other error
      console.error("Error:", error);
      resultDiv?.classList.remove("hidden", "bg-green-100");
      resultDiv?.classList.add("bg-red-100");
      resultText?.classList.add("text-red-700");
      if(resultText){
        resultText.innerText = "Something went wrong. Please try again later.";
      }
    } finally {
      // Reset button state
      form.querySelector("button").disabled = false;
      form.querySelector("button span").innerText = "Send Message";
      
      // Scroll to result message
      resultDiv?.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // Hide message after 5 seconds
      setTimeout(() => {
        resultDiv?.classList.add("hidden");
      }, 5000);
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {/* Background Squares - Positioned at z-0 */}
      <div className="h-screen w-full fixed top-0 left-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Main content - no z-index */}
        <div>
          {/* Home Section */}
          <div ref={homeRef} id="home" className="flex justify-center items-center min-h-screen">
            <Hero />
          </div>

          {/* About Section */}
          <div ref={aboutRef} id="about" className="min-h-screen w-full flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 gap-6 md:gap-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* About Me Section */}
              <div className="w-full md:w-1/2 bg-black p-6 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-md border border-gray-700">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">About Me</h1>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  I am a
                  <span className="font-semibold text-white">
                    Business Analytics student pursuing my Master of Science at Manipal Academy of Higher Education
                  </span>.
                  My academic journey has equipped me with strong analytical and problem-solving skills, and I am passionate about applying machine learning techniques to solve real-world business challenges.
                  <br />
                  I am proficient in
                  <span className="font-semibold text-white"> Python</span>,
                  <span className="font-semibold text-white"> R</span>, and
                  <span className="font-semibold text-white"> SQL</span>,
                  which I use to extract insights from data and drive informed decision-making.
                  <br />
                  My interests lie in leveraging data analysis and machine learning to improve business management and strategy. I am eager to contribute my skills and enthusiasm to innovative projects in the field of business analytics.
                </p>
              </div>

              {/* Skills Section */}
              <div className="w-full md:w-1/2 bg-black p-6 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-md border border-gray-700">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">My Skills</h1>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
                  <div className="flex flex-col items-center text-white">
                    {/* Python */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">Python</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* R */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">R</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* SQL */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">SQL</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* PowerBI */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="PowerBI" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">PowerBI</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* Tableau */}
                    <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">Tableau</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* Excel */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Excel_Logo_%282013-2019%29.svg" alt="Excel" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">Excel</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* SPSS */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/SPSS_logo.svg" alt="SPSS" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">SPSS</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* JASP */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/JASP_logo.svg" alt="JASP" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">JASP</p>
                  </div>
                  <div className="flex flex-col items-center text-white">
                    {/* Meta */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg" alt="Meta" className="text-3xl sm:text-4xl lg:text-5xl w-12 h-12" />
                    <p className="mt-2 text-sm sm:text-base lg:text-lg">Meta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div ref={projectsRef} id="projects" className="min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold px-4 sm:px-10 md:px-20">My Certifications</h1>
            <div className="p-4 sm:p-10 md:p-20">
              <GlowingEffectDemo />
            </div>
          </div>

          {/* Contact Section */}
<div ref={contactRef} id="contact" className="w-full py-10 sm:py-20 px-4 sm:px-10 md:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center mb-8 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Let's Connect
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"></div>
      <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl">
        Have a project in mind or just want to chat about technology?
        I'm always excited to collaborate on new ideas and
        opportunities.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 relative">
      {/* Left side - Contact Information */}
      <div className="lg:col-span-2 bg-black rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-xl h-fit lg:sticky lg:top-24">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
          Reach Out
        </h2>

        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4 sm:gap-5 group">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
              <Mail className="text-white h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">Email</p>
              <a
                href="mailto:thusharjk2002@gmail.com"
                className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                thusharjk2002@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 group">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
              <Linkedin className="text-white h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
              <a
                href="http://www.linkedin.com/in/thushark"
                className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thushar J K
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 group">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
              <Github className="text-white h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">GitHub</p>
              <a
                href="https://github.com/Velvet-Thunder-28"
                className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Velvet-Thunder-28
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 group">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
              <Twitter className="text-white h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">Twitter</p>
              <a
                href="https://x.com/thew_shar"
                className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @thew_shar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-xs sm:text-sm">
            Based in <span className="text-white">Udupi, India</span>
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Available for internship opportunities and full-time
            position as well.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Have a great day!
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-xl">
          {/* Form Success and Error Messages */}
          <div id="result" className="hidden mb-4 p-4 rounded-lg">
            <p className="text-center"></p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-xs sm:text-sm mb-2 group-focus-within:text-blue-400 transition-colors"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-800 border-0 rounded-lg p-3 sm:p-4 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-xs sm:text-sm mb-2 group-focus-within:text-blue-400 transition-colors"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 border-0 rounded-lg p-3 sm:p-4 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="subject"
                className="block text-gray-400 text-xs sm:text-sm mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-gray-800 border-0 rounded-lg p-3 sm:p-4 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-gray-400 text-xs sm:text-sm mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full bg-gray-800 border-0 rounded-lg p-3 sm:p-4 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 gap-4 sm:gap-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                I'll respond within 24-48 hours
              </p>
              <button 
                type="submit" 
                className="bg-black border hover:bg-gray-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:translate-x-2"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      
      {/* Modified NavBar Component Call */}
      <NavBar 
        items={navItems.map(item => ({
          name: item.name,
          url: item.url,
          icon: item.icon,
          onClick: () => handleScroll(item.ref)
        }))} 
      />
    </ThemeProvider>
  );
}

export default App;