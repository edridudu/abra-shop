import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMedia } from "../../../Hooks/useMedia";
import menuImage from "../../../Images/menu.png";
import Drawer from "../Drawer";
import DrawerMenu from "./DrawerMenu";
import { NavLink } from "react-router-dom";
const Menu = ({
  menuItems,
  activeId,
  className,
  humburgerResolution = 880,
}) => {
  const breakPoints = [
    { min: 0, max: humburgerResolution, name: "mobile" },
    { min: humburgerResolution + 1, max: 10000, name: "desktop" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const breakPoint = useMedia(breakPoints);

  return (
    <>
      <MenuWrapper className={className}>
        {breakPoint?.name === "mobile" && (
          <>
            <Hamburger
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              src={menuImage}
              alt="Burger menu"
            ></Hamburger>
            {isDrawerOpen && (
              <Drawer>
                <DrawerMenu
                  menuItems={menuItems}
                  onClose={() => setIsDrawerOpen(false)}
                />
              </Drawer>
            )}
          </>
        )}
        {breakPoint?.name === "desktop" &&
          menuItems.map((item) => {
            return (
              <MenuItem key={item.id} to={item.url}>
                {item.name}
              </MenuItem>
            );
          })}
      </MenuWrapper>
    </>
  );
};

const MenuItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid #fff;
    font-weight: 600;
  }

  color: #fff;
`;
const MenuWrapper = styled.nav`
  font-family: Assistant;
  display: flex;
  gap: 26px;
`;

const Hamburger = styled.img`
  cursor: pointer;
`;

export default Menu;
