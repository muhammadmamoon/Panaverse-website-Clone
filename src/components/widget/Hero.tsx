import React from 'react'
import Wrapper from '@/components/shaired/Wrapper'
import HeroPoster from '@/app/assests/images/Hero-poster.png'
import Image from 'next/image'
import Button from './button'

function Hero() {
  return (
    <section>
        <Wrapper>
            <div className='flex items-center' >
                <div className='flex-1'>
                <h4 className='text-green-800 text-lg font-bold mb-3'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className='text-6xl font-bold'>Certified Web 3.0 and Metaverse Developer</h1>
                <p className='mt-6 text-lg text-slate-600'>
                  p One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet <br />
                 
                </p>
                <p className='mt-3 text-lg text-slate-600'> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>

                <Button text={'learn More'}/>
                

                </div>
                
                <div className='flex-1'> 
                   <Image src={HeroPoster} alt="hero poster"/>
                 </div>

            </div>
                
            
        </Wrapper>
    </section>
  )
}

export default Hero