import Hero from "./Component/Hero/Hero";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import { useEffect, useState } from "react";
const App = () => {
  //! useEffect  use fitch data -or- updating dom html
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.screenX <300) {
        setScroll(true)
      }else{setScroll(false)} 
    })
  }, []);
  const [scroll, setScroll] = useState(false);
  return (
    <div className="Container" id="scroll_Up">
      <Header />
      <Hero />
      <div className="line_page" />
      <Main />
      <div className="line_page" />
      <Contact />
      <div className="line_page" />
      <Footer />
      <a href="#scroll_Up" style={{ opacity: scroll ? 1 : 0, transition:'3s' }}>
        <button className="scrollTop icon-arrow-">^</button>
      </a>
    </div>
  );
};
export default App;
