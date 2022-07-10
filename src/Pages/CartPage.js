import styled from "styled-components";
import { deviceSize } from "../constants";
import EmptyCart from "../Components/Cart/EmptyCart";
import CartItems from "../Components/Cart/CartItems";
import Button from "../Components/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../redux/storeSlice";

const Cart = () => {
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();

  const getCartSubtotal = () => {
    let sum = 0;
    for (const item of cart) {
      sum += item.quantity * item.price;
    }

    return sum;
  };

  const sum = getCartSubtotal();

  const isCartEmpty = cart.length === 0;
  return (
    <StyledCartWrapper>
      <CartItemsWrapper>
        <StyledCartTitle>My cart</StyledCartTitle>
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <CartItems cart={cart}></CartItems>
            <StyledCheckoutWrapper>
              <StyledTotalWrapper>
                <StyledSubtotal>SubTotal</StyledSubtotal>
                <StyledSubtotalPrice>{sum} ILS</StyledSubtotalPrice>
              </StyledTotalWrapper>
              <StyledCheckoutButton onClick={() => dispatch(checkout())}>
                CHECKOUT
              </StyledCheckoutButton>
            </StyledCheckoutWrapper>
          </>
        )}
      </CartItemsWrapper>
    </StyledCartWrapper>
  );
};

const StyledCheckoutButton = styled(Button)`
  margin-bottom: 24px;
`;

const CartItemsWrapper = styled.div`
  @media (min-width: ${deviceSize.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }
`;
const StyledCheckoutWrapper = styled.div`
  margin-top: auto;
  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
  }
`;
const StyledTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledSubtotal = styled.span``;

const StyledSubtotalPrice = styled.span``;

const StyledCartWrapper = styled.div`
  flex-basis: calc(316px - (24px * 2));
  min-width: calc(316px - (24px * 2));
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 40px 24px 0;
  font-family: Assistant;
  height: calc(100vh - 78px - 40px);
  position: relative;
  @media (max-width: ${deviceSize.mobile}) {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    min-height: 393px;
    flex-basis: 393px;
    z-index: 5;
    padding: 24px 0 0;
  }
`;

const StyledCartTitle = styled.h1`
  font-family: Assistant;
  font-size: 40px;
  font-weight: bold;
  color: #1a223e;
  text-align: center;

  @media (max-width: ${deviceSize.mobile}) {
  }
`;
export default Cart;
