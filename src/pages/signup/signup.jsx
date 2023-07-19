import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./signup.css";
import coat_left from "../../assets/coat_left.png";
import coat_right from "../../assets/coat_right.png";

const Signup = () => {
  return (
    <div className="signup">
      <Navbar />
      <div className="signup-Wrap">
        <div className="signup-imgWrap">
          <img className="backgroundImg-left" src={coat_left} alt="" />
          <img className="backgroundImg-right" src={coat_right} alt="" />
        </div>
        <div className="signup-container">
          <form action="">
            <div className="signupTitle">Signup</div>
            <div className="subTitle">Stop spending, Start investing</div>

            <div className="inputField">
              <label htmlFor="" className="FN">
                First name<span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="Enter your First Name" />
            </div>

            <div className="inputField">
              <label htmlFor="" className="FN">
                Last name<span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="Enter your First Name" />
            </div>

            <div className="inputField">
              <label htmlFor="" className="FN">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input type="email" placeholder="Enter your First Name" />
            </div>

            <div className="inputField">
              <label htmlFor="" className="FN">
                password<span style={{ color: "red" }}>*</span>
              </label>
              <input type="password" placeholder="Enter your First Name" />
            </div>

            <div className="signup-TC">
              <input type="checkbox" className="checkbox" />
              <div>
                By continuing, you agree to the{" "}
                <span
                  style={{
                    color: "#417B13",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Terms and conditions
                </span>
              </div>
            </div>

            <button className="signupBtn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
