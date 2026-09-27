import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    navigate("/");
  }

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>

      <p>
        If you would like to contact me, please fill out the form below.
      </p>

      <div className="contact-info">
        <h2>Contact Information</h2>

        <p>
          <strong>Email:</strong> lxn034043@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> 6473213218
        </p>
      </div>

      <h2>Send Me a Message</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Number
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;