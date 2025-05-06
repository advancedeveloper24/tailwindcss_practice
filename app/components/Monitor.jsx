import React from "react";
import Image from "next/image";
import monitorCard from "../../public/assets/monitor-card.webp";
import { FaArrowRight } from "react-icons/fa";

const Monitor = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Right */}
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experience through
            seamless calender appointments
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4"
          >
            Explore scheduling Features
            <FaArrowRight />
          </a>
        </div>
        {/* Left */}
        <div className="md:w-1\2 w-full">
          <Image
            src={monitorCard}
            alt="schedule image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Monitor;
