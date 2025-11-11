import React from 'react';
import Footer from '../../components/Footer';
import GlowingBox from '../../components/GlowingBox';

export default function Venue(){
  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="mt-8 max-w-4xl mx-auto">
          <GlowingBox className="p-8 md:p-12">
            <p className="text-lg text-[#2e2a30]/80 leading-relaxed text-justify mb-8">
              The National Workshop on Cryptology (NWC 2025) will be graciously hosted at the state-of-the-art Lecture Hall Complex within the campus of the Indian Institute of Technology Bhilai, situated in Kutelabhata, Bhilai, Chhattisgarh.
            </p>
            <h3 className="text-2xl font-bold text-[#2e2a30] mb-4">Getting Here</h3>
            <ul className="space-y-4 text-[#2e2a30]/80">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div><strong>By Air:</strong> The nearest airport is Swami Vivekananda Airport, Raipur (RPR), located approximately 45 km from the campus.</div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <div><strong>By Rail:</strong> The closest major railway station is Durg Junction (DURG), which is about 10 km away.</div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#7c3aed] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
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
      <Footer />
    </div>
  )
}