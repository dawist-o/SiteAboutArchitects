import Header from './header.js'
import Footer from './footer'
import About from './about'
import ArchitectOfTheDay from './architectOfTheDay'



export default function Home() {
    return (
        <div>
            <About/>
            <ArchitectOfTheDay/>
            <Footer/>
        </div>
    );
}