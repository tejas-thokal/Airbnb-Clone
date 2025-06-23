import React, { useState } from 'react';
import "./SignupModal.css";

export default function SignupModal({ onClose, phone }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone,
        firstName,
        lastName,
        dob,
        email
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Signup complete!');

      const userData = {
        firstName,
        phone,
        email
      };

      onClose(userData); // ✅ send data back to App.js to set state + localStorage
    } else {
      alert('❌ ' + data.message);
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('❌ Failed to connect to server.');
  }
};



  return (
    <div className="modal-backdrop">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h3 className="modal-header">Finish signing up</h3>

        <div className="form-group">
          <label>Legal name</label>
          <input type="text" placeholder="First name on ID" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name on ID" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <small>Make sure this matches the name on your government ID.</small>
        </div>

        <div className="form-group">
          <label>Date of birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          <small>You must be at least 18. Your birthday won’t be shared.</small>
        </div>

        <div className="form-group">
          <label>Contact info</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <small>We'll email you trip confirmations and receipts.</small>
        </div>

        <div className="terms">
          By selecting <b>Agree and continue</b>, you agree to Airbnb’s 
          <a href="#"> Terms of Service</a>, <a href="#">Payments Terms</a>, 
          <a href="#">Nondiscrimination Policy</a>, and acknowledge the 
          <a href="#"> Privacy Policy</a>.
        </div>

        <button className="continue-btn" onClick={handleSignup}>Agree and continue</button>

        <div className="marketing">
          <input type="checkbox" id="marketing" />
          <label htmlFor="marketing">
            I don’t want to receive marketing messages from Airbnb.
          </label>
        </div>
      </div>
    </div>
  );
}
