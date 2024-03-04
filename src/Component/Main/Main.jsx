import { useState } from "react";
import "./Main.css";
import { motion, AnimatePresence } from "framer-motion";
import { Formation_cart } from "./Data_info";
const Main = () => {
  const [active, setActive] = useState("all");
  const [Arry_, setArry_] = useState(Formation_cart);
  //! function click btn
  const handelClick = (My_category) => {
    setActive(My_category);
    //! map  and find
    const newArray = Formation_cart.filter((item) => {
      const Array_newArray = item.category.find((my_item) => {
        return my_item === My_category;
      });
      return Array_newArray === My_category;
    });
    //! new array
    setArry_(newArray);
  };
  return (
    <main className="flex">
      <div className="main_left  flex">
        {/* btn all broject */}
        <button
          onClick={() => {
            setActive("all");
            setArry_(Formation_cart);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        {/* btn html & css */}
        <button
          onClick={() => {
            handelClick("html&css");
          }}
          className={active === "html&css" ? "active" : null}
        >
          Html & css
        </button>
        {/* btn react */}
        <button
          onClick={() => {
            handelClick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          react js
        </button>
        {/* btn javascript */}
        <button
          onClick={() => {
            handelClick("javascript");
          }}
          className={active === "javascript" ? "active" : null}
        >
          javascript
        </button>
        {/* btn tailwind css */}
        <button
          onClick={() => {
            handelClick("tailwind css");
          }}
          className={active === "tailwind css" ? "active" : null}
        >
          tailwind css
        </button>
        {/* btn bootstrap */}
        <button
          onClick={() => {
            handelClick("bootstrap");
          }}
          className={active === "bootstrap" ? "active" : null}
        >
          bootstrap
        </button>
        {/* btn php & my_sql */}
        <button
          onClick={() => {
            handelClick("php");
          }}
          className={active === "php" ? "active" : null}
        >
          php & My sql
        </button>
      </div>

      <div className="main_right flex">
        <AnimatePresence>
          {Arry_.map((item) => {
            return (
              <motion.div key={item.id} className="Items_cart"
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type:'spring',  damping:8,stiffness:60}}
              >
                <img width={266} src={item.img} alt="" />
                <div className="box" style={{ width: "266px" }}>
                  <h1>{item.title}</h1>
                  <div className="paragraph">
                    <p>{item.p}</p>
                  </div>
                  <div className="icon flex">
                    <div className="Tow_icon">
                      <a href="#">
                        <span className="icon-link" />
                      </a>
                      <a href="#">
                        <span className="icon-github1" />
                      </a>
                    </div>
                    <a className="link flex" href="#">
                      <span>more</span>
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Main;
