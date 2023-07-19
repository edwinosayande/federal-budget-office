import React, { useState, useEffect } from "react";
import "./navbar.css";
import LOGO from "../../assets/bof-logo1.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { signup } = useParams();
  const cartItems = useSelector((state) => state?.cart?.products);
  const isUser = useSelector((state) => state?.user?.currentUser?.token);
  const navigate = useNavigate();
  const [Hasob, setQuickLogin] = useState({ user: "Hasob", token: "bosah" });
  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);


  // Get Screen Size
  useEffect(() => {
    const changeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const loginUser = () => {
    navigate("/logged-in");
    dispatch(login(Hasob));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  let activeStyle = {
    fontWeight: "bold",
  };

  let displayNone = {
    display: "none",
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navMenuWrap">
          <div className="navLeft">
            <img
              className="navLogo"
              src={LOGO}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>

          <div
            className={
              innerWidth <= 1000
                ? `${toggle ? "navRightMob" : "dn"}`
                : "navRight"
            }
          >
            <NavLink
              to="/bond-offer"
              className="navBtn"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div>Bond Offer</div>
            </NavLink>

            {!isUser && (
              <>
                <div className="navBtn">DMO</div>
                <div className="navBtn">Features</div>
              </>
            )}

            {isUser && (
              <>
                <div className="navBtn">Portfolio</div>
                <div className="navBtn">Notification</div>
                <FiUser className="userIcon" />
              </>
            )}

            {!isUser && (
              <>
                <div className="navLoginBtn" onClick={loginUser}>
                  Login
                </div>

                <NavLink
                  to="/signup"
                  className="navSignBtn"
                  style={({ isActive }) => (isActive ? displayNone : undefined)}
                >
                  <div>Sign Up</div>
                </NavLink>
              </>
            )}

            {isUser && (
              <div className="navSignBtn" onClick={logoutUser}>
                Log Out
              </div>
            )}

            <div className="cartWrap" onClick={() => navigate("/cart")}>
              {cartItems.length > 0 && (
                <div className="cartQty">{cartItems?.length}</div>
              )}
              <FiShoppingCart className="cartIcon" />
            </div>
          </div>
          {toggle ? (
            <AiOutlineClose
              style={{ color: toggle ? "white" : "black" }}
              className="openBars"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <div className="barsWrap" onClick={() => setToggle(!toggle)}>
              {cartItems.length > 0 && <div className="barsQty"></div>}
              <FaBars
                style={{ color: toggle ? "white" : "black" }}
                className="openBars"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
