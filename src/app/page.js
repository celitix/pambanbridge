import Image from "next/image";
import HeroSection from "@/app/components/hero";
import { FaClock, FaUserAlt } from "react-icons/fa";
import { PiBridgeFill } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import Link from "next/link";


export default function Home() {



  return (
  <>
  <HeroSection />

{/*=============== Travelogue Section =============== */}
 <section className="w-full py-16 px-6 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
        Travelogue : Pamban bridge , Rameswaram
      </h2>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
        The Pamban Bridge <Link href="https://en.wikipedia.org/wiki/Rameswaram" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">Rameswaram </Link> 
        is one of the oldest and famous Bridges in <Link href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">
        India</Link>. This marvellously engineered Pamban bridge has been a pride of India since 
        the time of the British. The significance of the Pamban Bridge is that it connects the 
        holy town of Rameswaram to the main land of India. Since the year 1914 this railway 
        bridge has been facilitating the Indian Railways. This can be quoted as one of the most 
        thrilling rail journeys across a railway bridge. The Pamban is India’s first sea bridge. 
        The bridge is 2065 m long. This bridge is worth an engineering wonder because of the 
        lift spans fitted in the bridge. These lift spans can raise the bridge and let ships pass. 
        The bridge stands proudly on the Indian ocean and let rails reach Rameswaram. The average 
        speed of the train is lowered while crossing the Pamban Bridge. It takes approximately 
        10-15 min to cross the bridge. Passengers can get an experience for life time while 
        crossing the serene blue water of the mighty Indian Ocean.
      </p>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-gray-200 shadow-sm py-10 rounded-md flex flex-col items-center">
          <FaClock size={48} className="text-teal-600 mb-4" />
          <p className="font-semibold text-lg text-gray-800">100 Years Of Life</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 shadow-sm py-10 rounded-md flex flex-col items-center">
          <FaUserAlt size={48} className="text-teal-600 mb-4" />
          <p className="font-semibold text-lg text-gray-800">Built In 1911</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 shadow-sm py-10 rounded-md flex flex-col items-center">
          <PiBridgeFill size={48} className="text-teal-600 mb-4" />
          <p className="font-semibold text-lg text-gray-800">289 Feet Long</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-200 shadow-sm py-10 rounded-md flex flex-col items-center">
          <MdBarChart size={48} className="text-teal-600 mb-4" />
          <p className="font-semibold text-lg text-gray-800">Inhere 145 Spans</p>
        </div>

      </div>
    </section>

  {/*============= Dual Image  Section ============= */}
  
  <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/dos1.jpg" 
              alt="Left Bridge"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Center Text with dotted bottom borders */}
        <div className="w-full md:w-1/3 text-center flex flex-col justify-center gap-3 px-4">
          <div className="mx-auto w-full sm:w-3/4 border-b border-dotted border-gray-300 pb-3">
            <p className="text-gray-700 text-base sm:text-lg font-medium">Thrilling Experience</p>
          </div>

          <div className="mx-auto w-full sm:w-3/4 border-b border-dotted border-gray-300 pb-3">
            <p className="text-gray-700 text-base sm:text-lg font-medium">Scherzer Rolling Lift Bridge</p>
          </div>

          <div className="mx-auto w-full sm:w-3/4 border-b border-dotted border-gray-300 pb-3">
            <p className="text-gray-700 text-base sm:text-lg font-medium">Surprising Strength</p>
          </div>

          <div className="mx-auto w-full sm:w-3/4 border-b border-dotted border-gray-300 pb-3">
            <p className="text-gray-700 text-base sm:text-lg font-medium">Surrounding Blue Waters</p>
          </div>

          <div className="mx-auto w-full sm:w-3/4 border-b border-dotted border-gray-300 pb-3">
            <p className="text-gray-700 text-base sm:text-lg font-medium">Scenic Beauty</p>
          </div>
        
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/dos2.jpg" 
              alt="Right Bridge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

{/*================ Overlay section =================*/}
  <section className="relative w-full h-[40vh] md:h-[30vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/hero2.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Glass Box */}
        <div className=" relative z-10 max-w-5xl bg-white/20 backdrop-blur-md text-white p-6 mx-4 md:p-10 rounded-[50px] border border-white/20 shadow-lg text-center">
{/* <div className="absolute left-0 inset-0  my-4 font-semibold text-red-800 text-[100px]">"</div> */}

          <p className="font-lato text-base md:text-xl font-semibold mb-3">
           In every walk with nature one receives far more than he seeks. Keep close to Nature’s heart and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </p>
        
        </div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>      


  {/*============= Left Border card Section ============= */}
   <section className="px-6 py-16 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
          Compulsory Sight
        </h2>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
          This train journey is not ordinary. The view from the train and the
          feeling of travelling over the{" "}
          <span className="text-teal-500 font-medium">Indian Ocean</span>{" "}
          cannot be described in words. This can only be felt. Some of the must
          visiting sights of Rameswaram are as below.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border-l-4 border-teal-400 pl-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Ramanathaswamy Temple
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Lord shiva is worshiped in Ramanathaswamy temple. This is an
            important Hindu pilgrimage in the country. This is one amongst twelve
            <Link href="https://en.wikipedia.org/wiki/Jyotirlinga" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors font-semibold"> jyotirlingas</Link>. The{" "}
            <Link href="https://en.wikipedia.org/wiki/Pandya_dynasty" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors font-semibold">Pandya dynasty</Link>{" "}
            contributed towards the development of temple. The most interesting
            part of temple is that its deity (lingam of shiva) was established by Lord Rama himself (Vishnu avatar).
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-teal-400 pl-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Dhanushkodi
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Dhanushkodi is a beautiful abandoned town in the Pamban Island.
            While on a trip to Rameswaram or the Pamban Island visiting
           <Link href="https://en.wikipedia.org/wiki/Dhanushkodi" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors"> Dhanushkodi</Link> is a must. In the year 1964 the town was destroyed in
            the Rameswaram cyclone. Lord Rama built a bridge to connect Indian
            and Srilanka. One end
            of the bridge was marked by a bow of lord Rama.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-l-4 border-teal-400 pl-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Agnitheertham
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            One of the most visited tirtham of Rameswaram for a holy bath is the
            Agniteertham. The belief is so that a holy dip in the sea beach can
            bless childless couples with a baby. Offering prayers to lord
           <Link href="https://en.wikipedia.org/wiki/Shiva" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors"> shiva</Link> through agniteertham is an age old practice. Thousands of devotees come here
            to offer prayers to lord shiva.
          </p>
        </div>
      </div>
    </section>

  </>
  );
}
