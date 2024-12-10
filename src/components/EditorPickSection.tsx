import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 px-4 md:px-8 lg:px-16">
      <div className="text-center pt-16">
        <h2 className="text-xl mb-2 font-bold text-black md:text-3xl">
          EDITOR PICK
        </h2>
        <p className="text-gray-400 text-2xl md:text-md">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="py-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-48">
        <div className="relative col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2">
          <Image
            src="/editor/img3.png"
            alt="Men"
            width={510}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-16">
            <p className="font-bold text-black">MEN</p>
          </div>
        </div>

        <div className="relative col-span-1 md:col-span-1 lg:row-span-2">
          <Image
            src="/editor/img1.png"
            alt="Women"
            width={240}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-8">
            <p className="font-bold text-black">WOMEN</p>
          </div>
        </div>

        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/editor/img2.png"
            alt="Accessories"
            width={240}
            height={230}
            className="rounded-lg h-full"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-6">
            <p className="font-bold text-black">ACCESSORIES</p>
          </div>
        </div>

        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/editor/img4.png"
            alt="Kids"
            width={240}
            height={230}
            className="rounded-lg h-full"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-10">
            <p className="font-bold text-black">KIDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;