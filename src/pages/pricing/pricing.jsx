import React from "react";

const Pricing = () => {
  return (
    <section className="page pricing">
      <div className="container">
        <h1>Pricing</h1>
        <p>
          Linkify is completely free. You can shorten as many links as you want,
          anytime, without limits or subscriptions.
        </p>

        <div className="pricing__card">
          <h2>Free Plan</h2>
          <p>Unlimited URL shortening. No hidden fees. Always free.</p>
          <button className="btn" data-type="narrow">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
