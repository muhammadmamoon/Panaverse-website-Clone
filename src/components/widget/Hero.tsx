import React from 'react';
import HeroPoster from '../../app/assests/images/Hero-poster.png';
import Image from 'next/image';
import Button from './button';
import Wrapper from '../shaired/Wrapper';

function Hero() {
  return (
    <section className="py-10">
      <Wrapper>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='flex-1 mb-6 md:mb-0'>
            <h4 className='text-green-800 text-lg font-bold mb-3'>
              Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
            </h4>
            <h1 className='text-4xl md:text-6xl font-bold'>
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className='mt-6 text-lg text-slate-600'>
              One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
            </p>
            <p className='mt-3 text-lg text-slate-600'>
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies.
            </p>
            <Button text={'Learn More'} />
          </div>
          
          <div className='flex-1'>
            <Image 
              src={HeroPoster} 
              alt="hero poster" 
              layout="responsive" 
              width={500} // Adjust width and height as needed
              height={300} // Adjust width and height as needed
              className="rounded-lg shadow-lg" // Add styles for rounded corners and shadow
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
