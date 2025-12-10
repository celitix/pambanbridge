import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutPambanBridge = () => {

 const tableData = [
    { label: 'Name of the Bridge', value: 'Annai Indira Gandhi Bridge' },
    { label: 'Commonly referred Names', value: 'Indhira Gandhi Bridge Pamban Bridge Pamban Road Bridge' },
    { label: 'Opened on', value: '2nd October 1988' },
    { label: 'Structural Design', value: 'Arch Bridge' },
    { label: 'Length Of Pamban Bridge', value: '2,345 KM' },
    { label: 'Lane', value: 'Two Lane' },
    { label: 'Region', value: 'Over The Palk Strait' },
    { label: 'Location', value: '28°24\'16.7"N 79.188922°E' },
    { label: 'Number Of Pillars (Piers) Holding Bridge', value: '79 Pillars' },
    { label: 'Number Of Pillars (Piers) Stands Inside Sea', value: '64 Pillars' },
    { label: 'Maximum Height Of Bridge From Sea Level', value: '17.68 M' },
    { label: 'Connecting Places', value: 'Mandapam & Pamban' },
  ];

  return (
  <>
  {/*============== About Pamban Bridge ============= */}
   <section className="w-full py-6">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-teal-600 mt-22">
        About Pamban Bridge
      </h2>

      <p className="text-gray-600 mt-4 max-w-5xl mx-auto">
       Pamban Bridge India or the Rameswaram Bridge as it is popularly known is a railway bridge that connects the main land of India with the Pamban Island. People who want to visit the holy pilgrimage centre of Rameswaram have to cross this bridge through train. The under lying blue and clear Indian ocean sets the bridge apart from rest of the bridges in India. Pamban Bridge Rameswaram is an engineering master piece built in the year 1914 (24 February). This was India’s longest sea bridge until the <Link href="https://en.wikipedia.org/wiki/Bandra%E2%80%93Worli_Sea_Link" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">Bandra-worli sea link</Link> was opened in year 2010.
      </p>

      <div className="mt-6">
        <Image
          src="/assets/about1.jpg"
          alt="Pamban Bridge"
          width={800}
          height={600}
          className="mx-auto h-80 rounded-lg"
        />
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-teal-600 my-4">
        History and technical speciality 
      </h3>

      <p className="text-gray-600 mt-2 max-w-5xl mx-auto">
       In the year 1870 the British suggested a plan to connect the mainland with the island of Pamban. The whole idea was to enhance trade with cylone. However the actual construction started in the year 1911 and completed by February 1914. Recently in 1988 the road bridge was opened. The Pamban Bridge Rameswaram despite being a conventional one that rests on concrete pillars also has double leaf bascule section. They are special Scherzer rolling type lifting spans.
      </p>

     <h3 className="text-xl md:text-2xl font-semibold text-teal-600 my-4">
        Scenic Beauty
      </h3>

      <p className="text-gray-600 mt-2 max-w-5xl mx-auto">
       The scenic beauty of the Pamban is beyond description. The average speed of train is lowered while crossing on the Rameswaram Bridge so that passengers get a chance to enjoy the scenic beauty. The blue water of the mighty Indian Ocean is so serene to watch. The train passes over the Indian Ocean. The Indian Ocean in itself needs no introduction. It is huge and majestic. The aura of the Indian Ocean and its serene water is supreme.
      </p>
    </div>
  </section>

  {/*============== More to know ============= */}
  <section className="w-full py-6">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-teal-600">
        More to know
      </h2>

      <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
        Pamban is said to have the corrosion and cyclone prone location. That’s how the
        maintenance of the Pamban bridge is a challenge well accepted by the authorities.
      </p>
    </div>
  </section>

    {/*============= Table Section ============= */}
   <div className=" bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-teal-500 text-white py-4 px-6 mb-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-light">Pamban Bridge</h1>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {tableData.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 md:px-6 text-teal-600 font-medium text-sm md:text-base w-1/2 md:w-2/5 border-r border-gray-300">
                      {row.label}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-gray-700 text-sm md:text-base w-1/2 md:w-3/5">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
      </div>
    </div>
    
    {/*============ center image section ========== */}
    <section className="w-full py-14">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-teal-600">
      Planning & Construction
    </h2>

    <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
      Pamban is said to have the corrosion and cyclone prone location. That’s how the
      maintenance of the Pamban bridge is a challenge well accepted by the authorities.
    </p>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
      
      {/* LEFT TEXT */}
      <div className="text-left text-sm text-gray-600 leading-relaxed">
        <p>
          This was an initiative of the British in India to connect the main land of
          India with the Pamban island. They were wise in their decision in order to
          connect the 2 geographical destination, to enhance trade. The british in India developed interest in trade with
          <Link href="https://en.wikipedia.org/wiki/Ceylon_(disambiguation)" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors"> Ceylon</Link>. Ceylon now known as Sri lanka is
          separated from India by a narrow stretch of water called the Palk strait.
        </p>

        <p className="mt-4">
          The construction work started in the year 1911 and completed in 1914. Being
          located at a cyclone and rust prone area the planning and construction of
          this Pamban Bridge Rameswaram took time and expertise.
        </p>
      </div>

      {/* CENTER SINGLE IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-80 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/about2.jpg" 
            alt="Planning Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="text-left text-sm text-gray-600 leading-relaxed">
        <p>
          The engineering of the Pamban Bridge Rameswaram is so wonderful that it has
          double leaf bascule section in the bridge. Rest part of the bridge rests on
          the concrete design like a conventional rail bridge. The bascule section of
          the bridge allows it to raise and let ships pass. These are operated by
          manual lever. The design of the bridge is absolutely praise worthy. The Planning of the bridge took approximately 4 years.
        </p>

        <p className="mt-4">
          In the year 1988 a road bridge parallel to the rail bridge has been opened
          for vehicles to cross the Indian Ocean and reach the island of Pamban. This
          is truly an amazing part of the country to take back memories for a lifetime.
        </p>
      </div>

    </div>
  </div>
</section>
    
  </>
  )
}

export default AboutPambanBridge