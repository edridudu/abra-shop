import styled from "styled-components";

const Button = ({ children, className, ...props}) => {
  return <StyledButtonWrapper {...props} className={className}>{children}</StyledButtonWrapper>;
};

const StyledButtonWrapper = styled.button`
  width: 100%;
  border: solid 1px #000;
  background-color: #fff;
  font-family: Assistant;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.72px;
  color: #000;
  padding: 12px 0;
  :hover {
    background-color: #000;
    color: #fff; 
  }

  :disabled {
    border: solid 1px #808080;
    background-color: #808080;
    color: #fff;
  }
`;

export default Button;
