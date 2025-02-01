'use client';
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "../navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Section() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-16">
        {/* Small Heading */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-700" data-aos="fade-up">What We Do</h3>
        </div>

        {/* Big Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="100">
            Innovation tailored for you
          </h2>
        </div>

        {/* Breadcrumb */}
        <div className="text-center mb-8">
          <p className="text-gray-900 text-lg" data-aos="fade-up" data-aos-delay="200">
            Home{" "}
            <span className=" text-gray-600 font-bold mt-5"> &gt; Team</span>
          </p>
        </div>

        {/* Left Image and Right Four Images */}
        <div className="flex justify-between mb-8">
          {/* Left Image */}
          <div className="w-1/2 ml-5" data-aos="fade-right">
            <Image
              src="/hero/img3.png"
              alt="Main Image"
              width={600}
              height={530}
              className="object-cover"
            />
          </div>

          {/* Right Side Four Images */}
          <div className="w-1/2 grid grid-cols-2 gap-2 mr-10">
            <div data-aos="fade-left">
              <Image
                src="/hero/img4.png"
                alt="Small Image 1"
                width={350}
                height={250}
                className="object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <Image
                src="/hero/img5.png"
                alt="Small Image 2"
                width={350}
                height={250}
                className="object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <Image
                src="/hero/img6.png"
                alt="Small Image 3"
                width={350}
                height={250}
                className="object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <Image
                src="/hero/img7.png"
                alt="Small Image 4"
                width={350}
                height={250}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 bg-white">
          {/* Team Members */}
          {[
            { name: "Username", role: "Profession", img: "img12.jpg" },
            { name: "Username", role: "Profession", img: "img9.jpg" },
            { name: "Username", role: "Profession", img: "img7.jpg" },
            { name: "Username", role: "Profession", img: "img15.jpg" },
            { name: "Username", role: "Profession", img: "img11.jpg" },
            { name: "Username", role: "Profession", img: "img13.jpg" },
            { name: "Username", role: "Profession", img: "img14.jpg" },
            { name: "Username", role: "Profession", img: "img10.jpg" },
            { name: "Username", role: "Profession", img: "img8.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col items-center max-w-xs mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay each card's animation
            >
              <Image
                src={`/shoppage/${member.img}`}
                alt={member.name}
                width={200}
                height={200}
                className="shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 text-blue-500">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Trial */}
        <div className="text-center mt-32" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-bold text-gray-800">
            Start your 14 days free trial
          </h3>
          <p className="text-gray-500 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br />
            do met sent. RELIT official consequent.
          </p>
          <button className="bg-cyan-500 text-white px-6 py-3 mt-6 rounded-md">
            Try it for Free
          </button>
          <div className="flex justify-center gap-4 mt-6">
            <FaFacebook className="text-blue-600 text-2xl" />
            <FaTwitter className="text-blue-500 text-2xl" />
            <FaInstagram className="text-black text-2xl" />
            <FaLinkedin className="text-blue-600 text-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}
