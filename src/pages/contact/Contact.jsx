import style from "./contact.css";
import {
  FaTimes,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="sectionn">
      <h3 className="con">Contact us </h3>
      <h3 className="mess">
        Any question or remarks? Just write us a message!
      </h3>
      <div className="box">
        <div className="lc">
          <h2 className="ci">Contact Information</h2>
          <p className="f">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <br />
          <br />
          <p className="f">
            <FaPhoneAlt size={16} />
            +91 8723057499
          </p>{" "}
          <br />
          <p className="f">
            <FaEnvelope size={16} />
            sanowar258hussain2018@gmail.com
          </p>
          <br />
          <p className="f">
            <FaMapMarkerAlt size={16} />
            Guwahati NE376*2JSH
          </p>
          <div className="ico">
            <FaFacebookF size={20} className="ic" />
            <FaTwitter size={20} className="ic" />
            <FaInstagram size={20} className="ic" />
            <FaLinkedinIn size={20} className="ic" />
          </div>
        </div>
        <div className="rc">
          <p className="f">
            Name:
            <input type="text" />
          </p>
          <p className="f">
            E-mail:
            <input type="email" />
          </p>
          <p className="f">
            Phone:
            <input type="text" pattern="\d*" maxlength="10"></input>
          </p>
          <br />
          <h4 className="ci">What the of website do you need?</h4>
          <p className="f">Your message:</p>
          <p className="f">
            <textarea rows="6" cols="55" />
          </p>
          <div className="btu">
            <button onClick={() => alert("Message Sent!")}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
