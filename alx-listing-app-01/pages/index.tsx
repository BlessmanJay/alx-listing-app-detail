import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";
import React from "react";
import styles from "./index.module.css";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Pool",
  "Free Wifi",
];

export default function Home() {
  return (
    <>
      <section
        className={`${styles.hero} h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4`}
      >
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      <section className="my-6 max-w-7xl mx-auto flex flex-wrap gap-2 px-4">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </>
  );
}
