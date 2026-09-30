import React from "react";

export default function About() {
  return (
    <div className="bg-[#FCFBF8] text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative flex min-h-[430px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://bowlhealing.com/images/artisan.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-5 text-center text-white">
          <p className="mb-3 text-[9px] font-medium uppercase tracking-[3px] text-[#D8B98A]">
            Our Story
          </p>

          <h1 className="text-3xl font-light md:text-5xl">
            Sacred Art, Honest Hands
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[11px] leading-5 text-gray-200 md:text-sm">
            Thankga connects the world with authentic Himalayan sacred art —
            working directly with master artisans in Nepal and Tibet.
          </p>
        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/artisan.jpg"
              alt="Himalayan artisan creating handmade art"
              className="h-[300px] w-full object-cover md:h-[350px]"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-5 text-2xl font-normal text-gray-800">
              Our Story
            </h2>

            <p className="text-sm leading-7 text-gray-500">
              Thankga was founded in 2019 with a simple mission: to connect
              the world with authentic Himalayan sacred art. We work directly
              with master artisans in Nepal and Tibet, ensuring every singing
              bowl and deity statue we sell is genuine, ethically sourced,
              and spiritually potent.
            </p>
          </div>

        </div>
      </section>


      {/* ================= OUR ARTISANS ================= */}
      <section className="px-5 pb-14 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-2xl font-normal text-gray-800">
            Our Artisans
          </h2>

          <p className="text-sm leading-6 text-gray-500">
            We partner with over 7 singing bowl workshops and 15 master statue
            sculptors across Kathmandu, Patan, Bhaktapur, and Lhasa. These are
            not factories. They are family studios where techniques are passed
            from father to son, mother to daughter.
          </p>
        </div>
      </section>


      {/* ================= ETHICAL SOURCING ================= */}
      <section className="px-5 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-2xl font-normal text-gray-800">
            Ethical Sourcing
          </h2>

          <p className="text-sm leading-6 text-gray-500">
            We pay our artisans 40% above local market rates. We provide
            health insurance for their families. We fund scholarships for
            young artisans who cannot afford formal training. When you buy
            from Thankga, you are not purchasing a product — you are
            supporting a tradition.
          </p>
        </div>
      </section>


      {/* ================= STATISTICS ================= */}
      <section className="bg-[#1D1D1D] px-5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-2xl text-[#D8B98A]">
              2019
            </h3>
            <p className="mt-1 text-[8px] uppercase tracking-wider text-gray-400">
              Founded
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-[#D8B98A]">
              7
            </h3>
            <p className="mt-1 text-[8px] uppercase tracking-wider text-gray-400">
              Bowl Workshops
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-[#D8B98A]">
              15
            </h3>
            <p className="mt-1 text-[8px] uppercase tracking-wider text-gray-400">
              Master Sculptors
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-[#D8B98A]">
              40%
            </h3>
            <p className="mt-1 text-[8px] uppercase tracking-wider text-gray-400">
              Above Market Rates
            </p>
          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="px-5 py-10 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">

          {/* Authenticity */}
          <div className="border border-gray-200 p-7 text-center">
            <h3 className="mb-4 text-sm font-normal">
              Authenticity
            </h3>

            <p className="text-xs leading-5 text-gray-500">
              Every piece is sourced directly from its maker and verified.
            </p>
          </div>


          {/* Ethics */}
          <div className="border border-gray-200 p-7 text-center">
            <h3 className="mb-4 text-sm font-normal">
              Ethics
            </h3>

            <p className="text-xs leading-5 text-gray-500">
              Fair wages, health insurance, and education for artisan families.
            </p>
          </div>


          {/* Tradition */}
          <div className="border border-gray-200 p-7 text-center">
            <h3 className="mb-4 text-sm font-normal">
              Tradition
            </h3>

            <p className="text-xs leading-5 text-gray-500">
              Techniques passed down through generations, unchanged.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}