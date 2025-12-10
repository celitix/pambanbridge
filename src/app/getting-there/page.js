"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GettingThere = () => {

 const data = [
    { km: "12.2 km", text: "Rameswaram To Pamban" },
    { km: "30 km", text: "Dhanushkodi To Pamban" },
    { km: "7 km", text: "Mandapam To Pamban" },
    { km: "168 km", text: "Madurai To Pamban" },
  ];

   const leftCards = [
    {
      title: "Air Travel",
      desc: "Madurai is the nearest Airport. It is approximately 149 kms from the city however Tuticorin is another air way. From the airport, buses, cabs and taxis are available for the rest of the journey.",
      icon: "/assets/plane.png",
    },
    {
      title: "Bus Travel",
      desc: "This part of India is well connected through Buses. State bus services and private buses both ply at regular intervals for Pamban and Rameswaram. Rameswaram Pamban Bridge also has a road bridge for buses and vehicles running parallel to the rail bridge.",
      icon: "/assets/bus.png",
    },
  ];

  const rightCards = [
    {
      title: "Train Travel",
      desc: "A travel through Train is a lifetime experience for Pamban. Rameswaram railway bridge facilitates the train journey. Rameswaram railway station is well connected with all major cities. Trains are available at a decent frequency.",
      icon: "/assets/trains.png",
    },
    {
      title: "Road Travel",
      desc: "Private vehicles, cars and other vehicles can easily be driven through Rameswaram Pamban Bridge. Roads are well connected and maintained for a happy road trip. There are various routes to reach Rameswaram by road.",
      icon: "/assets/road.png",
    },
  ];

  const fadeLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  };

  return (
   <>
    {/*============= Welcome section ============= */}
    <section className="bg-white py-16 px-6 overflow-hidden max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mt-12">
        Welcome to Pamban Bridge
      </h2>
      <p className="text-gray-600 text-center mt-6">
      If <Link href="https://en.wikipedia.org/wiki/Rameswaram" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">Rameswaram visit</Link> is in your to-do list you have to cross the Rameswaram Pamban Bridge from mainland India to Pamban island. Mandapam and Pamban are the two destinations connected via the Rameswaram Railway Bridge. The Train Bridge and the Road bridge both run parallel to each other. The Indian state of Tamilnadu has one of the important jyotirlingas amongst the other 12 jyotirlingas. These are places of worship where lord shiva is worshiped. It is so believed that the lingam of shiva at the Rameswaram temple was established by Lord Rama himself. In the Ramayan era, these are believed to be constructed. Through this masterpiece, Pamban Bridge one gets a gate to visit a number of places both for religious belief and scenic beauty. The destinations are well connected through various modes of transport. The department of tourism has taken care of road ways and railways connectivity. Air routes are also worked on. This part of the country has an unmatched feel of incredible India.
      </p>
    </section>
   
    {/*============= Travel Cards Section ============= */}
     <section className="bg-white py-8 px-6 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        Travel Guide
      </h2>

      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Center vertical gradient line (only on large screens) */}
        <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full">
          <div className="w-2 h-full rounded-xl bg-gradient-to-b from-teal-400 via-cyan-500 to-cyan-600 shadow" />
        </div>

        {/* Left side (slides in from left on large screens) */}
        <div className="flex flex-col gap-12">
          {leftCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              {/* circular icon */}
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0 ring-4 ring-gray-100">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>

              {/* arrow pointing to center (visible only on large screens) */}
              <div className="hidden lg:flex absolute right-[-12px] top-1/2 transform -translate-y-1/2">
                {/* right-pointing arrow */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" stroke="#06d474ff" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M13 6l6 6-6 6" stroke="#06d474ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side (slides in from right on large screens) */}
        <div className="flex flex-col gap-12">
          {rightCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row-reverse items-center sm:items-start gap-6"
            >
              {/* circular icon */}
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0 ring-4 ring-gray-100">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="text-center sm:text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            
              </div>

              {/* arrow pointing to center (visible only on large screens) */}
              <div className="hidden lg:flex absolute left-[-12px] top-1/2 transform -translate-y-1/2">
                {/* left-pointing arrow */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 12H5" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M11 18l-6-6 6-6" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Strip section */}
      <section className="w-full bg-[#dcdcdc] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center py-6 relative"
          >
            {/* Vertical dashed divider (only on desktop & except last box) */}
            {index !== data.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-5/6 border-r-2 border-dashed  border-gray-400"></div>
            )}

            <h3 className="text-white text-3xl font-semibold mb-2">
              {item.km}
            </h3>

            <p className="text-gray-500 text-lg font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/*============= The Thrill Of The Trip ============= */}
    <section className="bg-white py-8 px-6 overflow-hidden max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 my-6">
        Welcome to Pamban Bridge
      </h2>
      <p className="text-gray-600 text-center my-6">
     Pamban Rameswaram visit might sound like a regular visit to a tourist destination. But people who have visited the southern heaven of the country have a different opinion. They are mesmerised by the thrill of actually crossing over the Indian Ocean. When the train crosses through the Rameswaram railway bridge the speed of the train is slowed down to average. This gives a golden opportunity for the passengers to feel the calmness of the Ocean and the beauty of the serene water. Blue water flowing right beneath the train is a scene hard to describe in words. Plus points to this trip is, it opens gate to many a destinations which have religious importance. They have been cited in the holy epic, Ramayana. Rameswaram is an important Jyotirlinga, where lord Shiva is worshiped. The tourism industry has its good share from this bridge and connecting places. Rameswaram lies in the Indian state of Tamilnadu. Located at the Pamban Island it is connected to the mainland of India through the Pamban Bridge. Originally a train bridge, it now has a road bridge running parallel to the rail bridge.
      </p>
    </section>
   
   </>
  )
}

export default GettingThere