import { Navbar } from "../Components";
import { Hero, About } from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
  </div>
);

export default Page;
