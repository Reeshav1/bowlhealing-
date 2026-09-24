import ArtisanPromise from "../components/ArtisanPromise";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import WhatWeSell from "../components/WhatWeSell";
import OurCollection from "../components/OurCollection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import DiscoverSerenity from "../components/DiscoverSerenity";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
     <Navbar/>
     <HeroBanner/>
     <WhatWeSell/>
     <ArtisanPromise/>
     <OurCollection/>
     <DiscoverSerenity/>
     <Features/>
     <Footer/>
    </div>
  );
}
