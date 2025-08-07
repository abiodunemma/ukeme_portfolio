"use client";

export default function Project() {
  return (
  <div className="bg-[#EDF7FA] py-8 px-8 shadow-md"> {/* Changed py-20 to py-8 */}
  <div className="max-w-6xl mx-auto">
    
    {/* Header section with spacing */}
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-bold text-[#21243D]">Recent posts</h2>
      <span className="text-md text-blue-500 cursor-pointer hover:underline">
        View all
      </span>
    </div>


        {/* Blog cards container */}
        <div className="flex flex-wrap gap-6 justify-between">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[48%]">
            <h3 className="text-lg font-semibold text-[#21243D]">
              Making a design system from scratch
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
              <span>12 Feb 2020</span>
              <div className="h-4 border-l border-gray-400"></div>
              <span>Design, Pattern</span>
            </div>
            <p className="mt-3 text-[#21243D] text-sm leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[48%]">
            <h3 className="text-lg font-semibold text-[#21243D]">
              Creating pixel-perfect UI from scratch
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
              <span>12 Feb 2020</span>
              <div className="h-4 border-l border-gray-400"></div>
              <span>Design, Pattern</span>
            </div>
            <p className="mt-3 text-[#21243D] text-sm leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
