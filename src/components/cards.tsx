import React from 'react';
import Image from 'next/image';

const CardSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Featured Cards</h2>
      </div>

      {/* Card Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {/* Card 1 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px] shadow-lg">
            <Image
              src="/editor/img6.png"
              alt="Card Image 1"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center text-black">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$26.48</p>
              <p className="text-dark-gray line-through">$39.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img7.png"
              alt="Card Image 2"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$109.99</p>
              <p className="text-dark-gray line-through">$149.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img8.png"
              alt="Card Image 3"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$89.99</p>
              <p className="text-dark-gray line-through">$119.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img9.png"
              alt="Card Image 4"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$119.99</p>
              <p className="text-dark-gray line-through">$159.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img11.png"
              alt="Card Image 5"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$119.99</p>
              <p className="text-dark-gray line-through">$149.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
                 {/* Card 6 */}
            <div className="flex justify-center">
            <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img10.png"
              alt="Card Image 5"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$119.99</p>
              <p className="text-dark-gray">$149.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img12.png"
              alt="Card Image 5"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$119.99</p>
              <p className="text-dark-gray line-through">$149.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="flex justify-center">
          <div className="w-[239px] h-auto bg-white p-[25px] pb-[35px]">
            <Image
              src="/editor/img13.png"
              alt="Card Image 5"
              width={239}
              height={188}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">Graphic Design</h3>
            <h4 className="text-gray-600 mt-2 text-center">English Department</h4>
            {/* Prices */}
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-light-gray">$119.99</p>
              <p className="text-dark-gray line-through">$149.99</p>
            </div>
            {/* Circles */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
