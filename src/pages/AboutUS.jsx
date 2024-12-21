import React from 'react';
import AboutUsHero from '../components/About us/AboutUsHero';
import OurValue from '../components/About us/OurValue';
import Mission from '../components/About us/Mission';

const AboutUS = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-8 w-full md:w-3/4 mx-auto py-8'>
          {/* video over here */}
          <video width="420"  loop  autoPlay muted className='rounded-3xl overflow-hidden mx-4 md:mx-0'>
          <source src="https://res.cloudinary.com/dxrnafxmn/video/upload/v1734779625/video_ciz7yv.mp4"  width="320" height="500" />
          </video>
          
          <div className='w-full lg:w-1/2 rounded-xl bg-gray-bg text-white mx-4 md:mx-0 px-10 py-4  shadow-xl'>
            <h1 className='font-bold text-md md:text-2xl'>Driven by a Burning  desire to find  Innovative Solutions  & Help Business  Owners & Enthusiasts
              alike, We find  Incredible Response &  Appreciation from our  Clients.</h1>
              <section className='mt-3 text-sm italic text-gray-400'>
              “A business that makes nothing but money is a poor kind of business”   - Henry Ford
              </section>
          </div>
            
        </div>
        <AboutUsHero/>

        <OurValue/>

        <Mission/>
    
    </div>
  )
}

export default AboutUS