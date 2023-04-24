import React from "react";
import styles from '../styles/style.module.css';

const Component = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign In</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Component;