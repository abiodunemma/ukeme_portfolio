import next from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Project from "@/components/Project";
import Feeds from "@/components/Feeds";

export default function HomePage() {
  return (
    <>
    <div>
      <Header />
      <main>
        <About />
        <Project />
          </main>
      <Feeds />
    
      <Footer />
    </div>
    </>
    
  );
}