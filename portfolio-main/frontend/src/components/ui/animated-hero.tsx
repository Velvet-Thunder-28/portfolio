import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Business Analyst", "Upcoming Intern", "Pursuing Masters", "at MAHE"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if section doesn't exist - scroll to bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Hey, it's Thushar here</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Hi I am a Business Analytics student pursuing my masters at Manipal Academy of Higher Education. I am currently looking for internship opportunities to apply my skills and gain practical experience in the field of business analytics.
            </p>
          </div>
          <div className="relative">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="gap-3" 
              variant="outline"
            >
              Jump on a mail <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };