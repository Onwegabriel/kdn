import React from 'react';
import './SignupModal.css';

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    onClose(); // Close modal after submitting
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <label>
            Confirm Password:
            <input type="password" required />
          </label>
          <div className="button-group">
            <button type="submit" className="signup-button">Sign Up</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
