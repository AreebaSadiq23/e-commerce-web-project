  import Image from "next/image";
  import {
    FaCheck,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";
  import Navbar from "../navbar";

  const PricingSection: React.FC = () => {
    return (
      <>
      <Navbar/>
      <div className="bg-gray-50 py-20 px-6 max-w-screen-2xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center">
          <h3 className="text-1xl font-bold text-gray-500">PRICING</h3>
          <h2 className="text-5xl font-bold text-gray-800 mt-4">
            Simple Pricing
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-5">Home <span className="text-gray-500">&gt; Pricing</span></h3>
          <h3 className="font-bold text-gray-800 mt-24 text-3xl">Pricing</h3>
          <p className="text-gray-500 mt-4">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <span className="text-gray-600">Monthly</span>
            <button className="bg-gray-200 px-4 py-1 text-xs text-gray-700 rounded-full font-medium">
              save 25%
            </button>
            <span className="text-gray-600">Yearly</span>
            <button className="bg-cyan-200 px-4 py-1 text-xs text-cyan-500 font-bold rounded-full">
              Save 25%
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/5 h-[30rem] border border-blue-300">
      <h4 className="text-center text-2xl font-bold text-gray-800 mt-4">Free</h4>
      <p className="text-center text-gray-600 mt-7 font-semibold">
        Organize across all <br/>apps by hand
      </p>
      <p className="text-center text-blue-500 text-2xl font-bold mt-4">
        $0 <span className="text-sm text-blue-400">/ per month</span>
      </p>
      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          1GB Cloud storage
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Email and community support
        </li>
      </ul>
      <button className="bg-gray-800 text-white w-full mt-6 py-2">
        Try for Free
      </button>
    </div>

    {/* Card 2 - Center Card (Dark Color) */}
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 transform scale-105 w-full md:w-1/5 h-[33rem] border border-gray-300">
      <h4 className="text-center text-3xl font-bold mt-10">Standard</h4>
      <p className="text-center mt-10">Organize across all <br/>apps by hand</p>
      <p className="text-center text-2xl font-bold mt-4 text-blue-500">
        $20 <span className="text-sm text-blue-300">/per month</span>
      </p>
      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          5GB Cloud storage
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Priority email support
        </li>
      </ul>
      <button className="bg-blue-500 text-white w-full mt-6 py-2">
        Try for Free
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/5 h-[30rem] border border-blue-300">
      <h4 className="text-center text-2xl font-bold text-gray-800 mt-6">
        Premium
      </h4>
      <p className="text-center font-semibold text-gray-600 mt-4">
        Organize across all<br/> apps by hand
      </p>
      <p className="text-center text-blue-500 text-2xl font-bold mt-4">
        $50 <span className="text-sm text-blue-400">/month</span>
      </p>
      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          Unlimited product updates
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          10GB Cloud storage
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-600 mr-2" />
          24/7 customer support
        </li>
      </ul>
      <button className="bg-blue-500 text-white w-full mt-6 py-2">
        Try for Free
      </button>
    </div>
  </div>

        {/* Trusted Logos */}
        <div className="text-center mt-32">
          <h3 className="text-gray-800 text-xl font-bold">
            Trusted By Over 4000 Big Companies
          </h3>
          <div className="flex justify-center items-center mt-6 gap-24">
            <div className="flex justify-center items-center">
              <Image
                src="/logo/1.png"
                alt="Company Logo 1"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/logo/2.png"
                alt="Company Logo 2"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/logo/3.png"
                alt="Company Logo 3"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/logo/4.png"
                alt="Company Logo 4"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/logo/5.png"
                alt="Company Logo 5"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/logo/6.png"
                alt="Company Logo 6"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-28">
          <h3 className="text-center text-4xl font-bold text-black">
            Pricing FAQs
          </h3>
          <p className="text-center text-gray-500 mt-4 text-md">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics.
          </p>

          {/* Text layout with left and right sides */}
          <div className="flex justify-between mt-10">
            {/* Left side with 3 repetitions */}
            <div className="w-1/2 text-left ml-20">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
            <span className="text-blue-500 font-semibold text-3xl">&gt; </span>The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600 mb-6">
                Met minim Mollie non desert Alamo est sit cliquey. <br/>Dolor do met 
                sent. RELIT official consequent door ENIM. <br/>RELIT
                Mollie. Excitation venial consequent sent<br/> nostrum met.
              </p>

              <h2 className="text-lg font-semibold mb-3 text-gray-800">
              <span className="text-blue-500 font-semibold text-2xl">&gt; </span> The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600 mb-6">
              Met minim Mollie non desert Alamo est sit cliquey. <br/>Dolor do met 
                sent. RELIT official consequent door ENIM. <br/>RELIT
                Mollie. Excitation venial consequent sent<br/> nostrum met.
              </p>

              <h2 className="text-lg font-semibold mb-3 text-gray-800">
              <span className="text-blue-500 font-semibold text-2xl">&gt; </span> The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600">
              Met minim Mollie non desert Alamo est sit cliquey. <br/>Dolor do met 
                sent. RELIT official consequent door ENIM. <br/>RELIT
                Mollie. Excitation venial consequent sent<br/> nostrum met.
              </p>
            </div>

            {/* Right side with 3 repetitions */}
            <div className="w-1/2 text-right mr-20">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
              <span className="text-blue-500 font-semibold text-2xl">&gt; </span>The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600 mb-6 text-md mt-5">
                Met minim Mollie non desert Alamo est sit cliquey <br/>Dolor do met sent. RELIT official
                consequent door <br/> Mollie.Excitation venial .veniel sent sit nostrum met.
              </p>

              <h2 className="text-lg font-semibold mb-3 text-gray-800">
              <span className="text-blue-500 font-semibold text-2xl">&gt; </span>   The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600 mb-6 mt-5">
              Met minim Mollie non desert Alamo est sit cliquey <br/>Dolor do met sent. RELIT official
              consequent door <br/> Mollie.Excitation venial .veniel sent sit nostrum met.
              </p>

              <h2 className="text-lg font-semibold mb-3 text-gray-800">
              <span className="text-blue-500 font-semibold text-2xl">&gt; </span> The quick fox jumps over the lazy dog.
              </h2>
              <p className="text-gray-600 mt-5">
              Met minim Mollie non desert Alamo est sit cliquey <br/>Dolor do met sent. RELIT official
              consequent door <br/> Mollie.Excitation venial .veniel sent sit nostrum met.
              </p>
            </div>
          </div>
          <p className="text-center mt-10 font-semibold text-lg text-gray-500">
            Have not got your answer? Contact our support
          </p>

          {/* Free Trial */}
          <div className="text-center mt-32">
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
        </div>
      </div>
      </>
    );
  };

  export default PricingSection;
