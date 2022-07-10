import styled from "styled-components";
import LogoImage from "../../Images/logo.png";
import AccountImage from "../../Images/account_circle.png";
import Menu from "../Common/Menu";
import { deviceSize } from "../../constants";

const defaultMenuConfig = [
  { id: 1, name: "BestSellers", url: "/best-seller"},
  { id: 2, name: "Clothing", url: "/clothing" },
  { id: 3, name: "Home", url: "/home" },
  { id: 4, name: "Office", url: "/office" },
  { id: 5, name: "Sports", url: "/sports" },
];

const Header = () => {
    

  return (
    <StyledHeaderWrapper>
      <StyledLogo src={LogoImage}></StyledLogo>
      <StyledMenu menuItems={defaultMenuConfig}></StyledMenu>
      <StyledAccountIcon src={AccountImage}></StyledAccountIcon>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: #1a223e;
  display: flex;
  padding: 21px 0px;
  padding-left: 64px;

  align-items: flex-end;
  @media (max-width: ${deviceSize.mobile}) {
    padding-left: 18px;
  }
`;

const StyledMenu = styled(Menu)`
    @media(max-width: ${deviceSize.mobile}) {
        padding-right: 66px;
        order: -1;
    }
` 
const StyledLogo = styled.img`
  padding-right: 98px;
  align-self: center;
`;

const StyledAccountIcon = styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 24px;
`;

export default Header;
