import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../../components/GlowingBox';
import { ExternalLink } from 'lucide-react';

const TravelHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      once: true,
      offset: 100,
    });
  }, []);

  const nearbyAttractions = [
    {
      name: 'Tirathgarh Waterfall',
      description: 'Discover the breathtaking beauty of Tirathgarh Waterfall, a magnificent multi-tiered cascade within the lush Kanger Valley National Park. We suggest visiting after the monsoon to witness this natural marvel in its full glory.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSygZx6rKcv8vkHhnAd-RN0bVAyD4IbK1Ua-z6V2vsUqUIULrx5yWbmOmNDNhghwzO6xMLygkauWoaFzyL8rMJehqnFjUL3PxgyAkKQbwemE4XKuG6FNU46nhdB38ojvHXbRrRzDow=w408-h408-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Tirathgarh+Waterfall',
    },
    {
      name: 'Chitrakote Waterfall',
      description: 'Often hailed as the "Niagara Falls of India," Chitrakote Waterfall offers a spectacular, panoramic vista. A visit during the monsoon season is highly recommended to experience its powerful and majestic flow.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwUjiscWghzFimX9gQIuRbOUvIW3AiNkjRgeejG663DWD0zHl5pquKoiM5f_cpytzcFY0WrHWB6UXW5JMVJF8nAKED-I9c3r6aMGu45Xf7C0koJkipH8YX5sBIl9a4QbvXPiogQ=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Chitrakote+Waterfall',
    },
    {
      name: 'Kanha National Park',
      description: 'Embark on an unforgettable wildlife safari at Kanha National Park, one of India\'s largest and most prestigious tiger reserves. It presents a unique opportunity to witness the majestic Bengal tiger and the rare barasingha in their natural habitat.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSztDx6hzT3gbYKJg7a-dWtfmyolmlUTw9NVt3O-I3bzPsM80-K6SQl6dqeOA_ROfZrz5h02L4uCk-09QzwX8qpsiAeDrBWPDjajBgSjD1M4ShfXBPCduR6ZfueqaPebPUSQ14HhZQ=w408-h343-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kanha+National+Park',
    },
    {
      name: 'Jatmai Waterfall',
      description: 'Experience the serene ambiance of Jatmai Waterfall, a beautiful, stepped cascade located adjacent to the sacred Jatmai Mata Mandir. It\'s an ideal destination for a peaceful day trip and a picnic amidst nature.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykMjpi16vbWTdfLbr1H-Z3rRLuhimlnmJDXYRxnCmkQoXFrAiZjs6G7CGBq44BWuMabUaa3Ia8Mq8s7EhvzWdsv8YX0J2wPEF-CSoY5fDRu3BT6CS4JOTVQ21fUiKVOP0yCqL_XQ=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Jatmai+Waterfall',
    },
    {
      name: 'Hajra Waterfall',
      description: 'For the adventurous at heart, a trek to Hajra Waterfall offers a rewarding experience. This scenic cascade, dropping from a height of 150 feet amidst dense forests, is a perfect spot for nature photography and a refreshing dip.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwVgaNKxUUoY8D_Y8wj_8m7KTcXeXHnhSFduV1kfOW3_jUi1JP46NdefqGAX8AKaxSU9Fvrwx_hnb7IIil2V0t2xoJ5DHxFEptwU430ramt9-piYZ9emgEFBzUthvtiwyGyJLqh5nKXLLN0=w408-h408-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hajra+Waterfall',
    },
    {
      name: 'Ghatarani Waterfall',
      description: 'Explore the enchanting Ghatarani Waterfall, one of the largest in the region. Surrounded by dense forests, it\'s a popular destination for picnics and a great opportunity to immerse yourself in nature\'s tranquility.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyWxl_m-SYvN1VZ6_clb7uyTx-lF0uJeGtiP1lBuD1fyZHBD5wHQQ3Vpa9YbayWl5CFU1PFd6hRR_-hQWEEFpvoiVCxiAYSQALC7EN5STHZ70xcrLcpKzWXmfjZBZ-IZkUPvOM=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ghatarani+Waterfall',
    },
    {
      name: 'Bambaleshwari Temple',
      description: 'A visit to the revered Bambaleshwari Temple offers both a spiritual journey and stunning panoramic views. Situated atop a 1,600-foot hill, the temple is a major pilgrimage site and can be reached via a scenic aerial ropeway.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz8ONdVyyTDOAu5smW3f3G_45nuLMPTQvljFyPuRYRaxQsQ-wcwrQ2JeMFD5IN8FlGPrN6eyET_MaEn2jQIqd1ldAWJpDRW4Q0qFZEyXc31ZDmQGiJdcA0vaEfR58ovxi0cfPmI=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Bambaleshwari+Temple+Dongargarh',
    },
    {
      name: 'Uwasaggharam Parshwa Teerth',
      description: 'Find peace and spiritual solace at Uwasaggharam Parshwa Teerth, a significant Jain shrine on the banks of the Sheonath River. The intricate architecture of the white marble temple is a sight to behold.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzG-PWFHPro4WZionkY6fVdOK5Lrrl6n5TmxbPqELUNxRpeQdykhyEZ0KpbFrYZMZavohN0oNoIaGAWh5DDpTP906kz7QT6jCtGNOMJ-GqtdI780_q8R_jZSS76ddzieyn5FuhA=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Uwasaggharam+Parshwa+Teerth+Nagpura',
    },
    {
      name: 'Dholkal Ganesh Temple',
      description: 'Journey back in time with a visit to the 1,000-year-old Dholkal Ganesh Temple. Perched atop a hill, reaching this ancient idol requires a scenic trek, offering a unique blend of history, spirituality, and adventure.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwmYLdVAot9AjLfaTs_VwGrat0s-Z50Q5yAQdFCMwW05rUOYEyh5eZz9szX-IeSP6WOe-jSN_rGgcK8srPlNyNRdZefYnetV7RuFImU0dmcdphCrTNFA_-wuRFY65sgL5BPLvXb=w408-h510-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Dholkal+Ganesh+Temple',
    },
    {
      name: 'Bhoramdeo Temple',
      description: 'Often referred to as the "Khajuraho of Chhattisgarh," the Bhoramdeo Temple is an architectural masterpiece. We suggest taking the time to admire the stunningly intricate and erotic sculptures that adorn this 11th-century temple.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSza_lCWoYEgw8uWdWBZLopcChCxDi3yLvdK_FZtkn0DnnWRZKFjj1Pau36tvN5JTdTxRnwgZeFUHLL_lV6-e1a7R2fKO7vy4Hl38ygDxGoGV3rV0a3y21luT3uIJWLgPhrXB8x5=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Bhoramdeo+Temple',
    },
    {
      name: 'Maitri Bagh',
      description: 'Enjoy a day of leisure and fun at Maitri Bagh, the largest zoo in Chhattisgarh. It\'s an excellent family destination, featuring a variety of wildlife, a toy train, boating on the lake, and a captivating musical fountain show.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMYdG1kpxrXCc-yIhARPUHXSrkOJdpmyNZ2TtPd=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Maitri+Bagh+Bhilai',
    },
    {
      name: 'Surya Treasure Island Mall',
      description: 'For your shopping and entertainment needs, Surya Treasure Island Mall offers a comprehensive experience. As one of the largest malls in Bhilai, it houses a wide range of retail stores, a food court, and a multiplex cinema.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy7Obklj9HPqvFMrTe04Z1pnR4TuJSKccOzpZp3qBnyEHYXQWm7uXRsRd5Kry1FHvPnQ3rgjn9c1qe-zrHbf1oxDl7zpjlL89oyu2AROCsfV-r8M5zm_dGDqoEH7N9bTXBeIXg3=w408-h541-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Surya+Treasure+Island+Mall+Bhilai',
    },
    {
      name: 'Nehru Art Gallery',
      description: 'Immerse yourself in the region\'s culture at the Nehru Art Gallery in Raipur. It\'s a wonderful place to appreciate a diverse collection of traditional and contemporary Indian art through its various exhibitions.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyUrqxVgecngtfOk7MC3rujTZqYWpms8Y_pjEPUKcyXrn4tlZlj_oIWOcPKOF3y-zodhX4V1v7uLw1HwIJD7IAKSJQ2-eZl8IQIE-gfQTjTZwBgkczGXj2b7rFEd18TuOQMi-Oz=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Nehru+Art+Gallery+Raipur',
    },
    {
      name: 'Barnawapara Sanctuary',
      description: 'A visit to Barnawapara Sanctuary is highly recommended for nature lovers. This protected forest is home to a diverse range of wildlife, including leopards and sloth bears, offering a thrilling safari experience.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwCd5ylPbfErQvlCBTCd8RUbsBWcaton7keJGndPmYBkebX91t7HbjGjTrXDIIM7faFbG8VrKk6qf_8u8SP3R3onyXLBzhEykXxbAFKG9Vc0_XxQv872DdMyBSeydISzmw0sjOB=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Barnawapara+Wildlife+Sanctuary',
    },
    {
      name: 'Kutaghat Dam',
      description: 'Relax and unwind at Kutaghat Dam, a picturesque reservoir on the Kharang River. Surrounded by lush greenery, it\'s a popular spot for picnics and offers serene boating facilities.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzTYhvUluHbubCX8wv83S51v6gynvLoaGQFexPSo6Pan3PFsPQGbngI4Jb8lk6YpAfkRPb7TONBYl-9F188KlpGVscAY-GhdFWOzFKOLBQzq4FQ-rqnvCHS-Ki-gBIjgXWVb9R9=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kutaghat+Dam+Bilaspur',
    },
    {
      name: 'Mahamaya Temple',
      description: 'Pay a visit to the historic Mahamaya Temple in Ratanpur, a revered site considered one of the 52 Shakti Peethas. This temple is a major pilgrimage destination and a hub of spiritual energy.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxXVHIVaj7lPNbLXW-Mz0YiBJpMdUd1vs-TPgqFzUChjqtUHpYOxWiA0RbamRTn_GJhGuZ3Y4aJuhN6GROhUK0jLAJBe1sI-bRRf2ludUyhU2TxNr03mmq3DVyLFcZZ1QNVIO3O6FsFRZk=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Mahamaya+Temple+Ratanpur',
    },
    {
      name: 'Zora Mall',
      description: 'Indulge in a premium shopping experience at Zora Mall, Chhattisgarh\'s largest lifestyle destination. Here you will find a wide array of international brands, a diverse food court, and a state-of-the-art PVR Luxe cinema.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMo79tn-yJAFIMlafP1Froy9lIVhDaMq8xQ2lb_=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Zora+Mall+Raipur',
    },
    {
      name: 'Kutumsar Caves',
      description: 'Explore the subterranean wonders of Kutumsar Caves, a fascinating network of limestone caves in Kanger Valley National Park. You\'ll be amazed by the natural stalactite and stalagmite formations and the unique ecosystem, which includes a species of blind fish.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyfIdX6UZVE5peWBXku4s3pML9-MH6cOCCK4D85kJLqCuimhTMIsU_Igp3H2nsKsaxYLYWsrJOKgSsffxAF9WJmM-cePIB1iCyIe9oW77anYLMw0_OcS1KBQMZYRfmwt8s8LBGl=w408-h272-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kutumsar+Caves',
    },
    {
      name: 'Magneto The Mall',
      description: 'Magneto The Mall is a one-stop destination for shopping, dining, and entertainment in Raipur. It features a wide selection of retail stores, a vibrant food court, and a multiplex, making it a perfect spot for a day out.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTURjyl5NyZpmcCnn6ymgNLdB9Bqv37cJhmyYO3AIkey94frbyXrWtGJL3u6BM4patW2rUz5DXeoCVAoe8DRoDNIZ_JR3JEVW-hEvjZpkZRcMTufL49tui_KIvJ74ednJ-uh8=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Magneto+The+Mall+Raipur',
    },
    {
      name: 'Ambuja City Center Mall',
      description: 'Experience modern convenience at Ambuja City Center Mall in Raipur. This popular mall provides a well-rounded experience with its mix of shopping, dining, and entertainment options.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwLLFqfurs8DR0O_I4Dt9RKMyi2MhkrGWR_PWCsCbPtdBXjwLfJxpV2VFlT2oxIrb_aj7uhNVGpO2InTJ3TT6QQHc5YNNLDXUdUY3ANDi2GIWivxl5OzDcFBfck6plkBjri0O4S=w505-h240-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ambuja+City+Center+Mall+Raipur',
    },
    {
      name: 'Keshkal Ghati',
      description: 'Take a scenic drive through Keshkal Ghati, a beautiful valley known for its 12 dramatic hairpin bends. The panoramic views of the surrounding forests from the top are truly breathtaking and offer a great photo opportunity.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwKDDjsc9B9Vr-7MkfObJ1wHIumSZyK4KdD0GYWi3wougsae24BRpr_ICzryEhsIWQFzkRoQ77QHc34XHdwMPQp1pYXM17XlDkjz2mo55HgniQ8Ez8Jx5Vf1vPtyjXSW6QNxjBP=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Keshkal+Ghati',
    },
    {
      name: 'Chilpi Ghati',
      description: 'Discover the picturesque beauty of Chilpi Ghati, a lush valley in the Maikal Hills. Its pleasant climate and verdant landscapes make it a perfect gateway for nature lovers and those heading towards Kanha National Park.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0SPdkU7HId3vTRRWuz933ZIiEF-KMLLuTPVxVR-apjEq4p3C0NkkTVgkn-pd713-ow_PM1kPjVlgdbLMeCQ_KykFHRF8-po9OPfbwhBHBmCIsShCPPuPDsR9US_NFBzzzdFhowYvrlcvK=w426-h240-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Chilpi+Ghati',
    },
    {
      name: 'Ratanpur Fort',
      description: 'Step back in history with a visit to the ancient Ratanpur Fort. Once the capital of the Kalachuri dynasty, its ruins, impressive gateways, and intricate sculptures offer a fascinating glimpse into the region\'s rich past.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsJpNgrddm3AHYw5mJGMAeldqapBJKzppVa10bHcrPh25Kh8qZouT47Ezh2qfNFx5TW-w8HsYZuFsP7S9IuonSlth9zb5TjQ88hvrpuVp76KxAemN0xUr2cxhqlmBwq6ZcXyYs=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ratanpur+Fort+Chhattisgarh',
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden max-w-full pt-[120px]">
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nearbyAttractions.map((place, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <GlowingBox strongGlow className="p-0 overflow-hidden h-full flex flex-col group">
                  <div className="overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#2e2a30] mb-2 group-hover:text-[#7c3aed] transition-colors duration-300">
                      {place.name}
                    </h3>
                    <p className="text-sm text-[#2e2a30]/80 leading-relaxed" style={{ textAlign: 'justify !important' }}>
                      {place.description}
                    </p>
                    <a 
                      href={place.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] 
                                 font-medium text-sm tracking-wide backdrop-blur-sm
                                 border border-transparent hover:border-[#7c3aed]/50 hover:bg-[#7c3aed]/20 
                                 transition-all duration-300"
                    >
                      View on Map <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </GlowingBox>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TravelHome;