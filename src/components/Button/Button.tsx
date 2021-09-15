import React, { memo } from "react";
import styled from "styled-components/macro";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = memo(({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
});

const StyledButton = styled.button`
  background-color: var(--buttonBackground);
  border: 0;
  border-radius: 2px;
  padding: 10px 15px;
  color: var(--buttonText);
  font-weight: 400;

  &:active {
    background-color: var(--buttonPressedBackground);
  }
`;

export default Button;
