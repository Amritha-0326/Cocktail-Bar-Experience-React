import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import banner from "../assets/images/VIPBanner.png";
import { useState } from "react";

export default function VIPMembership() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Platinum");

  return (
    <PageWrapper fullBleed>
      <div className="vip-page">

        {/* HERO */}
        <section
          className="vip-hero"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay" />
          <div className="hero-content">
            <h1>VIP MEMBERSHIP</h1>
            <p className="subtitle">Elevate Your Experience</p>
          </div>
        </section>

        {/* MEMBERSHIP TIERS */}
        <section className="vip-tiers">
          {[
            { name: "Gold", price: "$49", class: "gold" },
            { name: "Platinum", price: "$99", class: "platinum" },
            { name: "Diamond", price: "$199", class: "diamond" },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`tier-card ${tier.class} ${
                selectedPlan === tier.name ? "active" : ""
              }`}
              onClick={() => setSelectedPlan(tier.name)}
            >
              <h3>{tier.name}</h3>
              <h2>{tier.price}</h2>
              <span>per month</span>
              <button className="vip-submit full">Select Plan</button>
            </div>
          ))}
        </section>

        {/* BENEFITS TABLE */}
        <section className="vip-benefits">
          <h2>Benefits Comparison</h2>
          <table>
            <thead>
              <tr>
                <th>Benefits</th>
                <th>Gold</th>
                <th>Platinum</th>
                <th>Diamond</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Priority Booking</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Concierge</td>
                <td>✖</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Private Events</td>
                <td>✖</td>
                <td>✖</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* FORM */}
        <section className="vip-form">
          <h2>Register for {selectedPlan}</h2>

          <form className="form-grid">
            <input placeholder="Full Name" required />
            <input placeholder="Email" type="email" required />
            <input placeholder="Phone" required />
            <input type="date" placeholder="Date of Birth" />

            <input placeholder="Address" className="full" />
            <input placeholder="City" />
            <input placeholder="Zip Code" />

            <textarea
              placeholder="Dietary preferences / allergies"
              className="full"
            />

            {/* PAYMENT */}
            <div className="payment-section">
              <h3>Payment Method</h3>
              <input placeholder="Card Number" />
              <div className="payment-row">
                <input placeholder="MM/YY" />
                <input placeholder="CVC" />
              </div>
            </div>

            <label className="checkbox-full">
              <input type="checkbox" required />
              I agree to the terms & conditions
            </label>

            <button className="vip-submit full">
              Complete Registration
            </button>
          </form>
        </section>

        {/* CTA */}
        <section className="vip-final">
          <h2>Welcome to the VIP Experience</h2>
          <p>
            Once registered, you’ll receive your membership details via email.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}