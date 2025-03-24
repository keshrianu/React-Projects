import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleform = (e) => {
    e.preventDefault();
    const contactdata = {
      username: name,
      email: mail,
      msg: message,
    };
    alert(`${contactdata.username}, u have submitted the data successfully...`);
  };

  return (
    <>
      <form onSubmit={handleform}>
        <center>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-600 h-12 w-40 p-4 rounded"
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <br />
            <input
              type="text"
              name="mail"
              id="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
                className="border border-gray-600 h-12 w-40 p-4 rounded"
            />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <br />
            <textarea
              name="msg"
              id="msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-600 h-12 w-40 p-4 rounded"
            ></textarea>
          </div>
          <div>
            <button  className="bg-green-300 rounded p-4"type="submit">Send</button>
          </div>
        </center>
      </form>
    </>
  );
};

export default ContactForm;
