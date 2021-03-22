import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Input as SUIInput } from "semantic-ui-react";
import { ReactComponent as ArrowDown } from "../../assets/images/shared/arrow-down.svg";
import { theme } from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-flow: column;

  .ui.input > input {
    background: ${({ theme: { colors } }) => colors.gray};
    color: ${({ theme: { colors } }) => colors.whiteSmoke};
    width: 100% !important;
  }

  & .ui.input > input::placeholder {
    color: ${({ theme: { colors } }) => colors.whiteSmoke};
    opacity: 1;
  }

  & input::placeholder {
    text-transform: capitalize;
  }
  .ui.icon.input > input {
    padding-right: ${({ inputRightComponent, inputComponentWidth }) =>
      inputRightComponent ? `${inputComponentWidth + 25}px !important` : 0};
  }
  .ui.button:hover .icon {
    opacity: 1;
  }
`;

const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  margin-left: 2px;
  margin-right: 2px;
  color: ${({ theme: { colors } }) => colors.whiteSmoke};
  span {
    font-size: 13px;
    text-transform: capitalize;
    color: ${({theme: {colors}}) => colors.whiteSmoke};
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex !important;
  border: none;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 25%;
  right: 10px;
  max-height: 22px;
  padding: 8px !important;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
  span {
    font-family: neue-bold;
    font-size: 14px;
    color: white;
    text-transform: capitalize;
  }
`;

const Input = ({
  fluid,
  leftLabel,
  rightLabel,
  bottomLabel,
  leftLabelStyle,
  rightLabelStyle,
  bottomLabelStyle,
  containerStyle,
  placeholder,
  size,
  inputRightComponent,
  withSelectButton,
  numberOnly,
  buttonLabel,
  disabled,
  value,
  onSelectButtonClick,
  onChange,
  error,
  type,
}) => {
  const getIcon = () => {
    if (withSelectButton && !inputRightComponent)
      return (
        <Button onClick={onSelectButtonClick}>
          <span>
            {buttonLabel}
            <ArrowDown fill="white" />
          </span>
        </Button>
      );
    if (withSelectButton && inputRightComponent) return inputRightComponent;
    if (inputRightComponent) return inputRightComponent;
    return null;
  };

  return (
    <Container
      inputRightComponent={inputRightComponent || withSelectButton}
      inputComponentWidth={
        inputRightComponent
          ? theme.inputTokenWidth
          : theme.inputSelectButtonWidth
      }
      style={containerStyle}
    >
      {leftLabel && (
        <LabelsContainer style={{ marginBottom: 8 }}>
          <span style={{ fontFamily: "neue-bold", ...leftLabelStyle }}>
            {leftLabel}
          </span>
        </LabelsContainer>
      )}
      <SUIInput
        fluid={fluid}
        icon={getIcon()}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        value={value}
        error={error}
        type={type}
        onChange={(e, props) => {
          if (numberOnly && props.value.match(/[a-zA-Z]/)) return;
          onChange(e, props);
        }}
      />
      {rightLabel && (
        <LabelsContainer style={{ marginTop: 8 }}>
          <span
            style={{
              fontFamily: "neue-regular",
              marginLeft: !leftLabel ? "auto" : "unset",
              ...rightLabelStyle,
            }}
          >
            {rightLabel}
          </span>
        </LabelsContainer>
      )}
      {bottomLabel && (
        <LabelsContainer>
          <span
            style={{fontFamily: "neue-bold", marginTop: 8, ...bottomLabelStyle}}
          >
            {bottomLabel}
          </span>
        </LabelsContainer>
      )}
    </Container>
  );
};

Input.propTypes = {
  fluid: PropTypes.bool,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["big", "huge", "large", "massive", "mini", "small"]),
  inputRightComponent: PropTypes.element,
  withSelectButton: PropTypes.bool,
  numberOnly: PropTypes.bool,
  buttonLabel: PropTypes.string,
};

Input.defaultProps = {
  fluid: true,
  leftLabel: "",
  rightLabel: "",
  placeholder: "",
  size: "big",
  inputRightComponent: null,
  withSelectButton: false,
  numberOnly: false,
  buttonLabel: "select ",
};

export default Input;
