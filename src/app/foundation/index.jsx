"use client";
import { BezierCurve, GlobeSimple, Newspaper } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Foundation = () => {
  return (
    <div className="bg-color-lightGrey bg-opacity-30 h-[700px] p-6">
      <div className="flex justify-center mb-6 mt-7">
        <h1 className="text-2xl font-semibold">
          A step forward for humanity
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-1/2 pr-6 ml-10">
          <p className="text-xl">
            <span className="text-color-primary font-semibold">Sturan Network</span> is a crowdfunding platform that is fully committed to global humanitarian issues. Using blockchain technology, <span className="text-color-primary font-semibold">Sturan Network</span> provides transparency and security in every transaction, making it a modern solution in fundraising, especially to help fellow <span className="text-color-red font-semibold">humans.</span>
          </p>
          <div className="mt-5 text-xl">
            <p className="flex items-center">
              <Newspaper size={32} className="mr-4" color="#fcbc32" /> Transparan
            </p>
            <p className="flex items-center">
              <BezierCurve size={32} className="mr-4" color="#3297fc" /> Decentral
            </p>
            <p className="flex items-center">
              <GlobeSimple size={32} className="mr-4" color="#32fc39" /> Efficient
            </p>
          </div>
          <p className="mt-5 text-xl">With Sturan Network, we can be part of a global solution. Secure transactions, unlimited contributions, and real impact for those in need.</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/assets/hummanity.jpg"
            height="400"
            width="400"
            className="rounded-full"
            alt="Humanity"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/about" className="py-3 px-8 bg-color-neutral text-color-white rounded-lg hover:bg-opacity-85 duration-300">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Foundation;
