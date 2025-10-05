import React from "react";
import HeroImg from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex">
          <div className="hero__image">
            <img src={HeroImg} alt="Working illustration" />
          </div>

          <div className="hero__content">
            <h1>Shorten and Share Links Easily</h1>
            <p>
              Linkify helps you turn long, messy URLs into clean and simple links
              you can share anywhere. Easily manage, monitor, and organize all
              your shortened links in one place.
            </p>
            <a href="/" data-type="narrow" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
