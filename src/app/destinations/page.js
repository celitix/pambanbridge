import React from 'react'
import Image from 'next/image'

const Destinationspage = () => {

 const destinations = [
    {
      id: 1,
      image: '/assets/desti1.jpg',
      title: 'Dhanushkodi',
      description: 'Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is situated to the South-East of Pamban and is about 18 miles west of Talaimannar in Sri Lanka.',
      highlights: ['Tamil Nadu', 'Talaimannar']
    },
    {
      id: 2,
      image: '/assets/desti2.jpg',
      title: 'Ramanathaswamy Temple',
      description: 'Ramanathaswamy Temple is a Hindu Temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlingas temples. It is one of the 274 Paadal Petra Sthalams.',
      highlights: []
    },
    {
      id: 3,
      image: '/assets/desti3.jpg',
      title: 'Agni Tirtham',
      description: 'Agni Tirtham is one of the Tirthas of Rameswaram, Tamil Nadu, India. The beach east of Ramanathaswamy Temple is known by this name. This Tirtham is one of the most visited Tirthams of Rameswaram for a holy bath.',
      highlights: []
    },
    {
      id: 4,
      image: '/assets/desti4.jpg',
      title: 'Ariyaman Beach',
      description: 'Ariyaman beach Rameswaram is a beautiful beach. This Tamilnadu Bridge lets you to a gate way of number of beautiful places. It is a very clean beach. About 150 metres wide and stretched to a length of 2 km the water of the Ariyaman beach is crystal clear. People enjoy a bath in the beach.',
      highlights: []
    },
    {
      id: 5,
      image: '/assets/desti5.jpg',
      title: 'Kothandaraswamy Temple',
      description: '13 kilometres from Rameswaram this is a temple dedicated to lord Rama. At the time of the cyclone in the year 1964 that washed away Dhanushkodi, the Kothandaraswamy temple remained safe. Temple is surrounded by sea and hence attracts tourists. It\'s a serene visiting place.',
      highlights: []
    },
    {
      id: 6,
      image: '/assets/desti6.jpg',
      title: 'Water Bird Sanctuary',
      description: 'Bird watchers and nature lovers will have a great time visiting the Water Bird Sanctuary in Rameswaram. Between the months of October and January numerous birds fly to this sanctuary. Migratory birds fly to this sanctuary near the Ramanathaswamy temple. It\'s a treat to soul for nature lovers.',
      highlights: []
    },
    {
      id: 7,
      image: '/assets/desti7.jpg',
      title: 'Gandhamadhana Parvatam',
      description: 'Tallest peak on the Pamban island is the Gandhamadhana Parvatam. It lies on the famous palk strait between main land Indian and srilanka. An approximate distance of 3 km from Rameswaram this peak is a tourist attraction. This parvat has its history linked to the Ramayana.',
      highlights: []
    },
    {
      id: 8,
      image: '/assets/desti8.jpg',
      title: 'Jada tirtham',
      description: 'Like the Agni tirtham the Jada tirtham is also an important pilgrim. This is a famous water tank surrounded by trees on all the sides. The Jada tirtham attracts many a tourists every year. Lord Rama washed his hairs here before worshiping shiva and hence this is called Jada tirtham.',
      highlights: []
    },
    {
      id: 9,
      image: '/assets/desti9.jpg',
      title: 'Sri Nambu Nayaki Temple',
      description: 'Visiting hours for the temple is 6 am to 11 am and 4:30 pm to 8:30 pm. Sri Nambu Nayaki temple is located at Dhanushkodi. The famous Pamban Tamilnadu Bridge lets you visit this age old temple. It is believed that the tanks around this temple can heal many diseases and hence are important.',
      highlights: []
    }
  ];

  return (
    <>
      {/*============== visit ============= */}
  <section className="w-full py-6">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-teal-600 mt-20">
        Your Visit To An Amazing Land
      </h2>

      <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
       This part of India is sure to take your heart away. The serene ocean and the Ramanathaswamy Temple together make it an ideal place to spend some of your most beautiful days in life.
      </p>
    </div>
  </section>
    
   
    {/*=============== Ovrlay section =============== */}
     <section className="relative w-full h-[250px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/hero2.jpg" 
        alt="Background"
        fill
        className="object-cover brightness-[0.35]"
        priority
      />

      {/* Glass Border Box */}
      <div className="relative border border-white/50 px-8 py-6 sm:px-12 sm:py-8 md:px-20 md:py-10 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-20 text-white font-semibold text-lg sm:text-xl md:text-2xl">

          <span>Explore</span>
          <span className="text-2xl">|</span>

          <span>Dream</span>
          <span className="text-2xl">|</span>

          <span>Adventure</span>
          <span className="">|</span>

          <span>Discover</span>

        </div>
      </div>
    </section>


  {/*================ Cards Section ================ */}
  <div className=" bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-teal-400"
            >
     <div className="relative h-48 w-full overflow-hidden rounded-lg group p-2">
  <Image
    src={destination.image}
    alt={destination.title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-110"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
              
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {destination.description.split(' ').map((word, index) => {
                    const isHighlight = destination.highlights.some(h => word.includes(h));
                    return isHighlight ? (
                      <span key={index} className="text-blue-600 font-medium">{word} </span>
                    ) : (
                      <span key={index}>{word} </span>
                    );
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Destinationspage