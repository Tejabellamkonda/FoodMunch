import { useState } from "react";
import Header from "../Header";
import Footer from "../FooterSection";
import "./index.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const onCliCkSubmit = (e) => {
    alert("sent successfully");
    e.preventDefault();
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");

    const userDetails = { name, email, phoneNumber, message };
    console.log(userDetails);
  };

  return (
    <div className="main-container">
      <Header />
      <div>
        <form className="form-container" onSubmit={onCliCkSubmit}>
          <h1>Shoot Us a Message</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ex:Teja Bellamkonda"
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
              value={name}
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ex:foodmunch@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              required
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your phone number with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
