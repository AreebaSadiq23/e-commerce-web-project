import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const FeaturedSection = () => {
  const cardData = [
    {
      image: "/editor/img16.png",
      title: "Lodest la Madison #1 (L'integral)",
      date: "April 2023",
      comments: "10 comments",
      description:
        "We focus on ergonomic design and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: "/editor/img17.png",
      title: "Lodest la Madison #1 (L'integral)",
      date: "March 2023",
      comments: "5 comments",
      description:
        "We focus on ergonomic design and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: "/editor/img18.png",
      title: "Lodest la Madison #1 (L'integral)",
      date: "February 2023",
      comments: "3 comments",
      description:
        "We focus on ergonomic design and meeting you where you work. It's only a keystroke away.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50 max-w-screen-2xl mx-auto">
      {/* Practice Advice Section */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-blue-400">Practice Advice</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Featured Product
        </h2>
        <p className="text-md text-gray-600 mt-4">
          Problems solving and trying to resolve the conflict between <br />
          the two major realms of classical physics. Newtonian mechanics and
        </p>
      </div>

      {/* Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative group"
          >
            <Image
              src={card.image}
              alt="Featured Image"
              width={500}
              height={256}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
              New
            </span>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                <span className="text-blue-500 mr-4">Google</span>
                <span className="mx-4">Trending</span>
                <span className="mx-4">New</span>
              </p>
              <h4 className="text-4xl font-semibold text-gray-800 mt-6">
                {card.title}
              </h4>
              <p className="mt-6">{card.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                <div className="flex items-center mt-6">
                  <MdAlarm className="text-green-500 mr-2" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center mt-6">
                  <FaRegComment className="text-green-500 mr-2" />
                  <span>{card.comments}</span>
                </div>
              </div>
              <a href="#" className="mt-6 text-blue-600 flex items-center">
                Learn More <IoIosArrowForward className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
