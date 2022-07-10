/*
homework:

1. CartPage - change subtotal to useMemo instead of recalculate each render 
2. Change Menu to use NavLink of react router.
3. Change the project to use Typescript.

*/

import styled from "styled-components";
import Header from "./Components/Header";

import CartPage from "./Pages/CartPage";
import ItemsPage from "./Pages/ItemsPage";
import { deviceSize } from "./constants";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStoreItems } from "./redux/storeSlice";
function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.store.items);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchStoreItems());
    }
  }, [items,dispatch]);
  return (
    <StyledAppWrapper>
      <Header />
      <StyledContentWrapper>
        <Routes>
          <Route
            path="*"
            element={
              <ItemsPage
                category={{
                  filterName: "best-seller",
                  presentationName: "Best Seller",
                }}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <ItemsPage
                category={{
                  filterName: "home",
                  presentationName: "Home",
                }}
              />
            }
          ></Route>
          <Route
            path="/office"
            element={
              <ItemsPage
                category={{
                  filterName: "office",
                  presentationName: "Office",
                }}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <ItemsPage
                category={{
                  filterName: "sports",
                  presentationName: "Sports",
                }}
              />
            }
          ></Route>
          <Route
            path="/clothing"
            element={
              <ItemsPage
                category={{
                  filterName: "clothing",
                  presentationName: "Clothing",
                }}
              />
            }
          ></Route>
        </Routes>
        <CartPage />
      </StyledContentWrapper>
    </StyledAppWrapper>
  );
}

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`;

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export default App;
