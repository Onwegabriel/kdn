import React from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    onClose(); // Close modal after submitting
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
