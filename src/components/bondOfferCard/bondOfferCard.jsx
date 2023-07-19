import React from "react";
import "./bondOfferCard.css";
import Coat from "../../assets/Coat.png";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cart/cartSlice";
console.log(useDispatch);

const BondOfferCard = ({ offer }) => {
  const dispatch = useDispatch();

  const addCart = (offer) => {
    dispatch(addProduct(offer));
  };

  return (
    <>
      <div className="bondWrap">
        <div className="rowWraps">
          <img src={Coat} alt="" />
          <div className="FSB">FGN Savings Bond</div>
        </div>

        <div className="columnWraps">
          <div className="DSB">{offer.title}</div>
          <div className="bondTitles">Due October 12, 2026</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">Minimum</div>
          <div>₦ {offer.minimum}</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">% Per Year</div>
          <div>{offer.percentagePerYear}%</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">Interest Payment</div>
          <div>{offer.interestPayment}</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">Opening</div>
          <div>{offer.opening}</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">Closing Date</div>
          <div>{offer.closing}</div>
        </div>

        <div className="rowWraps">
          <div className="bondTitles">Settlement</div>
          <div>{offer.settlement}</div>
        </div>

        <div className="cartBtnWrap">
          <div className="cartBtn" onClick={() => addCart(offer)}>
            Add to cart
          </div>
          <AiOutlineHeart className="bondHeart" />
        </div>
      </div>
    </>
  );
};

export default BondOfferCard;
