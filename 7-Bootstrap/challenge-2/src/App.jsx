import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Service />
                <Benefits />
            </main>
            <Footer />
        </>
    );
}