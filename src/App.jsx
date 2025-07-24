import React from 'react';
import Model from './Components/Model';
import Model1 from './Components/Model1';
import FeatureCard from './Components/FeatureCard';
import Icon1 from './assets/Icon1.png'
import Icon2 from './assets/Icon2.png'
import Icon3 from './assets/Icon3.png'
import Icon4 from './assets/Icon4.png'
import Icon5 from './assets/Icon5.png'
{/* Glowing Corners */}
{/* <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-500 opacity-10 blur-3xl rounded-full pointer-events-none" />
<div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500 opacity-10 blur-3xl rounded-full pointer-events-none" />
<div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500 opacity-10 blur-3xl rounded-full pointer-events-none" />
<div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-500 opacity-10 blur-3xl rounded-full pointer-events-none" /> */}

function App() {
  return (
   <div className="bg-[#020202] h-full w-screen text-white">
    <div className="absolute -top-10 right-10 w-48 h-48 bg-[#D0A704] opacity-15 blur-3xl rounded-full pointer-events-none" />
    <div className='text-center p-25'>
      <h1 className='text-2xl text-[#FFCC00]'>The Future of On-Site AI Surveillance</h1>
      <h1 className='text-8xl'>MandlacX  Edge Processor</h1>
    </div>
   
    <div className="absolute top-100 right-20 w-48 h-48 bg-[#D0A704] opacity-15 blur-3xl rounded-full pointer-events-none" />
    
      <Model/> 
      
    
    <div className="absolute top-100 left-10 w-48 h-48 bg-[#D0A704] opacity-10 blur-3xl rounded-full pointer-events-none" />

    <div>
      <div className='p-35 flex gap-35'>
        <div>
        <h1 className='text-5xl '>MandlacX Over</h1>
        <h1 className='text-5xl font-semibold'>Cloud-Only </h1>
        <h1 className='text-5xl font-semibold'>Video Analytics</h1>
        </div>

        <FeatureCard
        icon={Icon1}
        title="Bullet-Proof Weapon Detection"
        description="MandlacX is trained to detect firearms, knives, and other sharp threats with precision—no internet required."
        />
        <FeatureCard
         icon={Icon2}
        title="Bandwidth You Can Actually Afford"
        description="No continuous streaming. No heavy uploads. Just efficient edge computing that saves your network and your budget."
        />
        
      </div>
      <div className='pl-35 flex gap-35 -mt-30'>
    <div className="absolute top-320 -left-20 w-48 h-48 bg-[#D0A704] opacity-20 blur-3xl rounded-full pointer-events-none" />

       <FeatureCard
         icon={Icon3}
        title="Privacy by Design"
        description="Your footage stays on-site. No cloud syncs, no external servers—just full control over your data."
        />

        <Model1/>

        <FeatureCard
        icon={Icon4}
        title=" Future-Proof AI Stack"
        description="With modular AI models and local firmware updates, MandlacX is built to evolve with your needs—no dependency on cloud upgrades."
        />
        
      </div>
     <div className="flex items-center justify-start gap-35 pl-155 -mt-8 ">
  {/* Card Component (left side) */}
   <FeatureCard
         icon={Icon5}
        title="Latency That Saves Seconds—and Lives"
        description="Instant on-device processing means faster alerts and quicker interventions during critical moments."
        />
  

  {/* Right Text Content */}
  <div className="text-white">
    <p className="italic text-5xl text-gray-300">Built for Speed.</p>
    <p className="text-5xl font-semibold leading-tight mt-2">
      Designed for <br /> Action.
    </p>
  </div>
  <div className="absolute top-380 right-5 w-48 h-48 bg-[#D0A704] opacity-20 blur-3xl rounded-full pointer-events-none" />
</div>

    </div>
    
   
    </div>
  );
}

export default App;
