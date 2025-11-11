import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';
import GlowingBox from '../../components/GlowingBox';

export default function CodeOfConduct() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-8">
          <GlowingBox
            className="p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            data-aos="fade-up"
          >
            <div className="space-y-8 text-[#2e2a30]">
              {/* Introduction */}
              <div>
                <p className="text-lg leading-relaxed">
                  The National Workshop on Cryptology 2025 is dedicated to providing a harassment-free,
                  inclusive, and professional environment for all participants regardless of gender, gender identity
                  and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity,
                  religion, or technology choices.
                </p>
              </div>

              {/* Expected Behavior */}
              <div className="bg-white/20 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl font-bold mb-4">Expected Behavior</h2>
                <ul className="space-y-3 text-[#2e2a30]/90">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Be respectful and considerate of all participants, speakers, and organizers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Engage in constructive dialogue and welcome diverse perspectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Give credit where credit is due and respect intellectual property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Be mindful of your surroundings and fellow participants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Alert organizers if you notice a dangerous situation or someone in distress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Follow all venue rules and regulations</span>
                  </li>
                </ul>
              </div>

              {/* Unacceptable Behavior */}
              <div className="bg-white/20 rounded-2xl p-6 border-l-4 border-red-500">
                <h2 className="text-2xl font-bold mb-4">Unacceptable Behavior</h2>
                <ul className="space-y-3 text-[#2e2a30]/90">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Harassment, intimidation, or discrimination in any form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Offensive verbal or written comments related to personal characteristics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Inappropriate physical contact or unwelcome attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Deliberate intimidation, stalking, or following</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Disruption of talks, presentations, or other workshop activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Advocating for or encouraging any of the above behaviors</span>
                  </li>
                </ul>
              </div>

              {/* Academic Integrity */}
              <div className="bg-white/20 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">Academic & Professional Integrity</h2>
                <ul className="space-y-3 text-[#2e2a30]/90">
                  <li className="flex items-start gap-3">
                    <span className="font-bold mr-2">•</span>
                    <span>Maintain the highest standards of academic and professional integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold mr-2">•</span>
                    <span>Do not share, distribute, or record presentations without explicit permission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold mr-2">•</span>
                    <span>Respect confidential or preliminary research shared during the workshop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold mr-2">•</span>
                    <span>Properly attribute ideas and contributions in discussions</span>
                  </li>
                </ul>
              </div>

              {/* Consequences */}
              <div className="bg-[#2e2a30]/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">Consequences of Unacceptable Behavior</h2>
                <p className="text-[#2e2a30]/90 leading-relaxed mb-3">
                  Participants asked to stop any unacceptable behavior are expected to comply immediately.
                  If a participant engages in unacceptable behavior, the workshop organizers may take any action
                  they deem appropriate, including:
                </p>
                <ul className="space-y-2 text-[#2e2a30]/90 ml-6">
                  <li className="list-disc">Warning the offender</li>
                  <li className="list-disc">Expulsion from the workshop without refund</li>
                  <li className="list-disc">Reporting to appropriate authorities if necessary</li>
                  <li className="list-disc">Banning from future events organized by IIT Bhilai or CRSI</li>
                </ul>
              </div>

              {/* Reporting */}
              <div className="bg-white/20 rounded-2xl p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold mb-4">Reporting & Contact</h2>
                <p className="text-[#2e2a30]/90 leading-relaxed mb-4">
                  If you experience or witness unacceptable behavior, or have any concerns, please report it
                  immediately to the workshop organizers. All reports will be handled with discretion and confidentiality.
                </p>
                <div className="space-y-2 text-[#2e2a30]/90">
                  <p className="font-semibold">Workshop Organizers:</p>
                  <p>Email: </p>
                  <p>Phone: </p>
                </div>
              </div>

              {/* Agreement */}
              <div className="text-center pt-6 border-t-2 border-[#2e2a30]/20">
                <p className="text-lg font-semibold text-[#2e2a30]">
                  By registering for this workshop, you agree to abide by this Code of Conduct.
                </p>
              </div>
            </div>
          </GlowingBox>
        </div>
      </main>
      <Footer />
    </div>
  );
}