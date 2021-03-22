import React from "react";
import styled from "styled-components/macro";
import {ReactComponent as SwapIcon} from "../../assets/images/shared/swap.svg";

const Container = styled.div`
  min-height: 48px;
  min-width: 48px;
  border-radius: 50%;
  border: ${({theme: {colors}}) => `1px solid ${colors.lightBlue}`};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    transform: rotate(90deg);
  }
  @media (min-width: ${({theme: {mediaQueries}}) =>
      mediaQueries.mobileBreakpoint}) {
    margin: 0 44px;
  }
`;

const SwapDivider = ({onClick}) => {
  return (
    <Container onClick={onClick}>
      <SwapIcon />
    </Container>
  );
};

export default SwapDivider;
