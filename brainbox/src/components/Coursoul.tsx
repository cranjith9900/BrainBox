import React from "react";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";
import four from "../img/four.jpg";

const Coursoul = () => {
  // Helper for rendering image blocks
  const renderImage = (src: string, alt: string, text: string) => (
    <div className="w-full h-64 overflow-hidden rounded-lg relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-150"
      />
      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl font-semibold">
        {text}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F8FF] px-4 py-30 ">
      {/* Header */}
    <h2 className="text-4xl font-bold text-[#EC8426] uppercase tracking-widest text-center mb-8 drop-shadow-sm">
  Industries
</h2>



      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full md:w-2/5">
            {renderImage(one, "Image 1", "Semiconductor Industry")}
          </div>
          <div className="w-full md:w-3/5">
            {renderImage(two, "Image 2", "Management Consulting")}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full md:w-3/5">
            {renderImage(three, "Image 3", "Water Utilities Industry")}
          </div>
          <div className="w-full md:w-2/5">
            {renderImage(four, "Image 4", "IT Services")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursoul;
