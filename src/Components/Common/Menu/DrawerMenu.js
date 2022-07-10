import styled from "styled-components";
import LogoImage from "../../../Images/logo-black.png";
import closeImage from "../../../Images/x-icon.png";
import logoutImage from "../../../Images/logout.png";
import { NavLink } from "react-router-dom";
const DrawerMenu = ({ activeId, menuItems, onClose, onItemChanged }) => {
  return (
    <>
      <DrawerMenuWrapper>
        <img src={LogoImage} alt="Logo"></img>
        <StyledCloseButton
          onClick={onClose}
          src={closeImage}
          alt="Close button"
        ></StyledCloseButton>
      </DrawerMenuWrapper>
      <StyledMenuItemsWrapper>
        {menuItems.map((item) => (
          <StyledMenuItem
            to={item.url}
            onClick={() => {
              onClose();
            }}
          >
            {item.name}
          </StyledMenuItem>
        ))}
      </StyledMenuItemsWrapper>
      <StyledLogoutWrapper>
        <img src={logoutImage} alt="Logout" />
        <StyledLogutText>Log out</StyledLogutText>
      </StyledLogoutWrapper>
    </>
  );
};

const StyledLogutText = styled.span`
  margin-left: 4px;
`;

const StyledLogoutWrapper = styled.div`
  position: absolute;
  bottom: 41px;
  left: 18px;
  font-family: Assistant;
  font-size: 16px;
  font-weight: 500;
  color: #808285;
  display: flex;
`;
const StyledMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  margin-left: 18px;
  gap: 26px;
`;
const DrawerMenuWrapper = styled.div`
  padding-left: 18px;
  padding-top: 20px;
  display: flex;
`;

const StyledCloseButton = styled.img`
  margin-left: auto;
  padding-right: 16px;
  cursor: pointer;
`;

const StyledMenuItem = styled(NavLink)`
  font-family: Assistant;
  font-size: 20px;
  font-weight: normal;
  color: #1a223e;
  padding-left: 4px;
  text-decoration: none;
  &.active {
    border-left: 2px solid #1a223e;
    font-weight: 600;
  }
`;
export default DrawerMenu;
