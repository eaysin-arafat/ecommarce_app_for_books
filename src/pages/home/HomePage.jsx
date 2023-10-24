import useTitle from "../../hooks/useTitle";
import Faq from "./components/Faq";
import FeaturedPorducts from "./components/FeaturedPorducts";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export const HomePage = () => {
  useTitle("Access Latest Computer Science eBooks");
  return (
    <main>
      <Hero />
      <FeaturedPorducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
