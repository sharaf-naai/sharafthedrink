import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiChevronDoubleRight } from "react-icons/hi";


gsap.registerPlugin(useGSAP);

const Card = ({ city, country, storeName, addressLines }) => {
  const encodedLocation = encodeURIComponent(`${city}, ${country}`);

  return (
    <div className="w-[25rem] h-60 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        
        {/* Front */}
        <div className="absolute w-full h-full backdrop-blur-md bg-white/35 rounded-xl border border-white border-2 flex items-center justify-center backface-hidden">
          <div className="text-center px-4">
            <h2 className="text-[27px] font-bold font-mono">{city}, {country}</h2>
            <p className="mt-2 text-[20px] font-bold font-[quicksand]">{storeName}</p>
            {addressLines.map((line, idx) => (
              <p key={idx} className="text-[15px] font-semibold font-[quicksand]">{line}</p>
            ))}
          </div>
        </div>

        {/* Back (Map) */}
        <div className="absolute w-full h-full bg-white/20  border border-white border-2 rounded-xl shadow-xl rotate-y-180 backface-hidden overflow-hidden">
          <iframe
            src={`https://www.google.com/maps?q=${encodedLocation}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


const Stores = () => {

  const cardContainerRef = React.useRef(null);


  useGSAP(() => {
  const cards = gsap.utils.toArray(cardContainerRef.current.children);

  gsap.from(cards, {
    opacity: 0,
    scale: 0,
    ease: 'elastic.inOut',
    duration: 1,
    stagger: 0.1,
  });

  gsap.from('#header', {
    y: 60,
    opacity: 0,
    scale: 0.4,
    ease: 'elastic.inOut',
    duration: 1
  });
}, []);


  const stores = [
    {
      city: "London",
      country: "UK",
      storeName: "Savora & Co.",
      addressLines: [
        "73 Camden High Street",
        "Camden Town, London NW1 8QL",
        "United Kingdom"
      ]
    },
    {
      city: "Marrakesh",
      country: "Morocco",
      storeName: "Boutique Atlas",
      addressLines: [
        "Rue Ibn Toumert, Résidence Yassmine",
        "Guéliz, Marrakesh 40000",
        "Morocco"
      ]
    },
    {
      city: "Tokyo",
      country: "Japan",
      storeName: "Hanami & Co.",
      addressLines: [
        "2-12-5 Shibuya",
        "Shibuya-ku, Tokyo 150-0002",
        "Japan"
      ]
    },
    {
      city: "Los Angeles",
      country: "USA",
      storeName: "Sunset Threads",
      addressLines: [
        "1245 W Sunset Blvd",
        "Los Angeles, CA 90026",
        "United States"
      ]
    },
    {
      city: "Paris",
      country: "France",
      storeName: "Maison Lumière",
      addressLines: [
        "18 Rue Oberkampf",
        "75011 Paris",
        "France"
      ]
    },
    {
      city: "Shanghai",
      country: "China",
      storeName: "Lùxīan Market",
      addressLines: [
        "88 Nanjing West Road",
        "Jing'an District, Shanghai 200041",
        "China"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br p-6">
      <h1 className="text-4xl font-bold text-center mb-4 font-[rocksalt] [text-shadow:2px_2px_0_white]" id='header'>LOCATIONS</h1>
      <div ref={cardContainerRef} className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {stores.map((store, idx) => (
          <Card key={idx} {...store} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
