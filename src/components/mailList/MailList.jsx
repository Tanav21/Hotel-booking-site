import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <form
          action="https://formspree.io/f/mgegdrle"
          method="POST"
        >
          <input placeholder="Your Email" type="email" name="email"></input>
          <input placeholder="Your Message" name="message"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default MailList