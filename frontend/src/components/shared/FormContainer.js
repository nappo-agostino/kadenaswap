import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { ReactComponent as CloseIcon } from "../../assets/images/shared/cross.svg";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 32px;
  max-width: 757px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.black};

  @media (min-width: ${({ theme: { mediaQueries } }) =>
      mediaQueries.mobileBreakpoint}) {
    flex-flow: ${({ flexFlow }) => flexFlow};
  }
`;

const Title = styled.span`
  font-family: neue-bold;
  font-size: 24px;
  margin-bottom: 24px;
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.whiteSmoke};
`;

const FormContainer = ({
  title,
  containerStyle,
  titleStyle,
  flexFlow,
  children,
  onClose,
}) => {
  return (
    <Wrapper>
      {title && <Title style={titleStyle}>{title}</Title>}
      <Container style={containerStyle} flexFlow={flexFlow}>
        {onClose && (
          <CloseIcon
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 18,
              right: 14,
            }}
            onClick={onClose}
          />
        )}

        {children}
      </Container>
    </Wrapper>
  );
};

FormContainer.propTypes = {
  title: PropTypes.string,
  flexFlow: PropTypes.oneOf(["row", "column"]),
  onClose: PropTypes.func,
};

FormContainer.defaultProps = {
  title: "",
  flexFlow: "column",
  onClose: null,
};

export default FormContainer;
