import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/storeSlice";

const CartItems = () => {
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();

  // const removeItemFromCart = () => {};
  return (
    <StyledCartItemsWrapper>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          onRemoveItem={() =>
            dispatch(
              removeItemFromCart({ itemID: item.id, forceDelete: true })
            )
          }
          onReduce={() =>
            dispatch(
              removeItemFromCart({ itemID: item.id, forceDelete: false })
            )
          }
          onAdd={() => dispatch(addItemToCart(item.id))}
        />
      ))}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export default CartItems;
