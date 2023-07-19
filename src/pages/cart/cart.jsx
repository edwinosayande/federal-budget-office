import React from "react";
import "./cart.css";
import Navbar from "../../components/navbar/navbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils";
import CartItem from "../../components/cartItem/cartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.products);
  const total = useSelector((state) => state?.cart?.total);


  return (
    <div className="cart">
      <Navbar />
      <div className="cart-container">
        <div className="itemWrap">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}

          {cartItems?.length > 0 ? (
            <div className="totalbox">
              <div className="sumarryWrap">
                <div className="summaryFigures">
                  <div className="fees">
                    <div className="greytitles drop">
                      <span>Fees + Taxes</span> <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className="greytitles">N2.09</div>
                  </div>

                  <div className="totalWrap">
                    <div className="greytitles TB">Total Buy</div>
                    <div className="total">{formatCurrency(total + 2.09)}</div>
                  </div>
                </div>

                <div className="greytitles">
                  This is a Saving Bond, you have a<br /> fixed income
                </div>
              </div>

              <button className="cart-checkoutBtn">Check Out</button>
            </div>
          ) : (
            <div style={{ margin: "0 auto" }}>
              <h3>Cart is empty</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
