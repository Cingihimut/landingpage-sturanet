"use client";
import { BezierCurve, GlobeSimple, Newspaper } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Foundation = () => {
  return (
    <div className="bg-color-lightGrey bg-opacity-30 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex justify-center mb-6 mt-4 sm:mt-7">
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          A step forward for humanity
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
          <p className="text-base sm:text-lg md:text-xl">
            <span className="text-color-primary font-semibold">Sturan Network</span> is a crowdfunding platform that is fully committed to global humanitarian issues. Using blockchain technology, <span className="text-color-primary font-semibold">Sturan Network</span> provides transparency and security in every transaction, making it a modern solution in fundraising, especially to help fellow <span className="text-color-red font-semibold">humans.</span>
          </p>
          <div className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl">
            <p className="flex items-center mb-2">
              <Newspaper size={24} className="mr-4" color="#fcbc32" /> Transparan
            </p>
            <p className="flex items-center mb-2">
              <BezierCurve size={24} className="mr-4" color="#3297fc" /> Decentral
            </p>
            <p className="flex items-center mb-2">
              <GlobeSimple size={24} className="mr-4" color="#32fc39" /> Efficient
            </p>
          </div>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl">With Sturan Network, we can be part of a global solution. Secure transactions, unlimited contributions, and real impact for those in need.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/hummanity.jpg"
            height="300"
            width="300"
            className="rounded-full"
            alt="Humanity"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10">
        <Link href="/docs/core-concepts" className="py-2 px-6 sm:py-3 sm:px-8 bg-color-neutral text-color-white rounded-lg hover:bg-opacity-85 duration-300 text-sm sm:text-base">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Foundation;