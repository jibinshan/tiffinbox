import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import About from "./(section)/About";
import BookTable from "./(section)/BookTable";
import Chef from "./(section)/Chef";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import Location from "./(section)/Location";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Orders from "./(section)/Orders";
import Specialities from "./(section)/Specialities";
import Footer from "./(section)/Footer";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <About />
        <Special />
        <Orders />
        <BookTable />
        <Specialities />
        <Chef />
        <Reviews />
        <Location />
        <ConnectWithUs />
        {/* <Reservation /> */}
        {/* <Flavour /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
        {/* <Map /> */}
        {/* <ConnectWithUs /> */}
        {/* <Footer /> */}
        <Footer />
      </div>
    </main>
  );
}
