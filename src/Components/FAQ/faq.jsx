import React from "react";
import Sidebar from "../sidebar/sidebar";
import Footer2 from "../footer/footer2";

const FAQ = () => {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        {" "}
        <div style={{ padding: "20px", minHeight: "100vh" }}>
          {" "}
          <h2 style={{ fontSize: "40px" }}>FAQ</h2>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            What is Skin/Wraps?
          </div>
          <p style={{ textAlign: "left" }}>
            Mobile Skin/Wraps are vinyl wraps for your phones which stick to
            your phone back. Mobile Skin/Wraps give a shield to your phone &
            protect your phone from the threat of dust, stains, and scratches.
            This gives a premium and unique look to your phone as well.
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            How to apply Mobile Skin/Wraps?
          </div>
          <p style={{ textAlign: "left" }}>
            The process of wrapping Mobile skin wrap on your phone is simple and
            takes less than five minutes. Watch our “HOW TO APPLY SKINS” section
            and get ready to see your phone’s new look.
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            What are the payment methods?
          </div>
          <p style={{ textAlign: "left" }}>
            We accept all types of online payments, like Google pay, PhonePe,
            UPI, Online banking, debit card, credit card, Etc.
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            I have not received the order but status is showing delivered. what
            should I do?
          </div>
          <p style={{ textAlign: "left" }}>
            Please email us within 24 hours if you have not received your order
            but the tracking status shows delivered. If you do not contact us
            within 24 hours since the order was marked as delivered, we will not
            be able to assist you in this issue. The carrier refuses to do any
            investigation of your order after 24 hours.
          </p>
          <div style={{ fontWeight: "600", textAlign: "left" }}>
            How Long Will The Mobile Wrap Last?
          </div>
          <p style={{ textAlign: "left" }}>
            If applied and used properly, our Wraps can last up to 2 years.
          </p>
        </div>
        <Footer2 />
      </div>
    </div>
  );
};

export default FAQ;
