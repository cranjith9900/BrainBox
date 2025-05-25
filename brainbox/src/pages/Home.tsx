import Coursoul from '../components/Coursoul';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/NavBar';
import Teams from '../components/Teams';
import Footer from '../components/Footer';
import SliderOne from '../components/SliderOne';
import SliderTwo from '../components/SliderTwo';
import OurApproach from '../components/OurApproach ';
function Home() {
    return (
        <div className='bg-[#F5F8FF]'>
           <Navbar />
            <HeroSection/>
            <Teams />
            <Coursoul />
            <OurApproach/>
             <SliderOne/>
                         <SliderTwo/>

              <SliderOne/>
              <Footer/>
            
        </div>
    );
}

export default Home;