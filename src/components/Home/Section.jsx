import React from "react";
import Bg from "../../assets/bg.svg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="flex justify-center items-center flex-col sm:flex-row p-8 flex-wrap md:flex-nowrap border-b border-black mt-12 sm:mt-20">
      <article className="p-6">
        <main className="flex flex-col justify-center items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Welcome at ChatHub.in
          </h1>
          <span className="sm:text-xl font-semibold">
            <p>Stay connected with everyone.</p>
            <p>Safe,reliable,and fast...</p>
          </span>
          <Link
            to="/login"
            className="p-2 border border-slate-800 text-slate-800 hover:bg-gray-500 hover:text-white rounded-lg mt-2 font-semibold"
          >
            Get Started
          </Link>
        </main>
      </article>
      <img className="h-96 sm:h-[30rem]" src={Bg} alt="can't load" />
    </section>
  );
};

export default Section;
