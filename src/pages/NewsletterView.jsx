import React from "react";

const NewsletterView = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="james"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue=""
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue=""
        />
      </div>
      <button
        className="btn btn-block"
        type="submit"
        style={{ marginTop: "0.5rem", padding: "0.75rem" }}
      >
        Submit
      </button>
    </form>
  );
};

export default NewsletterView;
