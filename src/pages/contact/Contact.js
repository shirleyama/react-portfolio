import React from "react";
import "./contact.css";
import CV from "../../assets/CV-Shirley-Thompson.pdf";
import { useState } from "react";

const styles = {
  header: {
    textAlign: "left",
    margin: "20px 0",
  },

  contact_detail: {
    textAlign: "center",
    color: "var(--color-bg)",
    marginTop: "15px",
  },
  success: {
    textAlign: "center",
    color: "var(--color-bg)",
    marginTop: "15px",
  },
};

function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "8442d1a9-4635-4e30-84db-809f51db94e2",
  });

  const handleChange = (event) => {
    //console.log(event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);

    // const formData = new FormData(form);
    // const object = Object.fromEntries(formData);
    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="descriptionSection">
            <h2 id="contact" style={styles.header}>
              Contact Me
            </h2>
            <h3> Shirley Thompson</h3>
            <p>
              <a style={styles.success} href="mailto:quists@hotmail.com">
                <b>Email</b> : quists@hotmail.com
              </a>
            </p>
            <p>
              <a style={styles.success} href="https://github.com/shirleyama">
                <b>Github </b>: shirleyama
              </a>
            </p>
            <p>
              <a style={styles.success} href="www.linkedin.com/in/shirleyama">
                <b>LinkedIn </b>shirleyama
              </a>
            </p>
            <p>
              <a href={CV} download className="btn">
                Download CV
              </a>
            </p>
            {/* <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Message: {formData.message}</p> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12"></div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Email Address"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              cols="30"
              rows="8"
            ></textarea>
            <button className="btn c-btn btn-primary">Submit</button>
          </form>
          {success && (
            <p style={styles.success}>Form Submitted Successfully!</p>
          )}
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12"></div>
      </div>
    </section>
  );
}

export default Contact;
