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
      description: 'A magnificent block-type waterfall in the Kanger Valley National Park. The water plunges about 300 feet in multiple tiers.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSygZx6rKcv8vkHhnAd-RN0bVAyD4IbK1Ua-z6V2vsUqUIULrx5yWbmOmNDNhghwzO6xMLygkauWoaFzyL8rMJehqnFjUL3PxgyAkKQbwemE4XKuG6FNU46nhdB38ojvHXbRrRzDow=w408-h408-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Tirathgarh+Waterfall',
    },
    {
      name: 'Chitrakote Waterfall',
      description: 'Often called the "Niagara Falls of India," this wide, powerful waterfall on the Indravati River is especially magnificent during the monsoon season.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwUjiscWghzFimX9gQIuRbOUvIW3AiNkjRgeejG663DWD0zHl5pquKoiM5f_cpytzcFY0WrHWB6UXW5JMVJF8nAKED-I9c3r6aMGu45Xf7C0koJkipH8YX5sBIl9a4QbvXPiogQ=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Chitrakote+Waterfall',
    },
    {
      name: 'Kanha National Park',
      description: 'One of the largest national parks in India, famous for its tiger population and the rare barasingha. A prime location for wildlife enthusiasts.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSztDx6hzT3gbYKJg7a-dWtfmyolmlUTw9NVt3O-I3bzPsM80-K6SQl6dqeOA_ROfZrz5h02L4uCk-09QzwX8qpsiAeDrBWPDjajBgSjD1M4ShfXBPCduR6ZfueqaPebPUSQ14HhZQ=w408-h343-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kanha+National+Park',
    },
    {
      name: 'Jatmai Waterfall',
      description: 'A scenic, stepped waterfall located next to the Jatmai Mata Mandir. It\'s a popular picnic spot, especially after the monsoon season.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykMjpi16vbWTdfLbr1H-Z3rRLuhimlnmJDXYRxnCmkQoXFrAiZjs6G7CGBq44BWuMabUaa3Ia8Mq8s7EhvzWdsv8YX0J2wPEF-CSoY5fDRu3BT6CS4JOTVQ21fUiKVOP0yCqL_XQ=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Jatmai+Waterfall',
    },
    {
      name: 'Hajra Waterfall',
      description: 'A scenic waterfall in the Dongargarh region, descending from a height of about 150 feet amidst dense forests. It\'s a great spot for trekking and picnics.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwVgaNKxUUoY8D_Y8wj_8m7KTcXeXHnhSFduV1kfOW3_jUi1JP46NdefqGAX8AKaxSU9Fvrwx_hnb7IIil2V0t2xoJ5DHxFEptwU430ramt9-piYZ9emgEFBzUthvtiwyGyJLqh5nKXLLN0=w408-h408-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hajra+Waterfall',
    },
    {
      name: 'Ghatarani Waterfall',
      description: 'One of the largest waterfalls in Chhattisgarh, this is a popular picnic destination surrounded by dense forests and features a nearby temple.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyWxl_m-SYvN1VZ6_clb7uyTx-lF0uJeGtiP1lBuD1fyZHBD5wHQQ3Vpa9YbayWl5CFU1PFd6hRR_-hQWEEFpvoiVCxiAYSQALC7EN5STHZ70xcrLcpKzWXmfjZBZ-IZkUPvOM=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ghatarani+Waterfall',
    },
    {
      name: 'Bambaleshwari Temple',
      description: 'A major pilgrimage destination with its main temple situated on a 1,600-foot hill. It offers stunning views and can be reached by an aerial ropeway.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz8ONdVyyTDOAu5smW3f3G_45nuLMPTQvljFyPuRYRaxQsQ-wcwrQ2JeMFD5IN8FlGPrN6eyET_MaEn2jQIqd1ldAWJpDRW4Q0qFZEyXc31ZDmQGiJdcA0vaEfR58ovxi0cfPmI=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Bambaleshwari+Temple+Dongargarh',
    },
    {
      name: 'Uwasaggharam Parshwa Teerth',
      description: 'A significant Jain shrine on the banks of the Sheonath River, dedicated to Lord Parshwanath, featuring a beautiful white marble temple.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzG-PWFHPro4WZionkY6fVdOK5Lrrl6n5TmxbPqELUNxRpeQdykhyEZ0KpbFrYZMZavohN0oNoIaGAWh5DDpTP906kz7QT6jCtGNOMJ-GqtdI780_q8R_jZSS76ddzieyn5FuhA=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Uwasaggharam+Parshwa+Teerth+Nagpura',
    },
    {
      name: 'Dholkal Ganesh Temple',
      description: 'A 1,000-year-old temple dedicated to Lord Ganesha, perched atop a hill in dense forests. Reaching the temple requires a scenic trek.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwmYLdVAot9AjLfaTs_VwGrat0s-Z50Q5yAQdFCMwW05rUOYEyh5eZz9szX-IeSP6WOe-jSN_rGgcK8srPlNyNRdZefYnetV7RuFImU0dmcdphCrTNFA_-wuRFY65sgL5BPLvXb=w408-h510-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Dholkal+Ganesh+Temple',
    },
    {
      name: 'Bhoramdeo Temple',
      description: 'Famously known as the "Khajuraho of Chhattisgarh," this 11th-century temple is celebrated for its stunningly intricate and erotic sculptures.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSza_lCWoYEgw8uWdWBZLopcChCxDi3yLvdK_FZtkn0DnnWRZKFjj1Pau36tvN5JTdTxRnwgZeFUHLL_lV6-e1a7R2fKO7vy4Hl38ygDxGoGV3rV0a3y21luT3uIJWLgPhrXB8x5=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Bhoramdeo+Temple',
    },
    {
      name: 'Maitri Bagh',
      description: 'The largest zoo in Chhattisgarh, featuring white tigers, a large lake with boating, a toy train, and a popular musical fountain show.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMYdG1kpxrXCc-yIhARPUHXSrkOJdpmyNZ2TtPd=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Maitri+Bagh+Bhilai',
    },
    {
      name: 'Surya Treasure Island Mall',
      description: 'One of the first and largest shopping malls in Bhilai, housing retail stores, a food court, a multiplex cinema, and a supermarket.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy7Obklj9HPqvFMrTe04Z1pnR4TuJSKccOzpZp3qBnyEHYXQWm7uXRsRd5Kry1FHvPnQ3rgjn9c1qe-zrHbf1oxDl7zpjlL89oyu2AROCsfV-r8M5zm_dGDqoEH7N9bTXBeIXg3=w408-h541-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Surya+Treasure+Island+Mall+Bhilai',
    },
    {
      name: 'Nehru Art Gallery',
      description: 'A cultural hub in Raipur dedicated to showcasing a diverse collection of traditional and contemporary Indian art through various exhibitions.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyUrqxVgecngtfOk7MC3rujTZqYWpms8Y_pjEPUKcyXrn4tlZlj_oIWOcPKOF3y-zodhX4V1v7uLw1HwIJD7IAKSJQ2-eZl8IQIE-gfQTjTZwBgkczGXj2b7rFEd18TuOQMi-Oz=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Nehru+Art+Gallery+Raipur',
    },
    {
      name: 'Barnawapara Sanctuary',
      description: 'A must-visit for nature lovers, this sanctuary is home to leopards, sloth bears, and numerous bird species, within a landscape of hilly terrain.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwCd5ylPbfErQvlCBTCd8RUbsBWcaton7keJGndPmYBkebX91t7HbjGjTrXDIIM7faFbG8VrKk6qf_8u8SP3R3onyXLBzhEykXxbAFKG9Vc0_XxQv872DdMyBSeydISzmw0sjOB=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Barnawapara+Wildlife+Sanctuary',
    },
    {
      name: 'Jatmai Temple Trek',
      description: 'A scenic trekking trail that leads to the sacred Jatmai Temple. The area is known for its lush greenery and a beautiful waterfall.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw3x70FfRGdEHO6dAgVskpiPy8m8z8mybnYmccbDc52zymi2z7mKEy_qsvIzUxXV2aRLzbwQFakgqnJHHwue9RPeygdz-agZJ_ecnqzuOLnJuB_HQic5I6bkpvTvSptU5tChXtt=w408-h464-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Jatmai+Temple',
    },
    {
      name: 'Kutaghat Dam',
      description: 'A picturesque dam on the Kharang River near Bilaspur, surrounded by lush greenery. It\'s a popular picnic spot and offers boating facilities.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzTYhvUluHbubCX8wv83S51v6gynvLoaGQFexPSo6Pan3PFsPQGbngI4Jb8lk6YpAfkRPb7TONBYl-9F188KlpGVscAY-GhdFWOzFKOLBQzq4FQ-rqnvCHS-Ki-gBIjgXWVb9R9=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kutaghat+Dam+Bilaspur',
    },
    {
      name: 'Mahamaya Temple',
      description: 'A revered temple in Ratanpur, dedicated to the Goddess Mahamaya. It is considered one of the 52 Shakti Peethas and attracts many pilgrims.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxXVHIVaj7lPNbLXW-Mz0YiBJpMdUd1vs-TPgqFzUChjqtUHpYOxWiA0RbamRTn_GJhGuZ3Y4aJuhN6GROhUK0jLAJBe1sI-bRRf2ludUyhU2TxNr03mmq3DVyLFcZZ1QNVIO3O6FsFRZk=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Mahamaya+Temple+Ratanpur',
    },
    {
      name: 'Zora Mall',
      description: 'Chhattisgarh\'s largest mall with a wide range of international brands, a diverse food court, and a PVR Luxe cinema.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMo79tn-yJAFIMlafP1Froy9lIVhDaMq8xQ2lb_=w408-h544-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Zora+Mall+Raipur',
    },
    {
      name: 'Kutumsar Caves',
      description: 'Located in Kanger Valley National Park, these limestone caves are known for their stalactite and stalagmite formations and are home to a species of blind fish.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyfIdX6UZVE5peWBXku4s3pML9-MH6cOCCK4D85kJLqCuimhTMIsU_Igp3H2nsKsaxYLYWsrJOKgSsffxAF9WJmM-cePIB1iCyIe9oW77anYLMw0_OcS1KBQMZYRfmwt8s8LBGl=w408-h272-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kutumsar+Caves',
    },
    {
      name: 'Magneto The Mall',
      description: 'A large shopping mall in Raipur with a variety of retail stores, a food court, a multiplex cinema, and an entertainment zone.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTURjyl5NyZpmcCnn6ymgNLdB9Bqv37cJhmyYO3AIkey94frbyXrWtGJL3u6BM4patW2rUz5DXeoCVAoe8DRoDNIZ_JR3JEVW-hEvjZpkZRcMTufL49tui_KIvJ74ednJ-uh8=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Magneto+The+Mall+Raipur',
    },
    {
      name: 'Ambuja City Center Mall',
      description: 'A popular mall in Raipur offering a mix of shopping, dining, and entertainment options, including a hotel and a multiplex.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwLLFqfurs8DR0O_I4Dt9RKMyi2MhkrGWR_PWCsCbPtdBXjwLfJxpV2VFlT2oxIrb_aj7uhNVGpO2InTJ3TT6QQHc5YNNLDXUdUY3ANDi2GIWivxl5OzDcFBfck6plkBjri0O4S=w505-h240-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ambuja+City+Center+Mall+Raipur',
    },
    {
      name: 'Keshkal Ghati',
      description: 'A scenic valley known for its winding roads with 12 hairpin bends and panoramic views of the surrounding forests.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwKDDjsc9B9Vr-7MkfObJ1wHIumSZyK4KdD0GYWi3wougsae24BRpr_ICzryEhsIWQFzkRoQ77QHc34XHdwMPQp1pYXM17XlDkjz2mo55HgniQ8Ez8Jx5Vf1vPtyjXSW6QNxjBP=w408-h306-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Keshkal+Ghati',
    },
    {
      name: 'Chilpi Ghati',
      description: 'A picturesque valley in the Maikal Hills, known for its lush greenery, pleasant climate, and as a gateway to Kanha National Park.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0SPdkU7HId3vTRRWuz933ZIiEF-KMLLuTPVxVR-apjEq4p3C0NkkTVgkn-pd713-ow_PM1kPjVlgdbLMeCQ_KykFHRF8-po9OPfbwhBHBmCIsShCPPuPDsR9US_NFBzzzdFhowYvrlcvK=w426-h240-k-no',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=Chilpi+Ghati',
    },
    {
      name: 'Ratanpur Fort',
      description: 'An ancient fort from the 11th century, once the capital of the Kalachuri dynasty. It features impressive gateways with intricate stone sculptures.',
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
                    <p className="text-sm text-[#2e2a30]/80 leading-relaxed flex-grow">
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