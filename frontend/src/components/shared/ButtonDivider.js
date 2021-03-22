import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 16px 32px;

  @media (min-width: ${({ theme: { mediaQueries } }) =>
      mediaQueries.mobileBreakpoint}) {
    transform: rotateZ(90deg);
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
`;

const Track = styled.div`
  width: 86.5px;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.border};
`;

const ButtonDivider = ({
  icon,
  containerStyle,
  buttonStyle,
  withoutDivider,
  onClick,
}) => {
  return (
    <Container style={containerStyle}>
      {!withoutDivider && <Track />}
      <Button style={buttonStyle} onClick={onClick}>
        {icon}
      </Button>
      {!withoutDivider && <Track />}
    </Container>
  );
};

export default ButtonDivider;
