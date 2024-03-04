import "./Contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import messageAnimation from "../../../public/animation/message.json";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xyyqqzwa");
  return (
    <div className="contact_us">
      <h1>
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p>
        Contact us for more information and get notified when i publish
        something new
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <div className="left_Forme">
          <form onSubmit={handleSubmit}>
            <div className="G_email flex" style={{ marginBottom: "2rem" }}>
              <label htmlFor="email">Email Address: </label>
              <input
                type="email"
                autoComplete="off"
                required
                id="email"
                name="email"
                placeholder="Your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="G_message flex">
              <label htmlFor="message ">Your message: </label>
              <textarea required name="message" id="message">
                {" "}
              </textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="submit"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>

            
            <p className="animation_done">
              {state.succeeded && (
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "2rem",
                    display: "flex",
                  }}
                >
                  <Lottie
                    style={{ height: 40, margin: "0px 10px" }}
                    loop={false}
                    animationData={doneAnimation}
                  />{" "}
                  <p style={{ marginTop: "7px" }}>
                    You message has been sent successfully .{" "}
                  </p>
                </p>
              )}
            </p>
          </form>
        </div>

        <div className="right_img" style={{ width: 360 }}>
          <Lottie animationData={messageAnimation}  className="message_animation"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
