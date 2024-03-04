import "./Hero.css";
import Lottie from "lottie-react";
import devAnomation from "../../../public/animation/dev.json";
import imgAnimation from "../../../public/animation/img_p.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left_part">
        <div className="parent_avatar flex">
          {/* <img src="/public/me.png" alt="" /> */}
          <Lottie
            className=""
            animationData={imgAnimation}
            loop={true}
            lottieRef={lottieRef}
            onLoadedImages={() => {
              // @ts-ignore -- speed animation
              lottieRef.current.setSpeed(1.5);
            }}
            style={{ width: 160 }}
          />
          <span className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }} //start
          transition={{ duration: 2 }} // time
          animate={{ opacity: 1 }} //and
        >
          Full Stack Web Developer .
        </motion.h1>
        <p>
          I'm a passionate Full Stack Web Developer with expertise in both
          front-end and back-end technologies. With 2 of experience, I've
          honed my skills in creating responsive, user-friendly web applications
          that merge seamless functionality with elegant design.
        </p>
        <div className="icons flex">
          <div className="icon-github1" />
          <div className="icon-facebook" />
          <div className="icon-youtube" />
          <div className="icon-instagram" />
          <div className="icon-social-twitter" />
        </div>
      </div>
      <div className="right_part ">
        <Lottie
          className="Lottie"
          animationData={devAnomation}
          style={{ width: 390 }}
        />
      </div>
    </section>
  );
};

export default Hero;
