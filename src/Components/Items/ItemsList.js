import styled from "styled-components";
import ItemCard from "./ItemCard";
import { deviceSize } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/storeSlice";

const ItemsList = ({ filterName }) => {
  const dispatch = useDispatch();

  const storeItems = useSelector((state) => state.store.items);

  const itemsCategory = storeItems.filter((item) =>
    item.catagories.includes(filterName)
  );
  return (
    <ItemsListWrapper>
      {itemsCategory.map((item) => (
        <ItemCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAddToBag={() => dispatch(addItemToCart(item.id))}
        />
      ))}
    </ItemsListWrapper>
  );
};

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px 24px;
  flex-wrap: wrap;
  margin-bottom: 117px;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 20px 18px;
    margin-bottom: 89px;
  }
`;

export default ItemsList;
