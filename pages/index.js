import Contact from "../src/components/home/Contact";
import About from "../src/components/home/About";
import Roadmap from "../src/components/home/Roadmap";
import Tokenomics from "../src/components/home/Tokenomics";
import Header from "../src/components/home/Header";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Tokenomics />
      <Roadmap />
      <Contact />
    </>
  );
}
