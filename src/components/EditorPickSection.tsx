import React from 'react';
import Image from 'next/image';

const EditorPickSection = () => {
  return (
    <div className="bg-gray-100 py-20 max-w-screen-2xl mx-auto">
      {/* Editor's Pick Text */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Editor&apos;s Pick</h2>
        <p className="text-xl text-gray-600 mt-4">Problem trying to resolve the conflict between</p>
      </div>

      {/* Image Grid: 4 images side by side */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4">
      <div className="flex justify-center">
          <Image
            src="/editor/img3.png"
            alt="Featured Image 3"
            width={150} 
            height={150}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/editor/img1.png"
            alt="Featured Image 1"
            width={150}
            height={150}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/editor/img2.png"
            alt="Featured Image 2"
            width={150}
            height={150}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex justify-center">
          <Image
            src="/editor/img4.png"
            alt="Featured Image 4"
            width={150}
            height={150}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPickSection;
