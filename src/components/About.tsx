// src/components/About.tsx

"use client";

import Image from 'next/image';
import uk from '@/public/images/uk.jpeg';

export default function About() {
  return (
    <div className="bg-white py-12 px-8 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* LEFT: Text Box */}
        <div className="md:w-1/2 text-[#21243D]">
          <h2 className="text-3xl font-bold mb-4">Hi, I&rsquo;m Ukeme Michael</h2>
          <p className="text-md leading-relaxed">
          I’m Ukeme Michael, a content strategist, Market Researcher, Business developer /Strategist, Brand Growth specialist, and media professional.
           I am passionate about building brands that connect and communicate with clarity. 
           I currently serve as the  Content Strategist at Rovatel Media, where I lead creatives to develop strategies,
           shape narratives, and drive performance across multiple client brands.
          </p>

          <div className="mt-4 py-2 px-16 bg-[#FF6464] rounded-md text-white inline-block cursor-pointer hover:opacity-90 transition">
            Download Resume
          </div>
        </div>

        {/* RIGHT: Image Box */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-60 h-60 relative rounded-full overflow-hidden shadow-lg">
          <Image
  src="/images/uk.jpeg"
  alt="Dummy"
  width={300}
  height={300}
  className="rounded-full"
/>
          </div>
        </div>

      </div>
    </div>
  );
}
