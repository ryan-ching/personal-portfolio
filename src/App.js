import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import LandingSection from "./components/LandingSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ContactMeSection from "./components/ContactMeSection";
// import Footer from "./components/Footer";
import Alert from "./components/Alert";

import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
          <main>
            <Header isHidden={isScrolled} />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
          </main>
      </AlertProvider>
    </ChakraProvider>
    
  );
}

export default App;
