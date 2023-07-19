import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  increaseCart,
  removeProduct,
} from "../../features/cart/cartSlice";
import "./cartItem.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Coat from "../../assets/Coat.png";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state?.cart?.total);

  const removeItem = (item) => {
    dispatch(removeProduct(item));
  };

  const increaseItem = (item) => {
    dispatch(increaseCart(item));
  };

  const decreaseItem = (item) => {
    dispatch(decreaseCart(item));
  };

  return (
    <>
      <div className="cartItem">
        <div className="itemNameWrap">
          <input type="checkbox" className="checkbox" />
          <img src={Coat} alt="" />
          <div className="itemTextBig">{item.title}</div>
        </div>

        <div className="itemAction">
          <div className="auto">Automatic</div>
          <div className="del" onClick={() => removeItem(item)}>
            Delete
          </div>
        </div>

        <div className="itemAmtWrap">
          <div style={{ color: "#7F817F", fontSize: "14px" }}>Value(₦)</div>
          <div className="itemAmt">
            <div className="price">
              {item.minimum.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </div>
            <div className="itemIncDec">
              <button>
                <AiOutlineMinusCircle
                  onClick={() => decreaseItem(item)}
                  style={{ fontSize: "16px" }}
                />
              </button>
              <div style={{ color: "#7F817F", fontSize: "16px" }}>
                {item.quantity < 10 ? "0" + item.quantity : item.quantity}
              </div>
              <button>
                <AiOutlinePlusCircle
                  onClick={() => increaseItem(item)}
                  style={{ fontSize: "16px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
