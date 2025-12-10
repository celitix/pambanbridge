import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Dummy Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-teal-600">Pamban Bridge</div></Link>
          <p className="text-gray-300 text-base">
           Experience the majestic Pamban Bridge, India’s first sea bridge, offering breathtaking ocean views and a testament to engineering brilliance.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/indias-first-sea-bridge-pamban-railway-bridge" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-teal-500 transition leading-snug">
              India’s First Sea Bridge- Pamban Bridge
              </p>
            </Link>

            <Link href="/blog/pamban-bridge-worlds-famous-bridge" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-teal-500 transition leading-snug">
             Pamban Bridge – The World’s Most Famous Bridge
              </p>
            </Link>

          
         
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-teal-500 transition">Home</Link></li>
            <li><Link href="/about-pamban-bridge" className="hover:text-teal-500 transition">About</Link></li>
            <li><Link href="/destinations" className="hover:text-teal-500 transition">Destinations</Link></li>
            <li><Link href="/gallery" className="hover:text-teal-500 transition">Gallery</Link></li>
            <li><Link href="/getting-there" className="hover:text-teal-500 transition">Getting There</Link></li>
            <li><Link href="/blog" className="hover:text-teal-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63001.74231363807!2d79.205319!3d9.279194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e5f0cb73ba15%3A0xe895532ade4945a6!2sPamban%20Beach%20Rameswaram!5e0!3m2!1sen!2sus!4v1763122681828!5m2!1sen!2sus" 
           
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
