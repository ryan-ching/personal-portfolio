import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import LandingSection from "./components/LandingSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ContactMeSection from "./components/ContactMeSection";
// import Footer from "./components/Footer";
// import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";

import { useEffect, useState } from "react";
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
    <main>
      <Header isHidden={isScrolled} />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </main>
  );
}

export default App;
