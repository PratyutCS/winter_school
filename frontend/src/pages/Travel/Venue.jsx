import React from 'react';
import GlowingBox from '../../components/GlowingBox';
import { Plane, Train, Car } from 'lucide-react'; // Added imports

export default function Venue(){
  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="mt-8 max-w-4xl mx-auto">
          <GlowingBox className="p-8 md:p-12">
            <p className="text-lg text-[#2e2a30]/80 leading-relaxed text-justify mb-8">
              The Crypto Winter School 2025 will be graciously hosted at the state-of-the-art Lecture Hall Complex within the campus of the Indian Institute of Technology Bhilai, situated in Kutelabhata, Bhilai, Chhattisgarh.
            </p>
            <h3 className="text-2xl font-bold text-[#2e2a30] mb-4">Getting Here</h3>
            <ul className="space-y-4 text-[#2e2a30]/80">
              <li className="flex items-start">
                <Plane className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" />
                <div><strong>By Air:</strong> The nearest airport is Swami Vivekananda Airport, Raipur (RPR), located approximately 45 km from the campus.</div>
              </li>
              <li className="flex items-start">
                <Train className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" />
                <div><strong>By Rail:</strong> The closest major railway station is Durg Junction (DURG), which is about 10 km away.</div>
              </li>
              <li className="flex items-start">
                <Car className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" />
                <div><strong>By Road:</strong> The campus is well-connected by road from both Durg and Raipur. Regular taxi and bus services are readily available for a convenient commute.</div>
              </li>
            </ul>
          </GlowingBox>

          <GlowingBox className="mt-8 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.432579926465!2d81.318887!3d21.2470689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db65364103d5%3A0x9ca0815dc09dac5f!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1678886333148!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </GlowingBox>
        </div>
      </main>
    </div>
  )
}