import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
function Home(){
    return(
        <>
            <nav>
                <Navbar/>
            </nav>
            <main>
                <section>
                    <Hero/>
                </section>
                <section>
                    <About/>
                </section>
            </main>
        </>
    )
}
export default Home;