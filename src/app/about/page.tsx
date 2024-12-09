import React from "react";
import Image from "next/image";
import { FaCode, FaUserAlt, FaProjectDiagram } from 'react-icons/fa'; 

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* About Company Section */}
      <div className="flex flex-wrap items-center justify-between mb-16">
        <div className="w-full lg:w-1/2 space-y-4">
          <h4 className="text-sm text-black font-semibold">About Company</h4>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mt-10">About Us</h2>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, <br />but things on a small scale can be unpredictable.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Get Quotes Now
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/logo/img 5.png"
            alt="About Us"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-28 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 text-lg mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 flex flex-col items-center shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4" /> {/* Icon added */}
            <Image
              src="/editor/team-1-user-1.jpg" 
              alt="Team Member 1"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
            <p className="text-gray-500">Web Developer</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center shadow-lg rounded-lg">
            <FaUserAlt className="text-4xl text-blue-500 mb-4" /> {/* Icon added */}
            <Image
              src="/editor/team-1-user-2.jpg" 
              alt="Team Member 2"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Jane Smith</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center shadow-lg rounded-lg">
            <FaProjectDiagram className="text-4xl text-blue-500 mb-4" /> {/* Icon added */}
            <Image
              src="/editor/team-1-user-3.jpg" 
              alt="Team Member 3"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Alice Brown</h3>
            <p className="text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>

      {/* Big Companies Section */}
      <div className="mt-28">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800 text-center">Big Companies Are Here</h2>
        <p className="text-gray-600 text-lg text-center mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          <Image
            src="/logo/1.png" 
            alt="Company Logo 1"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logo/2.png" 
            alt="Company Logo 2"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logo/3.png" 
            alt="Company Logo 3"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logo/4.png" 
            alt="Company Logo 4"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logo/5.png" 
            alt="Company Logo 5"
            width={100}
            height={100}
            className="object-contain"
          />
          <Image
            src="/logo/6.png" 
            alt="Company Logo 6"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="bg-lightblue py-16 px-6 rounded-md text-center">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800">Work With Us</h2>
            <p className="text-gray-600 text-lg mt-4">
              Now Let’s Grow Yours. <br />
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century revolutionized our understanding of physics.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/hero/img2.png" // Update with the actual image path
              alt="Work With Us"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
