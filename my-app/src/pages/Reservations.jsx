import banner from "../assets/images/ReservationsBanner.jpg";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import { useState, useEffect } from "react";
import Modal from "../components/ui/Modal";


const generateTimeSlots = (date) => {
  if (!date) return [];

  const day = new Date(date).getDay(); // 0 = Sunday

  // ❌ Sunday → closed
  if (day === 0) {
    return "CLOSED";
  }

  let startHour, endHour;

  // MON–FRI
  if (day >= 1 && day <= 5) {
    startHour = 12; // 12 PM
    endHour = 23;   // 11 PM
  }

  // SATURDAY
  if (day === 6) {
    startHour = 15; // 3 PM
    endHour = 24;   // 12 AM
  }

  const slots = [];

  for (let hour = startHour; hour < endHour; hour++) {
    const formatted = formatTime(hour);
    slots.push(formatted);
  }

  return slots;
};

const formatTime = (hour) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  const adjusted = hour % 12 === 0 ? 12 : hour % 12;
  return `${adjusted}:00 ${suffix}`;
};




export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [isClosed, setIsClosed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!selectedDate) return;
  
    const result = generateTimeSlots(selectedDate);
  
    if (result === "CLOSED") {
      setIsClosed(true);
      setTimeSlots([]);
      setSelectedTime("");
    } else {
      setIsClosed(false);
      setTimeSlots(result);
    }
  }, [selectedDate]);
  return (
    <PageWrapper fullBleed>
      <div className="reservations-page">

        {/* HERO */}
        <section
          className="reservations-hero"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay" />

          <div className="hero-content">
            <h1>Reservations</h1>
            <p>Secure your table for an unforgettable evening</p>
          </div>
        </section>

        {/* FORM */}
        <section className="reservations-form-section">
          <div className="form-card">
            <h2>Make a Reservation</h2>

            <form className="reservation-form">
              <div className="grid">
                <input placeholder="Full Name" />
                <input placeholder="Email" />

                <input placeholder="Phone Number" />
                <select>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                </select>

                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                {isClosed ? (
                    <div className="closed-message">
                      We’re closed on Sundays. Please select another day.
                    </div>
                  ) : (
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      disabled={!timeSlots.length}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  )}

                <textarea
                  className="full"
                  placeholder="Special requests..."
                />
              </div>

              <button className="reserve-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowConfirmation(true);
              }}>
                Reserve Your Table
              </button>
            </form>
          </div>
        </section>
        <Modal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <div className="confirmation-modal">

            <div className="confirmation-icon">✓</div>

            <h2 className="confirmation-title">
              Reservation Confirmed
            </h2>

            <p className="confirmation-subtitle">
              Confirmation sent to your email
            </p>

            <div className="confirmation-details">
              <p>{selectedDate}</p>
              <p>{selectedTime}</p>
            </div>

            <button
              className="confirmation-btn"
              onClick={() => setShowConfirmation(false)}
            >
              Done
            </button>

          </div>
        </Modal>

        {/* WHAT TO EXPECT */}
        <section className="expect-section">
          <h2>What to Expect</h2>

          <div className="expect-grid">
            <div className="expect-item">
              <div className="icon">✉️</div>
              <h4>Confirmation Email</h4>
              <p>Receive instant confirmation with reservation details.</p>
            </div>

            <div className="expect-item">
              <div className="icon">🍸</div>
              <h4>VIP Check-in</h4>
              <p>Skip the wait with our seamless check-in experience.</p>
            </div>

            <div className="expect-item">
              <div className="icon">📞</div>
              <h4>24/7 Support</h4>
              <p>Our team is always available for assistance.</p>
            </div>
          </div>
        </section>

        {/* VIP SECTION */}
        <section className="vip-section">
          <div className="vip-card">
            <h3>VIP Membership Benefits</h3>
            <p>
              Elevate your experience with exclusive perks and priority access.
            </p>

            <div className="vip-grid">
              <div>Priority Booking</div>
              <div>Complimentary Perks</div>
              <div>Dedicated Service</div>
            </div>

            <button onClick={() => navigate("/vip")} className="vip-btn">Join VIP Membership</button>
          </div>
        </section>

      </div>
    </PageWrapper>  
  );
}