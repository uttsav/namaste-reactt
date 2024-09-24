const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
      </div>
      <div className="container">
        <form action="/submit_form" method="post">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />

          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject.."
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
