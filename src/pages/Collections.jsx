import React, { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function Collection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#FCFBF8] px-5 py-12 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-black md:text-4xl">
          Collection
        </h1>

        <p className="mt-3 text-base text-[#756B64] md:text-lg">
          Discover our curated selection of sacred art
        </p>

        {/* Search */}
        <div className="mt-10 w-full max-w-[560px]">
          <div className="flex items-center rounded-md bg-[#EEEAE6] px-4 py-3.5">
            <Search
              size={20}
              strokeWidth={1.8}
              className="mr-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-[#9AA6B9]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => setCategory("All")}
            className={`rounded-md px-5 py-3 text-sm transition ${
              category === "All"
                ? "bg-[#9B5D22] text-white"
                : "bg-[#EEEAE6] text-black"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setCategory("Singing Bowl")}
            className={`rounded-md px-5 py-3 text-sm transition ${
              category === "Singing Bowl"
                ? "bg-[#9B5D22] text-white"
                : "bg-[#EEEAE6] text-black"
            }`}
          >
            Singing Bowl
          </button>
        </div>

        {/* Products */}
        <div className="mt-36 flex min-h-[250px] items-center justify-center">
         <ProductCard/>
        </div>

      </div>
    </div>
  );
}