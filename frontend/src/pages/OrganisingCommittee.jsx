import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';
import dhimanSaha from '../../assets/speakers/ds.jpg';

export default function OrganisingCommittee() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  const labMembers = [
    'Aditya Yadav',
    'Anirudh Jaiswal',
    'Isha Goel',
    'Jhelum Dhar',
    'Krishna Saha',
    'Madhurima Das',
    'Prathamesh Ram',
    'Pratyut',
    'Soumen Jana',
    'Tilesh Srivastav',
    'Vipin Kumar',
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <GlowingBox className="mt-8 mb-16 p-4 sm:p-6 md:p-8" data-aos="fade-up">
            {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Organising Committee</h1> */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <img
                  src={dhimanSaha}
                  alt="Dr. Dhiman Saha"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
                <h2 className="text-xl font-semibold mt-4">Dr. Dhiman Saha</h2>
                <p className="text-gray-600">Assistant Professor, CSE, IIT Bhilai</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The workshop is being organized by the de.ci.phe.red Lab at IIT Bhilai, under the leadership of Dr.
                  Dhiman Saha. The research lab, established in 2019, is a vibrant crypto group working on core Cryptography, Post-quantum Cryptography, Quantum Cryptanalysis, Fault-Injection Attack Analsysis, Lightweight Cryptography, and Embedded Device
                  Security.
                </p>
              </div>
            </div>
          </GlowingBox>

          <GlowingBox className="mt-8 p-4 sm:p-6 md:p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Members of Organising Committee</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {labMembers.map((member, index) => (
                <div key={index} className="text-center p-4 border rounded-lg shadow-md bg-gray-50">
                  <p className="font-semibold">{member}</p>
                </div>
              ))}
            </div>
          </GlowingBox>
        </div>
      </main>
    </div>
  );
}
