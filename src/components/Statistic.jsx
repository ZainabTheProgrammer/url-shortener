import React from "react";
import Card from "./Card";
import BrandImg from "../assets/icon-brand-recognition.svg";
import DetailedImg from "../assets/icon-detailed-records.svg";
import CustomImg from "../assets/icon-fully-customizable.svg";

const Statistic = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics__title">
          <h2>Track Your Shortened Links</h2>
          <p>
            Get clear insights on how your shortened links are performing — view
            clicks, engagement, and reliability all in one place.
          </p>
        </div>

        <div className="statistics__cards">
          <Card
            image={BrandImg}
            className="brand"
            alt="Fast Shortening"
            title="Fast & Reliable"
            description="Shorten any long URL instantly with secure, reliable performance and easy-to-use functionality."
          />

          <Card
            image={DetailedImg}
            className="detailed"
            alt="Detailed Analytics"
            title="Detailed Analytics"
            description="Monitor how many times your links are clicked and keep track of your most active links effortlessly."
          />

          <Card
            image={CustomImg}
            alt="Easy Management"
            title="Easy Management"
            description="Access all your shortened links in one dashboard — copy, share, or delete them anytime you want."
          />
        </div>
      </div>
    </section>
  );
};

export default Statistic;
