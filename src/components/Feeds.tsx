"use client";
import Image from 'next/image';



export default function Feeds() {
  return (
    <div className="bg-white text-[#21243D]">
      <div className="py-8 px-8 shadow-md">
        <div className="text-xl ml-3 font-bold ml-12 mb-6">Featured works</div>
        
        {/* First Box */}
        <div className="mt-4 flex flex-col md:flex-row items-start gap-0  p-4 rounded-lg">
          {/* Image on the side */}
          <div className="flex-shrink-0">
            <Image
             src="/images/box-3.png"
              alt="Project"
              width={100}
              height={10}
              className="rounded-lg object-cover w-50 h-50"
              priority
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 md:ml-3">
            <p className="font-semibold text-xl">Designing Dashboards</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="bg-[#21243D] text-white px-2 py-1 rounded-lg text-sm">2020</span>
              <span className="text-[#8695A4] text-sm">Dashboard</span>
            </div>
            <p className="mt-2 text-md leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

              <hr className="my-6 border-gray-300" />

        {/* Second Box */}
        <div className="mt-6 flex flex-col md:flex-row items-start gap-0  p-4 rounded-lg">
          <div className="flex-shrink-0">
            <Image
             src="/images/box-2.png"
              alt="Project"
              width={100}
              height={10}
              className="rounded-lg object-cover w-50 h-50"
              priority
            />
          </div>
          <div className="flex-1 md:ml-3">
            <p className="font-semibold text-xl">Vibrant Portraits of 2020</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="bg-[#21243D] text-white px-2 py-1 rounded-lg text-sm">2018</span>
              <span className="text-[#8695A4] text-sm">Illustration</span>
            </div>
            <p className="mt-2 text-md leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

              <hr className="my-6 border-gray-300" />

        {/* Third Box */}
        <div className="mt-6 flex flex-col md:flex-row items-start gap-0  p-4 rounded-lg">
          <div className="flex-shrink-0">
            <Image
             src="/images/box.png"
              alt="Project"
              width={100}
              height={10}
              className="rounded-lg object-cover w-50 h-50"
              priority
            />
          </div>
          <div className="flex-1 md:ml-3">
            <p className="font-semibold text-xl">36 Days of Malayalam type</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="bg-[#21243D] text-white px-2 py-1 rounded-lg text-sm">2018</span>
              <span className="text-[#8695A4] text-sm">Typography</span>
            </div>
            <p className="mt-2 text-md leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}