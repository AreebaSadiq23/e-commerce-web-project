import React from 'react';
import { FaRegComment } from 'react-icons/fa'; 
import { MdAlarm } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io'; 
import Image from 'next/image';

const FeaturedSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      {/* Practice Advice Section */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-blue-600">Practice Advice</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Featured Product</h2>
        <p className="text-xl text-gray-500 mt-4">
          Problems solving and trying to resolve the conflict between <br/>the two major realms of classical physics. Newtonian mechanics and
        </p>
      </div>

      {/* Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <Image
            src="/editor/img16.png"
            alt="IMAGE"
            width={500} 
            height={256}
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
            New
          </span>
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Lodest la Madison #1</h4>
            <p className="mt-6">We focus on ergonomic design and meeting you where you work. Its only a keystroke away.</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <div className="flex items-center mt-6">
                <MdAlarm className="text-red-500 mr-2" />
                <span>April 2023</span>
              </div>
              <div className="flex items-center mt-6">
                <FaRegComment className="text-gray-500 mr-2" />
                <span>10 comments</span>
              </div>
            </div>
            <a href="#" className="text-blue-600 flex items-center mt-6">
              Learn More <IoIosArrowForward className="ml-2" />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <Image
            src="/editor/img17.png"
            alt="IMAGE"
            width={500}  
            height={256} 
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
            New
          </span>
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Lodest la Madison #1</h4>
            <p className="mt-6">We focus on ergonomic design and meeting you where you work. Its only a keystroke away.</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <div className="flex items-center mt-6">
                <MdAlarm className="text-red-500 mr-2" />
                <span>March 2023</span>
              </div>
              <div className="flex items-center mt-6">
                <FaRegComment className="text-gray-500 mr-2" />
                <span>5 comments</span>
              </div>
            </div>
            <a href="#" className="mt-6 text-blue-600 flex items-center">
              Learn More <IoIosArrowForward className="ml-2" />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <Image
            src="/editor/img18.png"
            alt="IMAGE"
            width={500}  
            height={256} 
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
            New
          </span>
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Lodest la Madison #1</h4>
            <p className="mt-6">We focus on ergonomic design and meeting you where you work. Its only a keystroke away.</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <div className="flex items-center mt-6">
                <MdAlarm className="text-red-500 mr-2" />
                <span>February 2023</span>
              </div>
              <div className="flex items-center mt-6">
                <FaRegComment className="text-gray-500 mr-2" />
                <span>3 comments</span>
              </div>
            </div>
            <a href="#" className="mt-6 text-blue-600 flex items-center">
              Learn More <IoIosArrowForward className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
